import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { allProfessionals } from '@/lib/professionals-data';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import InlineQuoteForm from '@/components/inline-quote-form';
import ProfessionalCard from '@/components/services/professional-card';
import { CategoryImages } from '@/lib/category-images';

export default function TopRubbleRemovalPage() {
  const proCategory = 'rubble-removal';
  const pros = allProfessionals[proCategory] || [];
  const topCompanies = pros.sort((a, b) => (b.rating || 0) - (a.rating || 0)).slice(0, 8);

  const heroImage = CategoryImages.find(p => p.id === 'rubble-removal-image');

  const totalReviews = pros.reduce((acc, pro) => acc + (pro.reviews || 0), 0);
  const avgRating = pros.length > 0 
    ? (pros.reduce((acc, pro) => acc + (pro.rating || 0), 0) / pros.length).toFixed(1)
    : '5.0';

  const benefits = [
    '🛡️ Fully Vetted Companies',
    '📈 High Customer Ratings',
    '🤲 Service You Can Trust',
    '📍 Local & Reliable',
    '✨ Consistent Quality Work',
    '📞 Easy, Safe & Quick Bookings',
  ];

  return (
    <>
      <Header />
      <main className="flex-grow">
         <section className="relative min-h-[500px] flex items-center justify-center text-center text-white">
            {heroImage && (
                <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description || "Rubble removal service background"}
                    fill
                    className="object-cover"
                    priority
                    data-ai-hint={heroImage.imageHint}
                />
            )}
             <div className="absolute inset-0 bg-black/60" />
             <div className="relative container mx-auto px-4 grid md:grid-cols-2 items-center gap-8 text-left">
                <div className="hidden md:block">
                  <h1 className="text-4xl md:text-5xl font-normal">Rubble Removal Companies</h1>
                  <p className="mt-4 text-lg text-white/90">
                      Get matched with top-rated, verified professionals for waste management and rubble removal.
                  </p>
                </div>
                <InlineQuoteForm service="rubble-removal" location="South Africa" />
             </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-left mb-8">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Link href="/" className="hover:text-primary">Gaupro</Link>
                    <ChevronRight className="h-4 w-4" />
                    <span className="font-medium text-foreground">Top Rubble Removal Companies</span>
                </div>
                <h2 className="text-3xl mt-1">Top Rubble Removal Companies</h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-6">
                    {topCompanies.map((pro) => (
                        <ProfessionalCard key={pro.id} professional={pro} service={proCategory} />
                    ))}
                </div>
                <aside className="space-y-8">
                    <div className="p-6 border rounded-lg bg-card">
                        <h3 className="mb-3 font-semibold text-foreground">Need Rubble Removal Services?</h3>
                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                            <li>{totalReviews}+ Customer reviews for rubble removal</li>
                            <li>Efficient site clearing from vetted local businesses</li>
                            <li>High customer satisfaction with an average {avgRating}/5 rating</li>
                            <li>View Top Rubble Removal Pros today</li>
                        </ul>
                    </div>
                     <div className="p-6 border rounded-lg bg-card">
                        <h3 className="mb-3 font-semibold text-foreground">Why Use Gaupro?</h3>
                        <ul className="text-sm text-muted-foreground space-y-2">
                            {benefits.map(benefit => <li key={benefit}>{benefit}</li>)}
                        </ul>
                    </div>
                    <div className="p-6 border rounded-lg bg-card text-center">
                      <h3 className="text-lg font-semibold mb-4">Can't find the right pro?</h3>
                      <p className="text-sm text-muted-foreground mb-4">Let us do the work. Post a job request and get quotes from available professionals in your area.</p>
                      <a href="/post-request?service=rubble-removal" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                        Get Free Quotes
                      </a>
                    </div>
                </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
