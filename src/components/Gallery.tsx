import { useState } from 'react';
import Lightbox from './Lightbox';

interface Artwork {
  id: string;
  title: string;
  type: string;
  srcSmall: string;
  srcLarge: string;
  year: number;
}

interface GalleryProps {
  artworks: Artwork[];
}

const FILTER_ORDER = ['Photograph', 'Painting', 'Drawing', 'Digital Art'];

export default function Gallery({ artworks }: GalleryProps) {
  const [filter, setFilter] = useState<string>(FILTER_ORDER[0]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = artworks.filter(a => a.type === filter);

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
        {FILTER_ORDER.map(t => (
          <button
            key={t}
            className={`gallery__filter-btn ${filter === t ? 'active' : ''}`}
            onClick={() => setFilter(t)}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="gallery__grid">
        {filtered.map((art, i) => (
          <div key={art.id} className="gallery__item" onClick={() => setLightboxIndex(i)}>
            <img src={art.srcSmall} alt={art.title} loading="lazy" />
          </div>
        ))}
      </div>
      {current && (
        <Lightbox
          src={current.srcLarge}
          alt={current.title}
          onClose={() => setLightboxIndex(null)}
          onPrev={lightboxIndex! > 0 ? handlePrev : undefined}
          onNext={lightboxIndex! < filtered.length - 1 ? handleNext : undefined}
        />
      )}
    </>
  );
}
