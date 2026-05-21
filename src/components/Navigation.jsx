import { useState, useEffect } from 'react'
import './Navigation.css'

const navLinks = [
  { label: 'Accueil', href: '#home' },
  { label: 'À propos', href: '#about' },
  { label: 'Spécialités', href: '#specialties' },
  { label: 'Galerie', href: '#gallery' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && menuOpen) setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#home" className="nav__logo">
          <img src="/images/logo-namis-new.jpg" alt="Namis Pastry" className="nav__logo-img" />
        </a>

        <ul className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav__link" onClick={handleLinkClick}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/c/22966166244"
              target="_blank"
              rel="noopener noreferrer"
              className="nav__cta"
              onClick={handleLinkClick}
            >
              Commander
            </a>
          </li>
        </ul>

        <button
          className={`nav__burger ${menuOpen ? 'nav__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
