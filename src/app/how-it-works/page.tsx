
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const howItWorksSteps = [
    {
        title: "Tell us what you need",
        description: "Simply answer a few easy questions"
    },
    {
        title: "Get free quotes",
        description: "You'll be contacted by the best available Pros near you (up to 5 pros can contact you)"
    },
    {
        title: "Choose the best Pro",
        description: "Compare quotes and read reviews of the pros who contact you"
    },
    {
        title: "Get it done and leave a review",
        description: "It's that simple!"
    }
];

const topTips = [
    {
        title: "Read reviews",
        description: "Browse what past clients say. Reviews give you a peek into their work quality, reliability, and overall reputation."
    },
    {
        title: "Check for experience",
        description: "Make sure they've done this kind of work before. The right background and skills can make all the difference."
    },
    {
        title: "Don't pay everything upfront",
        description: "A small deposit might be okay, but steer clear of anyone who asks for full payment before getting started."
    },
    {
        title: "Put it all in writing",
        description: "A clear written agreement helps both sides stay on track with what's expected, when it's due, and how much it'll cost."
    }
];

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <section className="py-20 md:py-24 bg-secondary/50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 max-w-3xl mx-auto">
              Hiring a Pro on Gaupro is Simple, Safe, and Smart.
            </h1>
            <p className="text-lg text-muted-foreground mb-8">Follow these steps to get your project done right.</p>
            <Button asChild size="lg" className="px-8 py-6 text-lg">
              <Link href="/post-request">Get Started Now</Link>
            </Button>
          </div>
        </section>

        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="space-y-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">How it works?</h2>
                        <ol className="space-y-4">
                            {howItWorksSteps.map((step, index) => (
                                <li key={index} className="flex">
                                    <span className="text-primary font-bold mr-4 text-lg">{index + 1}.</span>
                                    <div>
                                        <h3 className="font-bold inline">{step.title}</h3>
                                        <p className="inline text-muted-foreground ml-2">- {step.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-6">Top tips to hire the right pro:</h2>
                        <ol className="space-y-4">
                            {topTips.map((tip, index) => (
                                <li key={index} className="flex">
                                    <span className="text-primary font-bold mr-4 text-lg">{index + 1}.</span>
                                    <div>
                                        <h3 className="font-bold inline">{tip.title}</h3>
                                        <p className="inline text-muted-foreground ml-2">- {tip.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                    
                    <div>
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
            </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
