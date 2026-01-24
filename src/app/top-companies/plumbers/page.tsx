
'use client';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import InlineQuoteForm from '@/components/inline-quote-form';
import ProfessionalCard, { Professional } from '@/components/services/professional-card';
import { CategoryImages } from '@/lib/category-images';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, where, orderBy } from 'firebase/firestore';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent } from '@/components/ui/card';
import { allServices } from '@/lib/service-questions';

export default function TopCompaniesPage() {
  const proCategory = 'plumber';
  
  const service = allServices.find(s => s.value === proCategory);
  const serviceLabel = service?.label || proCategory.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const pluralServiceLabel = serviceLabel.endsWith('s') ? serviceLabel : `${serviceLabel}s`;
  
  const firestore = useFirestore();

  const professionalsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(
        collection(firestore, 'professionalProfiles'),
        where('serviceCategory', '==', proCategory),
        orderBy('rating', 'desc'),
        orderBy('priorityRank', 'desc')
    );
  }, [firestore]);

  const { data: topCompanies, isLoading } = useCollection<Professional>(professionalsQuery);

  const heroImage = CategoryImages.find(p => p.id === `${proCategory}-image`);

  const benefits = [
    '🛡️ Fully Vetted Companies',
    '📈 High Customer Ratings',
    '🤲 Service You Can Trust',
    '📍 Local & Reliable',
    '✨ Consistent Quality Work',
    '📞 Easy, Safe & Quick Bookings',
  ];

  const ProfessionalList = () => {
    if (isLoading) {
      return (
        <div className="space-y-6">
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={index} className="h-48 w-full" />
          ))}
        </div>
      );
    }

    if (!topCompanies || topCompanies.length === 0) {
      return (
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-lg text-muted-foreground">No professionals found for "{pluralServiceLabel}".</p>
          </CardContent>
        </Card>
      );
    }
    
    return topCompanies.map((pro) => (
        <ProfessionalCard key={pro.id} professional={pro} service={proCategory} />
    ));
  };

  return (
    <>
      <Header />
      <main className="flex-grow">
         <section className="relative min-h-[500px] flex items-center justify-center text-center text-white">
            {heroImage && (
                <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description || `${pluralServiceLabel} service background`}
                    fill
                    className="object-cover"
                    priority
                    data-ai-hint={heroImage.imageHint}
                />
            )}
             <div className="absolute inset-0 bg-black/60" />
             <div className="relative container mx-auto px-4 grid md:grid-cols-2 items-center gap-8 text-left">
                <div className="hidden md:block">
                  <h1 className="text-4xl md:text-5xl font-normal">Top {pluralServiceLabel}</h1>
                  <p className="mt-4 text-lg text-white/90">
                      Find top-rated, verified professionals for {pluralServiceLabel.toLowerCase()}.
                  </p>
                </div>
                <InlineQuoteForm service={proCategory} location="South Africa" />
             </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-left mb-8">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Link href="/" className="hover:text-primary">Gaupro</Link>
                    <ChevronRight className="h-4 w-4" />
                    <span className="font-medium text-foreground">Top {pluralServiceLabel}</span>
                </div>
                <h2 className="text-3xl mt-1">Top {pluralServiceLabel} in Gauteng</h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-6">
                    <ProfessionalList />
                </div>
                <aside className="space-y-8">
                    <div className="p-6 border rounded-lg bg-card">
                        <h3 className="mb-3 font-semibold text-foreground">Need {pluralServiceLabel}?</h3>
                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                            <li>View top rated {pluralServiceLabel.toLowerCase()} today</li>
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
                      <p className="text-sm text-muted-foreground mb-4">Post your requirements and get quotes from available professionals in your area.</p>
                      <a href={`/post-request?service=${proCategory}`} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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
