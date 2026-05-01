import { useEffect, useCallback } from 'react';
import { useTranslations } from '../i18n';

interface LightboxProps {
  src: string;
  alt: string;
  sourceUrl: string;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  locale?: string;
}

export default function Lightbox({ src, alt, sourceUrl, onClose, onPrev, onNext, locale }: LightboxProps) {
  const t = useTranslations(locale);
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft' && onPrev) onPrev();
    if (e.key === 'ArrowRight' && onNext) onNext();
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  return (
    <div className="lightbox" onClick={onClose}>
      {onPrev && (
        <button
          className="lightbox__nav lightbox__nav--prev"
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          aria-label={t('lightbox.previous')}
        >
          ‹
        </button>
      )}
      <img src={src} alt={alt} onClick={(e) => e.stopPropagation()} />
      <a
        className="lightbox__source"
        href={sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
      >
        View on PhiloArt
      </a>
      {onNext && (
        <button
          className="lightbox__nav lightbox__nav--next"
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          aria-label={t('lightbox.next')}
        >
          ›
        </button>
      )}
      <button className="lightbox__close" onClick={onClose}>×</button>
    </div>
  );
}
