import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import logo from "/assets/images/logo.png";
import "./Header.css";

const NAV_LINKS = [
  { label: "Home", to: "/", end: true },
  { label: "About Us", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact Us", to: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header-inner">
        <Link to="/" className="brand" onClick={closeMenu}>
          <img src={logo} alt="Hima Gingelly Oil logo" className="brand-logo" width={54} height={54} />
          <span className="brand-word">
            <strong>Hima</strong>
            <em>Gingelly Oil</em>
          </span>
        </Link>

        <nav className="nav-desktop" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <a href="tel:9846200055" className="btn btn-primary header-cta">
            <Phone size={16} /> Enquire Now
          </a>

          <button
            type="button"
            className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="nav-mobile-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="nav-mobile"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            aria-label="Mobile"
          >
            <div className="nav-mobile-inner">
              <ul className="nav-mobile-links">
                {NAV_LINKS.map((l, i) => (
                  <motion.li
                    key={l.to}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.06, duration: 0.4, ease: "easeOut" }}
                  >
                    <NavLink to={l.to} end={l.end} onClick={closeMenu}>
                      {l.label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                className="nav-mobile-footer"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + NAV_LINKS.length * 0.06, duration: 0.4 }}
              >
                <a href="tel:9846200055" className="btn btn-primary nav-mobile-cta" onClick={closeMenu}>
                  <Phone size={16} /> Enquire Now
                </a>
                <a href="tel:9846200055" className="nav-mobile-contact-line">
                  <Phone size={13} /> 9846200055 · 9895015298
                </a>
                <a href="mailto:himagingellyoil123@gmail.com" className="nav-mobile-contact-line">
                  <Mail size={13} /> himagingellyoil123@gmail.com
                </a>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}