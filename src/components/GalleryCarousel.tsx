import { useState, useEffect } from 'react'
import type { Project } from '../data/projects'

interface GalleryCarouselProps {
  gallery: Project['gallery']
}

const PLACEHOLDER = 'data:image/svg+xml,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect fill="#1e293b" width="400" height="300"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#64748b" font-family="sans-serif" font-size="14">Image not found</text></svg>'
)

export default function GalleryCarousel({ gallery }: GalleryCarouselProps) {
  const [index, setIndex] = useState(0)
  const [lightbox, setLightbox] = useState(false)
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({})

  if (!gallery || gallery.length === 0) return null

  const current = gallery[index]!
  const isLong = current.kind === 'long'

  const go = (delta: number) => {
    setIndex((i) => (i + delta + gallery.length) % gallery.length)
  }

  const setError = (i: number) => {
    setImgErrors((e) => ({ ...e, [i]: true }))
  }

  return (
    <>
      <div className="space-y-4">
        {/* Main view */}
        <div
          className={`relative rounded-lg border border-cyber-border bg-cyber-border overflow-hidden ${
            isLong ? "h-[70vh]" : "min-h-[200px] flex items-center justify-center"
          }`}
        >
          <img
            src={imgErrors[index] ? PLACEHOLDER : current.src}
            alt={current.alt}
            className={
              isLong
                ? "w-full h-full object-cover object-top block cursor-zoom-in"
                : "max-h-[70vh] w-auto object-contain block cursor-zoom-in"
            }
            onError={() => setError(index)}
            onClick={() => setLightbox(true)}
            aria-label="View full size"
          />
        </div>

        {/* Arrows + thumbnails */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              className="p-2 rounded-lg border border-cyber-border text-slate-400 
                       transition hover:border-neon-cyan/50 hover:text-neon-cyan
                       focus:border-neon-cyan/50 focus:text-neon-cyan"
              aria-label="Previous"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="text-sm text-cyber-muted min-w-[4rem] text-center">
              {index + 1} / {gallery.length}
            </span>
            <button
              type="button"
              onClick={() => go(1)}
              className="p-2 rounded-lg border border-cyber-border text-slate-400 
                       transition hover:border-neon-cyan/50 hover:text-neon-cyan
                       focus:border-neon-cyan/50 focus:text-neon-cyan"
              aria-label="Next"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {gallery.map((img, i) => (
              <button
                key={img.src + i}
                type="button"
                onClick={() => setIndex(i)}
                className={`shrink-0 w-14 h-10 rounded overflow-hidden border-2 transition ${
                  i === index ? 'border-neon-cyan shadow-glow-cyan-sm' : 'border-cyber-border hover:border-neon-cyan/40 focus:border-neon-cyan/40'
                }`}
              >
                <img
                  src={imgErrors[i] ? PLACEHOLDER : img.src}
                  alt=""
                  className="w-full h-full object-cover"
                  onError={() => setError(i)}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          gallery={gallery}
          index={index}
          imgErrors={imgErrors}
          setError={setError}
          onClose={() => setLightbox(false)}
          onPrev={() => go(-1)}
          onNext={() => go(1)}
        />
      )}
    </>
  )
}

interface LightboxProps {
  gallery: Project['gallery']
  index: number
  imgErrors: Record<number, boolean>
  setError: (i: number) => void
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

function Lightbox({ gallery, index, imgErrors, setError, onClose, onPrev, onNext }: LightboxProps) {
  const item = gallery[index]!
  const isLong = item.kind === 'long'

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div
      className={`fixed inset-0 z-[100] flex bg-black/90 ${
        isLong ? "items-start justify-center pt-10" : "items-center justify-center"
        }`}
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full text-neon-cyan hover:bg-neon-cyan/10 focus:bg-neon-cyan/10 transition z-10"
        aria-label="Close"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <button
        type="button"
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full text-neon-cyan hover:bg-neon-cyan/10 focus:bg-neon-cyan/10 transition"
        aria-label="Previous"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        type="button"
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full text-neon-cyan hover:bg-neon-cyan/10 focus:bg-neon-cyan/10 transition"
        aria-label="Next"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div
        className={isLong
          ? "w-[90vw] h-[90vh] overflow-y-auto"
          : "w-[90vw] h-[90vh] flex items-center justify-center"}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imgErrors[index] ? PLACEHOLDER : item.src}
          alt={item.alt}
          className={isLong
            ? "mx-auto w-[min(1100px,90vw)] h-auto block"
            : "max-w-[90vw] max-h-[90vh] object-contain block"}
          onError={() => setError(index)}
        />
      </div>
    </div>
  )
}
