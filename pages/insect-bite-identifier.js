import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Nav, Footer, Breadcrumb, RelatedTools } from "../components/Layout";
import UploadTool from "../components/UploadTool";

const BITE_TYPES = [
  { name: "Mosquito Bite", emoji: "🦟", look: "Small round red bump, sometimes with a dark dot at center", severity: "Low", treat: "Cold compress, antihistamine cream", diseases: ["Malaria","Dengue","Zika","West Nile"] },
  { name: "Bee / Wasp Sting", emoji: "🐝", look: "Red swollen area with white center, stinger may be visible", severity: "Medium", treat: "Remove stinger, ice pack, antihistamine", diseases: ["Anaphylaxis (if allergic)"] },
  { name: "Spider Bite", emoji: "🕷️", look: "Two small puncture marks, redness, possible blistering", severity: "High", treat: "Clean wound, ice, seek immediate medical care", diseases: ["Necrosis (Brown Recluse)","Severe pain (Black Widow)"] },
  { name: "Tick Bite", emoji: "🦠", look: "Small red mark or bull's-eye rash, tick may still be attached", severity: "High", treat: "Remove tick with tweezers, see doctor for testing", diseases: ["Lyme Disease","Rocky Mountain Spotted Fever"] },
  { name: "Fire Ant Sting", emoji: "🐜", look: "Cluster of white pustules within 24 hours, intense itch", severity: "Medium", treat: "Do not burst blisters, antihistamine, ice", diseases: ["Anaphylaxis (rare)"] },
  { name: "Bed Bug Bite", emoji: "🛏️", look: "Small red welts in a line or cluster, usually on exposed skin", severity: "Low", treat: "Soap and water, antihistamine, treat infestation", diseases: ["No diseases transmitted"] },
  { name: "Flea Bite", emoji: "🐾", look: "Tiny red spots in groups of 3, often around ankles", severity: "Low", treat: "Antihistamine, calamine, treat pets and home", diseases: ["Typhus","Plague (very rare)"] },
  { name: "Hornet Sting", emoji: "⚡", look: "Raised red welt, large swelling, immediate sharp pain", severity: "High", treat: "Ice pack, antihistamine, emergency care if allergic", diseases: ["Anaphylaxis (if allergic)"] },
];

const SEV_COLOR = { Low: "#dcfce7:#15803d", Medium: "#fef3c7:#d97706", High: "#fee2e2:#dc2626" };

const FAQS = [
  { q: "How do I identify what bit me?", a: "Upload a clear photo of the bite to our tool above. Key features the AI looks for include the pattern of marks (single vs cluster), shape, size, color, and any secondary symptoms visible in the image." },
  { q: "Is the bite identifier medically accurate?", a: "Our tool is educational and designed to help you understand what may have bitten you. It is not a substitute for professional medical advice. Always consult a doctor for severe reactions, spreading redness, fever, or any serious symptoms." },
  { q: "What if I can't see the bite clearly in the photo?", a: "Ensure the photo is taken in bright natural light, the bite area fills the frame, and the image is in sharp focus. Avoid zooming on a phone camera — instead move physically closer to the bite." },
  { q: "When should I go to the emergency room?", a: "Go immediately if you experience: difficulty breathing, swelling of throat or tongue, rapid heartbeat, dizziness, widespread rash after a sting — these are signs of anaphylaxis which is life-threatening." },
];

export default function BiteIdentifier() {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <>
      <Head>
        <title>Insect Bite Identifier – Identify Bug Bites & Stings | BugIdentifier</title>
        <meta name="description" content="Identify insect bites and stings from photos. Get symptoms, first aid treatment, disease risk, and when to see a doctor. Free AI bite identification tool." />
        <meta name="keywords" content="insect bite identifier, bug bite identification, what bit me, mosquito bite, spider bite, tick bite, bee sting identifier" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav active="bite" />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Insect Bite Identifier" }]} />

      {/* HERO */}
      <section style={{ background: "linear-gradient(140deg,#1a0505 0%,#3b0a0a 100%)", minHeight: "75vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "100px 2rem 60px", textAlign: "center" }}>
        <div className="hero-badge badge-red">🩺 AI Bite Analysis • Educational Only</div>
        <h1 className="hero-h1">Insect <span className="accent-red" style={{ color: "#f87171" }}>Bite Identifier</span></h1>
        <p className="hero-p">Upload a photo of a bite or sting for instant AI identification — including symptoms, first aid steps, disease risks, and when to seek medical help.</p>
        <div className="info-box info-red" style={{ maxWidth: 520, marginBottom: "1.5rem", textAlign: "left" }}>
          ⚠️ <strong>Medical Disclaimer:</strong> This tool is for educational purposes only. Always seek professional medical advice for serious symptoms.
        </div>
        <UploadTool apiRoute="/api/bite-identify" accentColor="#ef4444" dropLabel="Drop a photo of the bite area here" btnLabel="🩺 Identify This Bite" />
      </section>

      <div className="stats-bar">
        {[["8","Common Bite Types"],["Free","No Cost Ever"],["AI","Powered"],["⚠️","Seek Help for Severe Cases"]].map(([n, l]) => (
          <div className="stat" key={l}><div className="stat-num">{n}</div><div className="stat-lbl">{l}</div></div>
        ))}
      </div>

      {/* BITE GUIDE */}
      <section className="section section-white">
        <div className="container">
          <div className="sec-head"><h2>Common Insect Bites & Stings Guide</h2><p>Know what bit you, the risk level, and what to do</p></div>
          <div className="grid-2" style={{ gap: "1.1rem" }}>
            {BITE_TYPES.map(b => {
              const [bg, col] = SEV_COLOR[b.severity].split(":");
              return (
                <div className="card" key={b.name}>
                  <div className="card-body">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: ".75rem" }}>
                      <h3 style={{ fontFamily: "Syne,sans-serif", fontSize: "1rem", fontWeight: 700 }}>{b.emoji} {b.name}</h3>
                      <span className="tag" style={{ background: bg, color: col }}>{b.severity} Risk</span>
                    </div>
                    <p className="card-p" style={{ marginBottom: ".6rem" }}><strong>Appearance:</strong> {b.look}</p>
                    <p className="card-p" style={{ marginBottom: ".6rem" }}><strong>Treatment:</strong> {b.treat}</p>
                    <div>
                      {b.diseases.map(d => <span key={d} className="tag tag-red" style={{ marginRight: 4, marginBottom: 4 }}>{d}</span>)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="section section-cream">
        <div className="container prose">
          <h2>How to Identify Insect Bites and Stings</h2>
          <p>Identifying the source of a bite or sting quickly is important — different insects require different treatment approaches. Most bites from <Link href="/mosquito-identifier">mosquitoes</Link>, <Link href="/ant-identifier">ants</Link>, and fleas are harmless and resolve within days. However, bites from <Link href="/spider-identifier">spiders</Link>, <Link href="/tick-identifier">ticks</Link>, and stings from bees or wasps may require prompt medical attention.</p>
          <p>Key visual indicators include: the number and pattern of marks (single vs. clusters or rows), the shape and color of the welt, whether a stinger or <Link href="/tick-identifier">tick</Link> remains embedded, and accompanying symptoms like spreading redness, fever, or severe swelling.</p>
          <h2>When Is an Insect Bite an Emergency?</h2>
          <p>Call emergency services immediately if symptoms include difficulty breathing or swallowing, swelling of the throat or face, a rapid or irregular heartbeat, severe dizziness, a widespread rash, or loss of consciousness. These indicate anaphylaxis — a potentially fatal allergic reaction requiring immediate epinephrine treatment.</p>
          <p>For <Link href="/tick-identifier">tick bites</Link>, watch for a bull's-eye rash (erythema migrans) in the days following the bite — this is a hallmark sign of Lyme disease requiring antibiotic treatment. For <Link href="/spider-identifier">spider bites</Link>, watch for spreading necrosis (tissue death) around the bite, which indicates a brown recluse bite requiring medical care.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-white">
        <div className="container" style={{ maxWidth: 720 }}>
          <div className="sec-head"><h2>Frequently Asked Questions</h2></div>
          {FAQS.map((f, i) => (
            <div className="faq-item" key={i}>
              <div className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>{f.q}<span>{openFaq === i ? "▲" : "▼"}</span></div>
              {openFaq === i && <div className="faq-a">{f.a}</div>}
            </div>
          ))}
        </div>
      </section>

      <RelatedTools current="/insect-bite-identifier" />
      <Footer />
    </>
  );
}
