
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function SupportLocalPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-background">
        <article>
          <header className="bg-secondary/50 py-12 md:py-16">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-3xl md:text-4xl tracking-tight max-w-3xl mx-auto">
                Why Supporting Local Small Businesses is the Secret to a Stronger South African Economy
              </h1>
            </div>
          </header>
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="max-w-3xl mx-auto prose lg:prose-lg prose-headings:font-normal prose-headings:text-foreground prose-a:text-primary hover:prose-a:underline">

              <div className="relative w-full aspect-video my-8">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/studio-5618869838-18486.firebasestorage.app/o/SA%20G_resized%20(1).jpg?alt=media&token=dc2ce03a-0e20-4b16-b906-3c786da58f3e"
                  alt="Diverse South African service professionals representing the Gaupro community."
                  fill
                  className="object-cover rounded-lg"
                  data-ai-hint="diverse professionals team"
                />
              </div>

              <section id="introduction">
                <h2 className="text-2xl">Introduction: The Power of Your Choice</h2>
                <p>
                  When you have a leaking pipe, a garden in need of landscaping, or a new business that needs a website, you face a choice: hire a massive international corporation or find a local professional in your neighborhood.
                </p>
                <p>
                  While the "big guys" have huge marketing budgets, the local pros on Gaupro have something more valuable: a direct connection to your community. Every time you hire a local professional, you aren't just ticking a task off your to-do list—you are fueling the South African economy.
                </p>
                <p>
                  Here is why hiring local matters more than ever.
                </p>
              </section>

              <section id="multiplier-effect">
                <h2 className="text-2xl">1. The Multiplier Effect: Keeping Rands in the Community</h2>
                <p>
                  The "Multiplier Effect" is a powerful economic concept. When you hire a local plumber or electrician through Gaupro, that money doesn't disappear into a corporate bank account overseas.
                </p>
                <p>Instead:</p>
                <ul>
                  <li>The professional spends their earnings at your local grocery store.</li>
                  <li>They pay local employees who live in your area.</li>
                  <li>They support other local businesses, like hardware stores or local petrol stations.</li>
                </ul>
                <p>
                  By choosing a pro on Gaupro, you ensure that your money circulates locally, making your own suburb wealthier and more vibrant.
                </p>
              </section>

              <div className="relative w-full aspect-video my-8">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/studio-5618869838-18486.firebasestorage.app/o/The%20Multiplier%20Effect%20A%20(1).jpg?alt=media&token=71971506-2251-4394-8183-4d77377e3d83"
                  alt="A professional electrician in South Africa providing quality home services."
                  fill
                  className="object-cover rounded-lg"
                  data-ai-hint="electrician home"
                />
              </div>

              <section id="job-creation">
                <h2 className="text-2xl">2. Job Creation at the Grassroots Level</h2>
                <p>
                  Small and Medium Enterprises (SMEs) are the backbone of employment in South Africa. By using Gaupro to find vetted professionals, you are directly contributing to job security.
                </p>
                <p>
                  One home renovation project might seem small to you, but for a local contractor, it could be the reason they can afford to hire a new apprentice or keep their assistant employed. Your choice to "hire local" creates a ripple effect of employment across the country.
                </p>
              </section>

              <section id="quality-accountability">
                <h2 className="text-2xl">3. Better Quality and Personalized Accountability</h2>
                <p>
                  When a business is local, their reputation is their lifeblood. On Gaupro, you can see reviews from people in your own city. Because these pros live and work near you, they are more motivated to provide high-quality service.
                </p>
                <ul>
                  <li><strong>Faster Response Times:</strong> They are "near you," meaning less travel time and quicker fixes for emergencies.</li>
                  <li><strong>Local Expertise:</strong> A local gardener knows exactly which plants thrive in your province’s climate. A local builder understands the specific municipal building codes of your area.</li>
                </ul>
              </section>

              <div className="relative w-full aspect-video my-8">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/studio-5618869838-18486.firebasestorage.app/o/Better%20Quality%20and%20Personalized%20Accountability%20A.jpg?alt=media&token=aa8a07b2-2652-41b6-9f7d-1456069cce82"
                  alt="A happy customer and a local service provider shaking hands after a job well done."
                  fill
                  className="object-cover rounded-lg"
                  data-ai-hint="customer handshake"
                />
              </div>

              <section id="digital-evolution">
                <h2 className="text-2xl">4. Supporting the Digital Evolution of Local Talent</h2>
                <p>
                  Many of South Africa’s most talented professionals are masters of their craft—be it roofing, accounting, or tutoring—but they aren't always digital marketing experts.
                </p>
                <p>
                  Gaupro bridges this gap. We give these local heroes a digital storefront to compete with the giants. When you use our platform, you are helping a traditional business thrive in the modern economy. You are ensuring that the best talent gets found, regardless of how big their advertising budget is.
                </p>
              </section>
              
              <div className="relative w-full aspect-video my-8">
                <Image
                  src="https://picsum.photos/seed/gaupro-app-mockup/1200/675"
                  alt="The Gaupro app interface showing how to find local professionals in South Africa."
                  fill
                  className="object-cover rounded-lg"
                  data-ai-hint="app interface"
                />
              </div>

              <section id="conclusion" className="text-center border-t pt-12 mt-12">
                <h2 className="text-2xl">Conclusion: Make Your Next Project Count</h2>
                <p>
                  The next time you need a service, don’t just "search" for anyone—find a local partner. By choosing a pro on Gaupro, you are investing in a neighbor, supporting a family, and building a stronger, more resilient South Africa.
                </p>
                <div className="mt-8">
                  <h3 className="text-xl font-semibold">Ready to find a trusted pro?</h3>
                  <Button asChild size="lg" className="mt-4">
                    <Link href="/browse-categories">Browse Gaupro Service Categories Now</Link>
                  </Button>
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
