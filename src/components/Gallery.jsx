import { useEffect, useRef, useState } from 'react'
import './Gallery.css'

const galleryItems = [
  { src: '/images/cake-pink-butterfly.jpg', label: 'Gâteau Papillons', cat: 'Anniversaire' },
  { src: '/images/cake-chocolate-drip.jpg', label: 'Drip Chocolat', cat: 'Anniversaire' },
  { src: '/images/cake-chocolate-birthday.jpg', label: 'Fête Chocolat', cat: 'Anniversaire' },
  { src: '/images/cake-pink-deborah.jpg', label: 'Rose Deborah', cat: 'Anniversaire' },
  { src: '/images/mini-pink-heart.jpg', label: 'Cœur Velours Rose', cat: 'Mini Entremets' },
  { src: '/images/cake-ramadan.jpg', label: 'Ramadan Mubarak', cat: 'Événements' },
  { src: '/images/cake-red-bow.jpg', label: 'Ruban Rouge', cat: 'Anniversaire' },
  { src: '/images/cake-pink-yellow.jpg', label: 'Faïçath', cat: 'Anniversaire' },
  { src: '/images/cake-marble-heart.jpg', label: 'Miroir Marbré', cat: 'Anniversaire' },
  { src: '/images/mini-green-bundt.jpg', label: 'Bundt Vert', cat: 'Mini Entremets' },
  { src: '/images/cake-yellow-besty.jpg', label: 'Ma Besty', cat: 'Anniversaire' },
  { src: '/images/cake-green-anniversaire.jpg', label: 'Joyeux Anniversaire', cat: 'Anniversaire' },
  { src: '/images/cake-choco-gold.jpg', label: 'Choco Or', cat: 'Anniversaire' },
  { src: '/images/cake-choco-oreo.jpg', label: 'Oreo Deluxe', cat: 'Anniversaire' },
  { src: '/images/pastry-box.jpg', label: 'Plateau Pâtisseries', cat: 'Pâtisseries' },
  { src: '/images/sweets-mango-lemon.jpg', label: 'Douceurs Fruitées', cat: 'Chocolats' },
  { src: '/images/chocolates.jpg', label: 'Chocolats Premium', cat: 'Chocolats' },
  { src: '/images/mini-red-cakes.jpg', label: 'Mini Velours Rouges', cat: 'Mini Entremets' },
]

const categories = ['Tous', 'Anniversaire', 'Mini Entremets', 'Pâtisseries', 'Chocolats', 'Événements']

export default function Gallery() {
  const [visible, setVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState('Tous')
  const [lightbox, setLightbox] = useState(null)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

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
  }, [lightbox, activeFilter])

  const filtered = activeFilter === 'Tous'
    ? galleryItems
    : galleryItems.filter((i) => i.cat === activeFilter)

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
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="gallery__grid">
          {filtered.map((item, i) => (
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
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox__close" onClick={() => setLightbox(null)}>×</button>
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
