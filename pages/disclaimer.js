import Head from "next/head";
import Link from "next/link";
import { Nav, Footer, Breadcrumb } from "../components/Layout";

export default function Disclaimer() {
  return (
    <>
      <Head>
        <title>Disclaimer – BugIdentifier AI</title>
        <meta name="description" content="Read the BugIdentifier.ai disclaimer — important information about the limitations of AI insect identification and medical advice." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Disclaimer" }]} />
      <section className="hero-red" style={{ minHeight: "35vh" }}>
        <h1 className="hero-h1">Disclaimer</h1>
        <p className="hero-p">Last updated: January 1, 2025</p>
      </section>
      <section className="section section-white">
        <div className="container prose">
          <div className="info-box info-red">⚠️ <strong>Important:</strong> BugIdentifier.ai is an educational tool. It is NOT a substitute for professional medical, pest control, or entomological advice.</div>

          <h2>1. General Information Disclaimer</h2>
          <p>The information provided by BugIdentifier.ai, including all identification results, species information, habitat data, and safety ratings, is provided for general educational and informational purposes only. While we strive for accuracy, AI-powered identification may not always be correct, particularly for rare species, unusual specimens, or poor-quality images.</p>
          <p>BugIdentifier.ai makes no warranties or representations about the accuracy, completeness, or reliability of identification results. Always use your own judgment and consult qualified professionals when safety is a concern.</p>

          <h2>2. Medical Disclaimer — Bite & Sting Identification</h2>
          <p>Our <Link href="/insect-bite-identifier">Insect Bite Identifier tool</Link> is strictly for <strong>educational purposes only</strong>. It is NOT intended to diagnose medical conditions, provide medical advice, or replace professional medical treatment.</p>
          <p><strong>Seek immediate emergency medical care if you experience:</strong></p>
          <ul>
            <li>Difficulty breathing or swallowing after a bite or sting</li>
            <li>Swelling of the face, lips, throat, or tongue</li>
            <li>Rapid or irregular heartbeat</li>
            <li>Severe dizziness, fainting, or loss of consciousness</li>
            <li>Widespread rash or hives across the body</li>
            <li>Severe pain, spreading redness, or visible tissue damage</li>
          </ul>
          <p>These symptoms may indicate anaphylaxis or a severe envenomation — both medical emergencies requiring immediate professional treatment. Do not rely on this tool in an emergency situation. Call emergency services (911 in the US, 999 in the UK, 112 in the EU) immediately.</p>

          <h2>3. Pest Control Disclaimer</h2>
          <p>Identification of an insect as a pest species does not constitute pest control advice. Always consult a licensed pest control professional before taking any action to remove or exterminate insects, particularly for social insects like wasps, bees, or ants, which may pose significant safety risks if disturbed.</p>
          <p>Many insects that appear to be pests are actually beneficial species (e.g., some <Link href="/wasp-identifier">wasps</Link> that parasitize garden pests, or <Link href="/bee-identifier">bees</Link> that are vital pollinators). Misidentification followed by inappropriate pesticide use can harm ecosystems and violate environmental regulations.</p>

          <h2>4. Accuracy Limitations</h2>
          <p>Our AI identification system achieves high accuracy on clear, well-lit, close-up photographs of common species. Accuracy may be reduced for:</p>
          <ul>
            <li>Rare, regional, or recently described species</li>
            <li>Blurry, dark, or low-resolution photographs</li>
            <li>Juvenile or larval forms that differ significantly from adults</li>
            <li>Species with high visual similarity to other species (cryptic species complexes)</li>
            <li>Damaged or deceased specimens with altered coloration</li>
          </ul>
          <p>Always cross-reference results with field guides, local entomology societies, or professional entomologists when accurate identification is critical.</p>

          <h2>5. No Professional Relationship</h2>
          <p>Use of BugIdentifier.ai does not create a professional relationship of any kind — including medical, veterinary, legal, or entomological. The site and its operators are not liable for any decisions made based on information provided by the tools.</p>

          <h2>6. External Links</h2>
          <p>BugIdentifier.ai may contain links to external websites. We are not responsible for the content, accuracy, or privacy practices of any external site. Links are provided for informational convenience only.</p>

          <h2>7. Contact</h2>
          <p>If you have questions about this disclaimer, please <Link href="/contact">contact us</Link>.</p>
        </div>
      </section>
      <Footer />
    </>
  );
}
