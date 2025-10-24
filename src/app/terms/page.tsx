import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-background">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              ⚖️ Gaupro Terms and Conditions
            </h1>
            <div className="space-y-8 text-foreground">
              <p className="font-semibold text-foreground">
                Welcome to Gaupro – South Africa’s trusted platform to find and hire local service professionals.
              </p>
              <p>
                By using Gaupro’s website or mobile app (“Platform”), you agree to these Terms and Conditions. Please read them carefully before using our services.
              </p>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">1. About Gaupro</h2>
                <p>Gaupro connects customers looking for services with professionals offering them.</p>
                <p>We do not provide services directly — we simply connect people. All work, payments, and agreements are between the customer and the professional (“Pro”).</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">2. Using Gaupro</h2>
                <p>You can search our Pro Directory or post a Service Request to get free quotes.</p>
                <p>Gaupro will match you with up to 5 verified Pros near you.</p>
                <p>You can compare quotes, check reviews, and choose who to hire.</p>
                <p>Gaupro does not guarantee any service outcome or endorse any listed business.</p>
                <p>All contracts are made directly between customers and Pros.</p>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">3. For Professionals (“Pros”)</h2>
                <p>Creating a business profile on Gaupro is free.</p>
                <p>Pros can:</p>
                <ul className="list-disc list-inside pl-4 space-y-2">
                    <li>Receive job leads from customers.</li>
                    <li>Use Gaupro Credits to view customer details and send quotes.</li>
                </ul>
                <p className="font-semibold text-foreground">Important:</p>
                 <ul className="list-disc list-inside pl-4 space-y-2">
                    <li>Credits are non-refundable and have no cash value.</li>
                    <li>All transactions are in South African Rands (ZAR) and include VAT.</li>
                    <li>Gaupro may offer promotional credit packs or hero lead offers at its discretion.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">4. Payments and Refunds</h2>
                <p>All payments for credits or add-ons are final.</p>
                <p>Gaupro may issue a refund only if a lead is invalid (e.g., wrong contact info).</p>
                <p>Refund requests must be submitted within 14 days of purchase.</p>
                <p>Refunds are credited to your Gaupro balance — no cash refunds.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">5. Account Termination</h2>
                <p>Gaupro may suspend or delete any account that violates our terms, misuses the platform, or engages in fraud.</p>
                <p>Users can request account deletion by emailing <a href="mailto:support@gaupro.co.za" className="text-primary hover:underline">support@gaupro.co.za</a>.</p>
                <p>Suspension or deletion does not qualify for a refund.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">6. User Content and Reviews</h2>
                <p>When you post reviews, photos, or other content on Gaupro, you:</p>
                <ul className="list-disc list-inside pl-4 space-y-2">
                    <li>Grant Gaupro a worldwide, royalty-free license to use, display, and promote that content.</li>
                    <li>Confirm that the content is truthful and lawful.</li>
                    <li>Agree not to post offensive, false, or defamatory material.</li>
                </ul>
                <p>Gaupro may remove or edit content that violates these rules.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">7. Limitation of Liability</h2>
                <p>Gaupro provides its platform “as is.”</p>
                <p>We are not responsible for:</p>
                <ul className="list-disc list-inside pl-4 space-y-2">
                    <li>The quality or completion of any job performed by a Pro.</li>
                    <li>Disputes between customers and Pros.</li>
                    <li>Any damages, losses, or claims resulting from your use of the Gaupro platform.</li>
                </ul>
                <p>Your only remedy for dissatisfaction is to stop using Gaupro.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">8. Privacy and Communication</h2>
                <p>By using Gaupro, you agree that we and our Pros may contact you via phone, email, or SMS about your service requests or account.</p>
                <p>For full details, please read our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">9. Dispute Resolution</h2>
                <p>If a dispute arises, we may offer limited assistance through our Resolution Team, but we are not responsible for outcomes or agreements between users.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">10. Legal Jurisdiction</h2>
                <p>These Terms are governed by the laws of the Republic of South Africa.</p>
                <p>Any disputes must be resolved under South African law.</p>
              </section>

              <p className="pt-8 text-center text-sm">
                © 2025 Gaupro (Pty) Ltd. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
