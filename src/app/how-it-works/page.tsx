
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const howItWorksSteps = [
    {
        title: "Tell us what you need",
        description: "Simply answer a few easy questions about your service requirements."
    },
    {
        title: "Get free quotes",
        description: "You'll be contacted by the best available Pros (service professionals) near you. Up to 4 Pros can contact you with their offers."
    },
    {
        title: "Choose the best Pro",
        description: "Compare the quotes you receive and read reviews from past clients of the Pros who contact you."
    },
    {
        title: "Get it done and leave a review",
        description: "Once the job is complete, you can provide feedback on the service. It's that simple!"
    }
];

const topTips = [
    {
        title: "Read reviews",
        description: "Browse what past clients say about their experience. Reviews offer valuable insights into a Pro's work quality, reliability, and overall reputation."
    },
    {
        title: "Check for experience",
        description: "Make sure the Pro has a proven track record and has successfully completed this kind of work before. The right background and skills can significantly impact the outcome."
    },
    {
        title: "Don't pay everything upfront",
        description: "A small deposit might be acceptable, but be cautious of anyone who asks for full payment before the work has even started."
    },
    {
        title: "Put it all in writing",
        description: "Always ensure there's a clear written agreement. This helps both parties stay aligned on what's expected, including timelines, deliverables, and the total cost."
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
              Gaupro empowers service providers across South Africa to expand their reach and connect with a wider client base.
            </h1>
            <Button asChild size="lg" className="px-8 py-6 text-lg">
              <Link href="/pro/register">Create Free Account</Link>
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
                                        <p className="inline text-muted-foreground ml-2">{step.description}</p>
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
                                        <p className="inline text-muted-foreground ml-2">{tip.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                    
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Terms and conditions</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                Gaupro is an online platform that allows customers to find and hire Pros - local service providers across a wide range of different services, and helps these Pros to grow and manage their businesses.
                            </p>
                            <p>
                                By using the Gaupro Platform, whether as a customer or as a Pro, you are acknowledging your acceptance of the terms below:
                            </p>
                            <ul className="space-y-2 list-inside">
                                <li><Link href="#" className="text-primary hover:underline">Gaupro User Terms and Conditions</Link></li>
                                <li><Link href="#" className="text-primary hover:underline">Privacy Policy</Link></li>
                                <li><Link href="#" className="text-primary hover:underline">PAIA (Promotion of Access to Information Act)</Link></li>
                            </ul>
                             <p className="text-sm">
                                Please note: Gaupro does not itself provide any of the Pro Services in any way or any products relating to the Pro Services. Pro Services are carried out directly by the Pros, who may be found through use of the Gaupro Platform. All agreements are entered into directly between the Customer and the Pro.
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
