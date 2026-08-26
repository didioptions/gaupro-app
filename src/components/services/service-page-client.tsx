'use client';

import { useMemo, useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight, Star, Users, MapPin, CheckCircle2, TrendingUp, Info, LayoutGrid, DollarSign } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { allServices } from '@/lib/service-questions';
import Link from 'next/link';
import { CategoryImages } from '@/lib/category-images';
import InlineQuoteForm from '@/components/inline-quote-form';
import { Skeleton } from '@/components/ui/skeleton';
import ProfessionalCard, { Professional } from '@/components/services/professional-card';
import { useFirestore, useCollection, useMemoFirebase, useUser } from '@/firebase';
import { collection } from 'firebase/firestore';
import { cityExpansionMap } from '@/lib/location-data';
import { 
    getServiceLabel, 
    getLocationLabel, 
    generateAboutContent, 
    generateFAQs, 
    generateServiceStats,
    generateNearbyAreasIntro,
    generatePopularServicesIntro,
    generateRelatedServicesIntro
} from '@/lib/seo-utils';
import { jobRequests } from '@/lib/job-requests-data';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

interface ServicePageClientProps {
  params: { service: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function ServicePageClient({ params, searchParams }: ServicePageClientProps) {
    const locationQuery = searchParams?.location as string;
    const [isClient, setIsClient] = useState(false);
    const { isUserLoading } = useUser();
    const [completedCount, setCompletedCount] = useState<number | null>(null);

    useEffect(() => {
        setIsClient(true);
        setCompletedCount(Math.floor(Math.random() * 500) + 200);
    }, []);

    const serviceLabel = getServiceLabel(params.service);
    const locationName = getLocationLabel(locationQuery);
    const pluralServiceLabel = serviceLabel.endsWith('s') ? serviceLabel : `${serviceLabel}s`;
    
    const firestore = useFirestore();
    const professionalsQuery = useMemoFirebase(() => {
      if (!firestore || isUserLoading) return null;
      return collection(firestore, 'professionalProfiles');
    }, [firestore, isUserLoading]);

    const { data: allProsFromFirestore, loading: isLoadingPros } = useCollection<Professional>(professionalsQuery);

    const filteredProfessionals = useMemo(() => {
        if (!allProsFromFirestore) return [];
        const labelLower = serviceLabel.toLowerCase();
        
        let filtered = allProsFromFirestore.filter((pro) => {
          const tags = [...(pro.tags || []), pro.serviceCategory || ''].map(t => t.toLowerCase());
          return tags.some(t => t.includes(labelLower));
        });

        if (locationQuery) {
            filtered = filtered.filter(pro => {
                const areas = new Set([pro.location, ...(pro.serviceAreas || [])]);
                return Array.from(areas).some(area => area === locationQuery);
            });
        }

        return filtered.sort((a, b) => (b.priorityRank || 0) - (a.priorityRank || 0) || (b.rating || 0) - (a.rating || 0));
    }, [allProsFromFirestore, serviceLabel, locationQuery]);

    const stats = generateServiceStats(filteredProfessionals.length, filteredProfessionals.reduce((a, b) => a + (b.reviews || 0), 0), locationName);
    const aboutHtml = generateAboutContent(params.service, locationQuery);
    const faqs = generateFAQs(params.service, locationQuery);

    const recentJobs = useMemo(() => {
        return jobRequests
            .filter(j => j.category.toLowerCase().includes(serviceLabel.toLowerCase()))
            .slice(0, 3);
    }, [serviceLabel]);

    const nearbyAreas = useMemo(() => {
        if (!locationQuery) return [];
        const metro = Object.keys(cityExpansionMap).find(k => cityExpansionMap[k].includes(locationQuery));
        return metro ? cityExpansionMap[metro].filter(c => c !== locationQuery).slice(0, 12) : [];
    }, [locationQuery]);

    const popularServicesInCity = useMemo(() => {
        return ['plumber', 'electrician', 'cleaning-service', 'painters', 'movers', 'handyman', 'gardeners'].filter(s => s !== params.service).slice(0, 8);
    }, [params.service]);

    const relatedServices = useMemo(() => {
        const currentService = allServices.find(s => s.value === params.service);
        return allServices.filter(s => s.value !== params.service).slice(0, 10);
    }, [params.service]);

    const serviceImageId = `${params.service}-image`;
    const heroImage = CategoryImages.find(p => p.id === serviceImageId) || PlaceHolderImages.find(p => p.id === 'hero-background-image');

    return (
        <main className="bg-background text-foreground">
            <section className="relative min-h-[500px] flex items-center justify-center text-center text-white">
                {heroImage && (
                    <Image
                        src={heroImage.imageUrl}
                        alt={heroImage.description || `${serviceLabel} background`}
                        fill
                        className="object-cover"
                        priority
                        data-ai-hint={heroImage.imageHint}
                    />
                )}
                 <div className="absolute inset-0 bg-black/60" />
                 <div className="relative container mx-auto px-4 grid md:grid-cols-2 items-center gap-8 text-left">
                    <div className="hidden md:block">
                      <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{pluralServiceLabel} in {locationName}</h1>
                      <p className="mt-4 text-lg text-white/90 max-w-lg">
                          Compare the best local {serviceLabel.toLowerCase()} experts. Get free quotes, view verified profiles, and hire with confidence.
                      </p>
                    </div>
                    <InlineQuoteForm service={params.service} location={locationName} locationSlug={locationQuery} />
                 </div>
            </section>

            <section className="py-12 border-b bg-secondary/20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <p className="text-3xl font-bold text-primary">{stats.professionals}+</p>
                            <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Verified Pros</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-primary">{stats.reviews}+</p>
                            <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Customer Reviews</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-primary">{stats.cities}</p>
                            <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Suburbs Covered</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-primary">
                                {completedCount !== null ? `${completedCount}+` : '...'}
                            </p>
                            <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Jobs This Month</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-12">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                                <Link href="/" className="hover:text-primary">GauPro</Link>
                                <ChevronRight className="h-4 w-4" />
                                <span className="text-foreground font-medium">{pluralServiceLabel} in {locationName}</span>
                            </div>

                            <div className="space-y-6">
                                {(isLoadingPros || isUserLoading) ? (
                                    Array.from({ length: 3 }).map((_, i) => <Skeleton key={i} className="h-48 w-full" />)
                                ) : filteredProfessionals.length > 0 ? (
                                    filteredProfessionals.map(pro => (
                                        <ProfessionalCard key={pro.id} professional={pro} service={params.service} />
                                    ))
                                ) : (
                                    <Card className="bg-blue-50 border-blue-200">
                                        <CardContent className="p-10 text-center space-y-4">
                                            <Info className="h-12 w-12 text-blue-600 mx-auto" />
                                            <h3 className="text-xl font-bold text-blue-900">We are expanding our network!</h3>
                                            <p className="text-blue-800 max-w-md mx-auto">
                                                We currently have high demand for {pluralServiceLabel.toLowerCase()} in {locationName}. Submit your request and we'll help connect you with available providers from nearby areas or notify you as new pros join.
                                            </p>
                                            <Button asChild size="lg">
                                                <Link href={`/post-request?service=${params.service}&location=${locationQuery}`}>Post a Job for Free</Link>
                                            </Button>
                                        </CardContent>
                                    </Card>
                                )}
                            </div>

                            <Card className="bg-secondary/10 border-dashed">
                                <CardHeader>
                                    <CardTitle className="text-lg flex items-center gap-2">
                                        <DollarSign className="h-5 w-5 text-primary" />
                                        Estimated Price Guide for {locationName}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                        <div className="p-3 bg-background rounded border">
                                            <p className="font-bold text-primary">Standard Call-out</p>
                                            <p className="text-muted-foreground">R450 - R850</p>
                                        </div>
                                        <div className="p-3 bg-background rounded border">
                                            <p className="font-bold text-primary">Minor Repair</p>
                                            <p className="text-muted-foreground">R900 - R1,800</p>
                                        </div>
                                        <div className="p-3 bg-background rounded border">
                                            <p className="font-bold text-primary">Full Installation</p>
                                            <p className="text-muted-foreground">Custom Quote</p>
                                        </div>
                                    </div>
                                    <p className="text-[10px] text-muted-foreground mt-4 italic">* Prices are estimates based on local market data in {locationName} and may vary based on project requirements.</p>
                                </CardContent>
                            </Card>

                            {locationQuery && (
                                <section className="pt-8">
                                    <h2 className="text-2xl font-bold mb-4">Popular Services in {locationName}</h2>
                                    <p className="text-muted-foreground mb-6 leading-relaxed">
                                        {generatePopularServicesIntro(locationQuery)}
                                    </p>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                        {popularServicesInCity.map(slug => {
                                            const s = allServices.find(as => as.value === slug);
                                            return s ? (
                                                <Link key={slug} href={`/services/${slug}?location=${locationQuery}`} className="p-3 border rounded-lg hover:bg-secondary transition-colors text-center text-sm font-medium">
                                                    {s.label}
                                                </Link>
                                            ) : null;
                                        })}
                                    </div>
                                </section>
                            )}

                            <div className="pt-12 border-t mt-12 prose prose-red max-w-none prose-headings:font-normal" dangerouslySetInnerHTML={{ __html: aboutHtml }} />

                            <div className="pt-16 border-t">
                                <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
                                <Accordion type="single" collapsible className="w-full">
                                    {faqs.map((faq, i) => (
                                        <AccordionItem key={i} value={`faq-${i}`}>
                                            <AccordionTrigger className="text-left text-lg font-medium">{faq.q}</AccordionTrigger>
                                            <AccordionContent className="text-muted-foreground text-base leading-relaxed whitespace-pre-wrap">
                                                {faq.a}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </div>

                        <aside className="space-y-12">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl">Recently Requested</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {recentJobs.length > 0 ? recentJobs.map(job => (
                                        <div key={job.id} className="pb-4 border-b last:border-0 last:pb-0">
                                            <p className="font-semibold text-sm">{job.title}</p>
                                            <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                                                <MapPin className="h-3 w-3" /> {job.location} • {job.posted}
                                            </p>
                                        </div>
                                    )) : <p className="text-sm text-muted-foreground italic">New requests coming in daily.</p>}
                                </CardContent>
                            </Card>

                            <section>
                                <div className="flex items-center gap-2 mb-4">
                                    <LayoutGrid className="h-5 w-5 text-primary" />
                                    <h2 className="text-xl font-bold">Related Services</h2>
                                </div>
                                <p className="text-sm text-muted-foreground mb-4 italic">
                                    {generateRelatedServicesIntro(params.service)}
                                </p>
                                <div className="grid grid-cols-1 gap-2">
                                    {relatedServices.map(rel => (
                                        <Link 
                                            key={rel.value} 
                                            href={`/services/${rel.value}${locationQuery ? `?location=${locationQuery}` : ''}`}
                                            className="text-sm text-muted-foreground hover:text-primary flex items-center gap-2 py-1"
                                        >
                                            <CheckCircle2 className="h-3 w-3" /> {rel.label}
                                        </Link>
                                    ))}
                                </div>
                            </section>

                            {locationQuery && nearbyAreas.length > 0 && (
                                <section>
                                    <h2 className="text-xl font-bold mb-4">Nearby Coverage Areas</h2>
                                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                        {generateNearbyAreasIntro(params.service, locationQuery)}
                                    </p>
                                    <div className="grid grid-cols-1 gap-2">
                                        {nearbyAreas.map(area => (
                                            <Link 
                                                key={area} 
                                                href={`/services/${params.service}?location=${area}`}
                                                className="text-sm text-muted-foreground hover:text-primary flex items-center gap-2"
                                            >
                                                <ChevronRight className="h-3 w-3" /> {getLocationLabel(area)}
                                            </Link>
                                        ))}
                                    </div>
                                </section>
                            )}

                            <Card className="bg-primary text-primary-foreground">
                                <CardContent className="p-6 text-center space-y-4">
                                    <TrendingUp className="h-10 w-10 mx-auto" />
                                    <h3 className="text-xl font-bold">Are you a Professional?</h3>
                                    <p className="text-sm opacity-90">Join {stats.professionals}+ businesses getting leads in {locationName}.</p>
                                    <Button asChild variant="secondary" className="w-full font-bold">
                                        <Link href="/pro/signup">Grow My Business</Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}
