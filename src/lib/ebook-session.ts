const DB_NAME = 'ebook-translator';
const DB_VERSION = 1;
const STORE_NAME = 'sessions';
const ACTIVE_SESSION_KEY = 'active';

export interface PersistedSinglePageItem {
  type: string;
  original: string;
  translated: string;
}

export interface PersistedSinglePageResult {
  pageIndex: number;
  items: PersistedSinglePageItem[];
}

export interface PersistedNodeError {
  nodeId: string;
  message: string;
}

export interface PersistedEbookSessionSnapshot {
  version: 1;
  sourceKind: 'epub' | 'pdf-preview' | 'pdf-text' | 'pdf-ocr' | null;
  step: 'settings' | 'upload' | 'browse';
  fileName: string | null;
  fileType: string | null;
  selectedIdx: number;
  previewPage: number;
  sidebarCollapsed: boolean;
  pdfMeta: { pageCount: number; isScanned: boolean } | null;
  parseError: string | null;
  chapterStatus: Array<[string, string]>;
  allTranslations: Array<[string, Array<[string, string]>]>;
  chapterErrors: Array<[string, PersistedNodeError[]]>;
  pagePhase: Array<[number, string]>;
  pageResults: Array<[number, PersistedSinglePageResult]>;
  pageErrors: Array<[number, string]>;
}

interface PersistedEbookSessionRecord {
  id: string;
  snapshot: PersistedEbookSessionSnapshot;
  fileBlob: Blob | null;
  parsedBlob: Blob | null;
}

export interface LoadedEbookSession {
  snapshot: PersistedEbookSessionSnapshot;
  fileBlob: Blob | null;
  parsedBlob: Blob | null;
}

let dbPromise: Promise<IDBDatabase> | null = null;

function openDb(): Promise<IDBDatabase> {
  if (dbPromise) return dbPromise;
  dbPromise = new Promise((resolve, reject) => {
    const req = window.indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error ?? new Error('Failed to open ebook session database'));
  });
  return dbPromise;
}

function runRequest<T>(request: IDBRequest<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error ?? new Error('IndexedDB request failed'));
  });
}

export async function saveEbookSession(
  snapshot: PersistedEbookSessionSnapshot,
  fileBlob: Blob | null,
  parsedBlob: Blob | null,
): Promise<void> {
  const db = await openDb();
  const tx = db.transaction(STORE_NAME, 'readwrite');
  const store = tx.objectStore(STORE_NAME);
  store.put({
    id: ACTIVE_SESSION_KEY,
    snapshot,
    fileBlob,
    parsedBlob,
  } satisfies PersistedEbookSessionRecord);
  await new Promise<void>((resolve, reject) => {
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error ?? new Error('Failed to save ebook session'));
    tx.onabort = () => reject(tx.error ?? new Error('Aborted while saving ebook session'));
  });
}

export async function loadEbookSession(): Promise<LoadedEbookSession | null> {
  const db = await openDb();
  const tx = db.transaction(STORE_NAME, 'readonly');
  const store = tx.objectStore(STORE_NAME);
  const record = await runRequest(store.get(ACTIVE_SESSION_KEY) as IDBRequest<PersistedEbookSessionRecord | undefined>);
  if (!record) return null;
  return {
    snapshot: record.snapshot,
    fileBlob: record.fileBlob,
    parsedBlob: record.parsedBlob,
  };
}

export async function clearEbookSession(): Promise<void> {
  const db = await openDb();
  const tx = db.transaction(STORE_NAME, 'readwrite');
  const store = tx.objectStore(STORE_NAME);
  store.delete(ACTIVE_SESSION_KEY);
  await new Promise<void>((resolve, reject) => {
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error ?? new Error('Failed to clear ebook session'));
    tx.onabort = () => reject(tx.error ?? new Error('Aborted while clearing ebook session'));
  });
}
