import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { Star, CheckCircle, Clock, Percent } from 'lucide-react';
import Link from 'next/link';

const successStrategies = [
    {
        title: "Gaupro Profile Optimization (SEO-Focused)",
        description: "Your profile is your digital storefront. Top earners treat it like prime real estate, using specific keywords and visual content to attract high-value clients.",
        points: [
            'Use location keywords: "plumber Sandton Gaupro"',
            'Include service keywords: "geyser repair," "blocked drains"',
            'Add "near me" variations',
            'Upload 15+ high-quality photos',
            'Complete every single profile section to 100%',
        ]
    },
    {
        title: "Gaupro Response Time Strategy (The Golden Hour)",
        description: "The data is clear: the faster you respond, the higher your chance of winning the job. Top earners have a system to reply in minutes, not hours.",
        points: [
            'Under 30 min response: 78% hire rate',
            '1-4 hours: 45% hire rate',
            'Next day: 20% hire rate',
            'Enable all Gaupro mobile notifications',
        ]
    },
    {
        title: "Gaupro Review Management (Your Digital Reputation)",
        description: "Reviews are the currency of trust online. Top earners actively manage their reputation by consistently earning and responding to reviews.",
        points: [
            'Request reviews politely after every job',
            'Maintain a 4.8+ star average rating',
            'Respond professionally to all reviews (good and bad)',
            'Share 5-star success stories on your profile',
        ]
    },
    {
        title: "Gaupro Lead Conversion Tactics (The 73% Win Rate)",
        description: "It's not just about getting leads; it's about converting them. Top earners use personalized, value-driven quotes to stand out from the competition.",
        points: [
            'Personalized quotes mentioning customer\'s area & problem',
            'Offer multiple pricing packages (Basic, Recommended, Premium)',
            'Include relevant past Gaupro reviews in your quote',
            'Create a sense of urgency with limited-time offers',
        ]
    }
];

const faqItems = [
    {
        question: "How much can I really earn on Gaupro?",
        answer: "Active Gaupro professionals in the top 10% earn between R50,000 and R150,000+ monthly. Your earnings depend on your service category (Plumbing, Electrical, and IT are top earners), location, profile quality, and how quickly you respond to leads."
    },
    {
        question: "How long before I get my first Gaupro job?",
        answer: "Most new professionals who complete their profile to 100% and get verified receive their first leads within 24-48 hours. By responding quickly with a professional quote, many secure their first job within the first week."
    },
    {
        question: "Is Gaupro worth it for professionals?",
        answer: "Based on our data, yes. Top professionals see an average ROI of over 1,200% on their credit purchases. Often, a single successful job can cover the cost of lead credits for several months, making it one of the most cost-effective marketing channels in South Africa."
    },
    {
        question: "What services succeed most on Gaupro?",
        answer: "Emergency and high-demand home services consistently perform the best. This includes Emergency Plumbing, Electrical Work, Geyser Repair, Aircon Services, and Appliance Repair. IT Support and specialized cleaning services also show very high success rates."
    },
    {
        question: "How do I rank higher on Gaupro searches?",
        answer: "The Gaupro ranking algorithm prioritizes Response Time (under 1 hour is critical), Review Rating (maintain 4.5+ stars), and Profile Completion (must be 100%). Consistently high performance in these areas will significantly boost your visibility."
    }
]

export default function HowToSucceedPage() {
  return (
    <main className="flex-grow bg-background">
      <article>
        <header className="bg-secondary/50 py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-normal tracking-tight max-w-4xl mx-auto">
              How to Succeed on Gaupro: Professional Success Strategies That Generate R50,000+ Monthly [2024 Masterclass]
            </h1>
              <p className="mt-4 text-sm text-muted-foreground">Published: December 2024 | 12 min read | 📊 Based on 500+ Top Earner Data</p>
          </div>
        </header>
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-4xl mx-auto prose lg:prose-lg prose-headings:font-normal prose-headings:text-foreground">
              
              <section>
                  <h2 className="text-2xl font-normal">The Gaupro Success Formula: What Top Earners Do Differently</h2>
                  <p className="text-muted-foreground">We analyzed over 500 of our most successful professionals—those consistently earning over R50,000 per month. The secret isn't magic; it's a repeatable formula. Here are the four pillars of their success on Gaupro.</p>
                    <div className="grid md:grid-cols-2 gap-8 my-8 not-prose">
                      {successStrategies.map((strategy, index) => (
                          <Card key={index} className="flex flex-col">
                              <CardHeader>
                                  <CardTitle className="text-xl">{index + 1}. {strategy.title}</CardTitle>
                              </CardHeader>
                              <CardContent className="flex-grow">
                                  <p className="text-sm text-muted-foreground mb-4">{strategy.description}</p>
                                  <ul className="text-sm space-y-2">
                                      {strategy.points.map((point, i) => 
                                      <li key={i} className="flex items-start gap-2">
                                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                          <span>{point}</span>
                                      </li>)}
                                  </ul>
                              </CardContent>
                          </Card>
                      ))}
                  </div>
              </section>

              <section className="not-prose my-12">
                  <h3 className="text-xl font-normal text-center mb-6">Average Earners vs. Top 10% on Gaupro</h3>
                  <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                          <thead>
                              <tr className="border-b">
                                  <th className="p-4 font-semibold">Success Factor</th>
                                  <th className="p-4 font-semibold text-center">Average Earners</th>
                                  <th className="p-4 font-semibold text-center">Top 10% Earners</th>
                                  <th className="p-4 font-semibold text-center">Impact</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr className="border-b">
                                  <td className="p-4 flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> Response Time</td>
                                  <td className="p-4 text-center text-muted-foreground">4+ hours</td>
                                  <td className="p-4 text-center font-bold text-green-600">Under 47 min</td>
                                  <td className="p-4 text-center"><Badge variant="secondary" className="bg-green-100 text-green-800">3x more hires</Badge></td>
                              </tr>
                              <tr className="border-b">
                                  <td className="p-4 flex items-center gap-2"><Percent className="h-4 w-4 text-primary" /> Profile Completion</td>
                                  <td className="p-4 text-center text-muted-foreground">60%</td>
                                  <td className="p-4 text-center font-bold text-green-600">100%</td>
                                  <td className="p-4 text-center"><Badge variant="secondary" className="bg-green-100 text-green-800">2x more views</Badge></td>
                              </tr>
                              <tr className="border-b">
                                  <td className="p-4 flex items-center gap-2"><Image src="https://picsum.photos/seed/photohint/20/20" alt="Photos" width={16} height={16} data-ai-hint="photos icon" /> Photos Uploaded</td>
                                  <td className="p-4 text-center text-muted-foreground">3-4</td>
                                  <td className="p-4 text-center font-bold text-green-600">15+</td>
                                  <td className="p-4 text-center"><Badge variant="secondary" className="bg-green-100 text-green-800">85% more trust</Badge></td>
                              </tr>
                              <tr>
                                  <td className="p-4 flex items-center gap-2"><Star className="h-4 w-4 text-primary" /> Review Average</td>
                                  <td className="p-4 text-center text-muted-foreground">4.2 stars</td>
                                  <td className="p-4 text-center font-bold text-green-600">4.8+ stars</td>
                                  <td className="p-4 text-center"><Badge variant="secondary" className="bg-green-100 text-green-800">5x more leads</Badge></td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </section>
              
              <section className="space-y-6 pt-12 mt-12 border-t">
                  <h2 className="text-2xl font-normal">Frequently Asked Questions About Gaupro Success</h2>
                  <p className="text-muted-foreground">Your most common questions about maximizing your earnings on Gaupro, answered.</p>

                  <Accordion type="single" collapsible className="w-full">
                      {faqItems.map((item, index) => (
                          <AccordionItem value={`item-${index}`} key={index}>
                              <AccordionTrigger>{item.question}</AccordionTrigger>
                              <AccordionContent>
                                  <p>{item.answer}</p>
                              </AccordionContent>
                          </AccordionItem>
                      ))}
                  </Accordion>
              </section>

              <section className="not-prose text-center bg-primary text-primary-foreground p-10 my-12 rounded-lg">
                  <h2 className="text-3xl font-normal">Ready to Transform Your Business?</h2>
                  <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
                      Join 15,000+ professionals who trust Gaupro to connect them with real customers, build their reputation, and grow their income.
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
                      <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                          <Link href="/pro/signup">Start Free Today - No Credit Card</Link>
                      </Button>
                  </div>
              </section>


              <section className="space-y-4 pt-8 mt-8 border-t bg-secondary/50 p-6 rounded-lg">
                  <h3 className="text-xl font-normal">About This Article</h3>
                  <p className="text-sm text-muted-foreground">This comprehensive guide is maintained by the Gaupro content team and updated monthly with the latest platform features, success stories, and market insights based on real data from our top-performing professionals.</p>
                  <p className="text-sm"><strong className="text-foreground">Last Updated:</strong> December 2024</p>
                  <p className="text-sm"><strong className="text-foreground">Next Update:</strong> January 2025</p>
                  <div className="mt-4">
                      <p className="text-sm font-semibold">Share this guide and help other South African professionals succeed:</p>
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
  );
}
