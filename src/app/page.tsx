"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "@/components/Logo";
import HoloCard from "@/components/HoloCard";

/* ============================================================
   SERVICE ICONS (inline SVGs for chrome icon containers)
   ============================================================ */
function IconExterior() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 17h14M7 11l2-6h6l2 6M5 17a2 2 0 01-2-2v-2a1 1 0 011-1h16a1 1 0 011 1v2a2 2 0 01-2 2M7 17v2m10-2v2" />
      <circle cx="7.5" cy="14.5" r="1" fill="#C0C0C0" />
      <circle cx="16.5" cy="14.5" r="1" fill="#C0C0C0" />
    </svg>
  );
}

function IconInterior() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M7 9h4m-4 3h3m-3 3h5" />
      <circle cx="17" cy="12" r="2.5" />
    </svg>
  );
}

function IconCeramic() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z" />
    </svg>
  );
}

function IconPaint() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 3H5a2 2 0 00-2 2v2a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z" />
      <path d="M12 9v8m0 0l-3-3m3 3l3-3" />
      <path d="M8 21h8" />
    </svg>
  );
}

function IconPPF() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function IconWheel() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v6m0 6v6M3 12h6m6 0h6" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

/* ============================================================
   SERVICES DATA
   ============================================================ */
const services = [
  {
    icon: <IconExterior />,
    title: "Exterior Detail",
    desc: "Hand wash, clay bar decontamination, machine polish, and premium carnauba wax. Every panel inspected under LED lighting.",
    align: "left",
  },
  {
    icon: <IconInterior />,
    title: "Interior Detail",
    desc: "Deep vacuum extraction, steam clean, leather conditioning, fabric shampoo, and UV protectant on every surface.",
    align: "right",
  },
  {
    icon: <IconCeramic />,
    title: "Ceramic Coating",
    desc: "Professional-grade SiO2 coating in 2-year, 5-year, and lifetime durability options. Hydrophobic protection that lasts.",
    align: "left",
  },
  {
    icon: <IconPaint />,
    title: "Paint Correction",
    desc: "Multi-stage machine polishing to eliminate swirl marks, scratches, and oxidation. Restore factory-fresh clarity.",
    align: "right",
  },
  {
    icon: <IconPPF />,
    title: "PPF / Paint Protection Film",
    desc: "Self-healing thermoplastic urethane film for rock chips, bug damage, and road debris. Full front or full body coverage.",
    align: "left",
  },
  {
    icon: <IconWheel />,
    title: "Wheel & Tire Detail",
    desc: "Iron decontamination, barrel cleaning, tire dressing, and wheel sealant. Brake dust doesn't stand a chance.",
    align: "right",
  },
];

/* ============================================================
   PACKAGES DATA
   ============================================================ */
const packages = [
  {
    tier: "Tier 01",
    name: "The Daily Driver",
    price: "$149",
    note: "Sedan / small SUV",
    features: [
      "Exterior hand wash & dry",
      "Interior vacuum & wipe-down",
      "Window cleaning inside & out",
      "Tire dressing",
      "Air freshener",
    ],
    featured: false,
  },
  {
    tier: "Tier 02",
    name: "The Enthusiast",
    price: "$349",
    note: "Full-size vehicles adjusted",
    features: [
      "Everything in Daily Driver",
      "Clay bar decontamination",
      "One-step machine polish",
      "Leather / fabric deep clean",
      "Engine bay detail",
      "6-month sealant",
    ],
    featured: true,
  },
  {
    tier: "Tier 03",
    name: "The Obsession",
    price: "$799+",
    note: "Quoted per vehicle",
    features: [
      "Everything in Enthusiast",
      "Multi-stage paint correction",
      "Ceramic coating (2-year)",
      "Wheel-off brake clean",
      "Trim restoration",
      "Paint depth readings",
      "Full documentation photos",
    ],
    featured: false,
  },
];

/* ============================================================
   MAIN PAGE COMPONENT
   ============================================================ */
export default function HomePage() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);

  /* --- Intersection Observer fallback --- */
  useEffect(() => {
    const supportsScrollTimeline =
      CSS.supports && CSS.supports("animation-timeline", "view()");

    if (!supportsScrollTimeline) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("io-visible");
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
      );

      document.querySelectorAll("[data-io]").forEach((el) => {
        const dir = el.getAttribute("data-io");
        if (dir === "left") el.classList.add("io-hidden-left");
        else if (dir === "right") el.classList.add("io-hidden-right");
        else if (dir === "scale") el.classList.add("io-hidden-scale");
        else el.classList.add("io-hidden");
        observer.observe(el);
      });

      return () => observer.disconnect();
    }
  }, []);

  /* --- Nav scroll listener --- */
  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* --- Hero scroll fade — toggles class for CSS transition --- */
  useEffect(() => {
    const heroSection = heroRef.current;
    if (!heroSection) return;

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.3) {
        heroSection.classList.add("scrolled-past");
      } else {
        heroSection.classList.remove("scrolled-past");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ====== NAV ====== */}
      <nav className={`nav ${navScrolled ? "scrolled" : ""}`}>
        <a href="#" aria-label="Midnight Auto Detail home">
          <Logo size={28} />
        </a>
        <button
          className="nav-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`nav-links ${mobileOpen ? "open" : ""}`}>
          <li>
            <a href="#services" onClick={() => setMobileOpen(false)}>
              Services
            </a>
          </li>
          <li>
            <a href="#packages" onClick={() => setMobileOpen(false)}>
              Packages
            </a>
          </li>
          <li>
            <a href="#testimonial" onClick={() => setMobileOpen(false)}>
              Reviews
            </a>
          </li>
          <li>
            <a
              href="#booking"
              className="nav-cta"
              onClick={() => setMobileOpen(false)}
            >
              Book Now
            </a>
          </li>
        </ul>
      </nav>

      {/* ====== HERO ====== */}
      <section className="hero-section" ref={heroRef}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&h=900&fit=crop"
          alt="Sleek dark car close-up showing premium paint finish"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/60 to-[#050505]/90" />

        <div className="hero-glow-orb" />
        <div className="hero-content relative z-10">
          <h1 className="hero-title chrome-text-lg">
            Your car.
            <br />
            Our obsession.
          </h1>
          <p className="hero-subtitle">
            Premium detailing, ceramic coating &amp; paint protection in
            Tucson, AZ.
          </p>
          <a href="#booking" className="cta-btn">
            Book a Detail
          </a>
        </div>
      </section>

      {/* ====== SERVICES ====== */}
      <section id="services" className="flow-bg" style={{ position: "relative", zIndex: 2 }}>
        <div className="section">
          <div className="text-center" data-io="up">
            <p className="section-label scroll-fade-up">What We Do</p>
            <h2 className="section-title chrome-text scroll-fade-up">
              Services
            </h2>
            <p
              className="section-subtitle mx-auto scroll-fade-up"
              style={{ textAlign: "center" }}
            >
              Every service performed by hand, under controlled lighting, with
              obsessive attention to detail.
            </p>
          </div>

          <div className="services-grid">
            {services.map((svc, i) => (
              <HoloCard
                key={i}
                className={`service-card ${
                  svc.align === "left"
                    ? "scroll-clip-left"
                    : "scroll-clip-right"
                }`}
              >
                <div
                  className="service-icon-wrap"
                  data-io={svc.align}
                >
                  {svc.icon}
                </div>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
              </HoloCard>
            ))}
          </div>
        </div>
      </section>

      {/* ====== PACKAGES ====== */}
      <section id="packages" className="flow-bg flow-bg-alt" style={{ position: "relative", zIndex: 2 }}>
        <div className="section">
          <div className="text-center" data-io="up">
            <p className="section-label scroll-fade-up">Pricing</p>
            <h2 className="section-title chrome-text scroll-fade-up">
              Packages
            </h2>
            <p
              className="section-subtitle mx-auto scroll-fade-up"
              style={{ textAlign: "center" }}
            >
              Transparent pricing. No hidden fees. Larger vehicles quoted
              individually.
            </p>
          </div>

          <div className="packages-flow">
            {packages.map((pkg, i) => (
              <HoloCard
                key={i}
                className={`package-item scroll-scale-in ${
                  pkg.featured
                    ? "animated-gradient-border package-featured"
                    : ""
                }`}
              >
                <p className="package-tier">{pkg.tier}</p>
                <h3 className="package-name">{pkg.name}</h3>
                <p className="package-price chrome-text scroll-scale-in" data-io="scale">
                  {pkg.price}
                </p>
                <p className="package-price-note">{pkg.note}</p>
                <ul className="package-features">
                  {pkg.features.map((f, j) => (
                    <li key={j}>{f}</li>
                  ))}
                </ul>
                <a href="#booking" className="cta-btn" style={{ width: "100%", textAlign: "center" }}>
                  Select
                </a>
              </HoloCard>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CHROME TEXT REVEAL ====== */}
      <section className="chrome-reveal-section" style={{ position: "relative", zIndex: 2 }}>
        <h2 className="chrome-reveal-text chrome-text-lg scroll-text-reveal" data-io="up">
          Tucson&rsquo;s most
          <br />
          obsessive detailers.
        </h2>
      </section>

      {/* ====== TESTIMONIAL ====== */}
      <section
        id="testimonial"
        className="testimonial-section flow-bg"
        style={{ position: "relative", zIndex: 2 }}
      >
        <div data-io="up">
          <HoloCard className="testimonial-card animated-gradient-border scroll-scale-in">
            <div className="testimonial-stars">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <p className="testimonial-quote">
              &ldquo;I brought my black Model 3 in with swirls everywhere. They
              did a two-stage correction and 5-year ceramic coat. It looks better
              than the day I picked it up from Tesla. Water literally flies off the
              paint now. These guys are artists.&rdquo;
            </p>
            <p className="testimonial-author">Marcus R.</p>
            <p className="testimonial-detail">
              2023 Tesla Model 3 &mdash; Paint Correction + Ceramic Coating
            </p>
          </HoloCard>
        </div>
      </section>

      {/* ====== BOOKING FORM ====== */}
      <section
        id="booking"
        className="flow-bg flow-bg-alt"
        style={{ position: "relative", zIndex: 2 }}
      >
        <div className="section">
          <div className="text-center" data-io="up">
            <p className="section-label scroll-fade-up">Get Started</p>
            <h2 className="section-title chrome-text scroll-fade-up">
              Book Your Detail
            </h2>
            <p
              className="section-subtitle mx-auto scroll-fade-up"
              style={{ textAlign: "center" }}
            >
              Fill out the form and we&rsquo;ll get back to you within a few
              hours with a custom quote.
            </p>
          </div>

          <form
            className="form-grid scroll-fade-up"
            data-io="up"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="form-group">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input
                className="form-input"
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                className="form-input"
                type="email"
                id="email"
                name="email"
                placeholder="john@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="phone">
                Phone
              </label>
              <input
                className="form-input"
                type="tel"
                id="phone"
                name="phone"
                placeholder="(520) 555-0000"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="vehicle">
                Vehicle (Year / Make / Model)
              </label>
              <input
                className="form-input"
                type="text"
                id="vehicle"
                name="vehicle"
                placeholder="2024 BMW M4"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="service">
                Service
              </label>
              <select className="form-select" id="service" name="service" required>
                <option value="">Select a service</option>
                <option value="exterior">Exterior Detail</option>
                <option value="interior">Interior Detail</option>
                <option value="ceramic">Ceramic Coating</option>
                <option value="paint-correction">Paint Correction</option>
                <option value="ppf">PPF / Paint Protection Film</option>
                <option value="wheel-tire">Wheel & Tire Detail</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="package">
                Package
              </label>
              <select className="form-select" id="package" name="package">
                <option value="">Select a package (optional)</option>
                <option value="daily-driver">The Daily Driver - $149</option>
                <option value="enthusiast">The Enthusiast - $349</option>
                <option value="obsession">The Obsession - $799+</option>
              </select>
            </div>

            <div className="form-group full-width">
              <label className="form-label" htmlFor="details">
                Additional Details
              </label>
              <textarea
                className="form-textarea"
                id="details"
                name="details"
                placeholder="Tell us about your vehicle's condition, specific concerns, or questions..."
              />
            </div>

            <div className="form-submit">
              <button type="submit" className="submit-btn magnetic-btn">
                Request Quote
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ====== FOOTER ====== */}
      <footer className="footer" style={{ position: "relative", zIndex: 2 }}>
        <div className="footer-inner">
          <div className="footer-brand">
            <Logo size={32} />
            <p>
              Premium car detailing, ceramic coating, and paint protection in
              Tucson, Arizona. Mobile service available across the greater Tucson
              metro area.
            </p>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <a href="tel:+15205550199">(520) 555-0199</a>
            <a href="mailto:info@midnightautodetail.com">
              info@midnightautodetail.com
            </a>
            <p>Tucson, AZ</p>
            <p style={{ marginTop: "8px", fontSize: "0.8rem", color: "var(--tertiary)" }}>
              Mobile service available
            </p>
          </div>

          <div className="footer-col">
            <h4>Hours</h4>
            <p>Monday &ndash; Saturday: 7am &ndash; 6pm</p>
            <p>Sunday: By appointment</p>
          </div>
        </div>

        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Midnight Auto Detail. All rights
          reserved.
        </div>
      </footer>
    </>
  );
}
