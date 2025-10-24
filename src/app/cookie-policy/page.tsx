
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-background">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl mb-8 text-foreground">
              Gaupro Cookie Policy
            </h1>
            <div className="space-y-8 text-foreground">
              <p className="text-sm">Effective Date: [16 June 2025]</p>
              <p>
                At Gaupro, we use cookies and similar technologies to enhance your experience, improve our services, and ensure the platform functions properly. This Cookie Policy explains what cookies are, how we use them, and your options for managing them.
              </p>

              <section className="space-y-4">
                <h2 className="text-2xl text-foreground">1. What Are Cookies?</h2>
                <p>
                  Cookies are small text files that are placed on your device (computer, tablet, or mobile) when you visit a website. They help the site remember information about your visit, such as your preferences, login status, and activity.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl text-foreground">2. How Gaupro Uses Cookies</h2>
                <p>We use cookies for the following purposes:</p>
                <ul className="list-disc list-inside pl-4 space-y-2">
                    <li><strong>Essential Cookies:</strong> Required for the basic operation of Gaupro, such as logging in, security, and account management.</li>
                    <li><strong>Performance & Analytics Cookies:</strong> Help us understand how users interact with Gaupro, track traffic, and improve site performance.</li>
                    <li><strong>Functional Cookies:</strong> Remember your preferences and settings, such as language, notifications, or dashboard layout.</li>
                    <li><strong>Marketing & Advertising Cookies:</strong> Show relevant ads or promotions and measure the effectiveness of marketing campaigns.</li>
                </ul>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-2xl text-foreground">3. Third-Party Cookies</h2>
                <p>Some cookies on Gaupro are set by third-party services, such as:</p>
                 <ul className="list-disc list-inside pl-4 space-y-2">
                    <li><strong>Analytics tools (e.g., Google Analytics)</strong> to monitor site performance and user behavior.</li>
                    <li><strong>Advertising platforms</strong> to deliver relevant ads or track conversions.</li>
                </ul>
                <p>These third parties have their own privacy and cookie policies.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl text-foreground">4. Your Cookie Choices</h2>
                <p>You can manage your cookie preferences in several ways:</p>
                <ul className="list-disc list-inside pl-4 space-y-2">
                    <li><strong>Browser Settings:</strong> Most browsers allow you to block, delete, or limit cookies.</li>
                    <li><strong>Cookie Consent Banner:</strong> When you first visit Gaupro, you can choose which types of cookies you accept.</li>
                    <li><strong>Disabling Cookies:</strong> Note that disabling some cookies may affect functionality and your experience on Gaupro.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl text-foreground">5. Why We Use Cookies</h2>
                <p>Using cookies helps Gaupro:</p>
                <ul className="list-disc list-inside pl-4 space-y-2">
                    <li>Make your experience faster and more personalized.</li>
                    <li>Remember your login, preferences, and dashboard settings.</li>
                    <li>Understand how the platform is used so we can improve it.</li>
                    <li>Deliver relevant promotions or service recommendations.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl text-foreground">6. Changes to This Cookie Policy</h2>
                <p>
                    We may update this Cookie Policy occasionally to reflect new practices or legal requirements.
                    The effective date at the top indicates the latest version.
                    Continued use of Gaupro after changes indicates your acceptance of the updated policy.
                </p>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-2xl text-foreground">7. Contact Us</h2>
                <p>If you have any questions or concerns about our use of cookies:</p>
                <p><strong>Email:</strong> <a href="mailto:support@gaupro.co.za" className="text-primary hover:underline">support@gaupro.co.za</a></p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
