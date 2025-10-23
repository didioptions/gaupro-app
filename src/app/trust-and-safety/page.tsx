
import { Button } from '@/components/ui/button';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import Link from 'next/link';
import { ShieldCheck, UserCheck, MessageSquareQuote, CheckCircle, User, Briefcase, Lock, FileText, AlertTriangle, Mail, MessageCircle as WhatsAppIcon, Bot } from 'lucide-react';

const commitments = [
    {
        icon: <UserCheck className="h-8 w-8 text-primary" />,
        title: "Verified Profiles",
        description: "Every professional goes through verification steps before being listed on Gaupro."
    },
    {
        icon: <MessageSquareQuote className="h-8 w-8 text-primary" />,
        title: "Customer Reviews",
        description: "Only verified customers can leave reviews — keeping feedback authentic and fair."
    },
    {
        icon: <Lock className="h-8 w-8 text-primary" />,
        title: "Secure Communication",
        description: "All messages and job details are exchanged within our secure platform."
    },
    {
        icon: <FileText className="h-8 w-8 text-primary" />,
        title: "Transparent Information",
        description: "Professionals share real business details, qualifications, and photos so customers can make informed choices."
    }
];

export default function TrustAndSafetyPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-background">
        <section className="bg-secondary/50 py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <ShieldCheck className="h-12 w-12 text-primary mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Trust & Safety at Gaupro</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Connecting South Africans with Confidence. At Gaupro, your safety and trust come first.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-4xl mx-auto space-y-16">

            <section className="text-center">
                <p className="text-lg text-muted-foreground">
                   We’re committed to creating a platform where both customers and professionals can connect confidently — knowing that every interaction is secure, transparent, and verified. We believe that trust isn’t built overnight — it’s earned through reliability, protection, and accountability.
                </p>
            </section>
            
            <section>
                <h2 className="text-3xl font-bold text-center mb-10">Our Commitment to Safety</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {commitments.map(item => (
                        <div key={item.title} className="flex items-start gap-4 p-6 border rounded-lg bg-card">
                            <div className="flex-shrink-0">{item.icon}</div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-muted-foreground">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            
            <section className="grid md:grid-cols-2 gap-12 items-center bg-secondary/50 p-8 rounded-lg">
                <div>
                    <h2 className="text-3xl font-bold mb-4 flex items-center gap-2"><User className="h-8 w-8" /> For Customers</h2>
                    <p className="text-lg text-muted-foreground mb-4">Hire with Confidence</p>
                    <p className="mb-6">Finding the right professional should feel simple — and safe. That’s why we help you make better decisions with complete transparency.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" /><span>Check verified badges and business details.</span></li>
                        <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" /><span>Read real customer reviews before you hire.</span></li>
                        <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" /><span>Message safely through the Gaupro platform.</span></li>
                        <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" /><span>Report suspicious activity directly to our Trust Team.</span></li>
                    </ul>
                     <p className="mt-4 text-sm font-semibold">We never share your contact details without your consent.</p>
                </div>
                 <div>
                    <h2 className="text-3xl font-bold mb-4 flex items-center gap-2"><Briefcase className="h-8 w-8" /> For Professionals</h2>
                    <p className="text-lg text-muted-foreground mb-4">Protecting Your Reputation</p>
                    <p className="mb-6">Your reputation matters — and we protect it. Gaupro helps genuine professionals stand out while keeping scammers and fake listings out.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" /><span>Only verified customer reviews are published.</span></li>
                        <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" /><span>Your profile data is stored securely.</span></li>
                        <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" /><span>Disputes are reviewed fairly by our Trust & Support team.</span></li>
                    </ul>
                </div>
            </section>
            
            <section>
                <div className="grid md:grid-cols-2 gap-12 items-start">
                     <div>
                        <h2 className="text-3xl font-bold mb-4">🔒 Data Privacy & Security</h2>
                        <p className="text-muted-foreground mb-4">We use advanced encryption and security best practices to safeguard every account on Gaupro.</p>
                         <ul className="space-y-3">
                            <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" /><span>Your data is encrypted during transmission.</span></li>
                            <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" /><span>We never sell your information to third parties.</span></li>
                            <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" /><span>Information is only shared with your consent.</span></li>
                        </ul>
                        <p className="mt-4 text-sm">Learn more in our <Link href="/privacy" className="text-primary underline">Privacy Policy</Link> and <Link href="/terms" className="text-primary underline">Terms of Service</Link>.</p>
                    </div>
                     <div>
                        <h2 className="text-3xl font-bold mb-4">🧭 How We Handle Issues</h2>
                        <p className="text-muted-foreground mb-4">If a report or dispute is raised, our Trust & Safety team investigates immediately. Actions may include:</p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3"><AlertTriangle className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" /><span>Warning or removing users who break our policies.</span></li>
                            <li className="flex items-start gap-3"><AlertTriangle className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" /><span>Pausing accounts for security checks.</span></li>
                            <li className="flex items-start gap-3"><AlertTriangle className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" /><span>Working with authorities when necessary.</span></li>
                        </ul>
                    </div>
                </div>
            </section>

             <section className="text-center border-t pt-16">
                <h2 className="text-3xl font-bold">💬 Report a Concern</h2>
                <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                    See something that doesn’t look right? Help keep the Gaupro community safe. Every report is confidential and reviewed within 24 hours.
                </p>
                <div className="mt-8 flex flex-wrap justify-center items-center gap-6">
                     <a href="mailto:trust@gaupro.co.za" className="flex items-center gap-2 text-primary hover:underline">
                        <Mail className="h-5 w-5"/> trust@gaupro.co.za
                     </a>
                      <a href="#" className="flex items-center gap-2 text-primary hover:underline">
                        <WhatsAppIcon className="h-5 w-5"/> 060 878 7847
                     </a>
                     <Link href="/pro/login" className="flex items-center gap-2 text-primary hover:underline">
                        <Bot className="h-5 w-5"/> Live Chat
                     </Link>
                </div>
                 <p className="text-sm text-muted-foreground mt-4">Support Hours: Mon–Fri 8am–6pm | Sat 9am–1pm</p>
            </section>

            <section className="text-center bg-primary text-primary-foreground p-10 rounded-lg">
                <h2 className="text-3xl font-bold">❤️ Our Promise</h2>
                <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
                    We’re more than a platform — we’re a trusted community. Trust, safety, and community — that's the Gaupro promise.
                </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
