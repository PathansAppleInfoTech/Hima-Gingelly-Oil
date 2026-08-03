import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X, ChevronLeft, ChevronRight, Package, Factory, Archive,
  ShieldCheck, Users, Store, Award, TrendingUp, Globe2, BadgeCheck,
  Camera, Layers, Megaphone
} from "lucide-react";
import SEO from "../../components/SEO/SEO.jsx";
import Reveal, { RevealItem } from "../../components/Reveal/Reveal.jsx";
import "./Gallery.css";

const I = (id, w = 1000) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;


/* DEMO IMAGES — every item below is a stand-in; swap for the client's real
   product, factory, packaging, event and store photography whenever it's ready. */
const GROUPS = [
  {
    cat: "Our Products",
    icon: Package,
    items: [
      { src: "/assets/images/products/hima_oil.jpg", alt: "Hima Gingelly Oil Bottles" },
      { src: "/assets/images/products/hima_agni_mark.jpeg", alt: "Hima Gingelly Oil Tin" },
      { src: "/assets/images/products/hima_tea_pack.jpg", alt: "Oban Premium Tea" },
      { src: "/assets/images/products/hima_multani_mitti.jpg", alt: "Multani Mitti Powder" },
      { src: "/assets/images/products/hima_multani_soap.jpg", alt: "Multani Mitti Soap" },
    ],
  },
  {
    cat: "Certifications",
    icon: ShieldCheck,
    items: [
      { src: "/assets/images/certs/food_suppliments_trademark.jpg", alt: "Trademark Certificate" },
      { src: "/assets/images/certs/fssai_certificate.jpg", alt: "FSSAI Certificate" },
      { src: "/assets/images/certs/gst_certificate.jpg", alt: "GST Certificate" },
      { src: "/assets/images/certs/hima_oil_trademark.jpg", alt: "Trademark Certificate" },
      { src: "/assets/images/certs/iso_9001_2015_certificate.jpg", alt: "ISO 9001:2015 Certificate" },
      { src: "/assets/images/certs/iso_14001_2015_certificate.jpg", alt: "ISO 14001:2015 Certificate" },
      { src: "/assets/images/certs/multani_mitti_powder_trademark.jpeg", alt: "Trademark Certificate" },
      { src: "/assets/images/certs/multani_mitti_soap_trademark.jpeg", alt: "Trademark Certificate" },
      { src: "/assets/images/certs/udyam_registration_certificate.jpg", alt: "Udyam Certificate" },
      { src: "/assets/images/certs/udyog_aadhar_certificate.jpg", alt: "Udyog Aadhar Certificate" },
    ],
  },
  {
    cat: "Advertising",
    icon: Megaphone,
    items: [
      {
        type: "image",
        src: "/assets/images/advertising/multani_mitti_powder.jpeg",
        alt: "TV Advertisement",
      },
      {
        type: "image",
        src: "/assets/images/advertising/multani_mitti_soap.jpeg",
        alt: "TV Advertisement",
      },
      {
        type: "image",
        src: "/assets/images/advertising/multani_mitti_poster.jpeg",
        alt: "TV Advertisement",
      },
      {
        type: "image",
        src: "/assets/images/advertising/multani_mitti_combo.jpeg",
        alt: "TV Advertisement",
      },
      {
        type: "image",
        src: "/assets/images/advertising/multani_mitti_cover.jpeg",
        alt: "TV Advertisement",
      },
      {
        type: "video",
        src: "https://www.youtube.com/embed/dqo2eZBFFkg?si=_VhjvldTnZuJiE2A",
        poster: "/assets/images/products/hima_oil.jpg",
        alt: "TV Advertisement",
      },
      {
        type: "video",
        src: "https://www.youtube.com/embed/-y5G0xJYUWo?si=7WZmbxaUTndtz5MT",
        poster: "/assets/images/products/hima_oil.jpg",
        alt: "TV Advertisement",
      },
      {
        type: "video",
        src: "https://www.youtube.com/embed/Dhl3RR6G1O8?si=AKPPLGB6yoGOfeHm",
        poster: "/assets/images/products/hima_oil.jpg",
        alt: "TV Advertisement",
      },
      {
        type: "video",
        src: "https://www.youtube.com/embed/cVbEMVoLtuk?si=KjUy7Xb8bS1VmgEN",
        poster: "/assets/images/products/hima_oil.jpg",
        alt: "TV Advertisement",
      },
      {
        type: "video",
        src: "https://www.youtube.com/embed/olzKCZPwZiI?si=zFQ3kxzGSG4tn6qf",
        poster: "/assets/images/products/hima_oil.jpg",
        alt: "TV Advertisement",
      },
      
   
    ],
  },
  {
    cat: "Our Office & Store",
    icon: Store,
    items: [
      { src: "/assets/images/office/hima_reception.jpeg", alt: "Hima Oil Office Reception" },
      { src: "/assets/images/office/hima_store_front.jpeg", alt: "Hima Store" },
      { src: "/assets/images/office/hima_store_gate.jpeg", alt: "Store gate" },
      { src: "/assets/images/office/hima_store.jpeg", alt: "Hima Store" },
    ],
  },
  // {
  //   cat: "Manufacturing",
  //   icon: Factory,
  //   items: [
  //     { src: "/assets/images/manufacturing/hima_manufacturing_machine.jpeg", alt: "Manufacturing " },
  //     { src: "/assets/images/manufacturing/hima_manufacturing_seperation.jpeg", alt: "Manufacturing" },
  //     { src: "/assets/images/manufacturing/hima_manufacturing_storing.jpeg", alt: "Manufacturing" },
  //     { src: "/assets/images/manufacturing/hima_manufacturing_table.jpeg", alt: "Manufacturing" },
  //     { src: "/assets/images/manufacturing/hima_manufacturing.jpeg", alt: "Manufacturing" },
  //   ],
  // },


];

const FILTERS = ["All", ...GROUPS.map((g) => g.cat)];

const TOTAL_PHOTOS = GROUPS.reduce((sum, g) => sum + g.items.length, 0);

const HERO_STATS = [
  { icon: Award, label: "18+", sub: "Years Documented" },
  { icon: Layers, label: GROUPS.length.toString(), sub: "Categories" },
  { icon: Camera, label: `${TOTAL_PHOTOS}+`, sub: "Photos & Videos" },
];

const TRUST_STATS = [
  { icon: Award, n: "18+", l: "Years of Experience" },
  { icon: Users, n: "5 Lakh+", l: "Happy Customers" },
  { icon: TrendingUp, n: "50+", l: "Retail Partners" },
  { icon: Globe2, n: "Pan Kerala", l: "Presence" },
  // { icon: BadgeCheck, n: "100%", l: "Quality Assured" },
];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const visibleGroups = filter === "All" ? GROUPS : GROUPS.filter((g) => g.cat === filter);
  const flatItems = useMemo(() => visibleGroups.flatMap((g) => g.items), [visibleGroups]);

  const openAt = (item) => setLightbox(flatItems.findIndex((v) => v.src === item.src && v.alt === item.alt));
  const step = (dir) => setLightbox((i) => (i + dir + flatItems.length) % flatItems.length);

  const jumpToFilter = (f) => {
    setFilter(f);
    const el = document.getElementById("gallery-groups");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <SEO
        title="Gallery | Hima Gingelly Oil Products, Manufacturing & Certifications"
        description="Explore the Hima Gingelly Oil gallery showcasing our premium products, manufacturing process, quality standards, certifications, packaging, and company milestones from Perumbavoor, Kerala."
        path="/gallery"
        keywords="Hima Gingelly Oil gallery, sesame oil manufacturing Kerala, cold pressed oil production, Hima Oil products, Kerala oil manufacturer, gingelly oil factory, food manufacturing gallery, Hima Oil certifications, Perumbavoor oil company"
      />

      {/* ============ HERO ============ */}
      <section className="gallery-hero">
        <div className="gallery-hero-texture" aria-hidden="true" />
        <div className="gallery-hero-drop gallery-hero-drop--one" aria-hidden="true" />
        <div className="gallery-hero-drop gallery-hero-drop--two" aria-hidden="true" />
        <div className="container gallery-hero-inner">
          <Reveal direction="left" className="gallery-hero-copy">
            <span className="eyebrow">Behind the Bottle</span>
            <h1>Gallery</h1>
            <div className="gallery-hero-divider" aria-hidden="true"><span /><span /><span /></div>
            <p>
              A glimpse of our products, our process and the thousands of happy
              customers behind 18 years of Hima Oil — from the pressing floor in
              Perumbavoor to the temples and homes we reach across Kerala.
            </p>

            <div className="gallery-hero-stats">
              {HERO_STATS.map((s) => (
                <div key={s.sub} className="gallery-hero-stat">
                  <s.icon size={20} strokeWidth={1.6} />
                  <span><strong>{s.label}</strong>{s.sub}</span>
                </div>
              ))}
            </div>

            <div className="gallery-hero-chips">
              {GROUPS.map((g) => (
                <button key={g.cat} className="gallery-hero-chip" onClick={() => jumpToFilter(g.cat)}>
                  <g.icon size={14} /> {g.cat}
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal direction="right" className="gallery-hero-visual">
            <div className="gallery-hero-frame">
              {/* DEMO IMAGE */}
              <img src="/assets/images/products/hero.png" alt="Hima Oil product range" loading="eager" />
            </div>
            <div className="gallery-hero-badge glass-panel">
              <strong>{TOTAL_PHOTOS}+</strong>
              <span>Moments Captured</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ FILTER BAR ============ */}
      <section className="gallery-filter-bar">
        <div className="container gallery-filter-inner">
          {FILTERS.map((f) => (
            <button key={f} className={filter === f ? "is-active" : ""} onClick={() => setFilter(f)}>{f}</button>
          ))}
        </div>
      </section>

      {/* ============ CATEGORY ROWS ============ */}
      <section id="gallery-groups" className="section gallery-groups-section">
        <div className="container">
          {visibleGroups.map((group) => (
            <div key={group.cat} className="gallery-group">
              <Reveal className="gallery-group-head">
                <group.icon size={18} />
                <h2>{group.cat}</h2>
              </Reveal>
              <Reveal stagger={0.06} className="gallery-row">
                <AnimatePresence>
                  {group.items.map((item) => (
                    <RevealItem key={item.src + item.alt} className="gallery-item-wrap">
                      <motion.button
                        layout
                        className="gallery-item"
                        onClick={() => openAt(item)}
                      >
                        {item.type === "video" ? (
                          <>
                            <iframe
                              src={item.src}
                              title={item.alt}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </>
                        ) : (
                          <img
                            src={item.src}
                            alt={item.alt}
                            loading="lazy"
                          />
                        )}

                        <span className="gallery-overlay">
                          {item.alt}
                        </span>
                      </motion.button>
                    </RevealItem>
                  ))}
                </AnimatePresence>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* ============ QUALITY BANNER ============ */}
      <section className="quality-banner">
        <div className="container quality-banner-inner">
          <Reveal direction="left" className="quality-copy">
            <h2>Quality is our promise.<br />Trust is our strength.</h2>
          </Reveal>
          <Reveal direction="right" stagger={0.06} className="quality-stats">
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

      {/* ============ LIGHTBOX ============ */}
      <AnimatePresence>
        {lightbox !== null && flatItems[lightbox] && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <button className="lightbox-close" aria-label="Close" onClick={() => setLightbox(null)}><X size={26} /></button>
            <button className="lightbox-nav prev" aria-label="Previous" onClick={(e) => { e.stopPropagation(); step(-1); }}><ChevronLeft size={28} /></button>
            <motion.img
              key={flatItems[lightbox].src + flatItems[lightbox].alt}
              src={flatItems[lightbox].src.replace("w=1000", "w=1800")}
              alt={flatItems[lightbox].alt}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button className="lightbox-nav next" aria-label="Next" onClick={(e) => { e.stopPropagation(); step(1); }}><ChevronRight size={28} /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}