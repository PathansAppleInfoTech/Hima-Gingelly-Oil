import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Check, Droplets, Sparkles, ArrowRight, Phone, Clock, Repeat,
  LayoutGrid, Flame, Package, Coffee, Box, Leaf, ShieldCheck, Cog, Users,
  Award, TrendingUp, Globe2, MessageCircle,
} from "lucide-react";
import SEO from "../../components/SEO/SEO.jsx";
import Reveal, { RevealItem } from "../../components/Reveal/Reveal.jsx";
import "./Products.css";

/* DEMO IMAGES — swap for the client's real product photography whenever it's ready. */
const IMG = {
  oilHero: "/assets/images/products/hero.png",
  oilPour: "/assets/images/products/hima_oil.jpg",
  agniMark: "/assets/images/products/hima_agni_mark.jpeg",
  teaMunnar: "/assets/images/products/hima_tea_pack.jpg",
  multtaniPowder: "/assets/images/products/hima_multani_mitti.jpg",
  multtaniSoap: "/assets/images/products/hima_multani_soap.jpg",
};

const NAV = [
  { id: "gingelly-oil", label: "All Products", icon: LayoutGrid },
  { id: "gingelly-oil", label: "Hima Oil Products", icon: Droplets },
  { id: "gingelly-oil", label: "Hima Gingelly Oil", icon: Droplets },
  { id: "agni-mark", label: "Agni Mark Oil", icon: Flame },
  { id: "tea", label: "Hima Traders Products", icon: Package },
  { id: "tea", label: "Oban Premium Tea", icon: Coffee },
  { id: "powder", label: "Multani Mitti Powder", icon: Box },
  { id: "soap", label: "Multani Mitti Soap", icon: Sparkles },
];

/* Quick-jump chips for the hero — a clean, de-duplicated list distinct
   from the sticky sidebar's fuller nav. */
const HERO_QUICK_LINKS = [
  { id: "gingelly-oil", label: "Gingelly Oil", icon: Droplets },
  { id: "agni-mark", label: "Agni Mark Oil", icon: Flame },
  { id: "soap", label: "Multani Soap", icon: Sparkles },
  { id: "powder", label: "Multani Powder", icon: Box },
  { id: "tea", label: "Oban Tea", icon: Coffee },
];

const HERO_STATS = [
  { icon: Award, label: "18+", sub: "Years of Trust" },
  { icon: Package, label: "5", sub: "Product Lines" },
  { icon: Leaf, label: "100%", sub: "Natural" },
];

const WHY_SIDEBAR = [
  { icon: Leaf, t: "100% Natural", b: "No added chemicals or preservatives." },
  { icon: ShieldCheck, t: "Premium Quality", b: "Ensuring purity and consistency." },
  { icon: Cog, t: "Hygienically Processed", b: "Modern technology with traditional care." },
  { icon: Users, t: "Trusted by Thousands", b: "Loved and trusted by households, temples and institutions across Kerala." },
];

const TRUST_STATS = [
  { icon: Award, n: "18+", l: "Years of Experience" },
  { icon: Users, n: "5 Lakh+", l: "Happy Customers" },
  { icon: TrendingUp, n: "50+", l: "Retail Partners" },
  { icon: Globe2, n: "Pan Kerala", l: "Presence" },
];

const SOAP_VARIANTS = [
  { name: "Milky", tone: "#f4ead3", body: "Softens and nourishes with a gentle milk-cream base — for everyday sensitive skin." },
  { name: "Turmeric", tone: "#e3a83f", body: "Traditional haldi tone-up, mildly antiseptic, for that classic Kerala glow." },
  { name: "Rose", tone: "#d98a8f", body: "A cooling floral finish that leaves skin fresh through humid Kerala afternoons." },
  { name: "Sandal", tone: "#c9a86a", body: "Rich sandalwood aroma with a calming, grounding effect after a wash." },
];

/* Image with a subtle scroll-linked parallax drift, used inside each product card */
function ParallaxImage({ src, alt }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.06, 1, 1.06]);

  return (
    <div className="shop-card-media" ref={ref}>
      <motion.img src={src} alt={alt} style={{ y, scale }} loading="lazy" />
    </div>
  );
}

const PRODUCTS = [
  {
    id: "gingelly-oil",
    index: "1",
    eyebrow: "Flagship Product",
    name: "Hima Gingelly Oil",
    img: IMG.oilPour,
    desc: "Free from added chemicals, artificial preservatives and harmful additives, Hima Gingelly Oil retains its natural aroma, rich flavour and nutritional goodness. It's the everyday oil trusted by households and temples alike across Kerala.",
    features: ["No Added Chemicals", "No Artificial Preservatives", "Natural Aroma & Flavour", "Suitable for Traditional Uses", "Hygienically Processed & Packed", "Trademark Registered (Class 29, 35)"],
    sub: [
      { h: "Nutritional Benefits", b: "Rich in natural antioxidants and healthy fats; retains the vitamin E and mineral content that high-heat refining destroys." },
      { h: "Traditional Uses", b: "Everyday cooking and tempering, Ayurvedic oil massage (abhyanga), and traditional Kerala festival cooking." },
    ],
    info: { title: "Available Pack Sizes", type: "sizes", items: ["100 ml", "200 ml", "500 ml", "1000 ml (1 L)", "15 L Tin"] },
  },
  {
    id: "agni-mark",
    index: "2",
    eyebrow: "Pooja Essential",
    name: "Agnimark Enna",
    img: IMG.agniMark,
    desc: "A premium-quality edible oil specially prepared for lighting lamps and performing pooja rituals. Carefully refined for consistent quality, it's trusted for use in homes, institutions and temples across Kerala.",
    features: ["Pure and Refined", "Ideal for Pooja and Lamp Lighting", "Consistent Quality", "Creates a Pure and Devotional Atmosphere", "Available in Multiple Sizes"],
    sub: [
      { h: "Temple Uses", b: "Clean, steady burning with minimal smoke — trusted for long rituals and daily deeparadhana." },
      { h: "Household Uses", b: "The everyday lamp-lighting oil for home pooja rooms, festivals and family ceremonies." },
    ],
    info: { title: "Available Pack Sizes", type: "sizes", items: ["100 ml", "200 ml", "500 ml", "1000 ml (1 L)", "15 L Tin"] },
  },
  {
    id: "tea",
    index: "5",
    eyebrow: "Hima Traders",
    name: "Hima Traders Tea (Oban Tea)",
    img: IMG.teaMunnar,
    desc: "Premium branded tea, expertly blended by professional tea blenders and approved by experienced tea tasters, ensuring exceptional taste, aroma and consistent quality in every cup.",
    features: ["Premium Quality Tea", "Rich Aroma & Refreshing Flavour", "Strong and Consistent Taste", "Carefully Selected Tea Leaves", "Ideal for Everyday Use", "Hygienically Processed and Packed", "Trademark Registered (Class 30)"],
    sub: [
      { h: "The Tea Experience", b: "A deep amber cup with a full-bodied malty character — brews strong without turning bitter." },
      { h: "Brewing Tip", b: "Steep one teaspoon per cup in freshly boiled water for 3–4 minutes for the fullest aroma." },
    ],
    info: { title: "Available Pack Sizes", type: "sizes", items: ["100 gm", "250 gm", "500 gm", "1 kg"] },
  },
  {
    id: "powder",
    index: "4",
    eyebrow: "Skincare",
    name: "Hima Multani Mitti Powder",
    img: IMG.multtaniPowder,
    desc: "Authentic natural clay sourced for its ability to absorb excess oil, remove impurities and promote a brighter, smoother complexion. Regular use helps reduce acne, blemishes and dark spots.",
    features: ["100% Natural Multani Mitti (Fuller's Earth)", "Helps Remove Excess Oil & Impurities", "Reduces Acne, Blemishes & Dark Spots", "Provides Cooling & Refreshing Effect", "Leaves Skin Soft, Smooth & Radiant", "Trademark Registered (Class 30)"],
    sub: [],
    info: {
      title: "How to Use", type: "steps", items: [
        { icon: Droplets, t: "Mix with water, raw milk or rose water" },
        { icon: Sparkles, t: "Apply evenly on face and neck" },
        { icon: Clock, t: "Leave for 15–20 minutes, or until partially dry" },
        { icon: Repeat, t: "Rinse thoroughly with water. Use twice a week" },
      ],
    },
  },

  {
    id: "soap",
    index: "3",
    eyebrow: "Skincare",
    name: "Hima Multani Mitti Soap",
    img: IMG.multtaniSoap,
    desc: "Enriched with the goodness of Multani Mitti (Fuller's Earth), this soap gently cleanses skin while removing excess oil, dirt and impurities — free from harmful chemicals and suitable for everyday use across all skin types.",
    features: ["Enriched with Natural Multani Mitti", "Helps Cleanse & Refresh the Skin", "Made with Carefully Selected Ingredients", "Free from Harmful Chemicals", "Suitable for Daily Use", "Trademark Registered (Class 3)"],
    sub: [],
    info: { title: "Available Variants", type: "variants", items: SOAP_VARIANTS },
  },
];

export default function Products() {
  const [activeId, setActiveId] = useState("gingelly-oil");
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.7],
        rootMargin: "-120px 0px -40% 0px",
      }
    );

    PRODUCTS.forEach((product) => {
      const el = sectionRefs.current[product.id];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = sectionRefs.current[id];

    if (!el) return;

    const headerHeight = 100;

    const y =
      el.getBoundingClientRect().top +
      window.pageYOffset -
      headerHeight;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    setActiveId(id);
  };

  return (
    <>
      <SEO
        title="Our Products | Pure Gingelly Oil, Pooja Oil, Tea & Natural Products"
        description="Browse Hima Gingelly Oil's complete product range including cold-pressed sesame oil, Agni Mark pooja oil, Oban Premium Tea, Multani Mitti soap, and natural skincare products made in Kerala."
        path="/products"
        keywords="Hima Gingelly Oil products, cold pressed sesame oil Kerala, gingelly oil, sesame oil, Agni Mark pooja oil, Oban Premium Tea, Multani Mitti soap, Multani Mitti powder, natural skincare products, edible oil manufacturer Kerala"
      />

      {/* ============ HERO ============ */}
      <section className="products-hero">
        <div className="products-hero-texture" aria-hidden="true" />
        <div className="products-hero-drop products-hero-drop--one" aria-hidden="true" />
        <div className="products-hero-drop products-hero-drop--two" aria-hidden="true" />
        <div className="container products-hero-inner">
          <Reveal direction="left" className="products-hero-copy">
            <span className="eyebrow">Our Product Range</span>
            <h1>Our Products</h1>
            <p className="products-hero-subtitle">Carefully crafted. Naturally better.</p>
            <p>
              From pure gingelly oil to skincare essentials and refreshing tea, every
              Hima product is made with the care, quality and purity you can trust —
              pressed, packed and dispatched from our own Perumbavoor facility, with
              nothing added along the way.
            </p>

            <div className="products-hero-stats">
              {HERO_STATS.map((s) => (
                <div key={s.sub} className="products-hero-stat">
                  <s.icon size={20} strokeWidth={1.6} />
                  <span><strong>{s.label}</strong>{s.sub}</span>
                </div>
              ))}
            </div>

            <div className="products-hero-actions">
              <button className="btn btn-primary" onClick={() => scrollTo("gingelly-oil")}>
                Browse Products <ArrowRight size={16} />
              </button>
              <a href="https://wa.me/919846200055" target="_blank" rel="noreferrer" className="btn btn-ghost">
                <MessageCircle size={15} /> WhatsApp Us
              </a>
            </div>

            <div className="products-hero-chips">
              {HERO_QUICK_LINKS.map((c) => (
                <button key={c.label} className="products-hero-chip" onClick={() => scrollTo(c.id)}>
                  <c.icon size={14} /> {c.label}
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal direction="right" className="products-hero-visual">
            <div className="products-hero-frame">
              {/* DEMO IMAGE */}
              <img src={IMG.oilHero} alt="Hima Oil product range" loading="eager" />
            </div>
            <div className="products-hero-badge glass-panel">
              <strong>5</strong>
              <span>Product Lines,<br />One Standard</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ SHOP LAYOUT ============ */}
      <section className="section shop-section">
        <div className="container">
          <Reveal className="section-head">
            <h2>Our Product Range</h2>
          </Reveal>

          <div className="shop-grid">
            {/* ---------- STICKY SIDEBAR ---------- */}
            <aside className="shop-sidebar">
              <div className="sidebar-card">
                <div className="sidebar-card-head">Product Categories</div>
                <ul className="sidebar-list">
                  {NAV.map((n, i) => (
                    <li key={i}>
                      <button
                        className={activeId === n.id ? "is-active" : ""}
                        onClick={() => scrollTo(n.id)}
                      >
                        <n.icon size={16} /> {n.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-card sidebar-why">
                <div className="sidebar-card-head">Why Choose Hima?</div>
                <div className="sidebar-why-list">
                  {WHY_SIDEBAR.map((w) => (
                    <div key={w.t} className="sidebar-why-item">
                      <w.icon size={18} />
                      <div>
                        <strong>{w.t}</strong>
                        <p>{w.b}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            {/* ---------- PRODUCT CARDS ---------- */}
            <div className="shop-products">
              {PRODUCTS.map((p) => (
                <div
                  key={p.id}
                  id={p.id}
                  ref={(el) => (sectionRefs.current[p.id] = el)}
                >
                  <Reveal direction="up" className="shop-card">

                    {/* Product Image */}
                    <ParallaxImage src={p.img} alt={p.name} />

                    {/* Content */}
                    <div className="shop-card-body">

                      <span className="eyebrow">
                        {p.index.padStart(2, "0")} · {p.eyebrow}
                      </span>

                      <h2>
                        {p.index}. {p.name}
                      </h2>

                      <p className="shop-card-desc">
                        {p.desc}
                      </p>

                      {/* Features */}

                      <ul className="shop-checklist">
                        {p.features.map((f) => (
                          <li key={f}>
                            <Check size={15} />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Additional Information */}

                      {p.sub.length > 0 && (
                        <div className="shop-sub-grid">
                          {p.sub.map((s) => (
                            <div className="shop-sub-card" key={s.h}>
                              <h4>{s.h}</h4>
                              <p>{s.b}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Sizes / Variants / Steps */}

                      <div className="shop-info-box">

                        <h4>{p.info.title}</h4>

                        {p.info.type === "sizes" && (
                          <ul className="info-size-list">
                            {p.info.items.map((size) => (
                              <li key={size}>
                                <Box size={16} />
                                <span>{size}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {p.info.type === "variants" && (
                          <ul className="info-variant-list">
                            {p.info.items.map((variant) => (
                              <li key={variant.name}>
                                <span
                                  className="variant-swatch"
                                  style={{ background: variant.tone }}
                                />
                                <span>{variant.name}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {p.info.type === "steps" && (
                          <ul className="info-steps-list">
                            {p.info.items.map((step, i) => (
                              <li key={i}>
                                <step.icon size={16} />
                                <span>{step.t}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                      </div>

                      {/* CTA */}

                      <div className="shop-actions">
                        <a
                          href="/contact"
                          className="btn btn-primary shop-cta"
                        >
                          <Phone size={16} />
                          Enquire About This Product
                        </a>
                      </div>

                    </div>

                  </Reveal>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ QUALITY BANNER ============ */}
      <section className="quality-banner">
        <div className="container quality-banner-inner">
          <Reveal direction="left" className="quality-copy">
            <h2>Quality is our promise.<br />Trust is our strength.</h2>
            <p>Get in touch for retail partnerships, bulk orders or household enquiries.</p>
            <div className="quality-actions">
              <a href="tel:9846200055" className="btn btn-primary"><Phone size={15} /> Call Now</a>
              <Link to="/contact" className="btn btn-ghost">Contact Us <ArrowRight size={15} /></Link>
            </div>
          </Reveal>
          <Reveal direction="right" stagger={0.08} className="quality-stats">
            {TRUST_STATS.map((s) => (
              <RevealItem key={s.l} className="quality-stat">
                <s.icon size={18} />
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