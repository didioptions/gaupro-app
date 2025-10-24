
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-background">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl mb-8 text-foreground">
              Gaupro Privacy Policy
            </h1>
            <div className="space-y-8 text-foreground">
              <p className="text-sm">Effective Date: [Last Updated: 16 June 2025]</p>
              <p>
                At Gaupro, your privacy and the protection of your personal information is our top priority. This Privacy Policy explains what information we collect, how we use it, and how we keep it safe when you use our platform. By using Gaupro, you agree to the practices outlined below.
              </p>

              <section className="space-y-4">
                <h2 className="text-2xl text-foreground">1. Information We Collect</h2>
                <p>When you use Gaupro, we may collect information in the following categories:</p>
                <ul className="list-disc list-inside pl-4 space-y-2">
                    <li><strong>Personal Information:</strong> This includes your name, email address, phone number, postal address, and payment information.</li>
                    <li><strong>Professional Information:</strong> Details about your services, business profile, licenses or certifications, pricing, and previous work or projects.</li>
                    <li><strong>Usage Information:</strong> Data about how you interact with Gaupro, such as pages visited, time spent on the platform, features used, and quotes submitted.</li>
                    <li><strong>Device & Technical Information:</strong> IP address, browser type, operating system, device information, and cookies or similar technologies.</li>
                    <li><strong>Optional Information:</strong> Any information you choose to provide in reviews, messages, or uploaded files.</li>
                </ul>
                <p>Collecting this information allows us to provide a seamless experience for both service providers and customers.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl text-foreground">2. How We Use Your Information</h2>
                <p>We use the information we collect for the following purposes:</p>
                <ul className="list-disc list-inside pl-4 space-y-2">
                    <li><strong>Connecting you with clients:</strong> We match your skills and location with customers seeking services.</li>
                    <li><strong>Communication:</strong> Send notifications about quotes, job requests, or account updates.</li>
                    <li><strong>Platform improvements:</strong> Analyze usage patterns to enhance Gaupro’s features and functionality.</li>
                    <li><strong>Security & fraud prevention:</strong> Detect and prevent unauthorized activity or potential scams.</li>
                    <li><strong>Legal compliance:</strong> Fulfill obligations under applicable laws and regulations.</li>
                    <li><strong>Customer support:</strong> Respond to inquiries, complaints, or feedback efficiently.</li>
                </ul>
                <p>We ensure that all data usage is limited to legitimate business purposes.</p>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-2xl text-foreground">3. Sharing Your Information</h2>
                <p>We do not sell your personal data. We only share information in limited circumstances:</p>
                 <ul className="list-disc list-inside pl-4 space-y-2">
                    <li><strong>With customers:</strong> So they can contact you regarding job requests or quotes.</li>
                    <li><strong>With third-party service providers:</strong> Trusted partners who help operate Gaupro (e.g., payment processors, analytics tools, marketing services).</li>
                    <li><strong>For legal reasons:</strong> When required by law, regulation, or legal proceedings, or to protect Gaupro’s rights and safety.</li>
                    <li><strong>Business transfers:</strong> In case of merger, acquisition, or sale of assets, personal information may be part of the transferred assets.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl text-foreground">4. Your Choices and Rights</h2>
                <p>You have control over your information:</p>
                <ul className="list-disc list-inside pl-4 space-y-2">
                    <li><strong>Access & Update:</strong> Review and update your personal and professional profile at any time.</li>
                    <li><strong>Communications:</strong> Opt-out or adjust preferences for marketing emails, notifications, and messages.</li>
                    <li><strong>Data Deletion:</strong> You can request the deletion of your account and associated personal information.</li>
                    <li><strong>Privacy Requests:</strong> Contact us at <a href="mailto:support@gaupro.com" className="text-primary hover:underline">support@gaupro.com</a> for any questions about how your data is used.</li>
                </ul>
                <p>We strive to honor all reasonable requests promptly and securely.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl text-foreground">5. Security Measures</h2>
                <p>We take your data protection seriously:</p>
                <ul className="list-disc list-inside pl-4 space-y-2">
                    <li>Data is stored securely on servers with encryption and access controls.</li>
                    <li>Regular monitoring for unauthorized access, breaches, or vulnerabilities.</li>
                    <li>Security protocols are updated to meet industry best practices.</li>
                </ul>
                <p>While we do our best to protect your data, no online system is completely foolproof.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl text-foreground">6. Cookies and Tracking</h2>
                <p>Gaupro uses cookies and similar tracking technologies to:</p>
                <ul className="list-disc list-inside pl-4 space-y-2">
                    <li>Enhance user experience and remember preferences.</li>
                    <li>Monitor site traffic, performance, and usage patterns.</li>
                    <li>Provide personalized content and marketing materials.</li>
                </ul>
                <p>You can manage or disable cookies through your browser settings, but some features may not function fully.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl text-foreground">7. Children’s Privacy</h2>
                <p>Gaupro is not intended for children under 13. We do not knowingly collect personal information from children. If we discover that we have, we will take steps to delete the data immediately.</p>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-2xl text-foreground">8. Changes to this Privacy Policy</h2>
                <p>We may update this Privacy Policy from time to time.</p>
                <p>The effective date at the top will indicate the latest version.</p>
                <p>We encourage you to review this page periodically for updates.</p>
                <p>Continued use of Gaupro after changes indicates acceptance of the updated policy.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl text-foreground">9. Contact Us</h2>
                <p>For any questions, concerns, or requests regarding your privacy:</p>
                <p><strong>Email:</strong> <a href="mailto:support@gaupro.com" className="text-primary hover:underline">support@gaupro.com</a></p>
                <p>We aim to respond to all inquiries within a reasonable timeframe.</p>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-2xl text-foreground">10. International Users / Cross-Border Data</h2>
                <p>If you access Gaupro from outside South Africa:</p>
                <ul className="list-disc list-inside pl-4 space-y-2">
                    <li>Your information may be stored and processed in South Africa or other countries.</li>
                    <li>By using Gaupro internationally, you consent to cross-border transfer of your information.</li>
                    <li>We maintain safeguards to ensure your data remains protected under applicable laws.</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
