
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { RequestQuoteDialog } from '@/components/request-quote-dialog';

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
        <section className="py-16 md:py-20 bg-secondary/50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 max-w-2xl mx-auto">
              🧭 How Gaupro Works for Customers
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Find Trusted Local Professionals — Fast, Easy, and Secure. Gaupro helps you connect with qualified local service providers near you. No more endless searching — simply tell us what you need, and we’ll match you with the right pros in minutes.
            </p>
            <RequestQuoteDialog>
              <Button size="lg" className="px-8 text-lg">Get Started Now</Button>
            </RequestQuoteDialog>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-16">
              {howItWorksSteps.map((step, index) => (
                <div key={index} className="flex flex-col sm:flex-row items-start gap-8">
                  <div className="text-5xl flex-shrink-0 mx-auto sm:mx-0">{step.icon}</div>
                  <div className="flex-grow text-center sm:text-left">
                    <h2 className="text-2xl font-bold mb-3">{step.title}</h2>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    {step.example && (
                        <p className="text-muted-foreground italic bg-gray-100 p-3 rounded-md">
                            {step.example}
                        </p>
                    )}
                    {step.details && (
                        <ul className="space-y-1 text-muted-foreground list-disc list-inside mt-4">
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
                    <p className="text-muted-foreground mb-4">We take your safety seriously. Every pro on Gaupro goes through a verification process that checks business credentials and customer reviews.</p>
                     <p className="text-muted-foreground mb-4">🔐 You’re protected with:</p>
                     <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Verified professional profiles</li>
                        <li>Customer feedback and ratings</li>
                        <li>Transparent communication</li>
                        <li>Direct contact — no hidden fees</li>
                     </ul>
                </div>
                 <div>
                    <h2 className="text-2xl font-bold mb-6">💬 Why Customers Love Gaupro</h2>
                     <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {customerBenefits.map(benefit => <li key={benefit}>{benefit}</li>)}
                    </ul>
                </div>
            </div>

            <div className="text-center mt-20 border-t pt-16">
                <h2 className="text-2xl font-bold mb-4">🏁 Ready to Get Started?</h2>
                <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                    Find the right pro for your next project — in just a few clicks.
                </p>
                 <div className="flex justify-center gap-4">
                    <RequestQuoteDialog>
                      <Button size="lg">Post a Job →</Button>
                    </RequestQuoteDialog>
                    <Button asChild size="lg" variant="secondary">
                        <Link href="/how-it-works-for-pros">How Gaupro Works for Pros →</Link>
                    </Button>
                 </div>
            </div>

             <div className="mt-20 border-t pt-16">
                <h2 className="text-3xl font-bold mb-6">Terms and conditions</h2>
                <div className="space-y-4 text-muted-foreground">
                    <p>
                        Gaupro is an online platform that allows customers to find and hire Pros - local service providers across over 100 different types of services, and helps these Pros to grow and manage their businesses.
                    </p>
                    <p>
                        By using the Gaupro Platform, whether as a customer or as a Pro, you are acknowledging your acceptance of the terms below:
                    </p>
                    <ul className="space-y-2 list-inside">
                        <li><Link href="/terms" className="text-primary hover:underline">Gaupro User Terms and Conditions</Link></li>
                        <li><Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link></li>
                        <li><Link href="#" className="text-primary hover:underline">PAIA</Link></li>
                    </ul>
                        <p className="text-sm">
                        Please note: Gaupro does not itself provide any of the Pro Services in any way or any products relating to the Pro Services. Pro Services are carried out directly by the Pros, who may be found through use of the Gaupro Platform. All agreements are entered into between the Customer and the Pro.
                    </p>
                    <p>
                        If you have more questions, please feel free to contact us at <Link href="mailto:info@gaupro.co.za" className="text-primary hover:underline">info@gaupro.co.za</Link>
                    </p>
                </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
