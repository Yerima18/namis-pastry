import { useEffect, useRef, useState } from 'react'
import './Specialties.css'

const categories = [
  {
    icon: '🎂',
    title: 'Gâteaux d\'anniversaire',
    desc: 'Des créations sur mesure pour célébrer chaque anniversaire avec style. Personnalisez la couleur, le design et le message.',
    image: '/images/anniv-01.jpg',
    tags: ['Sur mesure', 'Multi-étages', 'Personnalisé'],
  },
  {
    icon: '🍰',
    title: 'Mini Entremets',
    desc: 'De délicates petites merveilles individuelles, parfaites pour des occasions intimes ou des événements.',
    image: '/images/mini-entremet-01.jpg',
    tags: ['Individuel', 'Élégant', 'Savoureux'],
  },
  {
    icon: '✨',
    title: 'Entremets',
    desc: 'Des entremets raffinés aux textures et saveurs délicates, pensés pour impressionner à chaque occasion.',
    image: '/images/entremet-01.jpg',
    tags: ['Raffiné', 'Élégant', 'Savoureux'],
  },
  {
    icon: '🍫',
    title: 'Trompe Oeil',
    desc: "Des créations bluffantes qui imitent à la perfection des objets du quotidien — un gâteau qui surprend autant qu'il régale.",
    image: '/images/trompe-oeil-01.jpg',
    tags: ['Réaliste', 'Surprenant', 'Unique'],
  },
]

export default function Specialties() {
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="specialties" className="specialties" ref={ref}>
      <div className="specialties__inner">
        {/* Header */}
        <div className={`specialties__header ${visible ? 'specialties__header--visible' : ''}`}>
          <div className="section-label">
            <div className="section-label__line" />
            <span>Nos créations</span>
          </div>
          <h2 className="specialties__title">
            Des spécialités qui font <em>rêver</em>
          </h2>
          <p className="specialties__subtitle">
            De la commande personnalisée aux douceurs du quotidien, découvrez l'univers de Namis Pastry.
          </p>
        </div>

        {/* Cards grid */}
        <div className="specialties__grid">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className={`spec-card ${visible ? 'spec-card--visible' : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="spec-card__img">
                <img src={cat.image} alt={cat.title} />
                <div className="spec-card__overlay">
                  <span className="spec-card__icon">{cat.icon}</span>
                </div>
              </div>
              <div className="spec-card__body">
                <h3 className="spec-card__title">{cat.title}</h3>
                <p className="spec-card__desc">{cat.desc}</p>
                <div className="spec-card__tags">
                  {cat.tags.map((tag) => (
                    <span key={tag} className="spec-card__tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className={`specialties__cta ${visible ? 'specialties__cta--visible' : ''}`}>
          <div className="specialties__cta-content">
            <h3>Vous avez une idée en tête ?</h3>
            <p>Partagez-nous votre vision et nous créerons le gâteau de vos rêves.</p>
          </div>
          <a
            href="https://wa.me/c/22966166244"
            target="_blank"
            rel="noopener noreferrer"
            className="specialties__cta-btn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.557 4.116 1.529 5.845L.057 23.5l5.797-1.522A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.647-.49-5.177-1.348l-.37-.22-3.44.903.918-3.352-.24-.386A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            Commander via WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
