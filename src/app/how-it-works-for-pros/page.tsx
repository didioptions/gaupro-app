
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Rocket, Briefcase, Verified, Star, BarChart, CheckCircle, Wallet, Map, Tag, Info } from 'lucide-react';
import GrowClientBaseCta from '@/components/layout/grow-client-base-cta';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const steps = [
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: "Step 1: Create Your Professional Profile",
    description: "Start by creating your free Gaupro profile. This is your digital business card — where potential customers can learn about your skills, experience, and services.",
    details: [
        "Your business name & logo",
        "Service categories (e.g., electrician, cleaner, tutor, etc.)",
        "Areas you serve",
        "Photos of your work",
        "Qualifications & experience",
        "Short bio"
    ],
    tip: "Complete your profile 100% to boost your ranking in Gaupro search results."
  },
  {
    icon: <Verified className="h-10 w-10 text-primary" />,
    title: "Step 2: Get Verified Leads in Real Time",
    description: "Once your profile is live, Gaupro connects you with real customers posting jobs in your area. You’ll receive instant notifications for new job requests that match your skills.",
    details: [
        "Customers post what they need (e.g., “Need a plumber in Johannesburg”)",
        "Gaupro matches them with qualified Pros",
        "You get an instant lead notification email",
        "Review the job details and respond with your quote"
    ],
    tip: "You only pay a small fee to unlock the customer’s contact info."
  },
  {
    icon: <span className="text-3xl">💰</span>,
    title: "Step 3: Win Jobs & Get Paid Directly",
    description: "Once the customer accepts your quote, you contact them directly to confirm details. You set your own rates, terms, and payment method — Gaupro does not take a commission or process payments.",
    details: [
        "You control your earnings.",
        "You manage your client relationship.",
        "You get paid directly by the customer."
    ],
    tip: "Contact leads within 1 hour for the best chance of getting hired."
  },
  {
    icon: <Star className="h-10 w-10 text-primary" />,
    title: "Step 4: Build Trust with Reviews",
    description: "After every job, customers can rate your work and leave a verified review. High ratings help you get noticed, attract more clients, and move up in Gaupro’s local rankings.",
    details: [],
    tip: "Encourage every satisfied customer to review you — it builds your reputation and credibility fast."
  },
  {
    icon: <BarChart className="h-10 w-10 text-primary" />,
    title: "Step 5: Track, Learn & Grow",
    description: "Gaupro gives you the tools to manage and grow your business smarter:",
    details: [
        "Dashboard Analytics — Track views, quote requests, and reviews",
        "Lead Management Centre — Respond faster and convert more jobs",
        "Profile Insights — See how your page performs in search results",
        "Guides & Tips — Learn from real Pro Success Stories"
    ],
    tip: ""
  }
];

const benefits = [
    "Verified, real clients in your city",
    "No commissions — keep what you earn",
    "Easy-to-use dashboard for managing quotes and reviews",
    "Build your brand with real customer feedback",
    "Access to support, guides, and Pro Success Stories"
];

const leadInfo = [
    {
        icon: <Tag className="h-6 w-6 text-primary" />,
        title: "Lead Pricing (Credits)",
        content: "Pros buy credits to contact new customers. A single credit is R30, with bulk packs reducing the cost to as low as R24/credit. Each lead costs between 1–5 credits, varying by service category, location, and demand. Often, one job covers months of advertising costs."
    },
    {
        icon: <Wallet className="h-6 w-6 text-primary" />,
        title: "Fees & Payments",
        content: "There are no monthly or annual fees. You only pay for the leads you choose to purchase. You can pay for credits via Credit/Debit card or EFT (direct deposit)."
    },
    {
        icon: <Map className="h-6 w-6 text-primary" />,
        title: "Service Areas",
        content: "Set your service radius directly in your Gaupro profile. You will only receive lead notifications from customers within your designated area, ensuring all your job alerts are relevant."
    },
     {
        icon: <Info className="h-6 w-6 text-primary" />,
        title: "Important Note",
        content: "Gaupro connects you with customers; we do not process payments for jobs. Customers pay you directly based on the terms you agree upon together."
    }
]

export default function HowItWorksForProsPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-background">
        <section className="bg-secondary/50 py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4 max-w-3xl mx-auto">
              ⚙️ How Gaupro Works for Pros
            </h1>
            <p className="text-lg text-foreground mb-6 max-w-2xl mx-auto">
              Grow Your Business. Connect with Real Clients. Get Paid Directly.
            </p>
            <p className="text-foreground max-w-3xl mx-auto">
              Gaupro makes it easy for South African professionals to find new customers, win more jobs, and grow their business — all in one place. Whether you’re a plumber, web designer, photographer, or beauty specialist, Gaupro helps you connect with verified local leads that match your skills and service area.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-16">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row items-start gap-8">
                  <div className="flex-shrink-0 flex items-center justify-center h-20 w-20 rounded-full bg-primary/10 mx-auto md:mx-0">
                    {step.icon}
                  </div>
                  <div className="flex-grow text-center md:text-left">
                    <h2 className="text-2xl font-bold mb-3">{step.title}</h2>
                    <p className="text-foreground mb-4">{step.description}</p>
                    {step.details.length > 0 && (
                        <ul className="space-y-2 text-left list-disc list-inside text-foreground mb-4">
                            {step.details.map((detail, i) => <li key={i}>{detail}</li>)}
                        </ul>
                    )}
                    {step.tip && <p className="text-sm italic text-primary-foreground bg-primary/90 p-3 rounded-md">🔔 Pro Tip: {step.tip}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24 bg-secondary/50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-10">Understanding Leads, Credits & Costs</h2>
                     <div className="grid md:grid-cols-2 gap-8">
                        {leadInfo.map((info, index) => (
                          <Link key={index} href="#" className="group">
                            <Card className="bg-background h-full transition-shadow group-hover:shadow-lg">
                                <CardHeader className="flex flex-row items-center gap-4">
                                    {info.icon}
                                    <CardTitle className="text-xl">{info.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-foreground">{info.content}</p>
                                </CardContent>
                            </Card>
                          </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                     <h2 className="text-3xl font-bold text-center mb-8">💡 Why Pros Love Gaupro</h2>
                     <ul className="space-y-3">
                        {benefits.map(benefit => (
                            <li key={benefit} className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg border">
                                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <span className="text-foreground text-lg">{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>


        <section className="py-16">
            <div className="container mx-auto px-4 text-center">
                 <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button asChild size="lg">
                        <Link href="/pro/signup">Join Gaupro as a Pro</Link>
                    </Button>
                    <Button asChild size="lg" variant="secondary">
                        <Link href="/pro-success-stories">Explore Pro Success Stories</Link>
                    </Button>
                     <Button asChild size="lg" variant="outline">
                        <Link href="/pro-centre">Learn More in the Pro Centre</Link>
                    </Button>
                 </div>
            </div>
        </section>
        
      </main>
      <Footer />
    </>
  );
}
