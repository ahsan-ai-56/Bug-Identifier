import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Nav, Footer, Breadcrumb } from "../components/Layout";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  function handleChange(e) { setForm({ ...form, [e.target.name]: e.target.value }); }
  function handleSubmit(e) { e.preventDefault(); setSent(true); }

  return (
    <>
      <Head>
        <title>Contact Us – BugIdentifier AI</title>
        <meta name="description" content="Contact the BugIdentifier team. Send us questions, feedback, identification errors, or partnership inquiries." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]} />

      <section className="hero-dark" style={{ minHeight: "45vh" }}>
        <h1 className="hero-h1">Contact <span className="accent">Us</span></h1>
        <p className="hero-p">Questions, feedback, or found an error? We'd love to hear from you.</p>
      </section>

      <section className="section section-white">
        <div className="container" style={{ maxWidth: 900 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "3rem", alignItems: "flex-start" }}>
            <div>
              <h2 style={{ fontFamily: "Syne,sans-serif", fontSize: "1.5rem", fontWeight: 800, color: "#1e293b", marginBottom: "1.25rem" }}>Get in Touch</h2>
              {[
                { icon: "📧", title: "Email Us", info: "hello@bugidentifier.ai", sub: "We reply within 24 hours" },
                { icon: "🐛", title: "Report an Error", info: "Identification wrong?", sub: "Help us improve our AI" },
                { icon: "🤝", title: "Partnerships", info: "Business inquiries", sub: "API access & white-label" },
              ].map(c => (
                <div key={c.title} style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
                  <div style={{ width: 44, height: 44, background: "#f0fdf4", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem", flexShrink: 0 }}>{c.icon}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: ".9rem", color: "#1e293b" }}>{c.title}</div>
                    <div style={{ fontSize: ".85rem", color: "#22c55e", fontWeight: 500 }}>{c.info}</div>
                    <div style={{ fontSize: ".8rem", color: "#94a3b8" }}>{c.sub}</div>
                  </div>
                </div>
              ))}
              <div className="info-box info-amber" style={{ marginTop: "1rem" }}>
                <strong>Quick Links:</strong><br />
                <Link href="/disclaimer">Disclaimer</Link> · <Link href="/privacy-policy">Privacy Policy</Link> · <Link href="/about">About Us</Link>
              </div>
            </div>

            <div style={{ background: "#f8fafc", borderRadius: 20, padding: "2rem", border: "1px solid #e2e8f0" }}>
              {sent ? (
                <div style={{ textAlign: "center", padding: "2rem 0" }}>
                  <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
                  <h3 style={{ fontFamily: "Syne,sans-serif", fontSize: "1.3rem", fontWeight: 800, color: "#1e293b", marginBottom: ".5rem" }}>Message Sent!</h3>
                  <p style={{ color: "#64748b" }}>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  <button className="btn btn-primary" style={{ marginTop: "1.25rem" }} onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}>Send Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ fontFamily: "Syne,sans-serif", fontSize: "1.2rem", fontWeight: 800, color: "#1e293b", marginBottom: "1.5rem" }}>Send a Message</h3>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <div className="form-group"><label>Your Name</label><input name="name" value={form.name} onChange={handleChange} placeholder="John Smith" required /></div>
                    <div className="form-group"><label>Email Address</label><input name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@example.com" required /></div>
                  </div>
                  <div className="form-group"><label>Subject</label>
                    <select name="subject" value={form.subject} onChange={handleChange} required>
                      <option value="">Select a subject</option>
                      <option>General Question</option>
                      <option>Report Identification Error</option>
                      <option>Technical Issue</option>
                      <option>Partnership / API</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form-group"><label>Message</label><textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us how we can help..." required /></div>
                  <button type="submit" className="btn btn-primary btn-full">📧 Send Message</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
