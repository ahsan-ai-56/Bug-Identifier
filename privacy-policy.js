import Head from "next/head";
import Link from "next/link";
import { Nav, Footer, Breadcrumb } from "../components/Layout";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy – BugIdentifier AI</title>
        <meta name="description" content="BugIdentifier.ai Privacy Policy — how we handle your data, images, and personal information." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
      <section className="hero-dark" style={{ minHeight: "35vh" }}>
        <h1 className="hero-h1">Privacy <span className="accent">Policy</span></h1>
        <p className="hero-p">Last updated: January 1, 2025</p>
      </section>
      <section className="section section-white">
        <div className="container prose">
          <div className="info-box info-green">🔒 <strong>Summary:</strong> We do not store your photos. Images are processed in real-time and immediately discarded. We do not sell your data.</div>

          <h2>1. Information We Collect</h2>
          <p><strong>Images you upload:</strong> Photos you upload for insect identification are transmitted securely to our AI processing server. Images are processed in real-time and are not stored, saved, or retained after the analysis is complete.</p>
          <p><strong>Usage data:</strong> We collect anonymous usage statistics including page views, tool usage frequency, and general geographic region (country-level only). This data cannot be used to identify you personally and is used solely to improve our services.</p>
          <p><strong>Contact form submissions:</strong> If you contact us via our <Link href="/contact">contact form</Link>, we collect your name, email address, and message content. This information is used only to respond to your inquiry.</p>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide insect identification services via AI analysis</li>
            <li>Improve the accuracy and performance of our identification tools</li>
            <li>Respond to contact form inquiries</li>
            <li>Analyze usage patterns to improve our website (using anonymous data only)</li>
          </ul>

          <h2>3. Image Processing & AI Analysis</h2>
          <p>Images you upload are transmitted securely using HTTPS encryption to our AI processing infrastructure. The AI model analyzes visual features of your image and returns an identification result. <strong>Your images are never stored, logged, used for training without consent, or shared with third parties.</strong></p>

          <h2>4. Cookies</h2>
          <p>BugIdentifier.ai uses minimal, essential cookies required for the website to function correctly. We do not use advertising cookies, tracking pixels, or third-party behavioral tracking technologies. You can disable cookies in your browser settings without affecting the core functionality of our identification tools.</p>

          <h2>5. Third-Party Services</h2>
          <p>Our AI identification tools use a third-party AI API for image processing. Images are transmitted securely for analysis and are subject to the API provider's data retention policies (which specify no long-term storage of user-submitted images). We do not use Google Analytics, Facebook Pixel, or similar advertising trackers.</p>

          <h2>6. Children's Privacy</h2>
          <p>BugIdentifier.ai does not knowingly collect personal information from children under 13. Our tools do not require account creation or personal data submission. If you believe a child has submitted personal information, please <Link href="/contact">contact us</Link> immediately.</p>

          <h2>7. Data Security</h2>
          <p>All data transmissions between your browser and our servers are encrypted using HTTPS/TLS. We implement industry-standard security practices to protect any data we process. However, no internet transmission is 100% secure — we encourage you not to submit sensitive personal medical information beyond what is necessary for identification.</p>

          <h2>8. Your Rights</h2>
          <p>Depending on your location, you may have rights under GDPR, CCPA, or other privacy laws including the right to access, delete, or port your personal data. Since we do not store your images or personal data beyond contact form submissions, fulfilling most requests is straightforward. Contact us at hello@bugidentifier.ai for any data rights requests.</p>

          <h2>9. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. Continued use of BugIdentifier.ai after changes constitutes acceptance of the revised policy.</p>

          <h2>10. Contact</h2>
          <p>For privacy-related questions, contact us at <strong>hello@bugidentifier.ai</strong> or visit our <Link href="/contact">Contact page</Link>.</p>
        </div>
      </section>
      <Footer />
    </>
  );
}
