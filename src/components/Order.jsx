import { useEffect, useRef, useState } from 'react'
import './Order.css'

const steps = [
  {
    num: '01',
    icon: '💬',
    title: 'Contactez-nous',
    desc: 'Envoyez-nous un message WhatsApp ou remplissez le formulaire avec vos idées et la date souhaitée.',
  },
  {
    num: '02',
    icon: '🎨',
    title: 'On crée ensemble',
    desc: 'On discute de votre vision — thème, couleurs, saveurs — pour concevoir le gâteau parfait.',
  },
  {
    num: '03',
    icon: '✨',
    title: 'Livraison & Surprise',
    desc: 'Votre création est préparée avec amour et livrée fraîche pour votre grand jour.',
  },
]

export default function Order() {
  const [visible, setVisible] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', event: '', date: '', message: '' })
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleWhatsApp = (e) => {
    e.preventDefault()
    const msg = `Bonjour Nami's Pastry ! 🎂\n\nNom: ${form.name}\nTéléphone: ${form.phone}\nType d'événement: ${form.event}\nDate souhaitée: ${form.date}\n\nMessage: ${form.message}\n\nMerci !`
    const url = `https://wa.me/22966166244?text=${encodeURIComponent(msg)}`
    window.open(url, '_blank')
  }

  return (
    <section id="order" className="order" ref={ref}>
      <div className="order__inner">
        {/* Header */}
        <div className={`order__header ${visible ? 'order__header--visible' : ''}`}>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            <div className="section-label__line" />
            <span>Commander</span>
          </div>
          <h2 className="order__title">
            Passez votre <em>commande</em>
          </h2>
          <p className="order__subtitle">
            Simple, rapide et personnalisé. Votre gâteau de rêve est à portée de clic.
          </p>
        </div>

        {/* Steps */}
        <div className={`order__steps ${visible ? 'order__steps--visible' : ''}`}>
          {steps.map((step) => (
            <div key={step.num} className="order__step">
              <div className="order__step-num">{step.num}</div>
              <div className="order__step-icon">{step.icon}</div>
              <h4 className="order__step-title">{step.title}</h4>
              <p className="order__step-desc">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className={`order__content ${visible ? 'order__content--visible' : ''}`}>
          {/* Form */}
          <div className="order__form-wrap">
            <h3 className="order__form-title">Formulaire de commande</h3>
            <p className="order__form-sub">Remplissez le formulaire et nous vous recontactons via WhatsApp.</p>

            <form className="order__form" onSubmit={handleWhatsApp}>
              <div className="order__row">
                <div className="order__field">
                  <label>Votre nom *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Ex: Marie Dupont"
                    required
                  />
                </div>
                <div className="order__field">
                  <label>Téléphone (WhatsApp) *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Ex: +229 97 00 00 00"
                    required
                  />
                </div>
              </div>

              <div className="order__row">
                <div className="order__field">
                  <label>Type d'événement *</label>
                  <select name="event" value={form.event} onChange={handleChange} required>
                    <option value="">Choisir...</option>
                    <option>Anniversaire</option>
                    <option>Mariage</option>
                    <option>Baptême</option>
                    <option>Fiançailles</option>
                    <option>Fête d'entreprise</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div className="order__field">
                  <label>Date souhaitée *</label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>
              </div>

              <div className="order__field">
                <label>Décrivez votre gâteau de rêve</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Couleurs, parfums, décoration, nombre de parts... dites-nous tout !"
                />
              </div>

              <button type="submit" className="order__submit">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.557 4.116 1.529 5.845L.057 23.5l5.797-1.522A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.647-.49-5.177-1.348l-.37-.22-3.44.903.918-3.352-.24-.386A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                Envoyer via WhatsApp
              </button>
            </form>
          </div>

          {/* Contact card */}
          <div className="order__contact">
            <div className="order__contact-card">
              <img src="/logo.png" alt="Nami's Pastry" className="order__contact-logo" />
              <p>Pâtisserie artisanale</p>

              <div className="order__contact-links">
                <a
                  href="https://wa.me/22966166244"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="order__contact-link order__contact-link--wa"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.557 4.116 1.529 5.845L.057 23.5l5.797-1.522A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.647-.49-5.177-1.348l-.37-.22-3.44.903.918-3.352-.24-.386A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                  </svg>
                  WhatsApp
                </a>
                <a
                  href="https://www.instagram.com/namis_pastry/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="order__contact-link order__contact-link--ig"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Instagram
                </a>
              </div>

              <div className="order__contact-info">
                <div className="order__info-item">
                  <span className="order__info-icon">📍</span>
                  <div>
                    <strong>Localisation</strong>
                    <p>Cotonou, Bénin</p>
                  </div>
                </div>
                <div className="order__info-item">
                  <span className="order__info-icon">🕐</span>
                  <div>
                    <strong>Délai de commande</strong>
                    <p>Minimum 48h à l'avance</p>
                  </div>
                </div>
                <div className="order__info-item">
                  <span className="order__info-icon">🚗</span>
                  <div>
                    <strong>Livraison</strong>
                    <p>Disponible sur Cotonou</p>
                  </div>
                </div>
                <div className="order__info-item">
                  <span className="order__info-icon">💳</span>
                  <div>
                    <strong>Paiement</strong>
                    <p>Mobile Money / Espèces</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
