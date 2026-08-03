import { Link } from "react-router-dom";
import {
  Leaf, ShieldCheck, Cog, Users, ArrowRight, Quote, Target, Eye, Heart,
  TrendingUp, Hand, FlaskConical, Medal, Award, Phone, MessageCircle,
} from "lucide-react";
import SEO from "../../components/SEO/SEO.jsx";
import Reveal, { RevealItem } from "../../components/Reveal/Reveal.jsx";
import "./About.css";

/* DEMO IMAGES — swap for the client's real photography whenever it's ready. */
const IMG = {
  founder: "/assets/images/products/hima_owner.jpeg",
  teaMunnar: "/assets/images/products/hima_tea_pack.jpg",
  oilPour: "/assets/images/products/hero.png",
  sesameBowl: "/assets/images/products/hima_agni_mark.jpeg",
  storefront: "/assets/images/products/hima_storefront.jpeg",
  certUdyam: "/assets/images/certs/msme.png",
  certIncorp: "/assets/images/certs/incorporation.png",
  certTrademark: "/assets/images/certs/trademark.png",
  certFssai: "/assets/images/certs/fssai.png",
  certISO: "/assets/images/certs/iso.png",
};

const JOURNEY = [
  { y: "2007", icon: Hand, t: "The Beginning", b: "Hima Oil was established with a vision to deliver pure and natural products." },
  { y: "2007 – 2010", icon: FlaskConical, t: "Building the Foundation", b: "Built a strong foundation with premium quality gingelly oil." },
  { y: "2011 – 2015", icon: Users, t: "Widening the Range", b: "Expanded product range and earned the trust of thousands of customers." },
  { y: "2016 – 2020", icon: Medal, t: "Formalising Quality", b: "Strengthened quality standards and became a respected name across Kerala." },
  { y: "2021 – Present", icon: TrendingUp, t: "Continuing the Legacy", b: "Continuing our legacy with innovation, better service and customer satisfaction." },
];

const COMMITMENT = [
  { icon: Leaf, t: "100% Natural", b: "Our products are made from carefully selected natural ingredients." },
  { icon: ShieldCheck, t: "Premium Quality", b: "Ensuring purity, safety and consistent quality in every drop." },
  { icon: Cog, t: "Hygienically Processed", b: "Processed and packed with modern technology in hygienic conditions." },
  { icon: Users, t: "Trusted by Thousands", b: "Loved and trusted by households, temples and institutions across Kerala." },
];

const VALUES = [
  { icon: Leaf, t: "Purity First", b: "Nothing goes into a Hima bottle that wasn't there in 2007 — no shortcuts, no additives." },
  { icon: ShieldCheck, t: "Quality Without Exception", b: "Every batch is tested for aroma, colour and consistency before it's approved for sale." },
  { icon: Cog, t: "Respect for Process", b: "We modernised our machinery, never our method — slow-pressing is non-negotiable." },
  { icon: Users, t: "Community Over Scale", b: "We'd rather serve Kerala well than expand carelessly beyond what we can vouch for." },
];

const CERTS = [
  { img: IMG.certUdyam, name: "Udyam Registration", desc: "Ministry of MSME, Government of India" },
  { img: IMG.certIncorp, name: "Incorporation Certificate", desc: "Registered under Indian Companies Act" },
  { img: IMG.certTrademark, name: "Trademark Registered", desc: "Hima Oil & Products, Registered Trademark" },
  { img: IMG.certFssai, name: "Food Safety License", desc: "FSSAI Certified for safe and quality products" },
  { img: IMG.certISO, name: "Certified Company", desc: "ISO 9001:2015 and 14001:2015 Certified Company" },
];

const TRUST_STATS = [
  { icon: Award, n: "18+", l: "Years of Experience" },
  { icon: Users, n: "5 Lakh+", l: "Happy Customers" },
  { icon: TrendingUp, n: "50+", l: "Retail Partners" },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Hima Gingelly Oil | 18+ Years of Purity & Tradition"
        description="Discover the story of Hima Gingelly Oil, a trusted Kerala brand with over 18 years of excellence in cold-pressed sesame oil, pooja oil, premium tea, and natural products from Perumbavoor."
        path="/about"
        keywords="About Hima Gingelly Oil, Hima Oil Kerala, sesame oil manufacturer Kerala, cold pressed oil company, Perumbavoor oil manufacturer, Kerala edible oil brand, gingelly oil company, Hima Oil history"
      />
      {/* ============ HERO ============ */}
      <section className="about-hero">
        <div className="about-hero-texture" aria-hidden="true" />
        <div className="about-hero-drop about-hero-drop--one" aria-hidden="true" />
        <div className="about-hero-drop about-hero-drop--two" aria-hidden="true" />
        <div className="container about-hero-inner">
          <Reveal direction="left" className="about-hero-copy">
            <span className="eyebrow">Our Story</span>
            <h1>About Hima Oil</h1>
            <p className="about-hero-subtitle">A Legacy of Quality. A Promise of Trust.</p>
            <p>
              For the past 18 years, Hima Oil has been committed to delivering quality
              and trust through its wide range of products. Our mission is to provide
              customers with premium-quality products that meet the highest standards
              of excellence and reliability.
            </p>
            <p>
              The name "Hima", meaning "Ice Gold", was originally a brand of Hindustan
              Lever Limited (HLL). Following the sale of the Hima brand by HLL, we have
              proudly continued its legacy by offering high-quality products while
              maintaining the trust associated with this name.
            </p>
            <p>
              At Hima, quality and customer satisfaction have always been our highest
              priorities. We are dedicated to providing natural, reliable, and superior
              products that customers can trust with confidence.
            </p>
          </Reveal>
          <Reveal direction="right" className="about-hero-visual">
            <div className="about-hero-frame">
              {/* DEMO IMAGE — replace with the real product line-up photo/render */}
              <img src={IMG.oilPour} alt="Hima Oil product range" loading="eager" />
            </div>
            <div className="about-hero-badge glass-panel">
              <strong>2007</strong>
              <span>Where it began</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ MISSION / VISION / PROMISE ============ */}
      <section className="section mvv">
        <div className="container mvv-grid">
          <Reveal direction="up" className="mvv-card">
            <div className="mvv-card-icon"><Target size={24} /></div>
            <h3>Our Mission</h3>
            <p>To provide customers with premium-quality, natural products that meet the highest standards of excellence, purity and reliability.</p>
          </Reveal>
          <Reveal direction="up" delay={0.1} className="mvv-card">
            <div className="mvv-card-icon"><Eye size={24} /></div>
            <h3>Our Vision</h3>
            <p>To remain the most trusted name in gingelly oil and traditional Kerala household products, for this generation and the next.</p>
          </Reveal>
          <Reveal direction="up" delay={0.2} className="mvv-card">
            <div className="mvv-card-icon"><Heart size={24} /></div>
            <h3>Our Promise</h3>
            <p>Quality and customer satisfaction are, and will always be, our highest priorities — a promise we intend to keep for another 18 years.</p>
          </Reveal>
        </div>
      </section>

      {/* ============ OUR JOURNEY (horizontal timeline) ============ */}
      <section className="section journey-section">
        <div className="container">
          <div className="journey-panel">
            <Reveal className="section-head">
              <span className="eyebrow">Since 2007</span>
              <h2>Our Journey</h2>
            </Reveal>
            <Reveal stagger={0.1} className="journey-track">
              {JOURNEY.map((j) => (
                <RevealItem key={j.y} className="journey-step">
                  <div className="journey-icon"><j.icon size={22} /></div>
                  <strong>{j.y}</strong>
                  <span className="journey-title">{j.t}</span>
                  <p>{j.b}</p>
                </RevealItem>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ OUR COMMITMENT + FOUNDER ============ */}
      <section className="section commitment-section">
        <div className="container commitment-grid">
          <Reveal direction="left" className="commitment-panel">
            <span className="eyebrow light">Our Commitment</span>
            <div className="commitment-list">
              {COMMITMENT.map((c) => (
                <div key={c.t} className="commitment-item">
                  <c.icon size={24} />
                  <strong>{c.t}</strong>
                  <p>{c.b}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal direction="right" className="founder-panel">
            <div className="founder-image">
              {/* DEMO IMAGE */}
              <img src={IMG.founder} alt="Sunil, Proprietor of Hima Oil" loading="lazy" />
            </div>
            <div className="founder-copy">
              <Quote size={28} className="founder-quote-icon" />
              <span className="founder-label">From the Proprietor</span>
              <p className="founder-quote">
                Our aim is simple — to provide the best quality products and build a
                lifetime relationship with our customers through trust and sincerity.
                Every bottle that leaves our unit carries our family's name, so it
                carries our full attention too.
              </p>
              <div className="founder-sign">
                <strong>Sunil</strong>
                <span>Proprietor, Hima Oil</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ COMPANY PHILOSOPHY / VALUES ============ */}
      <section className="section values">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Company Philosophy</span>
            <h2>The four values behind every batch</h2>
          </Reveal>
          <Reveal stagger={0.1} className="values-grid">
            {VALUES.map((v) => (
              <RevealItem key={v.t} className="value-card">
                <div className="value-card-icon"><v.icon size={22} /></div>
                <h4>{v.t}</h4>
                <p>{v.b}</p>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============ MANUFACTURING STANDARDS ============ */}
      <section className="section manufacturing">
        <div className="container manufacturing-grid">
          <Reveal direction="left" className="manufacturing-copy">
            <span className="eyebrow">Manufacturing Standards</span>
            <h2>Why customers trust the Hima label</h2>
            <p>
              Our Perumbavoor facility pairs modern filtration and hygienic bottling
              with a slow-press method that hasn't changed since 2007. Every raw batch
              of sesame is screened, every pressed batch is tested, and every finished
              product is coded and dated before it leaves the unit.
            </p>
            <p>
              It's this discipline — unglamorous, repeated daily — that keeps temples,
              caterers and households across Kerala coming back to the same red-and-gold
              bottle.
            </p>
          </Reveal>
          <Reveal direction="right" className="manufacturing-image">
            {/* DEMO IMAGE */}
            <img src={IMG.sesameBowl} alt="Oil pouring during Hima's manufacturing process" loading="lazy" />
            <div className="manufacturing-badge glass-panel">
              <strong>Since 2007</strong>
              <span>Same slow-press method</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ CERTIFICATIONS ============ */}
      <section className="section certs-about">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Our Certifications</span>
            <h2>Verified, not just claimed</h2>
            <p>Every certificate on this wall is on file — government registration, trademark protection and food-safety compliance, all in one place.</p>
          </Reveal>
          <Reveal stagger={0.08} className="cert-grid">
            {CERTS.map((c) => (
              <RevealItem key={c.name} className="cert-card">
                <div className="cert-image">
                  <img src={c.img} alt={c.name} loading="lazy" />
                </div>
                <div className="cert-content">
                  <h3>{c.name}</h3>
                  <p>{c.desc}</p>
                </div>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============ A NAME THAT STANDS FOR TRUST ============ */}
      <section className="section trust-section">
        <div className="container trust-grid">
          <Reveal direction="left" className="trust-image">
            {/* DEMO IMAGE — replace with the real storefront/unit photo */}
            <img src={IMG.storefront} alt="Hima Oil unit in Perumbavoor" loading="lazy" />
          </Reveal>
          <Reveal direction="right" className="trust-copy">
            <span className="eyebrow light">A Name That Stands for Trust</span>
            <p>
              The love, support, and trust of our customers over the last 18 years have
              been the greatest strength behind our success. We remain committed to
              serving our customers with excellence, quality, and integrity for many
              more years to come.
            </p>
            <p className="trust-roots">
              Every product still ships from the same Mudakuzha unit we started in —
              we've grown the network, not moved the roots.
            </p>
            <div className="trust-stats">
              {TRUST_STATS.map((s) => (
                <div key={s.l} className="trust-stat">
                  <s.icon size={18} />
                  <strong>{s.n}</strong>
                  <span>{s.l}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ QUALITY BANNER / FUTURE VISION CTA ============ */}
      <section className="section future-vision">
        <div className="container future-vision-inner">
          <Reveal direction="left" className="future-vision-copy">
            <h2>Quality is our promise.<br />Trust is our strength.</h2>
            <p>
              We're not chasing scale for its own sake. Our future is more households
              trusting the Hima name, more retail partners standing behind it, and the
              same slow-pressed purity in every bottle we make — for another 18 years.
            </p>
            <div className="future-vision-actions">
              <Link to="/products" className="btn btn-primary">Explore Our Products <ArrowRight size={16} /></Link>
              <a href="tel:9846200055" className="btn btn-ghost"><Phone size={15} /> Call Us</a>
              <a href="https://wa.me/919846200055" target="_blank" rel="noreferrer" className="btn btn-ghost"><MessageCircle size={15} /> WhatsApp</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}