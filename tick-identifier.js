import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Nav, Footer, Breadcrumb, RelatedTools } from "../components/Layout";
import UploadTool from "../components/UploadTool";

const FAQS = [
  { q: "How do I identify a Tick Identifier?", a: "Upload a clear, close-up photo to our Tick Identifier tool above. The AI will analyze wing patterns, body structure, size, and coloring to identify the species within seconds." },
  { q: "Is this Tick Identifier identifier free?", a: "Yes, completely free. No signup, no account required. Just upload a photo and get instant results." },
  { q: "What photo works best for Tick Identifier identification?", a: "A clear, well-lit close-up photo where the subject fills most of the frame works best. Natural daylight or good indoor lighting improves accuracy significantly." },
  { q: "Can it tell if a Tick Identifier is dangerous?", a: "Yes. Every result includes a danger level rating from Harmless to Dangerous, with specific safety guidance." },
];

export default function Page() {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <>
      <Head>
        <title>Tick Identifier – Free AI Tick Identifier | BugIdentifier</title>
        <meta name="description" content="Identify tick species and assess Lyme disease, Rocky Mountain Spotted Fever, and other disease transmission risks." />
        <meta name="keywords" content="tick identifier, tick identifier tool, identify tick identifier, what tick identifier is this, free tick identifier" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav active="tick identifier" />
      <Breadcrumb items={[{label:"Home",href:"/"},{label:"Tick Identifier"}]} />

      <section style={{background:"linear-gradient(140deg,#1a0505 0%,#3b0a0a 100%)",minHeight:"75vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"100px 2rem 60px",textAlign:"center"}}>
        <div className="hero-badge badge-red">🕷️ Tick Identifier</div>
        <h1 className="hero-h1">Free AI <span style={{color:"#f87171"}}>Tick Identifier</span></h1>
        <p className="hero-p">Identify tick species and assess Lyme disease, Rocky Mountain Spotted Fever, and other disease transmission risks. Upload a photo for instant AI-powered results including species name, danger level, and detailed information.</p>
        <UploadTool apiRoute="/api/identify" accentColor="#f87171" dropLabel="Drop a 🕷️ photo here" btnLabel="🕷️ Identify Now" />
      </section>

      <div className="stats-bar">
        {[["Free","No Cost Ever"],["AI","Powered Analysis"],["<5s","Result Time"],["98%","Accuracy Rate"]].map(([n,l])=>(
          <div className="stat" key={l}><div className="stat-num">{n}</div><div className="stat-lbl">{l}</div></div>
        ))}
      </div>

      <section className="section section-white">
        <div className="container prose">
          <h2>How to Use the Tick Identifier</h2>
          <p>Using our free Tick Identifier is simple: take or upload a clear photo of the subject, click Identify, and receive a detailed report within seconds. Our AI model has been trained on thousands of tick identifier images to deliver reliable, accurate identifications across hundreds of species.</p>
          <p>For best results, photograph the subject from above or slightly to the side in natural daylight. Make sure the subject fills most of the frame and is in sharp focus. Avoid blurry or heavily shadowed images.</p>
          <h2>Why Identify Tick Identifiers?</h2>
          <p>Accurate tick identifier identification helps you understand whether the specimen poses any risk, whether it's a beneficial species worth protecting, or whether it requires pest control intervention. Our tool gives you that information instantly and free of charge.</p>
          <p>Explore our other tools: <Link href="/insect-bite-identifier">Insect Bite Identifier</Link>, <Link href="/spider-identifier">Spider Identifier</Link>, <Link href="/beetle-identifier">Beetle Identifier</Link>, <Link href="/butterfly-identifier">Butterfly Identifier</Link>, and <Link href="/">our main Bug Identifier</Link>.</p>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container" style={{maxWidth:720}}>
          <div className="sec-head"><h2>Frequently Asked Questions</h2></div>
          {FAQS.map((f,i)=>(
            <div className="faq-item" key={i}>
              <div className="faq-q" onClick={()=>setOpenFaq(openFaq===i?null:i)}>{f.q}<span>{openFaq===i?"▲":"▼"}</span></div>
              {openFaq===i && <div className="faq-a">{f.a}</div>}
            </div>
          ))}
        </div>
      </section>

      <RelatedTools current="/tick-identifier" />
      <Footer />
    </>
  );
}
