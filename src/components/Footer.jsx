import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* Brand */}
        <div className="footer__brand">
          <div className="footer__logo">
            <img src="/logo.png" alt="Namis Pastry" className="footer__logo-img" />
          </div>
          <p className="footer__tagline">
            Chaque gâteau est une promesse de bonheur.<br />
            Créé avec amour, livré avec fierté.
          </p>
          <div className="footer__social">
            <a href="https://wa.me/22966166244" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.557 4.116 1.529 5.845L.057 23.5l5.797-1.522A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.647-.49-5.177-1.348l-.37-.22-3.44.903.918-3.352-.24-.386A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/namis_pastry/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="tel:+22966166244" aria-label="Téléphone">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.01z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="footer__links">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#home">Accueil</a></li>
            <li><a href="#about">À propos</a></li>
            <li><a href="#specialties">Spécialités</a></li>
            <li><a href="#gallery">Galerie</a></li>
            <li><a href="#order">Commander</a></li>
          </ul>
        </div>

        <div className="footer__links">
          <h4>Nos créations</h4>
          <ul>
            <li><a href="#gallery">Gâteaux d'anniversaire</a></li>
            <li><a href="#gallery">Mini Entremets</a></li>
            <li><a href="#gallery">Entremets</a></li>
            <li><a href="#gallery">Mignardises</a></li>
            <li><a href="#gallery">Trompe Oeil</a></li>
            <li><a href="#gallery">Bûche de Noël</a></li>
            <li><a href="#gallery">Événements</a></li>
          </ul>
        </div>

        <div className="footer__links">
          <h4>Contact</h4>
          <ul>
            <li><span>📍 Cotonou, Bénin</span></li>
            <li><a href="tel:+22966166244">📞 +229 66 16 62 44</a></li>
            <li><a href="https://wa.me/22966166244" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a></li>
            <li><a href="https://www.instagram.com/namis_pastry/" target="_blank" rel="noopener noreferrer">📸 @namis_pastry</a></li>
            <li><a href="mailto:mistourathnalla96@gmail.com">✉️ mistourathnalla96@gmail.com</a></li>
          </ul>
          <div className="footer__hours">
            <strong>Horaires</strong>
            <p>Lun – Sam : 8h – 20h</p>
            <p>Dimanche : 9h – 17h</p>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {year} Namis Pastry. Tous droits réservés.</p>
        <p>Fait avec ❤️ à Cotonou, Bénin</p>
      </div>
    </footer>
  )
}
