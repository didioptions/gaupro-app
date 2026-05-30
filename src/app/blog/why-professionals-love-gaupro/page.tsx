import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function WhyProsLoveGauproPage() {
  return (
    <main className="flex-grow bg-background">
      <article>
        <header className="bg-secondary/50 py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl tracking-tight max-w-3xl mx-auto">
              Why Service Professionals in South Africa Love Gaupro
            </h1>
          </div>
        </header>
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-3xl mx-auto prose lg:prose-lg prose-headings:font-normal prose-headings:text-foreground prose-a:text-primary hover:prose-a:underline">
            
            <p>For small businesses and independent contractors in South Africa, finding high-quality leads can be a constant struggle. Gaupro was built specifically to solve this problem, providing a platform that empowers pros to grow their business efficiently and affordably.</p>
            
            <section id="quality-leads">
              <h2>1. Access to High-Intent Leads</h2>
              <p>Unlike traditional advertising where you pay for impressions and hope for the best, Gaupro connects you with customers who are actively looking for the services you provide. These are high-intent leads ready to hire.</p>
            </section>

            <section id="cost-effective">
              <h2>2. Cost-Effective Marketing</h2>
              <p>With our pay-per-lead system, you only pay when you choose to respond to a customer request. There are no monthly subscription fees, making it one of the most cost-effective marketing channels available to South African professionals today.</p>
            </section>

            <section id="reputation-building">
              <h2>3. Build a Trusted Online Reputation</h2>
              <p>Every successful job on Gaupro can lead to a verified review. These reviews are displayed prominently on your profile, helping you build a strong reputation that attracts even more customers.</p>
            </section>
            
            <section id="get-started" className="text-center border-t pt-12 mt-12">
              <h2 className="text-3xl">Ready to Grow Your Business?</h2>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Join thousands of successful professionals on Gaupro and start receiving real leads today.</p>
              <div className="mt-8">
                  <Button asChild size="lg">
                      <Link href="/pro/signup">Join Gaupro as a Pro Now</Link>
                  </Button>
              </div>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}
