import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin, Phone, Mail, FileText, Clock, Headphones, ShieldCheck, Truck,
  Users, Send, MessageCircle, Plus, Minus, ChevronRight, Award,
  ExternalLink,
  Heart,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../../components/SEO/SEO.jsx";
import Reveal, { RevealItem } from "../../components/Reveal/Reveal.jsx";
import "./Contact.css";

const IMG = {
  // DEMO IMAGE — replace with the real product line-up photo/render
  hero: "/assets/images/products/hero.png",
  owner: "/assets/images/team/hima_owner.jpeg",
};

const HERO_STATS = [
  { icon: Award, label: "18+", sub: "Years of Trust" },
  { icon: Clock, label: "24 Hrs", sub: "Response Time" },
  { icon: Truck, label: "Pan Kerala", sub: "Delivery" },
];

const HERO_QUICK_ACTIONS = [
  { icon: Phone, label: "9846200055", href: "tel:9846200055" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/919846200055" },
  { icon: Mail, label: "Email Us", href: "mailto:himagingellyoil123@gmail.com" },
];

const QUICK_CARDS = [
  { icon: Headphones, title: "Quick Response", body: "We aim to reply to all enquiries within 24 hours." },
  { icon: ShieldCheck, title: "Trusted Company", body: "Quality products, transparent service, lasting trust." },
  { icon: Truck, title: "Pan Kerala Delivery", body: "Delivering our products across Kerala safely and on time." },
  { icon: Users, title: "Customer Support", body: "Our team is always ready to assist you with care." },
];

const CONTACT_ITEMS = [
  { icon: MapPin, label: "Address", value: "Hima Oil, IV/347 - B, Thrikkappady, Mudakuzha, Perumbavoor, Ernakulam Dist., Kerala - 683546" },
  { icon: Phone, label: "Phone", value: "9895015298 , 9846200055" },
  { icon: Phone, label: "For Business Purposes", value: "9026662666" },
  { icon: Mail, label: "Email", value: "himagingellyoil123@gmail.com" },
  { icon: FileText, label: "GSTIN", value: "32AIFPR4374P1ZP" },
  { icon: Clock, label: "Business Hours", value: "Monday - Saturday, 8.00 AM - 5.00 PM. Sunday - Closed." },
];

const FAQS = [
  { q: "How quickly will I get a response?", a: "We aim to respond to all enquiries — phone, email or the form below — within 24 hours on business days." },
  { q: "Can I place a bulk or institutional order?", a: "Yes. Call us directly for caterer, temple or retail bulk pricing on any product in our range." },
  { q: "Do you deliver outside Ernakulam district?", a: "We deliver Pan-Kerala through our retail network, and can arrange direct delivery for larger orders." },
  { q: "Can I visit the facility?", a: "Yes, by prior appointment — call ahead and our team will arrange a convenient time." },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", subject: "", message: "" });
  const [notRobot, setNotRobot] = useState(false);
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();

    const phone = "919846200055"; // WhatsApp number (country code without +)

    const message = `
--------------------------------
HIMA GINGELLY OIL
NEW ENQUIRY
--------------------------------

Name
${form.name}

Phone
${form.phone}

Email
${form.email}

Subject
${form.subject || "N/A"}

Message
${form.message}

--------------------------------
Submitted from:
https://himagingellyoil.com
--------------------------------
`;

    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");

    setSent(true);

    setForm({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <SEO
        title="Contact Hima Gingelly Oil | Get in Touch for Orders & Enquiries"
        description="Contact Hima Gingelly Oil in Perumbavoor, Kerala for product enquiries, bulk orders, dealership opportunities, retail partnerships, and customer support. We're here to help."
        path="/contact"
        keywords="Contact Hima Gingelly Oil, Hima Oil Kerala, gingelly oil supplier Kerala, sesame oil manufacturer Perumbavoor, bulk sesame oil orders, pooja oil supplier, Kerala edible oil manufacturer, Hima Oil contact, dealership enquiry, retail partnership"
      />

      {/* ============ BREADCRUMB + HERO ============ */}
      <section className="contact-hero">
        <div className="contact-hero-texture" aria-hidden="true" />
        <div className="contact-hero-drop contact-hero-drop--one" aria-hidden="true" />
        <div className="contact-hero-drop contact-hero-drop--two" aria-hidden="true" />
        <div className="container">
          {/* <Reveal className="breadcrumb">
            <Link to="/">Home</Link> <ChevronRight size={13} /> <span>Contact Us</span>
          </Reveal> */}

          <div className="contact-hero-inner">
            <Reveal direction="left" className="contact-hero-copy">
              <span className="eyebrow">Let's Talk</span>
              <h1>Get In Touch</h1>
              <p className="contact-hero-subtitle">We are here to help you</p>
              <div className="contact-hero-divider" aria-hidden="true"><span /><span /></div>
              <p>Have a question, feedback, or enquiry? We'd love to hear from you. Reach out to us and our team will get back to you as soon as possible.</p>
              <span className="contact-hero-quote">"Quality is our promise. Trust is our strength."</span>

              <div className="contact-hero-stats">
                {HERO_STATS.map((s) => (
                  <div key={s.sub} className="contact-hero-stat">
                    <s.icon size={20} strokeWidth={1.6} />
                    <span><strong>{s.label}</strong>{s.sub}</span>
                  </div>
                ))}
              </div>

              <div className="contact-hero-actions">
                {HERO_QUICK_ACTIONS.map((a) => (
                  <a
                    key={a.label}
                    href={a.href}
                    target={a.href.startsWith("http") ? "_blank" : undefined}
                    rel={a.href.startsWith("http") ? "noreferrer" : undefined}
                    className="contact-hero-action"
                  >
                    <a.icon size={15} /> {a.label}
                  </a>
                ))}
              </div>
            </Reveal>
            <Reveal direction="right" className="contact-hero-visual">
              <div className="contact-hero-frame">
                <img src={IMG.hero} alt="Hima Oil product range" loading="eager" />
              </div>
              <div className="contact-hero-badge glass-panel">
                <strong>&lt;24 Hrs</strong>
                <span>Average Response Time</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ QUICK CARDS ============ */}
      <section className="section quick-cards-section">
        <div className="container">
          <Reveal stagger={0.08} className="quick-cards-grid">
            {QUICK_CARDS.map((c) => (
              <RevealItem key={c.title} className="quick-card">
                <div className="quick-card-icon"><c.icon size={22} /></div>
                <h4>{c.title}</h4>
                <p>{c.body}</p>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============ CONTACT INFO + FORM + MAP ============ */}
      <section className="section contact-main">
        <div className="container contact-main-grid">
          <Reveal direction="left" className="contact-info">
            <h3>Contact Information</h3>
            <span className="underline-accent" />
            <ul>
              {CONTACT_ITEMS.map((c) => (
                <li key={c.label}>
                  <span className="contact-info-icon"><c.icon size={17} color='#ffffff' /></span>
                  <div>
                    <strong>{c.label}</strong>
                    <span>{c.value}</span>
                  </div>
                </li>
              ))}
            </ul>
            <a href="https://wa.me/919846200055" target="_blank" rel="noreferrer" className="btn whatsapp-cta">
              <MessageCircle size={16} /> Chat on WhatsApp
            </a>
          </Reveal>

          <Reveal direction="right" className="contact-card">
            <div className="contact-form-panel">
              <h3>Send Us a Message</h3>
              <span className="underline-accent" />
              {sent ? (
                <div className="form-success">
                  <ShieldCheck size={26} />
                  <p>Thank you — your message has been noted. Our team will reach out shortly.</p>
                </div>
              ) : (
                <form onSubmit={submit}>
                  <div className="form-row">
                    <div className="form-field">
                      <input id="name" placeholder="Your Name *" required value={form.name} onChange={update("name")} />
                    </div>
                    <div className="form-field">
                      <input id="phone" placeholder="Phone Number *" required value={form.phone} onChange={update("phone")} />
                    </div>
                  </div>
                  <div className="form-field">
                    <input id="email" type="email" placeholder="Email Address *" required value={form.email} onChange={update("email")} />
                  </div>
                  <div className="form-field">
                    <input id="subject" placeholder="Subject" value={form.subject} required onChange={update("subject")} />
                  </div>
                  <div className="form-field">
                    <textarea id="message" rows={4} placeholder="Your Message *" required value={form.message} onChange={update("message")} />
                  </div>

                  {/* Decorative — wire up a real reCAPTCHA (or similar) here before going live */}
                  {/* <label className="captcha-row">
                    <input type="checkbox" checked={notRobot} onChange={(e) => setNotRobot(e.target.checked)} />
                    <span>I'm not a robot</span>
                  </label> */}

                  <div className="form-submit-row">
                    <button type="submit" className="btn btn-forest"><Send size={15} /> Send Message</button>
                    <p className="form-privacy-note"><ShieldCheck size={14} /> Your information is safe with us. We respect your privacy.</p>
                  </div>
                </form>
              )}
            </div>

            <div className="contact-map-panel">
              <h3>Find Us</h3>
              <span className="underline-accent" />
              <div className="map-frame">
                <iframe
                  title="Hima Oil location map"
                  src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3232.0664966103645!2d76.50784640052217!3d10.136092056890503!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDA4JzA5LjYiTiA3NsKwMzAnMzMuMiJF!5e0!3m2!1sen!2sin!4v1784873748872!5m2!1sen!2sin" width="600" height="450"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="map-landmark">
                <h4>Landmark</h4>
                <p>Near St. Joseph Church, Thrikkappady, Mudakuzha Perumbavoor, Ernakulam Dist., Kerala - 683546</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>


      <section className="section trademark-section">
        <div className="container trademark-inner">
          <Reveal direction="left" className="trademark-icon-wrap">
            <div className="trademark-icon"><Award size={30} strokeWidth={1.5} /></div>
          </Reveal>
          <Reveal direction="right" className="trademark-copy">
            <span className="eyebrow">Trademark &amp; Legacy</span>
            <h2>A Name Rooted in Heritage</h2>
            <span className="underline-accent" />
            <p>
              Every product under the Hima brand is proprietary and trademarked —
              produced, bottled, and sold exclusively by Hima. The
              name "Hima" traces its origins back to Hindustan Lever Limited
              (HLL), carrying forward a legacy of quality that spans generations.
            </p>

            <a href="https://www.google.com/search?q=Hima+Gingelly+Oil+Hindustan+Lever+Limited"
              target="_blank"
              rel="noreferrer"
              className="trademark-google-link"
            >
              Learn more on Google <ExternalLink size={14} />
            </a>
          </Reveal>
        </div>
      </section>

      {/* ============ PROPRIETOR / THANK YOU ============ */}
      <section className="section owner-section">
        <div className="container owner-inner">
          <Reveal direction="left" className="owner-photo-wrap">
            <div className="owner-photo-frame">
              <img src={IMG.owner} alt="Proprietor, Hima Gingelly Oil" loading="lazy" />
            </div>
          </Reveal>
          <Reveal direction="right" className="owner-copy">
            <span className="eyebrow">From Our Proprietor</span>
            <h2>Thank You for Your Trust</h2>
            <span className="underline-accent" />
            <p>
              For over 18 years, families and businesses across Kerala have
              chosen Hima for their kitchens, poojas, and celebrations. That
              trust is something we never take lightly. On behalf of everyone
              at Hima , thank you for being part of our journey.
            </p>
            <div className="owner-signoff">
              <Heart size={16} /> <span>With gratitude , MD Sunil Ramakrishnan</span>
            </div>
          </Reveal>
        </div>
      </section>

      
      {/* ============ WHY CONTACT ============ */}
      {/* <section className="section why-contact">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Why Contact Hima</span>
            <h2>Real people, real answers</h2>
          </Reveal>
          <Reveal stagger={0.1} className="why-contact-grid">
            <RevealItem className="why-contact-item"><strong>No call centres.</strong><p>Every enquiry reaches someone who actually knows the product.</p></RevealItem>
            <RevealItem className="why-contact-item"><strong>Same-day acknowledgement.</strong><p>We confirm receipt of every enquiry within one business day.</p></RevealItem>
            <RevealItem className="why-contact-item"><strong>Honest availability.</strong><p>If a size or product is out of stock, we'll tell you — not stall you.</p></RevealItem>
          </Reveal>
        </div>
      </section> */}

      {/* ============ FAQ ============ */}
      {/* <section className="section contact-faq">
        <div className="container contact-faq-inner">
          <Reveal className="section-head">
            <span className="eyebrow">Support</span>
            <h2>Frequently asked</h2>
          </Reveal>
          <Reveal stagger={0.06} className="faq-list">
            {FAQS.map((f, i) => (
              <RevealItem key={f.q} className={`faq-item ${openFaq === i ? "is-open" : ""}`}>
                <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}>
                  {f.q}
                  {openFaq === i ? <Minus size={17} /> : <Plus size={17} />}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div className="faq-answer" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                      <p>{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section> */}

      {/* ============ NEED HELP / EMAIL US BANNER ============ */}
      <section className="help-banner">
        <div className="help-banner-texture" aria-hidden="true" />
        <div className="container help-banner-inner">
          <div className="help-banner-item">
            <div className="help-banner-icon"><Headphones size={22} /></div>
            <div>
              <h4>Need Help?</h4>
              <p>Call us directly for quick assistance</p>
              <a href="tel:9846200055">9846200055 | 9895015298</a>
            </div>
          </div>
          <div className="help-banner-divider" />
          <div className="help-banner-item">
            <div className="help-banner-icon"><Mail size={22} /></div>
            <div>
              <h4>Email Us</h4>
              <p>Drop us an email anytime</p>
              <a href="mailto:himagingellyoil123@gmail.com">himagingellyoil123@gmail.com</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}