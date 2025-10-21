
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const successStrategies = [
    {
        title: "Gaupro Profile Optimization (SEO-Focused)",
        points: [
            'Use location keywords: "plumber Sandton Gaupro"',
            'Include service keywords: "geyser repair," "blocked drains"',
            'Add "near me" variations',
            'Upload 10+ photos',
            'Complete every profile section',
        ]
    },
    {
        title: "Gaupro Response Time Strategy",
        points: [
            'Under 1 hour: 70% hire rate',
            '1-4 hours: 45% hire rate',
            'Next day: 20% hire rate',
            'Enable Gaupro mobile notifications',
        ]
    },
    {
        title: "Gaupro Review Management",
        points: [
            'Request reviews after every job',
            'Maintain 4.5+ star average',
            'Respond to all reviews',
            'Share success stories',
        ]
    },
    {
        title: "Gaupro Lead Conversion Tactics",
        points: [
            'Personalized quotes mentioning customer\'s area',
            'Clear pricing breakdown',
            'Include relevant past Gaupro reviews',
            'Offer multiple service packages',
        ]
    }
];

const faqItems = [
    {
        question: "How much can I really earn on Gaupro?",
        answer: "Active Gaupro professionals earn R25,000-R50,000 monthly on average. Top performers earn R100,000-R200,000+. Your earnings depend on your service, location, and effort."
    },
    {
        question: "How long before I get my first Gaupro job?",
        answer: "Most professionals get their first Gaupro lead within 48 hours. Convert it by responding quickly with a professional quote."
    },
    {
        question: "Is Gaupro worth it for professionals?",
        answer: "With 89% of active pros earning R25,000+ monthly and ROI within the first job, Gaupro is worth it for serious professionals."
    },
    {
        question: "What services succeed most on Gaupro?",
        answer: "Emergency services (plumbing, electrical), home improvements, and digital services show highest success rates on Gaupro."
    },
    {
        question: "How do I rank higher on Gaupro searches?",
        answer: "Complete your profile, maintain high ratings, respond quickly, and use location-specific keywords in your description."
    }
]

export default function HowToSucceedPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-white">
        <article>
          <header className="bg-secondary/50 py-12 md:py-16">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-2xl md:text-3xl font-semibold tracking-tight max-w-3xl mx-auto">
                How to Succeed on Gaupro: Professional Success Strategies
              </h1>
            </div>
          </header>
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="max-w-3xl mx-auto prose lg:prose-lg prose-headings:font-bold prose-headings:text-foreground">
                <p className="lead text-xl text-muted-foreground">
                    Based on analyzing successful Gaupro professionals earning R50,000+ monthly, here's the proven Gaupro success strategy.
                </p>

                <section className="space-y-6">
                    <h2 className="text-2xl">Gaupro Success Formula: What Top Earners Do Differently</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {successStrategies.map((strategy, index) => (
                            <div key={index} className="p-6 border rounded-lg">
                                <h3 className="text-xl font-semibold mb-3">{index + 1}. {strategy.title}</h3>
                                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                    {strategy.points.map((point, i) => <li key={i}>{point}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
                
                <section className="space-y-6 pt-12 mt-12 border-t">
                    <h2 className="text-2xl">Frequently Asked Questions About Gaupro Success</h2>
                    <p className="text-muted-foreground">Your Gaupro Success Questions Answered.</p>

                    <Accordion type="single" collapsible className="w-full">
                        {faqItems.map((item, index) => (
                            <AccordionItem value={`item-${index}`} key={index}>
                                <AccordionTrigger>{item.question}</AccordionTrigger>
                                <AccordionContent>
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </section>

                <section className="space-y-4 pt-8 mt-8 border-t bg-secondary/50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold">About This Article</h3>
                    <p className="text-sm text-muted-foreground">This comprehensive guide is maintained by the Gaupro content team and updated monthly with the latest platform features, success stories, and market insights.</p>
                    <p className="text-sm"><strong className="text-foreground">Last Updated:</strong> December 2024</p>
                    <p className="text-sm"><strong className="text-foreground">Next Update:</strong> January 2025</p>
                    <div className="mt-4">
                        <p className="text-sm font-semibold">Share this guide and help other South Africans discover smarter hiring:</p>
                        <div className="flex gap-2 flex-wrap text-sm mt-2">
                          <a href="#" className="text-primary hover:underline">[Share on WhatsApp]</a>
                          <span className="text-muted-foreground">|</span>
                          <a href="#" className="text-primary hover:underline">[Share on Facebook]</a>
                          <span className="text-muted-foreground">|</span>
                          <a href="#" className="text-primary hover:underline">[Share on LinkedIn]</a>
                          <span className="text-muted-foreground">|</span>
                          <a href="#" className="text-primary hover:underline">[Email to Friend]</a>
                        </div>
                    </div>
                </section>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
