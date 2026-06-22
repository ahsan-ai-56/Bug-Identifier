import Link from "next/link";
import { useState } from "react";

const TOOLS = [
  { href: "/insect-bite-identifier", label: "Bite ID", emoji: "🩺" },
  { href: "/spider-identifier", label: "Spider", emoji: "🕷️" },
  { href: "/beetle-identifier", label: "Beetle", emoji: "🪲" },
  { href: "/fly-identifier", label: "Fly", emoji: "🪰" },
  { href: "/ant-identifier", label: "Ant", emoji: "🐜" },
  { href: "/bee-identifier", label: "Bee", emoji: "🐝" },
  { href: "/wasp-identifier", label: "Wasp", emoji: "🟡" },
  { href: "/caterpillar-identifier", label: "Caterpillar", emoji: "🐛" },
  { href: "/butterfly-identifier", label: "Butterfly", emoji: "🦋" },
  { href: "/moth-identifier", label: "Moth", emoji: "🌙" },
  { href: "/mosquito-identifier", label: "Mosquito", emoji: "🦟" },
  { href: "/tick-identifier", label: "Tick", emoji: "🕷️" },
];

export function Nav({ active }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="nav">
        <Link href="/" className="nav-logo">🐛 Bug<span className="accent">Identifier</span></Link>
        <ul className="nav-links">
          <li><Link href="/" className={active === "/" ? "active" : ""}>Home</Link></li>
          <li><Link href="/insect-bite-identifier" className={active === "bite" ? "active" : ""}>Bite ID</Link></li>
          <li><Link href="/spider-identifier" className={active === "spider" ? "active" : ""}>Spider</Link></li>
          <li><Link href="/butterfly-identifier" className={active === "butterfly" ? "active" : ""}>Butterfly</Link></li>
          <li><Link href="/mosquito-identifier" className={active === "mosquito" ? "active" : ""}>Mosquito</Link></li>
          <li><Link href="/about" className={active === "about" ? "active" : ""}>About</Link></li>
          <li><Link href="/" className="nav-cta">🔍 Identify Now</Link></li>
        </ul>
        <div className="hamburger" onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </div>
      </nav>
      <div className={`mobile-menu${open ? " open" : ""}`}>
        <Link href="/" onClick={() => setOpen(false)}>🏠 Home</Link>
        {TOOLS.map(t => <Link key={t.href} href={t.href} onClick={() => setOpen(false)}>{t.emoji} {t.label} Identifier</Link>)}
        <Link href="/about" onClick={() => setOpen(false)}>ℹ️ About Us</Link>
        <Link href="/contact" onClick={() => setOpen(false)}>📧 Contact</Link>
        <Link href="/privacy-policy" onClick={() => setOpen(false)}>🔒 Privacy Policy</Link>
        <Link href="/disclaimer" onClick={() => setOpen(false)}>⚠️ Disclaimer</Link>
      </div>
    </>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link href="/" style={{ color: "#fff", fontFamily: "Syne,sans-serif", fontWeight: 800, fontSize: "1.2rem" }}>🐛 Bug<span style={{ color: "#22c55e" }}>Identifier</span></Link>
          <p>Free AI-powered insect identification. Identify any bug, spider, beetle, butterfly, or insect bite instantly from a photo.</p>
        </div>
        <div className="footer-col">
          <h4>Identifier Tools</h4>
          <Link href="/insect-bite-identifier">Bite Identifier</Link>
          <Link href="/spider-identifier">Spider Identifier</Link>
          <Link href="/beetle-identifier">Beetle Identifier</Link>
          <Link href="/fly-identifier">Fly Identifier</Link>
          <Link href="/ant-identifier">Ant Identifier</Link>
          <Link href="/bee-identifier">Bee Identifier</Link>
        </div>
        <div className="footer-col">
          <h4>More Tools</h4>
          <Link href="/wasp-identifier">Wasp Identifier</Link>
          <Link href="/caterpillar-identifier">Caterpillar Identifier</Link>
          <Link href="/butterfly-identifier">Butterfly Identifier</Link>
          <Link href="/moth-identifier">Moth Identifier</Link>
          <Link href="/mosquito-identifier">Mosquito Identifier</Link>
          <Link href="/tick-identifier">Tick Identifier</Link>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/disclaimer">Disclaimer</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 BugIdentifier.ai — All rights reserved</span>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <Link href="/privacy-policy">Privacy</Link>
          <Link href="/disclaimer">Disclaimer</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

export function Breadcrumb({ items }) {
  return (
    <div className="breadcrumb">
      {items.map((item, i) => (
        <span key={i} style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
          {i > 0 && <span>›</span>}
          {item.href ? <Link href={item.href}>{item.label}</Link> : <span style={{ color: "#1e293b" }}>{item.label}</span>}
        </span>
      ))}
    </div>
  );
}

export function RelatedTools({ current }) {
  const tools = [
    { href: "/", label: "Bug Identifier", emoji: "🐛" },
    { href: "/insect-bite-identifier", label: "Bite Identifier", emoji: "🩺" },
    { href: "/spider-identifier", label: "Spider Identifier", emoji: "🕷️" },
    { href: "/beetle-identifier", label: "Beetle Identifier", emoji: "🪲" },
    { href: "/fly-identifier", label: "Fly Identifier", emoji: "🪰" },
    { href: "/ant-identifier", label: "Ant Identifier", emoji: "🐜" },
    { href: "/bee-identifier", label: "Bee Identifier", emoji: "🐝" },
    { href: "/wasp-identifier", label: "Wasp Identifier", emoji: "🟡" },
    { href: "/caterpillar-identifier", label: "Caterpillar Identifier", emoji: "🐛" },
    { href: "/butterfly-identifier", label: "Butterfly Identifier", emoji: "🦋" },
    { href: "/moth-identifier", label: "Moth Identifier", emoji: "🌙" },
    { href: "/mosquito-identifier", label: "Mosquito Identifier", emoji: "🦟" },
    { href: "/tick-identifier", label: "Tick Identifier", emoji: "🕷️" },
  ].filter(t => t.href !== current);
  return (
    <section className="section section-cream">
      <div className="container">
        <div className="sec-head"><h2>More Identifier Tools</h2><p>Explore our full suite of free AI insect identification tools</p></div>
        <div className="related-grid">
          {tools.slice(0, 12).map(t => (
            <Link key={t.href} href={t.href} className="related-card">
              <div className="r-ico">{t.emoji}</div>
              <h4>{t.label}</h4>
              <p>Free AI Tool</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
