

'use client';

import { useState, useMemo } from 'react';
import { useSearchParams, useParams } from 'next/navigation';
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
import { RequestQuoteDialog } from '@/components/request-quote-dialog';

const allProfessionals = {
    "rubble-removal": [
        {
            id: "east-rand-waste",
            name: "East Rand Waste & Pool Service Pty Ltd",
            location: "Alberton",
            description: "Your trusted experts for quality {service}. We are fully registered and our commitment to quality work has been recognized by many happy customers. We handle all types of projects, big or small, including waste removal, site clearing, demolitions, and general maintenance. We pride ourselves on quick response times and high-quality workmanship.",
            rating: 4.6,
            reviews: 42,
            address: "16 Porth Pean Street, New Redruth, Alberton - 1449",
            yearsInBusiness: 9,
            employees: 4,
            isProVerified: true,
            serviceLocations: ["bedfordview", "benoni", "boksburg", "brakpan", "edenvale", "germiston", "kempton-park", "linksfield", "modderfontein", "alberton", "midrand", "sandton"],
            reviewData: [
                { author: "Katleho", phone: "061****434", rating: 5, comment: "Excellent rubble removal service. They were quick to respond, cleared all the construction waste from my property, and left the site spotless. Very professional and hard-working team." },
                { author: "Sarah J.", phone: "082****112", rating: 5, comment: "Fantastic service! The team was friendly, efficient, and very professional. They cleared out our garden refuse in no time. I'll definitely use them again." }
            ],
            photos: [
                "https://picsum.photos/seed/waste1/600/400",
                "https://picsum.photos/seed/waste2/600/400",
                "https://picsum.photos/seed/waste3/600/400",
                "https://picsum.photos/seed/waste4/600/400",
            ],
            avatarSeed: "pro-services-inc"
        },
        {
            id: "skip-boys",
            name: "Skip Boys",
            location: "Boksburg",
            description: "Reliable and efficient {service} for all your needs. We pride ourselves on quick response times and high-quality workmanship in everything from waste disposal to general maintenance and small-scale demolitions.",
            rating: 4.2,
            reviews: 18,
            address: "101 Skip Avenue, Boksburg",
            yearsInBusiness: 3,
            employees: 5,
            isProVerified: true,
            serviceLocations: ["boksburg", "benoni", "kempton-park", "springs", "midrand", "germiston"],
            reviewData: [{
                author: "Anonymous",
                phone: "",
                rating: 4,
                comment: "Good service and fair pricing. The skip was delivered on time. Would use them again."
            }],
            photos: [
                "https://picsum.photos/seed/skip1/600/400",
                "https://picsum.photos/seed/skip2/600/400",
            ],
            avatarSeed: "skip-boys-logo"
        },
        {
            id: "themba-rubble-removers",
            name: "Themba Rubble Removers",
            location: "Soweto",
            description: "Connecting you with top-tier {service} experts. Our network of professionals is vetted for skill and reliability in specialized tasks like demolitions, large-scale waste and rubble removals, and site preparation.",
            rating: 4.9,
            reviews: 76,
            address: "24 Worker's Way, Soweto",
            yearsInBusiness: 12,
            employees: 8,
            isProVerified: true,
            serviceLocations: ["soweto", "johannesburg", "midrand", "sandton", "roodepoort"],
            reviewData: [{
                author: "Sarah P.",
                phone: "072****123",
                rating: 5,
                comment: "Extremely professional and efficient. They cleared my site in half the expected time. Highly recommended!"
            }],
            photos: [
                "https://picsum.photos/seed/rubble1/600/400",
                "https://picsum.photos/seed/rubble2/600/400",
                "https://picsum.photos/seed/rubble3/600/400",
            ],
            avatarSeed: "themba-rubble-removers-logo"
        },
        {
            id: "general-solutions-pty",
            name: "General Solutions Pty",
            location: "Germiston",
            description: "A new, fresh, exciting company who will handle all your {service} needs. We are a new, fresh and exciting company that provides top-notch service and customer satisfaction, from rubble removal to site clearing and everything in between.",
            rating: 0.0,
            reviews: 0,
            address: "789 Industrial Rd, Germiston",
            yearsInBusiness: 1,
            employees: 2,
            isProVerified: false,
            serviceLocations: ["germiston", "bedfordview", "edenvale", "midrand"],
            reviewData: [],
            photos: [],
            avatarSeed: "general-solutions"
        },
        {
            id: "elite-services-group",
            name: "Elite Services Group",
            location: "Sandton",
            description: "Providing premium {service} with a focus on customer satisfaction. For projects that require a touch of excellence, including complex waste and rubble removal, we are the team to call. We ensure a clean site and responsible disposal.",
            rating: 4.5,
            reviews: 31,
            address: "55 Elite Crescent, Sandton",
            yearsInBusiness: 7,
            employees: 15,
            isProVerified: true,
            serviceLocations: ["sandton", "rosebank", "bryanston", "midrand", "johannesburg", "pretoria"],
            reviewData: [{
                author: "Mike",
                phone: "083****789",
                rating: 5,
                comment: "Very happy with the service. They were professional from start to finish."
            }],
            photos: [],
            avatarSeed: "elite-services"
        },
        {
            id: "vaal-rubble-pros",
            name: "Vaal Rubble Pros",
            location: "Vereeniging",
            description: "Leading rubble removal services in the Vaal Triangle. We specialize in fast and clean site clearing for residential and commercial projects. Your local choice for reliable {service}.",
            rating: 4.8,
            reviews: 55,
            address: "10 Steel Rd, Vereeniging",
            yearsInBusiness: 8,
            employees: 6,
            isProVerified: true,
            serviceLocations: ["vereeniging"],
            reviewData: [{
                author: "Busi",
                phone: "081****999",
                rating: 5,
                comment: "Quick and efficient! The team cleared my entire backyard in just a few hours. Very impressed."
            }],
            photos: ["https://picsum.photos/seed/vaal1/600/400"],
            avatarSeed: "vaal-pros-logo"
        },
        {
            id: "vereeniging-waste-solutions",
            name: "Vereeniging Waste Solutions",
            location: "Vereeniging",
            description: "Comprehensive waste management and {service} in Vereeniging. From garden refuse to construction debris, we handle it all with professionalism and care.",
            rating: 4.5,
            reviews: 30,
            address: "22 Union St, Vereeniging",
            yearsInBusiness: 5,
            employees: 4,
            isProVerified: true,
            serviceLocations: ["vereeniging"],
            reviewData: [{
                author: "John D.",
                phone: "073****123",
                rating: 5,
                comment: "Reliable service. They dropped off the skip on time and collected it as soon as I called. Will use them again."
            }],
            photos: ["https://picsum.photos/seed/vaal2/600/400"],
            avatarSeed: "vereeniging-waste-logo"
        },
        {
            id: "3-rivers-disposal",
            name: "Three Rivers Disposal",
            location: "Vereeniging",
            description: "Your go-to for affordable and quick {service}. Based in Three Rivers, we proudly serve the entire Vereeniging area for all site clearing and waste disposal needs.",
            rating: 4.6,
            reviews: 41,
            address: "88 River Rd, Three Rivers, Vereeniging",
            yearsInBusiness: 6,
            employees: 5,
            isProVerified: true,
            serviceLocations: ["vereeniging"],
            reviewData: [{
                author: "Anonymous",
                phone: "",
                rating: 4,
                comment: "Good price and they got the job done. Communication could be a bit better, but overall happy with the result."
            }],
            photos: [],
            avatarSeed: "3-rivers-logo"
        },
        {
            id: "mzanzi-clean-sites",
            name: "Mzanzi Clean Sites",
            location: "Vereeniging",
            description: "Proudly South African {service}. We offer residential and commercial site clearing services across Vereeniging, ensuring a clean and safe environment for your next project.",
            rating: 4.9,
            reviews: 68,
            address: "100 Main Reef Rd, Vereeniging",
            yearsInBusiness: 10,
            employees: 10,
            isProVerified: true,
            serviceLocations: ["vereeniging"],
            reviewData: [{
                author: "Lerato M.",
                phone: "062****555",
                rating: 5,
                comment: "Absolutely fantastic service. Professional, friendly, and left my property spotless. Highly recommend Mzanzi Clean Sites!"
            }],
            photos: ["https://picsum.photos/seed/vaal3/600/400", "https://picsum.photos/seed/vaal4/600/400"],
            avatarSeed: "mzanzi-clean-logo"
        },
        {
            id: "speedy-site-clearers",
            name: "Speedy Site Clearers",
            location: "Vereeniging",
            description: "Need it gone now? We offer the fastest {service} in Vereeniging. Perfect for urgent clear-outs and post-renovation cleanups. Call us for a quick quote!",
            rating: 4.3,
            reviews: 25,
            address: "45 Industrial Ave, Vereeniging",
            yearsInBusiness: 2,
            employees: 3,
            isProVerified: false,
            serviceLocations: ["vereeniging"],
            reviewData: [{
                author: "Chris V.",
                phone: "079****888",
                rating: 4,
                comment: "They were very fast as their name suggests. A bit pricey but worth it for the speed."
            }],
            photos: [],
            avatarSeed: "speedy-clear-logo"
        }
    ],
    movers: [
        {
            id: "swift-moves-sa",
            name: "Swift Moves SA",
            location: "Rosebank, Johannesburg",
            address: "123 Oxford Road, Rosebank, Johannesburg",
            website: "www.swiftmoves.co.za",
            description: "Your reliable moving partner for local and long-distance relocations. We offer packing, transport, and storage services to make your move stress-free. Our team is trained, professional, and ready to assist.",
            rating: 4.8,
            reviews: 125,
            yearsInBusiness: 5,
            employees: 12,
            isProVerified: true,
            reviewData: [{
                author: "Richard",
                phone: "061****434",
                rating: 5,
                comment: "They came through prepared to work. They did an excellent job. I am happy with their services I even gave a tip. Hard workers too. Arrived in Kimberley on time."
            }],
            photos: [
                "https://picsum.photos/seed/mover1/600/400",
                "https://picsum.photos/seed/mover2/600/400",
                "https://picsum.photos/seed/mover3/600/400",
            ],
            avatarSeed: "swift-moves"
        },
        {
            id: "joburg-movers-co",
            name: "Joburg Movers Co.",
            location: "Sandton, Johannesburg",
            address: "456 Rivonia Road, Sandton, Johannesburg",
            website: "www.joburgmovers.co.za",
            description: "Specializing in residential and office moves within Gauteng. We handle your belongings with care and ensure a smooth, efficient moving day. Free, no-obligation quotes available.",
            rating: 4.7,
            reviews: 88,
            yearsInBusiness: 8,
            employees: 20,
            isProVerified: true,
            reviewData: [{
                author: "Jane D.",
                phone: "082****567",
                rating: 4,
                comment: "Good service, but they were a bit late. Otherwise, the move went smoothly and nothing was damaged."
            }],
             photos: [
                "https://picsum.photos/seed/mover4/600/400",
                "https://picsum.photos/seed/mover5/600/400",
            ],
            avatarSeed: "joburg-movers"
        }
    ],
    default: [
        {
            id: "east-rand-waste",
            name: "East Rand Waste & Pool Service Pty Ltd",
            location: "Alberton",
            description: "Your trusted experts for quality {service}. We are fully registered and our commitment to quality work has been recognized by many happy customers. We handle all types of projects, big or small, including waste removal, site clearing, demolitions, and general maintenance. We pride ourselves on quick response times and high-quality workmanship.",
            rating: 4.6,
            reviews: 42,
            address: "16 Porth Pean Street, New Redruth, Alberton - 1449",
            yearsInBusiness: 9,
            employees: 4,
            isProVerified: true,
            serviceLocations: ["bedfordview", "benoni", "boksburg", "brakpan", "edenvale", "germiston", "kempton-park", "linksfield", "modderfontein", "alberton"],
            reviewData: [
                { author: "Katleho", phone: "061****434", rating: 5, comment: "Excellent rubble removal service. They were quick to respond, cleared all the construction waste from my property, and left the site spotless. Very professional and hard-working team." },
                { author: "Sarah J.", phone: "082****112", rating: 5, comment: "Fantastic service! The team was friendly, efficient, and very professional. They cleared out our garden refuse in no time. I'll definitely use them again." },
                { author: "Mike L.", phone: "071****334", rating: 4, comment: "Good, reliable service for skip hire. The skip was delivered and collected on time. My only suggestion would be better communication on the day of collection." },
                { author: "Anonymous", phone: "", rating: 5, comment: "Hired them for a site clearing project. They did an amazing job and went above and beyond to ensure the area was completely clean. Highly recommended for any large-scale removal." },
                { author: "Jennifer P.", phone: "084****556", rating: 5, comment: "We had a lot of old furniture and appliances to get rid of after moving. East Rand Waste made it so easy. They gave a fair quote and the team was incredibly helpful." }
            ],
             photos: [
                "https://picsum.photos/seed/waste1/600/400",
                "https://picsum.photos/seed/waste2/600/400",
                "https://picsum.photos/seed/waste3/600/400",
                "https://picsum.photos/seed/waste4/600/400",
            ],
            avatarSeed: "pro-services-inc"
        },
        {
            id: "general-solutions-pty",
            name: "General Solutions Pty",
            location: "Germiston",
            description: "A new, fresh, exciting company who will handle all your {service} needs. We are a new, fresh and exciting company that provides top-notch service and customer satisfaction, from rubble removal to site clearing and everything in between.",
            rating: 0.0,
            reviews: 0,
            address: "789 Industrial Rd, Germiston",
            yearsInBusiness: 1,
            employees: 2,
            isProVerified: false,
            serviceLocations: ["germiston", "bedfordview", "edenvale"],
            reviewData: [],
            photos: [],
            avatarSeed: "general-solutions"
        },
        {
            id: "skip-boys",
            name: "Skip Boys",
            location: "Boksburg",
            description: "Reliable and efficient {service} for all your needs. We pride ourselves on quick response times and high-quality workmanship in everything from waste disposal to general maintenance and small-scale demolitions.",
            rating: 4.2,
            reviews: 18,
            address: "101 Skip Avenue, Boksburg",
            yearsInBusiness: 3,
            employees: 5,
            isProVerified: true,
            serviceLocations: ["boksburg", "benoni", "kempton-park", "springs"],
            reviewData: [{
                author: "Anonymous",
                phone: "",
                rating: 4,
                comment: "Good service and fair pricing. The skip was delivered on time. Would use them again."
            }],
             photos: [
                "https://picsum.photos/seed/skip1/600/400",
                "https://picsum.photos/seed/skip2/600/400",
            ],
            avatarSeed: "skip-boys-logo"
        },
        {
            id: "themba-rubble-removers",
            name: "Themba Rubble Removers",
            location: "Soweto",
            description: "Connecting you with top-tier {service} experts. Our network of professionals is vetted for skill and reliability in specialized tasks like demolitions, large-scale waste and rubble removals, and site preparation.",
            rating: 4.9,
            reviews: 76,
            address: "24 Worker's Way, Soweto",
            yearsInBusiness: 12,
            employees: 8,
            isProVerified: true,
            serviceLocations: ["soweto", "johannesburg"],
            reviewData: [{
                author: "Sarah P.",
                phone: "072****123",
                rating: 5,
                comment: "Extremely professional and efficient. They cleared my site in half the expected time. Highly recommended!"
            }],
             photos: [
                "https://picsum.photos/seed/rubble1/600/400",
                "https://picsum.photos/seed/rubble2/600/400",
                "https://picsum.photos/seed/rubble3/600/400",
            ],
            avatarSeed: "themba-rubble-removers-logo"
        },
        {
            id: "elite-services-group",
            name: "Elite Services Group",
            location: "Sandton",
            description: "Providing premium {service} with a focus on customer satisfaction. For projects that require a touch of excellence, including complex waste and rubble removal, we are the team to call. We ensure a clean site and responsible disposal.",
            rating: 4.5,
            reviews: 31,
            address: "55 Elite Crescent, Sandton",
            yearsInBusiness: 7,
            employees: 15,
            isProVerified: true,
            serviceLocations: ["sandton", "rosebank", "bryanston"],
            reviewData: [{
                author: "Mike",
                phone: "083****789",
                rating: 5,
                comment: "Very happy with the service. They were professional from start to finish."
            }],
            photos: [],
            avatarSeed: "elite-services"
        }
    ]
};

// Exporting for use in the profile page
export function getProfessionalById(id: string) {
    for (const category in allProfessionals) {
        const pro = (allProfessionals as any)[category].find((p: any) => p.id === id);
        if (pro) return pro;
    }
    return null;
}


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

    const baseProfessionals = (allProfessionals as any)[currentService] || allProfessionals.default;
    
    const professionals = baseProfessionals
        .filter((pro: any) => !locationQuery || (pro.serviceLocations && pro.serviceLocations.includes(locationQuery)))
        .map((pro: any) => ({
            ...pro,
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
                         <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleDescription(pro.name); }} className="text-red-600 font-semibold ml-1">...show less</button>
                    )}
                </>
            );
        }
        return (
            <>
                {pro.description.substring(0, 150)}
                <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleDescription(pro.name); }} className="text-red-600 font-semibold ml-1">...show more</button>
            </>
        );
    };
    
    const priceEstimates = [
      'The average cost is R500 - R1500.',
      'The cheapest price is R250',
      'The most expensive price is R10500',
    ];

    const memoizedProfessionals = useMemo(() => {
        return professionals.map(pro => {
            const proImage = PlaceHolderImages.find(p => p.id === pro.avatarSeed);
            const imageUrl = proImage ? proImage.imageUrl : `https://picsum.photos/seed/${pro.avatarSeed}/80/80`;
            const imageHint = proImage ? proImage.imageHint : "company logo";

            const dialog = (
              <RequestQuoteDialog
                service={currentService}
                initialStep={0}
                initialData={{}}
              >
                 
                    <Button variant="outline" className="mt-4 w-full sm:w-auto">
                      Request a Quote
                    </Button>
                  
              </RequestQuoteDialog>
            );

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
                                {dialog}
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
    // The dependency array should include `professionals` and `expandedDescriptions`
    // because the output depends on them.
    }, [professionals, expandedDescriptions, currentService]);

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
                            <p className="text-sm text-muted-foreground">Small > {locationName} > {pluralServiceLabel}</p>
                            <h2 className="text-3xl mt-1">Top {pluralServiceLabel} in {locationName}</h2>
                        </div>
                        <div className="grid lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-2 space-y-6">
                                {professionals.length > 0 ? memoizedProfessionals : (
                                    <Card>
                                        <CardContent className="p-6 text-center">
                                            <p className="text-lg text-muted-foreground">No professionals found for "{pluralServiceLabel}" in {locationName}.</p>
                                            <p className="mt-2">Try widening your search or check back soon!</p>
                                        </CardContent>
                                    </Card>
                                )}
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

    

    


