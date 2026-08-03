import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Leaf, Cog, Users, ArrowRight, Award, Check, Sparkles,
  Droplet, FlaskConical, PackageCheck, Phone, MessageCircle,
} from "lucide-react";
import SEO from "../../components/SEO/SEO.jsx";
import Reveal, { RevealItem } from "../../components/Reveal/Reveal.jsx";
import "./Home.css";

/* Swap these for the client's real product photography whenever it's ready —
   every img tag below is tagged with a DEMO comment so they're easy to find. */
const IMG = {
  oilHero: "/assets/images/products/hero.png",
  oilPour: "/assets/images/products/hima_oil.jpg",
  oilHand: "/assets/images/products/hima_owner.jpeg",
  agniMark: "/assets/images/products/hima_agni_mark.jpeg",
  obanTea: "/assets/images/products/hima_tea_pack.jpg",
  multaniMutti: "/assets/images/products/hima_multani_mitti.jpg",
  multaniSoap: "/assets/images/products/hima_multani_soap.jpg",
  certUdyam: "/assets/images/certs/msme.png",
  certIncorp: "/assets/images/certs/incorporation.png",
  certTrademark: "/assets/images/certs/trademark.png",
  certFssai: "/assets/images/certs/fssai.png",
  certISO: "/assets/images/certs/iso.png",
};

const HERO_FEATURES = [
  { icon: Award, label: "18+", sub: "Years of Trust" },
  { icon: Leaf, label: "100%", sub: "Natural Products" },
  { icon: Cog, label: "Hygienically", sub: "Processed" },
];

const CATEGORIES = [
  {
    name: "Hima Oil Products",
    tag: "Pure · Natural · Trusted",
    desc: "Cold-pressed gingelly oil, bottled straight from the mill with nothing added and nothing taken away.",
    img: IMG.oilPour,
    to: "/products",
  },
  {
    name: "Agni Mark Oil",
    tag: "Pure for Pooja · Divine",
    desc: "Pressed pure for the pooja room — a clean, steady flame with no smoke and no compromise.",
    img: IMG.agniMark,
    to: "/products",
  },
  {
    name: "Oban Premium Tea",
    tag: "Rich Aroma · Refreshing Taste",
    desc: "Full-leaf tea blended for a strong, consistent cup — the same brew, every single morning.",
    img: IMG.obanTea,
    to: "/products",
  },
  {
    name: "Hima Traders Products",
    tag: "Care · Purity · Quality",
    desc: "Multani Mitti soap and powder made for daily skincare, without harsh chemicals or synthetic fillers.",
    img: IMG.multaniMutti,
    to: "/products",
  },


];

const PURITY_PROCESS = [
  { n: "01", icon: Droplet, t: "Sourcing", b: "Sesame is sourced and screened for quality before it ever reaches the press." },
  { n: "02", icon: Cog, t: "Slow Pressing", b: "Pressed the traditional way, keeping the oil's natural aroma and nutrients intact." },
  { n: "03", icon: FlaskConical, t: "Quality Testing", b: "Every batch is checked for purity, colour and consistency before it's approved." },
  { n: "04", icon: PackageCheck, t: "Hygienic Packing", b: "Filled, sealed and dated at our Perumbavoor unit, ready the same week it's pressed." },
];

const WHY = [
  { icon: Leaf, title: "100% Natural", body: "Made from carefully selected ingredients, without harmful additives." },
  { icon: Cog, title: "Hygienically Processed", body: "Ensuring purity, safety and consistent quality in every batch." },
  { icon: Sparkles, title: "Traditional Goodness", body: "Rooted in tradition, crafted with modern standards." },
  { icon: Users, title: "Trusted by Thousands", body: "Loved and trusted by households, temples and institutions across Kerala." },
];

const CERTS = [
  { img: IMG.certUdyam, name: "Udyam Registration", desc: "Registered MSME enterprise" },
  { img: IMG.certIncorp, name: "Incorporation Certificate", desc: "Legally registered company" },
  { img: IMG.certTrademark, name: "Trademark Registered", desc: "Protected Hima brand identity" },
  { img: IMG.certFssai, name: "Food Safety License", desc: "FSSAI compliant processing" },
  { img: IMG.certISO, name: "Certified Company", desc: "Quality management certified" },
];

const STATS = [
  { n: "18+", l: "Years of Experience" },
  { n: "5 Lakh+", l: "Happy Customers" },
  { n: "50+", l: "Retail Partners" },
  { n: "100%", l: "Quality Assured" },
];

const PRODUCT_TABS = [
  {
    key: "gingelly",
    label: "Hima Gingelly Oil",
    img: IMG.oilPour,
    sizes: ["100 ml", "200 ml", "500 ml", "1000 ml (1 L)", "15 L Tin"],
    description: "Premium quality Hima Gingelly Oil, free from added chemicals and preservatives. Retains natural aroma, rich flavor and nutritional goodness.",
    checklist: [
      "No Added Chemicals",
      "No Artificial Preservatives",
      "Natural Aroma & Flavor",
      "Suitable for Traditional Uses",
      "Hygienically Processed & Packed",
    ],
  },
  {
    key: "agnimark",
    label: "Agnimark Enna",
    img: IMG.agniMark,
    sizes: ["100 ml", "200 ml", "500 ml", "1 L"],
    description: "Agni Mark Enna is pressed pure for the pooja room — a clean, steady flame with no smoke and no compromise.",
    checklist: [
      "Pure for Pooja Use",
      "Clean, Steady Burning",
      "No Added Chemicals",
      "Trusted by Temples",
    ],
  },
  {
    key: "tea",
    label: "Oban Premium Tea",
    img: IMG.obanTea,
    sizes: ["250 g", "500 g", "1 kg"],
    description: "Oban Premium Tea — full-leaf, rich and ready for a strong cup at any hour of the day.",
    checklist: [
      "Full-Leaf Tea",
      "Rich Aroma",
      "Consistent Brew Quality",
      "Freshly Packed",
    ],
  },
  {
    key: "powder",
    label: "Multani Mitti Powder",
    img: IMG.multaniMutti,
    sizes: ["100 g", "200 g", "500 g"],
    description: "Fine-milled Multani Mitti powder for face packs and traditional skincare routines, packed without additives.",
    checklist: [
      "Pure & Additive-Free",
      "Finely Milled",
      "Traditional Skincare Staple",
      "Hygienically Packed",
    ],
  },
  {
    key: "soap",
    label: "Multani Mitti Soap",
    img: IMG.multaniSoap,
    sizes: ["75 g", "100 g"],
    description: "A gentle, chemical-free soap built around Multani Mitti — for a daily routine that actually smells and feels natural.",
    checklist: [
      "Chemical-Free Formula",
      "Gentle on Skin",
      "Natural Multani Mitti Base",
      "Everyday Use",
    ],
  },

];

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const product = PRODUCT_TABS[activeTab];

  return (
    <>
      <SEO
        title="Hima Gingelly Oil | Pure Cold Pressed Sesame Oil in Kerala"
        description="Experience the purity of Hima Gingelly Oil. For over 18 years, we've been crafting premium cold-pressed sesame oil, Agni Mark pooja oil, Oban Premium Tea, and natural household products from Perumbavoor, Kerala."
        path="/"
        keywords="Hima Gingelly Oil, cold pressed sesame oil Kerala, gingelly oil Kerala, sesame oil Perumbavoor, pure gingelly oil, Agni Mark pooja oil, Oban Premium Tea, Multani Mitti soap, natural edible oil, Kerala oil manufacturer"
      />

      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="hero-texture" aria-hidden="true" />
        <div className="hero-drop hero-drop--one" aria-hidden="true" />
        <div className="hero-drop hero-drop--two" aria-hidden="true" />
        <div className="container hero-inner">
          <motion.div className="hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
            <span className="eyebrow hero-eyebrow">Perumbavoor, Kerala · Since the HLL Era</span>
            <h1>
              Purity in Every Drop,<br />
              <em>Trust in Every Product.</em>
            </h1>
            <p className="hero-lede">
              For the past 18 years, Hima Oil has been a symbol of quality, tradition
              and trust. From our pure oils to care products and tea — we bring you
              the goodness of nature, pressed, packed and shipped from our own
              facility in Perumbavoor with nothing hidden in between.
            </p>

            <div className="hero-features">
              {HERO_FEATURES.map((f) => (
                <div key={f.sub} className="hero-feature">
                  <f.icon size={22} strokeWidth={1.6} />
                  <span><strong>{f.label}</strong>{f.sub}</span>
                </div>
              ))}
            </div>

            <div className="hero-actions">
              <Link to="/products" className="btn btn-primary">Explore Our Products <ArrowRight size={16} /></Link>
              <Link to="/about" className="btn btn-ghost">Know More About Us</Link>
            </div>
          </motion.div>

          <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
            <div className="hero-visual-glow" aria-hidden="true" />
            {/* DEMO IMAGE — replace with the real product line-up photo/render, cut out on a transparent background */}
            <img
              className="hero-visual-img"
              src={IMG.oilHero}
              alt="Hima Oil product range — gingelly oil, agni mark oil and oban tea"
              loading="eager"
            />
            <div className="hero-badge">
              <span>18+</span>
              <small>Years of&nbsp;Trust</small>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ OUR JOURNEY / PROMISE ============ */}
      <section className="section journey">
        <div className="container journey-grid">
          <Reveal direction="left" className="journey-badge-col">
            <div className="journey-ring">
              <span>A Legacy of</span>
              <strong>Quality &amp;<br />Commitment</strong>
              <span>Since 18 Years</span>
            </div>
          </Reveal>

          <Reveal direction="up" className="journey-copy">
            <span className="eyebrow light">Our Journey. Our Promise.</span>
            <p>
              For the past 18 years, Hima has been committed to delivering quality
              and trust through its wide range of products. Our mission is to
              provide customers with premium-quality products that meet the
              highest standards of excellence and reliability.
            </p>
            <p>
              The name "Hima," meaning "Ice Gold," was originally a brand of
              Hindustan Lever Limited (HLL). Following the sale of the Hima brand
              by HLL, we have proudly continued its legacy by offering high-quality
              products while maintaining the trust associated with this name.
            </p>
            <p>
              At Hima, quality and customer satisfaction have always been our
              highest priorities. We are dedicated to providing natural, reliable,
              and superior products that customers can trust with confidence.
            </p>
            <p className="journey-signature">Sunil</p>
            <span className="journey-role">Sunil, Proprietor, Hima Oil</span>
          </Reveal>

          <Reveal direction="right" className="journey-visual">
            <div className="journey-visual-frame">
              {/* DEMO IMAGE — swap for Sunil's photo */}
              <img src={IMG.oilHand} alt="Hima Oil, held and poured by hand" loading="lazy" />
            </div>
            <div className="journey-visual-badge">
              <span>18+</span>
              <small>Years of Trust</small>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ CERTIFICATIONS ============ */}
      <section className="section certs">
        <div className="container">

          <Reveal className="section-head">
            <span className="eyebrow">Verified & Trusted</span>
            <h2>Certified for Quality & Trust</h2>
            <p>
              Every Hima product is manufactured with strict quality standards,
              government approvals and legally registered trademarks to ensure
              complete customer confidence.
            </p>
          </Reveal>

          <div className="cert-grid">
            {CERTS.map((cert) => (
              <RevealItem
                key={cert.name}
                className="cert-card"
              >
                <div className="cert-image">
                  <img src={cert.img} alt={cert.name} />
                </div>

                <div className="cert-content">
                  <h3>{cert.name}</h3>
                  <p>{cert.desc}</p>
                </div>
              </RevealItem>
            ))}
          </div>

        </div>
      </section>

      {/* ============ PRODUCT CATEGORIES ============ */}
      <section className="section categories">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">What We Make</span>
            <h2>Our Product Categories</h2>
            <p>Four product lines, one standard of purity — from the kitchen shelf to the pooja room.</p>
          </Reveal>
          <Reveal stagger={0.12} className="category-grid">
            {CATEGORIES.map((c) => (
              <RevealItem key={c.name} className="category-card">
                <div className="category-img">
                  {/* DEMO IMAGE */}
                  <img src={c.img} alt={c.name} loading="lazy" />
                </div>
                <div className="category-text">
                  <span>{c.tag}</span>
                  <h3>{c.name}</h3>
                  <p>{c.desc}</p>
                  <Link to={c.to} className="category-link">View Products <ArrowRight size={14} /></Link>
                </div>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============ PURITY PROCESS ============ */}
      <section className="section purity">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">How It's Made</span>
            <h2>Our Purity Process</h2>
            <p>Four unglamorous, repeated-daily steps that haven't changed since we started — and that's exactly the point.</p>
          </Reveal>
          <Reveal stagger={0.1} className="purity-track">
            {PURITY_PROCESS.map((p) => (
              <RevealItem key={p.n} className="purity-step">
                <span className="purity-step-num">{p.n}</span>
                <div className="purity-step-icon"><p.icon size={22} /></div>
                <h3>{p.t}</h3>
                <p>{p.b}</p>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============ WHY CHOOSE HIMA ============ */}
      <section className="section why">
        <div className="container why-grid">
          <Reveal className="why-head">
            <span className="eyebrow light">Why Choose Hima?</span>
            <p className="why-intro">
              Every product we make is judged against one standard — would we
              trust it in our own homes? Here's what that commitment looks like
              in practice.
            </p>
          </Reveal>
          <Reveal stagger={0.1} className="why-list">
            {WHY.map((w) => (
              <RevealItem key={w.title} className="why-card">
                <w.icon size={22} strokeWidth={1.6} />
                <div>
                  <h3>{w.title}</h3>
                  <p>{w.body}</p>
                </div>
              </RevealItem>
            ))}
          </Reveal>
          <Reveal direction="right" className="why-visual">
            {/* DEMO IMAGE */}
            <img src={IMG.oilPour} alt="Oil being poured near a traditional lamp" loading="lazy" />
            <div className="why-visual-badge glass-panel">
              <strong>5 Lakh+</strong>
              <span>Happy Customers</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ PRODUCT RANGE ============ */}
      <section className="section range">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Explore The Range</span>
            <h2>Our Product Range</h2>
            <p>From kitchen staple to skincare ritual, each product is made in small hygienic batches and packed the same week it's pressed, milled or blended.</p>
          </Reveal>

          <div className="range-grid">
            <Reveal direction="left" className="range-tabs">
              {PRODUCT_TABS.map((t, i) => (
                <button
                  key={t.key}
                  className={`range-tab ${i === activeTab ? "is-active" : ""}`}
                  onClick={() => setActiveTab(i)}
                >
                  {t.label}
                </button>
              ))}
            </Reveal>

            <Reveal direction="up" className="range-showcase">
              <div className="range-image">
                {/* DEMO IMAGE */}
                <img src={product.img} alt={product.label} loading="lazy" />
              </div>
              <div className="range-sizes">
                {product.sizes.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </Reveal>

            <Reveal direction="right" className="range-info">
              <p>{product.description}</p>
              <ul className="range-checklist">
                {product.checklist.map((item) => (
                  <li key={item}><Check size={15} /> {item}</li>
                ))}
              </ul>
              <Link to="/products" className="btn btn-primary">View Full Specifications <ArrowRight size={16} /></Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ QUALITY / TRUST BANNER ============ */}
      <section className="section quality-banner">
        <div className="container quality-banner-inner">
          <Reveal direction="left" className="quality-copy">
            <h2>Quality is our promise.<br />Trust is our strength.</h2>
            <p>From pure gingelly oil to skincare essentials and refreshing tea, every product is crafted with care, purity and 18 years of a family's word behind it.</p>
            <div className="quality-actions">
              <a href="tel:9846200055" className="btn btn-primary"><Phone size={15} /> Call Now</a>
              <a href="https://wa.me/919846200055" target="_blank" rel="noreferrer" className="btn btn-ghost"><MessageCircle size={15} /> WhatsApp</a>
            </div>
          </Reveal>
          <Reveal direction="right" stagger={0.08} className="quality-stats">
            {STATS.map((s) => (
              <RevealItem key={s.l} className="quality-stat">
                <strong>{s.n}</strong>
                <span>{s.l}</span>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}