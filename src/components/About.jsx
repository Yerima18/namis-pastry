import { useEffect, useRef, useState } from 'react'
import './About.css'

const values = [
  {
    icon: '🎨',
    title: 'Créativité',
    desc: "Chaque gâteau est une toile vierge où s'exprime notre passion pour l'art culinaire.",
  },
  {
    icon: '⭐',
    title: 'Qualité',
    desc: 'Nous utilisons uniquement des ingrédients frais et de première qualité pour chaque création.',
  },
  {
    icon: '💝',
    title: 'Passion',
    desc: "Fait avec amour, chaque détail compte pour rendre votre moment unique et mémorable.",
  },
  {
    icon: '🎯',
    title: 'Sur mesure',
    desc: 'Votre vision est notre mission. Nous personnalisons chaque commande selon vos désirs.',
  },
]

export default function About() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="about" ref={ref}>
      <div className="about__inner">
        {/* Left image stack */}
        <div className={`about__images ${visible ? 'about__images--visible' : ''}`}>
          <div className="about__img-main">
            <img src="/images/cake-choco-gold.jpg" alt="Nami's Pastry atelier" />
          </div>
          <div className="about__img-accent">
            <img src="/images/cake-green-anniversaire.jpg" alt="Gâteau anniversaire" />
          </div>
          <div className="about__img-tag">
            <span>🏆</span>
            <p>Pâtisserie<br />artisanale</p>
          </div>
        </div>

        {/* Right content */}
        <div className={`about__content ${visible ? 'about__content--visible' : ''}`}>
          <div className="section-label">
            <div className="section-label__line" />
            <span>Notre histoire</span>
          </div>

          <h2 className="about__title">
            La passion de la <em>pâtisserie</em>,<br />
            transmise dans chaque bouchée
          </h2>

          <p className="about__text">
            Nami's Pastry est née d'une passion profonde pour l'art de la pâtisserie.
            Nous croyons que chaque célébration mérite un gâteau aussi unique que
            l'événement qu'il honore.
          </p>
          <p className="about__text">
            De la conception à la livraison, nous mettons tout notre cœur dans chaque
            création — des gâteaux d'anniversaire élaborés aux petites douceurs du quotidien.
            Chaque commande est une nouvelle aventure créative.
          </p>

          <div className="about__values">
            {values.map((v) => (
              <div key={v.title} className="about__value">
                <div className="about__value-icon">{v.icon}</div>
                <div>
                  <h4 className="about__value-title">{v.title}</h4>
                  <p className="about__value-desc">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
