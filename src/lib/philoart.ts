const GRAPHQL_ENDPOINT = 'https://api.philoart.io/graphql';
const USERNAME = 'philo';

export interface PhiloArtwork {
  id: string;
  title: string;
  type: string;
  tags: string;
  year: number;
  srcSmall: string;
  srcLarge: string;
  createdAt: string;
}

interface PhotoEdge {
  node: PhiloArtwork;
}

interface PhotosResponse {
  data: {
    photos: {
      edges: PhotoEdge[];
      pageInfo: {
        hasNextPage: boolean;
        endCursor: string;
      };
    };
  } | null;
}

// In-memory cache shared across all build-time calls
let cachedArtworks: PhiloArtwork[] | null = null;

async function fetchPage(first: number, after?: string): Promise<PhotosResponse> {
  const afterArg = after ? `, after: "${after}"` : '';
  const query = `{
    photos(username: "${USERNAME}", first: ${first}${afterArg}) {
      edges {
        node {
          id
          title
          type
          tags
          year
          srcSmall
          srcLarge
          createdAt
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }`;

  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(GRAPHQL_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });

      if (!res.ok) {
        throw new Error(`PhiloArt API error: ${res.status}`);
      }

      const json = await res.json() as PhotosResponse;
      if (json.data?.photos) {
        return json;
      }

      await new Promise(r => setTimeout(r, 1000 * (attempt + 1)));
    } catch {
      await new Promise(r => setTimeout(r, 1000 * (attempt + 1)));
    }
  }

  return { data: { photos: { edges: [], pageInfo: { hasNextPage: false, endCursor: '' } } } };
}

export async function fetchAllArtworks(): Promise<PhiloArtwork[]> {
  if (cachedArtworks) return cachedArtworks;

  const allArtworks: PhiloArtwork[] = [];
  let hasNextPage = true;
  let cursor: string | undefined;

  while (hasNextPage) {
    const res = await fetchPage(30, cursor);
    const { edges, pageInfo } = res.data!.photos;
    allArtworks.push(...edges.map(e => e.node));
    hasNextPage = pageInfo.hasNextPage;
    cursor = pageInfo.endCursor;
  }

  cachedArtworks = allArtworks;
  return allArtworks;
}

export async function fetchRecentArtworks(count: number): Promise<PhiloArtwork[]> {
  if (cachedArtworks) return cachedArtworks.slice(0, count);

  const res = await fetchPage(Math.min(count, 30));
  return res.data!.photos.edges.map(e => e.node);
}

export function getUniqueTypes(artworks: PhiloArtwork[]): string[] {
  const types = new Set(artworks.map(a => a.type));
  return Array.from(types).sort();
}
