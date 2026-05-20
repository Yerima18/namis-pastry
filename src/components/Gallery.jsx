import { useEffect, useMemo, useRef, useState } from 'react'
import './Gallery.css'

const galleryItems = [
  // Anniversaire
  { src: '/images/anniv-01.jpg', label: 'Gâteau Anniversaire 1', cat: 'Anniversaire' },
  { src: '/images/anniv-02.jpg', label: 'Gâteau Anniversaire 2', cat: 'Anniversaire' },
  { src: '/images/anniv-03.jpg', label: 'Gâteau Anniversaire 3', cat: 'Anniversaire' },
  { src: '/images/anniv-04.jpg', label: 'Gâteau Anniversaire 4', cat: 'Anniversaire' },
  { src: '/images/anniv-05.jpg', label: 'Gâteau Anniversaire 5', cat: 'Anniversaire' },
  { src: '/images/anniv-06.jpg', label: 'Gâteau Anniversaire 6', cat: 'Anniversaire' },
  { src: '/images/anniv-07.jpg', label: 'Gâteau Anniversaire 7', cat: 'Anniversaire' },
  { src: '/images/anniv-08.jpg', label: 'Gâteau Anniversaire 8', cat: 'Anniversaire' },
  { src: '/images/anniv-09.jpg', label: 'Gâteau Anniversaire 9', cat: 'Anniversaire' },
  { src: '/images/anniv-10.jpg', label: 'Gâteau Anniversaire 10', cat: 'Anniversaire' },
  { src: '/images/anniv-11.jpg', label: 'Gâteau Anniversaire 11', cat: 'Anniversaire' },
  { src: '/images/anniv-12.jpg', label: 'Gâteau Anniversaire 12', cat: 'Anniversaire' },
  { src: '/images/anniv-13.jpg', label: 'Gâteau Anniversaire 13', cat: 'Anniversaire' },
  { src: '/images/anniv-14.jpg', label: 'Gâteau Anniversaire 14', cat: 'Anniversaire' },
  { src: '/images/anniv-15.jpg', label: 'Gâteau Anniversaire 15', cat: 'Anniversaire' },
  { src: '/images/anniv-16.jpg', label: 'Gâteau Anniversaire 16', cat: 'Anniversaire' },
  { src: '/images/anniv-17.jpg', label: 'Gâteau Anniversaire 17', cat: 'Anniversaire' },
  { src: '/images/anniv-18.jpg', label: 'Gâteau Anniversaire 18', cat: 'Anniversaire' },
  { src: '/images/anniv-19.jpg', label: 'Gâteau Anniversaire 19', cat: 'Anniversaire' },
  { src: '/images/anniv-20.jpg', label: 'Gâteau Anniversaire 20', cat: 'Anniversaire' },
  { src: '/images/anniv-21.jpg', label: 'Gâteau Anniversaire 21', cat: 'Anniversaire' },
  { src: '/images/anniv-22.jpg', label: 'Gâteau Anniversaire 22', cat: 'Anniversaire' },
  { src: '/images/anniv-23.jpg', label: 'Gâteau Anniversaire 23', cat: 'Anniversaire' },
  { src: '/images/anniv-24.jpg', label: 'Gâteau Anniversaire 24', cat: 'Anniversaire' },
  { src: '/images/anniv-25.jpg', label: 'Gâteau Anniversaire 25', cat: 'Anniversaire' },
  { src: '/images/anniv-26.jpg', label: 'Gâteau Anniversaire 26', cat: 'Anniversaire' },
  { src: '/images/anniv-27.jpg', label: 'Gâteau Anniversaire 27', cat: 'Anniversaire' },
  { src: '/images/anniv-28.jpg', label: 'Gâteau Anniversaire 28', cat: 'Anniversaire' },
  { src: '/images/anniv-29.jpg', label: 'Gâteau Anniversaire 29', cat: 'Anniversaire' },
  { src: '/images/anniv-30.jpg', label: 'Gâteau Anniversaire 30', cat: 'Anniversaire' },
  { src: '/images/anniv-31.jpg', label: 'Gâteau Anniversaire 31', cat: 'Anniversaire' },
  { src: '/images/anniv-32.jpg', label: 'Gâteau Anniversaire 32', cat: 'Anniversaire' },
  { src: '/images/anniv-33.jpg', label: 'Gâteau Anniversaire 33', cat: 'Anniversaire' },
  { src: '/images/anniv-34.jpg', label: 'Gâteau Anniversaire 34', cat: 'Anniversaire' },
  { src: '/images/anniv-35.jpg', label: 'Gâteau Anniversaire 35', cat: 'Anniversaire' },
  { src: '/images/anniv-36.jpg', label: 'Gâteau Anniversaire 36', cat: 'Anniversaire' },
  { src: '/images/anniv-37.jpg', label: 'Gâteau Anniversaire 37', cat: 'Anniversaire' },
  { src: '/images/anniv-38.jpg', label: 'Gâteau Anniversaire 38', cat: 'Anniversaire' },
  { src: '/images/anniv-39.jpg', label: 'Gâteau Anniversaire 39', cat: 'Anniversaire' },

  // Mini Entremets
  { src: '/images/mini-entremet-01.jpg', label: 'Mini Entremet 1', cat: 'Mini Entremets' },
  { src: '/images/mini-entremet-02.jpg', label: 'Mini Entremet 2', cat: 'Mini Entremets' },
  { src: '/images/mini-entremet-03.jpg', label: 'Mini Entremet 3', cat: 'Mini Entremets' },
  { src: '/images/mini-entremet-04.jpg', label: 'Mini Entremet 4', cat: 'Mini Entremets' },
  { src: '/images/mini-entremet-05.jpg', label: 'Mini Entremet 5', cat: 'Mini Entremets' },
  { src: '/images/mini-entremet-06.jpg', label: 'Mini Entremet 6', cat: 'Mini Entremets' },
  { src: '/images/mini-entremet-07.jpg', label: 'Mini Entremet 7', cat: 'Mini Entremets' },
  { src: '/images/mini-entremet-08.jpg', label: 'Mini Entremet 8', cat: 'Mini Entremets' },
  { src: '/images/mini-entremet-09.jpg', label: 'Mini Entremet 9', cat: 'Mini Entremets' },
  { src: '/images/mini-entremet-10.jpg', label: 'Mini Entremet 10', cat: 'Mini Entremets' },
  { src: '/images/mini-entremet-11.jpg', label: 'Mini Entremet 11', cat: 'Mini Entremets' },
  { src: '/images/mini-entremet-12.jpg', label: 'Mini Entremet 12', cat: 'Mini Entremets' },
  { src: '/images/mini-entremet-13.jpg', label: 'Mini Entremet 13', cat: 'Mini Entremets' },
  { src: '/images/mini-entremet-14.jpg', label: 'Mini Entremet 14', cat: 'Mini Entremets' },
  { src: '/images/mini-entremet-15.jpg', label: 'Mini Entremet 15', cat: 'Mini Entremets' },
  { src: '/images/mini-entremet-16.jpg', label: 'Mini Entremet 16', cat: 'Mini Entremets' },
  { src: '/images/mini-entremet-17.jpg', label: 'Mini Entremet 17', cat: 'Mini Entremets' },
  { src: '/images/mini-entremet-18.jpg', label: 'Mini Entremet 18', cat: 'Mini Entremets' },
  { src: '/images/mini-entremet-19.jpg', label: 'Mini Entremet 19', cat: 'Mini Entremets' },
  { src: '/images/mini-entremet-20.jpg', label: 'Mini Entremet 20', cat: 'Mini Entremets' },
  { src: '/images/mini-entremet-21.jpg', label: 'Mini Entremet 21', cat: 'Mini Entremets' },
  { src: '/images/mini-entremet-22.jpg', label: 'Mini Entremet 22', cat: 'Mini Entremets' },
  { src: '/images/mini-entremet-23.jpg', label: 'Mini Entremet 23', cat: 'Mini Entremets' },

  // Entremets
  { src: '/images/entremet-01.jpg', label: 'Entremet 1', cat: 'Entremets' },
  { src: '/images/entremet-02.jpg', label: 'Entremet 2', cat: 'Entremets' },
  { src: '/images/entremet-03.jpg', label: 'Entremet 3', cat: 'Entremets' },
  { src: '/images/entremet-04.jpg', label: 'Entremet 4', cat: 'Entremets' },
  { src: '/images/entremet-05.jpg', label: 'Entremet 5', cat: 'Entremets' },
  { src: '/images/entremet-06.jpg', label: 'Entremet 6', cat: 'Entremets' },
  { src: '/images/entremet-07.jpg', label: 'Entremet 7', cat: 'Entremets' },
  { src: '/images/entremet-08.jpg', label: 'Entremet 8', cat: 'Entremets' },
  { src: '/images/entremet-09.jpg', label: 'Entremet 9', cat: 'Entremets' },
  { src: '/images/entremet-10.jpg', label: 'Entremet 10', cat: 'Entremets' },
  { src: '/images/entremet-11.jpg', label: 'Entremet 11', cat: 'Entremets' },
  { src: '/images/entremet-12.jpg', label: 'Entremet 12', cat: 'Entremets' },
  { src: '/images/entremet-13.jpg', label: 'Entremet 13', cat: 'Entremets' },
  { src: '/images/entremet-14.jpg', label: 'Entremet 14', cat: 'Entremets' },
  { src: '/images/entremet-15.jpg', label: 'Entremet 15', cat: 'Entremets' },
  { src: '/images/entremet-16.jpg', label: 'Entremet 16', cat: 'Entremets' },
  { src: '/images/entremet-17.jpg', label: 'Entremet 17', cat: 'Entremets' },
  { src: '/images/entremet-18.jpg', label: 'Entremet 18', cat: 'Entremets' },
  { src: '/images/entremet-19.jpg', label: 'Entremet 19', cat: 'Entremets' },
  { src: '/images/entremet-20.jpg', label: 'Entremet 20', cat: 'Entremets' },
  { src: '/images/entremet-21.jpg', label: 'Entremet 21', cat: 'Entremets' },
  { src: '/images/entremet-22.jpg', label: 'Entremet 22', cat: 'Entremets' },
  { src: '/images/entremet-23.jpg', label: 'Entremet 23', cat: 'Entremets' },
  { src: '/images/entremet-24.jpg', label: 'Entremet 24', cat: 'Entremets' },

  // Mignardises
  { src: '/images/mignardise-01.jpg', label: 'Mignardises 1', cat: 'Mignardises' },
  { src: '/images/mignardise-02.jpg', label: 'Mignardises 2', cat: 'Mignardises' },
  { src: '/images/mignardise-03.jpg', label: 'Mignardises 3', cat: 'Mignardises' },
  { src: '/images/mignardise-04.jpg', label: 'Mignardises 4', cat: 'Mignardises' },
  { src: '/images/mignardise-05.jpg', label: 'Mignardises 5', cat: 'Mignardises' },
  { src: '/images/mignardise-06.jpg', label: 'Mignardises 6', cat: 'Mignardises' },
  { src: '/images/mignardise-07.jpg', label: 'Mignardises 7', cat: 'Mignardises' },
  { src: '/images/mignardise-08.jpg', label: 'Mignardises 8', cat: 'Mignardises' },
  { src: '/images/mignardise-09.jpg', label: 'Mignardises 9', cat: 'Mignardises' },
  { src: '/images/mignardise-10.jpg', label: 'Mignardises 10', cat: 'Mignardises' },
  { src: '/images/mignardise-11.jpg', label: 'Mignardises 11', cat: 'Mignardises' },
  { src: '/images/mignardise-12.jpg', label: 'Mignardises 12', cat: 'Mignardises' },
  { src: '/images/mignardise-13.jpg', label: 'Mignardises 13', cat: 'Mignardises' },
  { src: '/images/mignardise-14.jpg', label: 'Mignardises 14', cat: 'Mignardises' },
  { src: '/images/mignardise-15.jpg', label: 'Mignardises 15', cat: 'Mignardises' },
  { src: '/images/mignardise-16.jpg', label: 'Mignardises 16', cat: 'Mignardises' },
  { src: '/images/mignardise-17.jpg', label: 'Mignardises 17', cat: 'Mignardises' },
  { src: '/images/mignardise-18.jpg', label: 'Mignardises 18', cat: 'Mignardises' },
  { src: '/images/mignardise-19.jpg', label: 'Mignardises 19', cat: 'Mignardises' },
  { src: '/images/mignardise-20.jpg', label: 'Mignardises 20', cat: 'Mignardises' },

  // Trompe Oeil
  { src: '/images/trompe-oeil-01.jpg', label: 'Trompe Oeil 1', cat: 'Trompe Oeil' },
  { src: '/images/trompe-oeil-02.jpg', label: 'Trompe Oeil 2', cat: 'Trompe Oeil' },
  { src: '/images/trompe-oeil-03.jpg', label: 'Trompe Oeil 3', cat: 'Trompe Oeil' },
  { src: '/images/trompe-oeil-04.jpg', label: 'Trompe Oeil 4', cat: 'Trompe Oeil' },
  { src: '/images/trompe-oeil-05.jpg', label: 'Trompe Oeil 5', cat: 'Trompe Oeil' },

  // Bûche de Noël
  { src: '/images/buche-01.jpg', label: 'Bûche de Noël 1', cat: 'Bûche de Noël' },
  { src: '/images/buche-02.jpg', label: 'Bûche de Noël 2', cat: 'Bûche de Noël' },
  { src: '/images/buche-03.jpg', label: 'Bûche de Noël 3', cat: 'Bûche de Noël' },
  { src: '/images/buche-04.jpg', label: 'Bûche de Noël 4', cat: 'Bûche de Noël' },
  { src: '/images/buche-05.jpg', label: 'Bûche de Noël 5', cat: 'Bûche de Noël' },
  { src: '/images/buche-06.jpg', label: 'Bûche de Noël 6', cat: 'Bûche de Noël' },
  { src: '/images/buche-07.jpg', label: 'Bûche de Noël 7', cat: 'Bûche de Noël' },
  { src: '/images/buche-08.jpg', label: 'Bûche de Noël 8', cat: 'Bûche de Noël' },
  { src: '/images/buche-09.jpg', label: 'Bûche de Noël 9', cat: 'Bûche de Noël' },

  // Événements
  { src: '/images/evenement-01.jpg', label: 'Événement 1', cat: 'Événements' },
  { src: '/images/evenement-02.jpg', label: 'Événement 2', cat: 'Événements' },
  { src: '/images/evenement-03.jpg', label: 'Événement 3', cat: 'Événements' },
  { src: '/images/evenement-04.jpg', label: 'Événement 4', cat: 'Événements' },
  { src: '/images/evenement-05.jpg', label: 'Événement 5', cat: 'Événements' },
  { src: '/images/evenement-06.jpg', label: 'Événement 6', cat: 'Événements' },
  { src: '/images/evenement-07.jpg', label: 'Événement 7', cat: 'Événements' },
]

const categories = ['Tous', 'Anniversaire', 'Mini Entremets', 'Entremets', 'Mignardises', 'Trompe Oeil', 'Bûche de Noël', 'Événements']

const ITEMS_PER_PAGE = 12

export default function Gallery() {
  const [visible, setVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState('Tous')
  const [lightbox, setLightbox] = useState(null)
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const filtered = useMemo(
    () => activeFilter === 'Tous' ? galleryItems : galleryItems.filter((i) => i.cat === activeFilter),
    [activeFilter]
  )

  useEffect(() => {
    const onKey = (e) => {
      if (!lightbox) return
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight') {
        const idx = filtered.findIndex((i) => i.src === lightbox.src)
        if (idx < filtered.length - 1) setLightbox(filtered[idx + 1])
      }
      if (e.key === 'ArrowLeft') {
        const idx = filtered.findIndex((i) => i.src === lightbox.src)
        if (idx > 0) setLightbox(filtered[idx - 1])
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, filtered])

  useEffect(() => {
    document.body.style.overflow = lightbox ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  const displayed = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  const handleFilterChange = (cat) => {
    setActiveFilter(cat)
    setVisibleCount(ITEMS_PER_PAGE)
  }

  return (
    <section id="gallery" className="gallery" ref={ref}>
      <div className="gallery__inner">
        {/* Header */}
        <div className={`gallery__header ${visible ? 'gallery__header--visible' : ''}`}>
          <div className="section-label">
            <div className="section-label__line" />
            <span>Notre galerie</span>
          </div>
          <h2 className="gallery__title">
            Chaque création, <em>une histoire</em>
          </h2>
          <p className="gallery__subtitle">
            Découvrez nos réalisations et laissez-vous inspirer pour votre prochaine commande.
          </p>
        </div>

        {/* Filters */}
        <div className={`gallery__filters ${visible ? 'gallery__filters--visible' : ''}`}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`gallery__filter ${activeFilter === cat ? 'gallery__filter--active' : ''}`}
              aria-current={activeFilter === cat ? 'true' : undefined}
              onClick={() => handleFilterChange(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="gallery__grid">
          {displayed.map((item, i) => (
            <div
              key={item.src}
              className={`gallery__item ${visible ? 'gallery__item--visible' : ''}`}
              style={{ transitionDelay: `${Math.min(i * 60, 600)}ms` }}
              onClick={() => setLightbox(item)}
            >
              <img src={item.src} alt={item.label} loading="lazy" />
              <div className="gallery__item-overlay">
                <span className="gallery__item-label">{item.label}</span>
                <span className="gallery__item-cat">{item.cat}</span>
                <div className="gallery__item-zoom">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                    <path d="M11 8v6M8 11h6"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="gallery__empty">
            <span>Aucune photo dans cette catégorie.</span>
          </div>
        )}

        {hasMore && (
          <div className="gallery__more">
            <button className="gallery__more-btn" onClick={() => setVisibleCount((c) => c + ITEMS_PER_PAGE)}>
              Voir plus
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>
            <span className="gallery__more-count">{visibleCount} / {filtered.length} photos</span>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Visionneuse d'image" onClick={() => setLightbox(null)}>
          <button className="lightbox__close" aria-label="Fermer" onClick={() => setLightbox(null)}>×</button>
          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.label} />
            <div className="lightbox__caption">
              <strong>{lightbox.label}</strong>
              <span>{lightbox.cat}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
