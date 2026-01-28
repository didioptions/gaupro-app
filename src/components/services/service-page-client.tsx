'use client';

import { useMemo, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { allServices } from '@/lib/service-questions';
import Link from 'next/link';
import { CategoryImages } from '@/lib/category-images';
import InlineQuoteForm from '@/components/inline-quote-form';
import { Skeleton } from '@/components/ui/skeleton';
import ProfessionalCard, { Professional } from '@/components/services/professional-card';
import { useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { collection, query, where, orderBy } from 'firebase/firestore';


interface ServicePageClientProps {
  params: { service: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function ServicePageClient({ params, searchParams }: ServicePageClientProps) {
    const locationQuery = searchParams?.location;
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const currentService = Array.isArray(params.service) ? params.service[0] : params.service;

    const service = allServices.find(s => s.value === currentService);
    const serviceLabel = service?.label || currentService.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

    const pluralServiceLabel = service?.label.endsWith('s') ? service.label : `${service?.label}s` || (serviceLabel.endsWith('s') ? serviceLabel : `${serviceLabel}s`);
    
    const locationName = typeof locationQuery === 'string'
        ? locationQuery.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
        : "South Africa";

    const firestore = useFirestore();

    const professionalsQuery = useMemoFirebase(() => {
      if (!firestore || !service?.label) return null;

      const baseCollectionRef = collection(firestore, 'professionalProfiles');
      
      return query(
          baseCollectionRef, 
          where('serviceCategory', '==', service.label),
          orderBy('priorityRank', 'desc'),
          orderBy('rating', 'desc')
      );
    }, [firestore, service?.label]);

    const { data: allProsFromFirestore, isLoading: professionalsLoading, error } = useCollection<Professional>(professionalsQuery);

    const professionals = useMemo(() => {
        if (!allProsFromFirestore) return [];
        if (locationQuery && typeof locationQuery === 'string') {
             const formattedLocationQuery = locationName.toLowerCase();
             return allProsFromFirestore.filter(pro => 
                pro.location?.toLowerCase().includes(formattedLocationQuery) || 
                pro.city?.toLowerCase().includes(formattedLocationQuery)
             );
        }
        return allProsFromFirestore;
    }, [allProsFromFirestore, locationQuery, locationName]);
    
    const serviceImageId = `${currentService}-image`;
    let heroImage = CategoryImages.find(p => p.id === `real-${serviceImageId}` || p.id === serviceImageId);
    
    if (!heroImage) {
        heroImage = PlaceHolderImages.find(p => p.id === 'hero-background-image');
    }
    
    const benefits = [
      '🛡️ Fully Vetted Companies',
      '📈 High Customer Ratings',
      '🤲 Service You Can Trust',
      '📍 Local & Reliable',
      '✨ Consistent Quality Work',
      '📞 Easy, Safe & Quick Bookings',
    ];

    const introText = useMemo(() => {
        const texts: { [key: string]: JSX.Element } = {
            builders: (
                <div className="my-8 text-foreground prose prose-lg max-w-none space-y-4">
                    <h2 className="text-2xl font-normal">Building Dreams Across {locationName} with Trusted Building Contractors</h2>
                    <p>Building your dream home or renovating a property takes time, dedication, and a reliable team. In {locationName}, homeowners and businesses can choose from hundreds of professional building contractors — but finding the right one makes all the difference.</p>
                    <div className="mb-4" /> 
                    <p>At GauPro, we connect you with verified builders and construction experts who deliver quality workmanship, honest communication, and attention to detail. Whether you need a small repair, home extension, or complete building project, our contractors are ready to bring your vision to life.</p>
                    <p>Many also provide finishing and interior services, such as tiling, plastering, and painting, to give your kitchen, bathroom, or office space the perfect final touch.</p>
                </div>
            )
        };
        return texts[currentService] || null;
    }, [currentService, locationName]);

    const ProfessionalList = () => {
        if (!isClient || professionalsLoading) {
            return Array.from({ length: 3 }).map((_, index) => (
                <Card key={index}>
                    <CardContent className="p-6">
                        <div className="grid sm:grid-cols-4 gap-6">
                            <div className="sm:col-span-3 flex items-start gap-4">
                                <Skeleton className="h-20 w-20 rounded-md" />
                                <div className="space-y-2 flex-grow">
                                    <Skeleton className="h-6 w-3/4" />
                                    <Skeleton className="h-4 w-1/4" />
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-5/6" />
                                </div>
                            </div>
                            <div className="space-y-2 text-left sm:text-right">
                                <Skeleton className="h-6 w-16 ml-auto" />
                                <Skeleton className="h-4 w-20 ml-auto" />
                                <Skeleton className="h-10 w-32 mt-4 ml-auto" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ));
        }

        if (error) {
            return (
                <Card>
                    <CardContent className="p-6 text-center text-destructive">
                        <p className="text-lg">Error loading professionals.</p>
                        <p className="text-sm mt-2">{error.message}</p>
                    </CardContent>
                </Card>
            )
        }

        if (!professionals || professionals.length === 0) {
            return (
                <Card>
                    <CardContent className="p-6 text-center">
                        <p className="text-lg text-muted-foreground">No professionals found for "{pluralServiceLabel}" in {locationName}.</p>
                        <p className="mt-2">Try widening your search or check back soon!</p>
                    </CardContent>
                </Card>
            );
        }
        
        return professionals.map((pro: any) => (
            <ProfessionalCard key={pro.id} professional={pro} service={currentService} />
        ));
    };
    
    return (
        <>
            <Header />
            <main>
                <section className="relative min-h-[500px] flex items-center justify-center text-center text-white">
                    {heroImage && (
                        <Image
                            src={heroImage.imageUrl}
                            alt={heroImage.description || "Service background image"}
                            fill
                            className="object-cover"
                            priority
                            data-ai-hint={heroImage.imageHint}
                        />
                    )}
                     <div className="absolute inset-0 bg-black/60" />
                     <div className="relative container mx-auto px-4 grid md:grid-cols-2 items-center gap-8 text-left">
                        <div className="hidden md:block">
                          <h1 className="text-4xl md:text-5xl font-normal">{pluralServiceLabel}</h1>
                          <p className="mt-4 text-lg text-white/90">
                              Get matched with top-rated, verified professionals in your area.
                          </p>
                        </div>
                        <InlineQuoteForm service={currentService} location={locationName} />
                     </div>
                </section>

                <section className="py-16 bg-background">
                    <div className="container mx-auto px-4">
                         <div className="text-center md:text-left mb-8">
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Link href="/" className="hover:text-primary">Gaupro</Link>
                                <ChevronRight className="h-4 w-4" />
                                {locationQuery && <><Link href={`/services/in/${locationQuery}`} className="hover:text-primary">{locationName}</Link><ChevronRight className="h-4 w-4" /></>}
                                <span className="font-medium text-foreground">{pluralServiceLabel}</span>
                            </div>
                             {introText}
                             <h2 className="text-3xl mt-1">Top {pluralServiceLabel} in {locationName}</h2>
                        </div>
                        <div className="grid lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-2 space-y-6">
                                <ProfessionalList />
                            </div>
                            <aside className="space-y-8">
                                <Card className="bg-card">
                                    <CardContent className="p-6">
                                        <h3 className="mb-3 text-foreground">Need {pluralServiceLabel} in {locationName}?</h3>
                                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                                            <li>{allProsFromFirestore?.reduce((acc, pro) => acc + (pro.reviews || 0), 0) || 'Many'}+ Reviews for {pluralServiceLabel.toLowerCase()}</li>
                                            <li>{(allProsFromFirestore?.filter(p => p.rating >= 4).length || 0) * 10}+ Positive Reviews</li>
                                            <li>Recently hired Pros have been rated 4.6/5 stars by customers</li>
                                            <li>View {locationName} Pros for {pluralServiceLabel.toLowerCase()} today</li>
                                        </ul>
                                    </CardContent>
                                </Card>
                                <Card className="bg-card">
                                    <CardContent className="p-6">
                                        <h3 className="mb-3 text-foreground">Why Use Gaupro?</h3>
                                        <ul className="text-sm text-muted-foreground space-y-2">
                                            {benefits.map(benefit => <li key={benefit}>{benefit}</li>)}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </aside>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
