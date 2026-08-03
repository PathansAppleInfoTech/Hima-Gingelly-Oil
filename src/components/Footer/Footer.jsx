import { Link } from "react-router-dom";
import { useState } from "react";
import { Share2, Camera, MessageCircle, MapPin, Phone, Mail, FileText, Send, ShieldCheck, Award, BadgeCheck, Stamp, ArrowRight } from "lucide-react";
import logo from "/assets/images/logo.png";
import "./Footer.css";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="site-footer">
      <div className="footer-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none"><path d="M0,32 C240,64 480,0 720,20 C960,40 1200,64 1440,28 L1440,60 L0,60 Z" fill="var(--forest-deep)" /></svg>
      </div>

      {/* ---------- PREMIUM CTA STRIP ---------- */}
      <div className="footer-cta">
        <div className="container footer-cta-inner">
          <div>
            <span className="footer-cta-eyebrow">18+ Years of Purity, Delivered</span>
            <h3>Ready to bring Hima home?</h3>
          </div>
          <div className="footer-cta-actions">
            <a href="https://wa.me/919846200055" target="_blank" rel="noreferrer" className="btn footer-whatsapp">
              <MessageCircle size={16} /> WhatsApp Us
            </a>
            <Link to="/products" className="btn btn-light">
              Explore Products <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>

      <div className="container footer-top">
        <div className="footer-col footer-brand">
          <Link to="/" className="footer-logo">
            <img src={logo} alt="Hima Gingelly Oil" width={52} height={52} />
            <span>Hima<em>Gingelly Oil</em></span>
          </Link>
          <p>
            For over 18+ years, Hima Oil has stood for purity, quality and trust —
            delivering the best gingelly oil, pooja oil, skincare and tea to
            families across Kerala.
          </p>
          {/* <div className="footer-social">
            <a href="#" aria-label="Facebook"><Share2 size={17} /></a>
            <a href="#" aria-label="Instagram"><Camera size={17} /></a>
            <a href="#" aria-label="WhatsApp"><MessageCircle size={17} /></a>
          </div> */}
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Our Products</h4>
          <ul>
            <li><Link to="/products#gingelly-oil">Hima Gingelly Oil</Link></li>
            <li><Link to="/products#agni-mark">Agni Mark Oil</Link></li>
            <li><Link to="/products#soap">Multani Mitti Soap</Link></li>
            <li><Link to="/products#powder">Multani Mitti Powder</Link></li>
            <li><Link to="/products#tea">Oban Premium Tea</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Certifications</h4>
          <ul className="footer-certs">
            <li><ShieldCheck size={15} /> Udyam Registration</li>
            <li><FileText size={15} /> Incorporation Certificate</li>
            <li><BadgeCheck size={15} /> Trademark Registered</li>
            <li><Award size={15} /> FSSAI Licensed</li>
            <li><Stamp size={15} /> ISO 9001:2015</li>
          </ul>
        </div>

        <div className="footer-col footer-contact">
          <h4>Contact</h4>
          <ul>
            <li><MapPin size={15} /> Hima Oil, IV/347-B, Thrikkappady, Mudakuzha, Perumbavoor, Ernakulam Dist., Kerala – 683546</li>
            <li><Phone size={15} /> 9846200055, 9895015298</li>
            <li><Mail size={15} /> himagingellyoil123@gmail.com</li>
            <li><FileText size={15} /> GSTIN: 32AIFPR4374P1ZP</li>
          </ul>
          {/* <form className="footer-newsletter" onSubmit={handleSubscribe}>
            <label htmlFor="footer-email" className="sr-only">Email address</label>
            <input
              id="footer-email"
              type="email"
              placeholder="Get updates by email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" aria-label="Subscribe"><Send size={15} /></button>
          </form> */}
          {/* {subscribed && <p className="footer-sub-note">Thank you — you're on the list.</p>} */}
        </div>
      </div>

      <div className="footer-bottom container">
        <p>© 2025 Hima Oil. All Rights Reserved.</p>
        <p className="footer-slogan">Quality is our promise. Trust is our strength.</p>
        <p>Powered by Pathans Apple Info Tech</p>
      </div>
    </footer>
  );
}