import { useEffect, useRef, useState } from 'react'
import { supabase } from '../lib/supabase'
import './Reviews.css'

function Stars({ rating, interactive = false, onSelect }) {
  return (
    <div className="stars" aria-label={`${rating} étoiles sur 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type={interactive ? 'button' : undefined}
          className={`star ${n <= rating ? 'star--filled' : ''} ${interactive ? 'star--interactive' : ''}`}
          onClick={interactive ? () => onSelect(n) : undefined}
          aria-label={interactive ? `${n} étoile${n > 1 ? 's' : ''}` : undefined}
          tabIndex={interactive ? 0 : -1}
        >
          ★
        </button>
      ))}
    </div>
  )
}

export default function Reviews() {
  const [visible, setVisible] = useState(false)
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState({ name: '', rating: 5, message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(null)
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
    const fetchReviews = async () => {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .eq('approved', true)
        .order('created_at', { ascending: false })
      if (!error) setReviews(data || [])
      setLoading(false)
    }
    fetchReviews()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.message.trim()) return
    setSubmitting(true)
    setError(null)
    const { error } = await supabase.from('reviews').insert([{
      name: form.name.trim(),
      rating: form.rating,
      message: form.message.trim(),
      approved: true,
    }])
    setSubmitting(false)
    if (error) {
      setError('Une erreur est survenue. Réessayez.')
    } else {
      setSubmitted(true)
      setForm({ name: '', rating: 5, message: '' })
    }
  }

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })
  }

  return (
    <section id="reviews" className="reviews" ref={ref}>
      <div className="reviews__inner">

        {/* Header */}
        <div className={`reviews__header ${visible ? 'reviews__header--visible' : ''}`}>
          <div className="section-label">
            <div className="section-label__line" />
            <span>Témoignages</span>
          </div>
          <h2 className="reviews__title">
            Ce que disent <em>nos clients</em>
          </h2>
          <p className="reviews__subtitle">
            Des centaines de familles nous font confiance pour leurs moments précieux.
          </p>
        </div>

        {/* Reviews grid */}
        {loading ? (
          <div className="reviews__loading">
            <div className="reviews__spinner" />
          </div>
        ) : reviews.length === 0 ? (
          <div className="reviews__empty">
            Soyez le premier à laisser un avis !
          </div>
        ) : (
          <div className={`reviews__grid ${visible ? 'reviews__grid--visible' : ''}`}>
            {reviews.map((review, i) => (
              <div
                key={review.id}
                className="review-card"
                style={{ transitionDelay: `${Math.min(i * 80, 400)}ms` }}
              >
                <Stars rating={review.rating} />
                <p className="review-card__message">"{review.message}"</p>
                <div className="review-card__footer">
                  <div className="review-card__avatar">
                    {review.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <strong className="review-card__name">{review.name}</strong>
                    <span className="review-card__date">{formatDate(review.created_at)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Submit form */}
        <div className={`reviews__form-wrap ${visible ? 'reviews__form-wrap--visible' : ''}`}>
          <h3 className="reviews__form-title">Laissez votre avis</h3>
          <p className="reviews__form-sub">Votre avis sera visible après validation.</p>

          {submitted ? (
            <div className="reviews__thanks">
              <span>🎉</span>
              <strong>Merci pour votre avis !</strong>
              <p>Il sera visible sur le site après validation.</p>
              <button className="reviews__thanks-btn" onClick={() => setSubmitted(false)}>
                Laisser un autre avis
              </button>
            </div>
          ) : (
            <form className="reviews__form" onSubmit={handleSubmit}>
              <div className="reviews__field">
                <label>Votre prénom</label>
                <input
                  type="text"
                  placeholder="Ex: Aminata"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  required
                  maxLength={60}
                />
              </div>
              <div className="reviews__field">
                <label>Note</label>
                <Stars rating={form.rating} interactive onSelect={(n) => setForm((f) => ({ ...f, rating: n }))} />
              </div>
              <div className="reviews__field">
                <label>Votre avis</label>
                <textarea
                  placeholder="Partagez votre expérience avec Namis Pastry..."
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  required
                  maxLength={400}
                  rows={4}
                />
              </div>
              {error && <p className="reviews__error">{error}</p>}
              <button type="submit" className="reviews__submit" disabled={submitting}>
                {submitting ? 'Envoi...' : 'Envoyer mon avis'}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  )
}
