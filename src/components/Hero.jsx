import { useEffect, useState } from 'react'
import './Hero.css'

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  const scrollToOrder = () => {
    document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      {/* Background blobs */}
      <div className="hero__blob hero__blob--1" />
      <div className="hero__blob hero__blob--2" />
      <div className="hero__blob hero__blob--3" />

      {/* Floating dots */}
      <div className="hero__dots" aria-hidden="true">
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className={`hero__dot hero__dot--${i + 1}`} />
        ))}
      </div>

      <div className="hero__inner">
        {/* Left — text */}
        <div className={`hero__content ${visible ? 'hero__content--visible' : ''}`}>
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Pâtisserie artisanale · Fait avec amour
          </div>

          <h1 className="hero__title">
            Des gâteaux{' '}
            <em>extraordinaires</em>
            <br />
            pour vos moments{' '}
            <span className="hero__title-highlight">inoubliables</span>
          </h1>

          <p className="hero__desc">
            Chaque création est une œuvre unique, préparée avec soin et passion.
            Anniversaires, mariages, célébrations — nous donnons vie à vos rêves sucrés.
          </p>

          <div className="hero__actions">
            <button className="hero__btn hero__btn--primary" onClick={scrollToOrder}>
              <span>Commander maintenant</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <button className="hero__btn hero__btn--secondary" onClick={scrollToGallery}>
              Voir la galerie
            </button>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <strong>100+</strong>
              <span>Créations réalisées</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <strong>100%</strong>
              <span>Fait maison</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <strong>❤️</strong>
              <span>Clients satisfaits</span>
            </div>
          </div>
        </div>

        {/* Right — images collage */}
        <div className={`hero__visual ${visible ? 'hero__visual--visible' : ''}`}>
          <div className="hero__collage">
            <div className="hero__img-wrap hero__img-wrap--main">
              <img src="/images/cake-pink-butterfly.jpg" alt="Gâteau personnalisé Nami's Pastry" />
              <div className="hero__img-badge">
                <span>✨ Sur mesure</span>
              </div>
            </div>
            <div className="hero__img-wrap hero__img-wrap--sm hero__img-wrap--top">
              <img src="/images/cake-chocolate-drip.jpg" alt="Gâteau chocolat" />
            </div>
            <div className="hero__img-wrap hero__img-wrap--sm hero__img-wrap--bottom">
              <img src="/images/mini-pink-heart.jpg" alt="Mini entremet" />
            </div>
          </div>

          {/* Floating card */}
          <div className="hero__float-card">
            <div className="hero__float-icon">🎂</div>
            <div>
              <p className="hero__float-title">Commande personnalisée</p>
              <p className="hero__float-sub">Votre vision, notre création</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero__scroll">
        <div className="hero__scroll-line" />
        <span>Découvrir</span>
      </div>
    </section>
  )
}
