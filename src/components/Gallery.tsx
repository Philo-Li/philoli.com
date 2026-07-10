import { useState, useCallback, useEffect, useRef } from 'react';
import Lightbox from './Lightbox';
import { useTranslations } from '../i18n';
import { computeEagerIndices, estimateColumnTops } from '../lib/gallery-layout';

interface Artwork {
  id: string;
  title: string;
  type: string;
  width: number;
  height: number;
  color: string;
  srcSmall: string;
  srcLarge: string;
  year: number;
  sourceUrl: string;
}

interface GalleryProps {
  artworks: Artwork[];
  locale?: string;
}

export const FILTER_ORDER = ['Photograph', 'Painting', 'Drawing', 'Digital Art'];

interface GalleryItemProps {
  art: Artwork;
  eager: boolean;
  priority: boolean;
  onClick: () => void;
}

function GalleryItem({ art, eager, priority, onClick }: GalleryItemProps) {
  // All images render visible from SSR so a paint is never blocked on JS.
  // Below-the-fold (lazy) images still in flight at hydration get a fade-in;
  // eager first-viewport images (LCP candidates) are never hidden by JS.
  const [loaded, setLoaded] = useState(true);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const handleLoad = useCallback(() => setLoaded(true), []);
  const aspectRatio = art.width && art.height ? art.width / art.height : 4 / 3;
  const bgColor = art.color || '#84B0B3';

  useEffect(() => {
    if (eager) return;
    const image = imageRef.current;
    if (image && !image.complete) {
      setLoaded(false);
    }
  }, [art.srcSmall, eager]);

  return (
    <div
      className="gallery__item"
      style={{ aspectRatio, backgroundColor: bgColor }}
      onClick={onClick}
    >
      <img
        ref={imageRef}
        src={art.srcSmall}
        alt={art.title}
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        decoding="async"
        style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.3s ease' }}
        onLoad={handleLoad}
      />
    </div>
  );
}

export default function Gallery({ artworks, locale }: GalleryProps) {
  const t = useTranslations(locale);
  const [filter, setFilter] = useState<string>(FILTER_ORDER[0]);
  const [selectedArtworkId, setSelectedArtworkId] = useState<string | null>(null);

  const filtered = artworks.filter(a => a.type === filter);
  const eagerIndices = computeEagerIndices(filtered);
  const priorityIndices = new Set(estimateColumnTops(filtered, 2));
  const currentIndex = selectedArtworkId
    ? filtered.findIndex((art) => art.id === selectedArtworkId)
    : -1;
  const current = currentIndex >= 0 ? filtered[currentIndex] : null;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedArtworkId(filtered[currentIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (currentIndex >= 0 && currentIndex < filtered.length - 1) {
      setSelectedArtworkId(filtered[currentIndex + 1].id);
    }
  };

  return (
    <>
      <div className="gallery__filters">
        {FILTER_ORDER.map(f => (
          <button
            key={f}
            className={`gallery__filter-btn ${filter === f ? 'active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {t(`gallery.filters.${f}`)}
          </button>
        ))}
      </div>
      <div className="gallery__grid">
        {filtered.map((art, index) => (
          <GalleryItem
            key={art.id}
            art={art}
            eager={eagerIndices.has(index)}
            priority={priorityIndices.has(index)}
            onClick={() => setSelectedArtworkId(art.id)}
          />
        ))}
      </div>
      {current && (
        <Lightbox
          src={current.srcLarge}
          alt={current.title}
          sourceUrl={current.sourceUrl}
          onClose={() => setSelectedArtworkId(null)}
          onPrev={currentIndex > 0 ? handlePrev : undefined}
          onNext={currentIndex >= 0 && currentIndex < filtered.length - 1 ? handleNext : undefined}
          locale={locale}
        />
      )}
    </>
  );
}
