import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Nav, Footer, RelatedTools } from "../components/Layout";
import UploadTool from "../components/UploadTool";

const TOOLS = [
  { href: "/insect-bite-identifier", emoji: "🩺", title: "Bite Identifier", desc: "Identify insect bites & stings. Get symptoms, treatment & danger level.", color: "#7f1d1d" },
  { href: "/spider-identifier", emoji: "🕷️", title: "Spider Identifier", desc: "Identify any spider species. Know if it's venomous instantly.", color: "#1e293b" },
  { href: "/beetle-identifier", emoji: "🪲", title: "Beetle Identifier", desc: "Identify beetles from 400,000+ species worldwide.", color: "#14532d" },
  { href: "/fly-identifier", emoji: "🪰", title: "Fly Identifier", desc: "Identify flies, gnats, and midges. Check if disease-carrying.", color: "#374151" },
  { href: "/ant-identifier", emoji: "🐜", title: "Ant Identifier", desc: "Identify ant species. Find out if they bite, sting or damage property.", color: "#7c2d12" },
  { href: "/bee-identifier", emoji: "🐝", title: "Bee Identifier", desc: "Identify bees, bumblebees and honey bees. Know sting risk.", color: "#713f12" },
  { href: "/wasp-identifier", emoji: "🟡", title: "Wasp Identifier", desc: "Identify wasps and hornets. Assess aggression and sting risk.", color: "#854d0e" },
  { href: "/caterpillar-identifier", emoji: "🐛", title: "Caterpillar Identifier", desc: "Identify caterpillars. Know if they're toxic or rare species.", color: "#365314" },
  { href: "/butterfly-identifier", emoji: "🦋", title: "Butterfly Identifier", desc: "Identify butterfly species by wing patterns and colors.", color: "#581c87" },
  { href: "/moth-identifier", emoji: "🌙", title: "Moth Identifier", desc: "Identify moth species from nocturnal insects worldwide.", color: "#1e1b4b" },
  { href: "/mosquito-identifier", emoji: "🦟", title: "Mosquito Identifier", desc: "Identify mosquito species. Know which carry dengue, malaria, zika.", color: "#4c1d95" },
  { href: "/tick-identifier", emoji: "🕷️", title: "Tick Identifier", desc: "Identify ticks and assess Lyme disease & other disease risks.", color: "#450a0a" },
];

const FAQS = [
  { q: "How accurate is Bug Identifier AI?", a: "Our AI achieves 90–98% accuracy on clear, well-lit photos. The model analyzes dozens of visual features simultaneously including color, shape, wing patterns, body structure, and size ratios." },
  { q: "Is Bug Identifier completely free?", a: "Yes, all tools on BugIdentifier.ai are completely free. No signup, no subscription, no hidden fees. Simply upload a photo and get instant results." },
  { q: "What image formats are supported?", a: "We support JPG, JPEG, PNG, and WEBP formats up to 10MB. For best results, use close-up, well-lit photos where the insect is clearly visible and in focus." },
  { q: "Can it identify dangerous insects?", a: "Yes. Every identification includes a danger level rating from Harmless to Dangerous, along with specific safety information about venom, bites, stings, and disease transmission." },
  { q: "Does it work for insect bites on skin?", a: "Yes! Use our dedicated Bite Identifier tool to upload a photo of a bite or sting. It identifies the likely cause, provides first aid steps, and tells you when to seek medical attention." },
  { q: "Does it identify spiders too?", a: "Yes. While spiders are arachnids rather than insects, our Spider Identifier tool covers 48,000+ spider species including dangerous ones like Black Widows and Brown Recluses." },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <>
      <Head>
        <title>Bug Identifier – Free AI Insect Identification Tool</title>
        <meta name="description" content="Identify any bug, insect, spider, or bite instantly with AI. Free tool covering beetles, butterflies, mosquitoes, spiders, ants, bees, wasps and more. Upload a photo and get results in seconds." />
        <meta name="keywords" content="bug identifier, insect identifier, spider identifier, beetle identifier, butterfly identifier, mosquito identifier, insect bite identifier, what bug is this" />
        <meta property="og:title" content="Bug Identifier – Free AI Insect Identification" />
        <meta property="og:description" content="Identify any bug or insect from a photo instantly. Free AI tool." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav active="/" />

      {/* HERO */}
      <section className="hero-green">
        <div className="hero-badge badge-green">🤖 AI-Powered • Free • No Signup Required</div>
        <h1 className="hero-h1">Identify Any <span className="accent">Bug or Insect</span><br />Instantly with AI</h1>
        <p className="hero-p">Upload a photo and our AI identifies any insect, spider, or bug in seconds — with species info, danger level, habitat, diet, and more.</p>
        <UploadTool apiRoute="/api/identify" accentColor="#22c55e" dropLabel="Drop any insect photo here" btnLabel="🔍 Identify This Bug" />
      </section>

      {/* STATS */}
      <div className="stats-bar">
        {[["1M+","Known Insect Species"],["12","Free AI Tools"],["98%","Identification Accuracy"],["<5s","Average Result Time"]].map(([n,l])=>(
          <div className="stat" key={l}><div className="stat-num">{n}</div><div className="stat-lbl">{l}</div></div>
        ))}
      </div>

      {/* ALL TOOLS */}
      <section className="section section-white">
        <div className="container">
          <div className="sec-head">
            <h2>12 Free AI Identifier Tools</h2>
            <p>Specialized tools for every type of insect — from spiders to butterflies to bites</p>
          </div>
          <div className="grid-3" style={{ gap: "1.1rem" }}>
            {TOOLS.map(t => (
              <Link key={t.href} href={t.href} style={{ textDecoration: "none" }}>
                <div className="tool-card">
                  <div className="tool-icon" style={{ background: t.color }}><span style={{ fontSize: "1.4rem" }}>{t.emoji}</span></div>
                  <div>
                    <div className="card-h">{t.title}</div>
                    <div className="card-p">{t.desc}</div>
                    <div style={{ marginTop: ".5rem", color: "#22c55e", fontSize: ".82rem", fontWeight: 600 }}>Use Tool →</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section section-cream">
        <div className="container">
          <div className="sec-head"><h2>How It Works</h2><p>Three simple steps to identify any insect</p></div>
          <div className="grid-3">
            {[
              { step: "01", icon: "📸", title: "Upload a Photo", desc: "Take or upload a clear photo of the insect, bug, or bite. JPG, PNG and WEBP supported up to 10MB." },
              { step: "02", icon: "🤖", title: "AI Analyzes", desc: "Our AI model analyzes wing patterns, body structure, colors, size and dozens of other visual features." },
              { step: "03", icon: "📋", title: "Get Full Report", desc: "Receive species name, danger level, description, habitat, diet, and prevention tips instantly." },
            ].map(s => (
              <div className="card" key={s.step}>
                <div className="card-body">
                  <div style={{ fontFamily: "Syne,sans-serif", fontSize: "2.5rem", fontWeight: 800, color: "#e2e8f0", marginBottom: ".25rem" }}>{s.step}</div>
                  <div style={{ fontSize: "1.75rem", marginBottom: ".5rem" }}>{s.icon}</div>
                  <h3 className="card-h">{s.title}</h3>
                  <p className="card-p">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section section-white">
        <div className="container">
          <div className="sec-head"><h2>Why Choose Bug Identifier?</h2><p>Built for accuracy, speed, and safety</p></div>
          <div className="grid-3">
            {[
              { icon: "⚡", title: "Instant Results", desc: "Get full identification reports in under 5 seconds — powered by advanced AI vision models." },
              { icon: "🎯", title: "98% Accuracy", desc: "Multi-feature analysis of shape, color, structure, and pattern for industry-leading accuracy." },
              { icon: "🛡️", title: "Safety First", desc: "Every result includes a danger level rating, venom info, and when to seek medical help." },
              { icon: "📱", title: "Mobile Friendly", desc: "Works perfectly on any device. Take a photo on your phone and identify in seconds." },
              { icon: "🆓", title: "100% Free", desc: "All 12 tools are completely free forever. No account, no subscription, no hidden costs." },
              { icon: "🌍", title: "Global Coverage", desc: "Identifies insects from every continent covering 1M+ known species worldwide." },
            ].map(f => (
              <div className="card" key={f.title}><div className="card-body"><div className="card-icon">{f.icon}</div><h3 className="card-h">{f.title}</h3><p className="card-p">{f.desc}</p></div></div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="section section-cream">
        <div className="container prose">
          <h2>Free Bug Identification by Photo — AI-Powered Insect Identifier</h2>
          <p>BugIdentifier.ai is the most comprehensive free insect identification platform on the web. Whether you've found a mysterious bug in your home, spotted an unusual insect in your garden, or received a strange bite you can't explain — our AI tools give you answers in seconds. No entomology degree required.</p>
          <p>Our AI analyzes your photo against a database covering over 1 million known insect species, including beetles, butterflies, moths, flies, ants, bees, wasps, caterpillars, mosquitoes, ticks, and spiders. Each identification includes the common name, scientific name, family, order, habitat, diet, danger level, and fascinating facts.</p>
          <h2>Why Accurate Insect Identification Matters</h2>
          <p>Correctly identifying an insect can mean the difference between a harmless curiosity and a dangerous situation. Venomous spiders like the <Link href="/spider-identifier">Black Widow and Brown Recluse</Link> are often mistaken for harmless species. Ticks that carry Lyme disease look nearly identical to harmless varieties. Fire ant stings can trigger life-threatening anaphylaxis in sensitive individuals.</p>
          <p>For homeowners, identifying <Link href="/beetle-identifier">wood-boring beetles</Link> or <Link href="/ant-identifier">carpenter ants</Link> early can prevent thousands of dollars in structural damage. For gardeners, knowing which <Link href="/caterpillar-identifier">caterpillars</Link> become beneficial butterflies prevents inadvertent pesticide harm to pollinator species.</p>
          <h2>How Our AI Insect Identification Works</h2>
          <p>Our system uses a multimodal vision AI model that processes dozens of visual features simultaneously: wing venation patterns, body segmentation, antenna morphology, leg structure, color patterns, markings, and relative size ratios. Unlike single-feature matching systems, our multi-feature approach dramatically reduces misidentification — especially for look-alike species pairs that frequently confuse even experienced naturalists.</p>
          <p>The AI returns a structured report with confidence percentage, allowing you to know exactly how certain the identification is. For ambiguous cases, it provides the most likely candidate along with alternative possibilities. Learn more about our <Link href="/about">methodology on our About page</Link>.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-white">
        <div className="container" style={{ maxWidth: 720 }}>
          <div className="sec-head"><h2>Frequently Asked Questions</h2><p>Everything you need to know about Bug Identifier</p></div>
          {FAQS.map((f, i) => (
            <div className="faq-item" key={i}>
              <div className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>{f.q}<span>{openFaq === i ? "▲" : "▼"}</span></div>
              {openFaq === i && <div className="faq-a">{f.a}</div>}
            </div>
          ))}
        </div>
      </section>

      <RelatedTools current="/" />
      <Footer />
    </>
  );
}
