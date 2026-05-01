import { useState, useCallback } from 'react';
import Lightbox from './Lightbox';
import { useTranslations } from '../i18n';

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

const FILTER_ORDER = ['Photograph', 'Painting', 'Drawing', 'Digital Art'];

function shuffleArtworks<T>(artworks: T[]): T[] {
  const shuffled = [...artworks];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function GalleryItem({ art, onClick }: { art: Artwork; onClick: () => void }) {
  const [loaded, setLoaded] = useState(false);
  const handleLoad = useCallback(() => setLoaded(true), []);
  const aspectRatio = art.width && art.height ? art.width / art.height : 4 / 3;
  const bgColor = art.color || '#84B0B3';

  return (
    <div
      className="gallery__item"
      style={{ aspectRatio, backgroundColor: bgColor }}
      onClick={onClick}
    >
      <img
        src={art.srcSmall}
        alt={art.title}
        loading="lazy"
        style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.3s ease' }}
        onLoad={handleLoad}
      />
    </div>
  );
}

export default function Gallery({ artworks, locale }: GalleryProps) {
  const t = useTranslations(locale);
  const [shuffledArtworks] = useState<Artwork[]>(() => shuffleArtworks(artworks));
  const [filter, setFilter] = useState<string>(FILTER_ORDER[0]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = shuffledArtworks.filter(a => a.type === filter);

  const handlePrev = () => {
    if (lightboxIndex !== null && lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
    }
  };

  const handleNext = () => {
    if (lightboxIndex !== null && lightboxIndex < filtered.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
    }
  };

  const current = lightboxIndex !== null ? filtered[lightboxIndex] : null;

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
        {filtered.map((art, i) => (
          <GalleryItem key={art.id} art={art} onClick={() => setLightboxIndex(i)} />
        ))}
      </div>
      {current && (
        <Lightbox
          src={current.srcLarge}
          alt={current.title}
          sourceUrl={current.sourceUrl}
          onClose={() => setLightboxIndex(null)}
          onPrev={lightboxIndex! > 0 ? handlePrev : undefined}
          onNext={lightboxIndex! < filtered.length - 1 ? handleNext : undefined}
          locale={locale}
        />
      )}
    </>
  );
}
