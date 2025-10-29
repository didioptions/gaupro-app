
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const howItWorksSteps = [
  {
    icon: '🔍',
    title: 'Step 1: Tell Us What You Need',
    description: 'It starts with your job request. Just answer a few quick questions—like your location, what service you need, and your preferred time.',
    example: '“I need a plumber in Sandton to fix a leaking tap tomorrow.”',
  },
  {
    icon: '💬',
    title: 'Step 2: Get Matched with Verified Pros',
    description:
      'Within minutes, you’ll receive responses from local professionals who are interested and available. Each pro is verified by Gaupro to ensure authenticity, reliability, and real experience.',
    details: [
      'Quotes or pricing estimates',
      'Ratings and reviews from real customers',
      'Profile details and contact info',
    ],
  },
  {
    icon: '🤝',
    title: 'Step 3: Choose the Right Pro',
    description:
      'Compare your options easily—no pressure, no middleman. You can message each pro directly, ask questions, and confirm all details before hiring.',
    details: [
      'Compare prices and experience',
      'Read verified reviews',
      'View photos of previous work',
      'Choose who feels right for your project',
    ],
  },
  {
    icon: '💼',
    title: 'Step 4: Get the Job Done',
    description:
      'Once you’ve chosen your pro, they’ll contact you to confirm your booking or schedule the job. Gaupro connects you directly—so you can agree on payment, timing, and project details with your chosen provider.',
    tip: 'Pro Tip: Always confirm details in writing',
  },
  {
    icon: '⭐',
    title: 'Step 5: Review Your Experience',
    description:
      'After your job is done, leave a review to help other customers make informed decisions. Your feedback also helps great professionals grow their business—and keeps our community trusted and transparent.',
    details: ['Communication', 'Quality of work', 'Value for money', 'Professionalism'],
  },
];

const customerBenefits = [
    "Fast, free, simple job posting",
    "Real, verified professionals—no spam",
    "Transparent pricing and honest reviews",
    "Direct contact with service providers",
    "Free to use—you only pay the pro you hire",
];

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-normal mb-4 max-w-2xl mx-auto">
              How Gaupro Works for Customers
            </h1>
            <p className="text-lg text-foreground mb-8 max-w-3xl mx-auto">
              Find Trusted Local Professionals — Fast, Easy, and Secure. Gaupro helps you connect with qualified local service providers near you. No more endless searching — simply tell us what you need, and we’ll match you with the right pros in minutes.
            </p>
            <Button asChild size="lg" className="px-8 text-lg">
                <Link href="/post-request">Post Request</Link>
            </Button>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-16">
              {howItWorksSteps.map((step, index) => (
                <div key={index} className="flex flex-col sm:flex-row items-start gap-8">
                  <div className="text-5xl flex-shrink-0 mx-auto sm:mx-0">{step.icon}</div>
                  <div className="flex-grow text-center sm:text-left">
                    <h2 className="text-2xl font-bold mb-3">{step.title}</h2>
                    <p className="text-foreground mb-4">{step.description}</p>
                    {step.example && (
                        <p className="text-foreground italic bg-secondary/50 p-3 rounded-md">
                            {step.example}
                        </p>
                    )}
                    {step.details && (
                        <ul className="space-y-1 text-foreground list-disc list-inside mt-4">
                            {step.details.map(detail => <li key={detail}>{detail}</li>)}
                        </ul>
                    )}
                     {step.tip && (
                        <p className="text-sm font-semibold text-primary mt-4">
                           {step.tip}
                        </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-12 mt-20 border-t pt-16">
                 <div>
                    <h2 className="text-2xl font-bold mb-6">🛡️ Gaupro Safety & Trust</h2>
                    <p className="text-foreground mb-4">We take your safety seriously. Every pro on Gaupro goes through a verification process that checks business credentials and customer reviews.</p>
                     <p className="text-foreground mb-4">🔐 You’re protected with:</p>
                     <ul className="list-disc list-inside space-y-2 text-foreground">
                        <li>Verified professional profiles</li>
                        <li>Customer feedback and ratings</li>
                        <li>Transparent communication</li>
                        <li>Direct contact — no hidden fees</li>
                     </ul>
                </div>
                 <div>
                    <h2 className="text-2xl font-bold mb-6">💬 Why Customers Love Gaupro</h2>
                     <ul className="list-disc list-inside space-y-2 text-foreground">
                        {customerBenefits.map(benefit => <li key={benefit}>{benefit}</li>)}
                    </ul>
                </div>
            </div>

            <div className="text-center mt-20 border-t pt-16">
                <h2 className="text-2xl font-bold mb-4">🏁 Ready to Get Started?</h2>
                <p className="text-foreground max-w-xl mx-auto mb-8">
                    Find the right pro for your next project — in just a few clicks.
                </p>
                 <div className="flex justify-center gap-4">
                    <Button asChild size="lg">
                        <Link href="/post-request">Post a Job →</Link>
                    </Button>
                    <Button asChild size="lg" variant="secondary">
                        <Link href="/how-it-works-for-pros">How Gaupro Works for Pros →</Link>
                    </Button>
                 </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
