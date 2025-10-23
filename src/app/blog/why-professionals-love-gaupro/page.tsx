
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent } from '@/components/ui/card';

export default function WhyProfessionalsLoveGauproPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-background">
        <article>
          <header className="bg-secondary/50 py-12 md:py-16">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight max-w-3xl mx-auto">
                Why 15,000+ Professionals Choose Gaupro to Grow Their Business
              </h1>
            </div>
          </header>
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="max-w-3xl mx-auto prose lg:prose-lg prose-headings:font-bold prose-headings:text-foreground prose-a:text-primary hover:prose-a:underline">
                <p className="lead text-xl text-muted-foreground">
                    For Service Professionals: Gaupro is a Business Game-Changer.
                </p>
                <section id="why-pros-love" className="space-y-6 scroll-mt-20">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Before joining Gaupro, professionals struggled with:</h3>
                            <ul className="list-none p-0 space-y-2 text-muted-foreground">
                                <li>❌ Expensive advertising with poor returns</li>
                                <li>❌ Time-wasters and no-shows</li>
                                <li>❌ Competing on price alone</li>
                                <li>❌ No online presence or credibility</li>
                                <li>❌ Feast or famine work cycles</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">With Gaupro, professionals enjoy:</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold">✅ Quality Leads Daily</h4>
                                    <ul className="list-disc list-inside text-muted-foreground">
                                        <li>Only serious customers who need services now</li>
                                        <li>Detailed job descriptions prevent misunderstandings</li>
                                        <li>Direct access to customers actively comparing options</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold">✅ Build Online Reputation</h4>
                                    <ul className="list-disc list-inside text-muted-foreground">
                                        <li>Collect verified reviews automatically</li>
                                        <li>Showcase portfolio to thousands</li>
                                        <li>Gaupro verification badge builds trust</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold">✅ Flexible Membership Options</h4>
                                    <ul className="list-disc list-inside text-muted-foreground">
                                        <li>Free tier to get started</li>
                                        <li>Affordable premium plans</li>
                                        <li>Pay only for the leads you want</li>
                                    </ul>
                                </div>
                                 <div>
                                    <h4 className="font-semibold">✅ Business Growth Tools</h4>
                                    <ul className="list-disc list-inside text-muted-foreground">
                                        <li>Dashboard showing performance metrics</li>
                                        <li>Response time tracking</li>
                                        <li>Competitor insights</li>
                                        <li>Seasonal demand data</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                     <blockquote className="mt-4 border-l-4 pl-4 italic text-muted-foreground">
                        "Gaupro transformed my one-man operation into a thriving business with 3 employees. I've completed 500+ jobs through Gaupro with a 4.9-star rating. The platform pays for itself in the first job every month!"
                        <cite className="block not-italic mt-2 font-semibold">- John from John's Plumbing, Cape Town</cite>
                    </blockquote>

                     <div>
                        <h3 className="text-xl font-semibold">Gaupro Success Metrics for Professionals:</h3>
                        <ul className="list-disc list-inside text-muted-foreground">
                            <li>Average rating: 4.7/5 stars</li>
                            <li>Jobs completed: 200,000+ nationwide</li>
                            <li>Revenue generated: R50+ million for SA professionals</li>
                            <li>Growth rate: 40% increase in customer base within 6 months</li>
                        </ul>
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
