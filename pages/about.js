import Head from "next/head";
import Link from "next/link";
import { Nav, Footer, Breadcrumb } from "../components/Layout";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us – BugIdentifier AI</title>
        <meta name="description" content="Learn about BugIdentifier.ai — our mission to make insect identification free, accurate, and accessible to everyone using AI technology." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav active="about" />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About Us" }]} />

      <section className="hero-dark" style={{ minHeight: "50vh" }}>
        <div className="hero-badge badge-green">🐛 Our Mission</div>
        <h1 className="hero-h1">About <span className="accent">BugIdentifier</span></h1>
        <p className="hero-p">Making insect identification free, accurate, and accessible to everyone — from curious kids to professional entomologists.</p>
      </section>

      <section className="section section-white">
        <div className="container prose">
          <h2>Who We Are</h2>
          <p>BugIdentifier.ai is a free AI-powered insect identification platform built to help everyday people understand the insects they encounter. Whether you're a homeowner concerned about a pest infestation, a gardener trying to protect beneficial insects, a hiker who just got bitten by something unknown, or a student studying entomology — our tools are built for you.</p>
          <p>We believe that understanding the natural world shouldn't require expensive apps or specialist knowledge. With advances in AI vision technology, we can now provide the same quality of identification that once required a trained entomologist — instantly, from your phone, for free.</p>

          <h2>Our Mission</h2>
          <p>Our mission is simple: <strong>make insect identification free and accessible to everyone, everywhere.</strong> We cover over 1 million known insect species across 12 specialized identification tools — from <Link href="/spider-identifier">spiders</Link> and <Link href="/beetle-identifier">beetles</Link> to <Link href="/butterfly-identifier">butterflies</Link> and <Link href="/tick-identifier">ticks</Link>. Every tool is free to use, with no account required.</p>

          <h2>Our Technology</h2>
          <p>BugIdentifier.ai uses advanced multimodal AI vision models to analyze insect photographs. Our system evaluates dozens of visual features simultaneously — wing venation patterns, body segmentation, antenna morphology, leg structure, color patterns, and relative proportions — to deliver identifications with up to 98% accuracy on clear images.</p>
          <p>Unlike apps that rely on crowdsourced identification (which can be slow and inconsistent), our AI delivers results in under 5 seconds, 24/7, with no human bottleneck. Every result is accompanied by a confidence score so you always know how certain the identification is.</p>

          <h2>Safety & Medical Disclaimer</h2>
          <p>While our insect identification tools are highly accurate, they are intended for educational and informational purposes. Our <Link href="/insect-bite-identifier">Bite Identifier tool</Link> in particular is not a substitute for professional medical advice. If you experience a severe reaction to an insect bite or sting — especially difficulty breathing, widespread rash, or swelling of the throat — seek emergency medical care immediately.</p>
          <p>For full details, please read our <Link href="/disclaimer">Disclaimer</Link> and <Link href="/privacy-policy">Privacy Policy</Link>.</p>

          <h2>Contact Us</h2>
          <p>Have questions, suggestions, or found an identification error? We'd love to hear from you. Visit our <Link href="/contact">Contact page</Link> to send us a message.</p>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <div className="sec-head"><h2>Our Tools</h2><p>12 free AI identification tools covering every major insect group</p></div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: "1rem" }}>
            {[
              ["/", "🐛", "Bug Identifier"],
              ["/insect-bite-identifier", "🩺", "Bite Identifier"],
              ["/spider-identifier", "🕷️", "Spider Identifier"],
              ["/beetle-identifier", "🪲", "Beetle Identifier"],
              ["/fly-identifier", "🪰", "Fly Identifier"],
              ["/ant-identifier", "🐜", "Ant Identifier"],
              ["/bee-identifier", "🐝", "Bee Identifier"],
              ["/wasp-identifier", "🟡", "Wasp Identifier"],
              ["/caterpillar-identifier", "🐛", "Caterpillar Identifier"],
              ["/butterfly-identifier", "🦋", "Butterfly Identifier"],
              ["/moth-identifier", "🌙", "Moth Identifier"],
              ["/mosquito-identifier", "🦟", "Mosquito Identifier"],
              ["/tick-identifier", "🕷️", "Tick Identifier"],
            ].map(([href, emoji, label]) => (
              <Link key={href} href={href} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: "1rem", display: "block", textAlign: "center", textDecoration: "none", transition: "all .2s" }}>
                <div style={{ fontSize: "1.75rem", marginBottom: ".4rem" }}>{emoji}</div>
                <div style={{ fontSize: ".85rem", fontWeight: 600, color: "#1e293b" }}>{label}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
