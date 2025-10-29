

'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { allServices } from '@/lib/service-questions';
import Link from 'next/link';
import { CategoryImages } from '@/lib/category-images';
import InlineQuoteForm from '@/components/inline-quote-form';

const allProfessionals = {
    movers: [
        {
            name: "Swift Moves SA",
            location: "Rosebank, Johannesburg",
            description: "Your reliable moving partner for local and long-distance relocations. We offer packing, transport, and storage services to make your move stress-free. Our team is trained, professional, and ready to assist.",
            rating: 4.8,
            reviews: 125,
            reviewData: [{
                author: "Richard",
                phone: "061****434",
                rating: 5,
                comment: "They came through prepared to work. They did an excellent job. I am happy with their services I even gave a tip. Hard workers too. Arrived in Kimberley on time."
            }],
            avatarSeed: "swift-moves"
        },
        {
            name: "Joburg Movers Co.",
            location: "Sandton, Johannesburg",
            description: "Specializing in residential and office moves within Gauteng. We handle your belongings with care and ensure a smooth, efficient moving day. Free, no-obligation quotes available.",
            rating: 4.7,
            reviews: 88,
            reviewData: [{
                author: "Jane D.",
                phone: "082****567",
                rating: 4,
                comment: "Good service, but they were a bit late. Otherwise, the move went smoothly and nothing was damaged."
            }],
            avatarSeed: "joburg-movers"
        }
    ],
    default: [
        {
            name: "East Rand Waste & Pool Service Pty Ltd",
            description: "Your trusted experts for quality {service}. We are fully registered and our commitment to quality work has been recognized by many happy customers. We handle all types of projects, big or small, including waste removal, site clearing, demolitions, and general maintenance. We pride ourselves on quick response times and high-quality workmanship.",
            rating: 4.6,
            reviews: 42,
            reviewData: [{
                author: "Richard",
                phone: "061****434",
                rating: 5,
                comment: "They came through prepared to work. They did an excellent job. I am happy with their services I even gave a tip. Hard workers too. Arrived in Kimberley on time."
            }],
            avatarSeed: "pro-services-inc"
        },
        {
            name: "General Solutions Pty",
            description: "A new, fresh, exciting company who will handle all your {service} needs. We are a new, fresh and exciting company that provides top-notch service and customer satisfaction, from rubble removal to site clearing and everything in between.",
            rating: 0.0,
            reviews: 0,
            reviewData: [],
            avatarSeed: "general-solutions"
        },
        {
            name: "Skip Boys",
            description: "Reliable and efficient {service} for all your needs. We pride ourselves on quick response times and high-quality workmanship in everything from waste disposal to general maintenance and small-scale demolitions.",
            rating: 4.2,
            reviews: 18,
            reviewData: [{
                author: "Anonymous",
                phone: "",
                rating: 4,
                comment: "Good service and fair pricing. The skip was delivered on time. Would use them again."
            }],
            avatarSeed: "skip-boys-logo"
        },
        {
            name: "Themba Rubble Removers",
            description: "Connecting you with top-tier {service} experts. Our network of professionals is vetted for skill and reliability in specialized tasks like demolitions, large-scale waste and rubble removals, and site preparation.",
            rating: 4.9,
            reviews: 76,
            reviewData: [{
                author: "Sarah P.",
                phone: "072****123",
                rating: 5,
                comment: "Extremely professional and efficient. They cleared my site in half the expected time. Highly recommended!"
            }],
            avatarSeed: "themba-rubble-removers-logo"
        },
        {
            name: "Elite Services Group",
            description: "Providing premium {service} with a focus on customer satisfaction. For projects that require a touch of excellence, including complex waste and rubble removal, we are the team to call. We ensure a clean site and responsible disposal.",
            rating: 4.5,
            reviews: 31,
            reviewData: [{
                author: "Mike",
                phone: "083****789",
                rating: 5,
                comment: "Very happy with the service. They were professional from start to finish."
            }],
            avatarSeed: "elite-services"
        }
    ]
};


const priceEstimates = [
    "Hourly rate up to R600",
    "Emergency call-outs: R800 - R1500",
    "After Hours Rate: +50%"
]


export default function ServicePage({ params }: { params: { service: string }}) {
    const searchParams = useSearchParams();
    const locationQuery = searchParams.get('location');
    const [expandedDescriptions, setExpandedDescriptions] = useState<string[]>([]);

    const currentService = params.service;

    const service = allServices.find(s => s.value === currentService);
    const serviceLabel = service?.label || currentService.charAt(0).toUpperCase() + currentService.slice(1);
    
    const pluralServiceLabel = serviceLabel.endsWith('s') ? serviceLabel : `${serviceLabel}s`;
    const singularOrPluralLowercase = serviceLabel.endsWith('s') ? serviceLabel.toLowerCase() : `${serviceLabel.toLowerCase()}s`;

    const locationName = typeof locationQuery === 'string'
        ? locationQuery.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
        : "Johannesburg";

    const baseProfessionals = allProfessionals[currentService as keyof typeof allProfessionals] || allProfessionals.default;
    const professionals = baseProfessionals.map(pro => ({
        ...pro,
        location: `${locationName}`,
        description: pro.description.replace('{service}', singularOrPluralLowercase),
    }));

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
    
    const renderDescription = (pro: typeof professionals[0]) => {
        const isExpanded = expandedDescriptions.includes(pro.name);
        if (isExpanded || pro.description.length <= 150) {
            return (
                <>
                    {pro.description}
                    {pro.description.length > 150 && (
                         <button onClick={() => toggleDescription(pro.name)} className="text-red-600 font-semibold ml-1">...show less</button>
                    )}
                </>
            );
        }
        return (
            <>
                {pro.description.substring(0, 150)}
                <button onClick={() => toggleDescription(pro.name)} className="text-red-600 font-semibold ml-1">...show more</button>
            </>
        );
    };

    return (
        <>
            <Header />
            <main>
                <section className="relative min-h-[500px] flex items-center justify-center text-center text-white">
                    {heroImage && (
                        <Image
                            src={heroImage.imageUrl}
                            alt={heroImage.description}
                            fill
                            className="object-cover"
                            priority
                            data-ai-hint={heroImage.imageHint}
                        />
                    )}
                     <div className="absolute inset-0 bg-black/60" />
                     <div className="relative container mx-auto px-4 grid md:grid-cols-2 items-center gap-8 text-left">
                        <div className="hidden md:block">
                          <h1 className="text-4xl md:text-5xl font-extrabold">{pluralServiceLabel}</h1>
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
                            <p className="text-sm text-muted-foreground">Small > {locationName} > {pluralServiceLabel}</p>
                            <h2 className="text-3xl mt-1">Top {pluralServiceLabel} in {locationName}</h2>
                        </div>
                        <div className="grid lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-2 space-y-6">
                                {professionals.map(pro => {
                                    const proImage = PlaceHolderImages.find(p => p.id === pro.avatarSeed);
                                    const imageUrl = proImage ? proImage.imageUrl : `https://picsum.photos/seed/${pro.avatarSeed}/80/80`;
                                    const imageHint = proImage ? proImage.imageHint : "company logo";

                                    return (
                                        <Card key={pro.name} className="bg-card">
                                            <CardContent className="p-6">
                                                <div className="grid sm:grid-cols-4 gap-6">
                                                    <div className="sm:col-span-3">
                                                        <div className="flex items-start gap-4">
                                                            <Image src={imageUrl} alt={pro.name} width={80} height={80} className="rounded-md border" data-ai-hint={imageHint} />
                                                            <div>
                                                                <h3 className="text-xl text-foreground">{pro.name}</h3>
                                                                <p className="text-sm text-muted-foreground">{pro.location}</p>
                                                                <p className="text-sm mt-2 text-foreground">{renderDescription(pro)}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="text-left sm:text-right">
                                                         <Badge className="text-base font-bold bg-teal-500 text-white border-teal-500 px-3">{pro.rating > 0 ? pro.rating.toFixed(1) : '0.0'}</Badge>
                                                        <p className="text-xs text-muted-foreground mt-1">{pro.reviews} reviews</p>
                                                        <Button variant="outline" className="mt-4 w-full sm:w-auto">Request a Quote</Button>
                                                    </div>
                                                </div>
                                                {pro.reviewData && pro.reviewData.length > 0 && pro.reviewData.map((review, index) => (
                                                <div key={index} className="mt-4 pt-4 border-t">
                                                    <div className="flex items-center gap-2">
                                                        <div className="flex">
                                                            {[...Array(5)].map((_, i) => (
                                                                <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'text-red-500 fill-red-500' : 'text-gray-300'}`} />
                                                            ))}
                                                        </div>
                                                        <p className="text-sm text-muted-foreground">by {review.author}{review.phone && `, ${review.phone}`}</p>
                                                    </div>
                                                    <p className="text-sm text-foreground mt-2 italic">"{review.comment}"</p>
                                                </div>
                                                ))}
                                                {pro.reviews === 0 && (
                                                     <p className="text-xs text-muted-foreground mt-4">Have you used this business? <Link href="#" className="underline">Write Review</Link></p>
                                                )}
                                            </CardContent>
                                        </Card>
                                    )
                                })}
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
