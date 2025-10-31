

'use client';

import { useState, useMemo } from 'react';
import { useSearchParams, useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ChevronRight } from 'lucide-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { allServices } from '@/lib/service-questions';
import Link from 'next/link';
import { CategoryImages } from '@/lib/category-images';
import InlineQuoteForm from '@/components/inline-quote-form';
import { RequestQuoteDialog } from '@/components/request-quote-dialog';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, where } from 'firebase/firestore';
import { Skeleton } from '@/components/ui/skeleton';


export default function ServicePage() {
    const params = useParams();
    const searchParams = useSearchParams();
    const locationQuery = searchParams.get('location');
    const [expandedDescriptions, setExpandedDescriptions] = useState<string[]>([]);

    const currentService = Array.isArray(params.service) ? params.service[0] : params.service;

    const service = allServices.find(s => s.value === currentService);
    const serviceLabel = service?.label || currentService.charAt(0).toUpperCase() + currentService.slice(1);
    
    const pluralServiceLabel = serviceLabel.endsWith('s') ? serviceLabel : `${serviceLabel}s`;
    const singularOrPluralLowercase = serviceLabel.endsWith('s') ? serviceLabel.toLowerCase() : `${serviceLabel.toLowerCase()}s`;

    const locationName = typeof locationQuery === 'string'
        ? locationQuery.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
        : "South Africa";

    const firestore = useFirestore();

    // Build the query
    const professionalsQuery = useMemoFirebase(() => {
        const baseCollection = collection(firestore, 'professionals');
        const serviceFilter = where('serviceCategory', '==', currentService);
        
        // Temporarily removed location filter to fix Firestore index issue.
        // The query will now only filter by service.
        return query(baseCollection, serviceFilter);
    }, [firestore, currentService]);

    const { data: professionals, isLoading, error } = useCollection<any>(professionalsQuery);
    
    // If there's an error (like a missing Firestore index), display it.
    if (error) {
        return (
            <>
                <Header />
                <main className="container mx-auto px-4 py-16">
                    <Card>
                        <CardContent className="p-6">
                            <h2 className="text-xl font-bold text-destructive">Error Fetching Data</h2>
                            <p className="mt-2 text-muted-foreground">There was a problem loading professionals for this category.</p>
                            <pre className="mt-4 p-4 bg-secondary rounded-md text-xs whitespace-pre-wrap">{error.message}</pre>
                            <p className="mt-4 text-sm text-muted-foreground">
                                This is often caused by a missing Firestore index. If the error message above includes a link to create an index, please click it to resolve the issue. It may take a few minutes for the index to build.
                            </p>
                        </CardContent>
                    </Card>
                </main>
                <Footer />
            </>
        )
    }

    const serviceImageId = `${currentService}-image`.replace('-service', '');
    let heroImage = CategoryImages.find(p => p.id === serviceImageId);
    
    if (!heroImage) {
        heroImage = PlaceHolderImages.find(p => p.id === 'hero-background-image');
    }

    const toggleDescription = (name: string) => {
        if (expandedDescriptions.includes(name)) {
            setExpandedDescriptions(expandedDescriptions.filter(n => n !== name));
        } else {
            setExpandedDescriptions([...expandedDescriptions, name]);
        }
    };
    
    const renderDescription = (pro: any) => {
        const description = pro.description.replace('{service}', singularOrPluralLowercase);
        const isExpanded = expandedDescriptions.includes(pro.name);
        if (isExpanded || description.length <= 150) {
            return (
                <>
                    {description}
                    {description.length > 150 && (
                         <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleDescription(pro.name); }} className="text-red-600 font-semibold ml-1">...show less</button>
                    )}
                </>
            );
        }
        return (
            <>
                {description.substring(0, 150)}
                <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleDescription(pro.name); }} className="text-red-600 font-semibold ml-1">...show more</button>
            </>
        );
    };
    
    const priceEstimates = [
      'The average cost is R500 - R1500.',
      'The cheapest price is R250',
      'The most expensive price is R10500',
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
        if (isLoading) {
            return Array.from({ length: 5 }).map((_, index) => (
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
        
        return professionals.map(pro => {
            const proImage = PlaceHolderImages.find(p => p.id === pro.avatarSeed);
            const imageUrl = proImage ? proImage.imageUrl : `https://picsum.photos/seed/${pro.avatarSeed}/80/80`;
            const imageHint = proImage ? proImage.imageHint : "company logo";

            return (
                <Card key={pro.id} className="bg-card hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                        <div className="grid sm:grid-cols-4 gap-6">
                            <div className="sm:col-span-3">
                                <div className="flex items-start gap-4">
                                    <Image src={imageUrl} alt={pro.name} width={80} height={80} className="rounded-md border" data-ai-hint={imageHint} />
                                    <div>
                                      <Link href={`/pro/${pro.id}?service=${currentService}`} className="hover:underline">
                                        <h3 className="text-xl text-foreground">{pro.name}</h3>
                                      </Link>
                                      <p className="text-sm text-muted-foreground">{pro.location}</p>
                                      <p className="text-sm mt-2 text-foreground">
                                          {renderDescription(pro)}
                                      </p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-left sm:text-right">
                                <Badge className="text-base font-bold bg-teal-500 text-white border-teal-500 px-3">{pro.rating > 0 ? pro.rating.toFixed(1) : '0.0'}</Badge>
                                <p className="text-xs text-muted-foreground mt-1">{pro.reviews} reviews</p>
                                <RequestQuoteDialog
                                    service={currentService}
                                    initialStep={0}
                                    initialData={{}}
                                >
                                    <Button variant="outline" className="mt-4 w-full sm:w-auto">
                                        Request a Quote
                                    </Button>
                                </RequestQuoteDialog>
                            </div>
                        </div>
                        {pro.reviewData && pro.reviewData.length > 0 && (
                          <div className="mt-4 pt-4 border-t">
                              <div className="flex items-center gap-2">
                                  <div className="flex">
                                      {[...Array(5)].map((_, i) => (
                                          <Star key={i} className={`h-4 w-4 ${i < pro.reviewData[0].rating ? 'text-red-500 fill-red-500' : 'text-gray-300'}`} />
                                      ))}
                                  </div>
                                  <p className="text-sm text-muted-foreground">by {pro.reviewData[0].author}{pro.reviewData[0].phone && `, ${pro.reviewData[0].phone}`}</p>
                              </div>
                              <p className="text-sm text-foreground mt-2 italic">"{pro.reviewData[0].comment}"</p>
                          </div>
                        )}
                    </CardContent>
                </Card>
            )
        });
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
                          <h1 className="text-4xl md:text-5xl font-bold">{pluralServiceLabel}</h1>
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
                                <Link href={`/services/in/${locationQuery}`} className="hover:text-primary">{locationName}</Link>
                                <ChevronRight className="h-4 w-4" />
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
                                            <li>602 Reviews for {singularOrPluralLowercase}</li>
                                            <li>510 Positive Reviews</li>
                                            <li>Recently hired Pros have been rated 4.6/5 stars by customers</li>
                                            <li>View {locationName} Pros for {singularOrPluralLowercase} today</li>
                                        </ul>
                                    </CardContent>
                                </Card>
                                <Card className="bg-card">
                                    <CardContent className="p-6">
                                        <h3 className="mb-3 text-foreground">Price Estimate for {singularOrPluralLowercase} in {locationName}</h3>
                                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                                            {priceEstimates.map(est => <li key={est}>{est}</li>)}
                                        </ul>
                                        <p className="text-xs text-muted-foreground mt-4">Compare quotes from up to 5 local professionals.</p>
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
