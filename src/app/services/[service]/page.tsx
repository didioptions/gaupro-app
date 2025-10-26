
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
            avatarSeed: "swift-moves"
        },
        {
            name: "Joburg Movers Co.",
            location: "Sandton, Johannesburg",
            description: "Specializing in residential and office moves within Gauteng. We handle your belongings with care and ensure a smooth, efficient moving day. Free, no-obligation quotes available.",
            rating: 4.7,
            reviews: 88,
            avatarSeed: "joburg-movers"
        }
    ],
    default: [
        {
            name: "Pro Services Inc.",
            location: "Rosebank, Johannesburg",
            description: "Your trusted experts for quality service. We are fully registered and our commitment to quality work has been recognized by many happy customers. We handle all types of projects, big or small.",
            rating: 4.6,
            reviews: 42,
            avatarSeed: "pro-services-inc"
        },
        {
            name: "General Solutions Pty",
            location: "Rosebank, Johannesburg",
            description: "A new, fresh, exciting company who will handle all your needs. We are a new, fresh and exciting company that provides top-notch service and customer satisfaction.",
            rating: 0.0,
            reviews: 0,
            avatarSeed: "general-solutions"
        }
    ]
};


const priceEstimates = [
    "Hourly rate up to R600",
    "Emergency call-outs: R800 - R1500",
    "After Hours Rate: +50%"
]


export default function ServicePage({ params, searchParams }: { params: { service: string }, searchParams: { [key: string]: string | string[] | undefined } }) {
    const locationQuery = searchParams?.location;

    const service = allServices.find(s => s.value === params.service);
    const serviceLabel = service?.label || params.service.charAt(0).toUpperCase() + params.service.slice(1);
    
    // Improved pluralization
    const pluralServiceLabel = serviceLabel.endsWith('s') ? serviceLabel : `${serviceLabel}s`;
    const singularOrPluralLowercase = serviceLabel.endsWith('s') ? serviceLabel.toLowerCase() : `${serviceLabel.toLowerCase()}s`;

    // Dynamically choose professionals based on service
    const professionals = allProfessionals[params.service as keyof typeof allProfessionals] || allProfessionals.default;

    // Dynamically find the image for the service
    const serviceImageId = `${params.service}-image`.replace('-service', '');
    let heroImage = CategoryImages.find(p => p.id === serviceImageId);
    
    // Fallback to a default placeholder if no specific image is found
    if (!heroImage) {
        heroImage = PlaceHolderImages.find(p => p.id === 'hero-background-image');
    }

    const locationName = typeof locationQuery === 'string'
        ? locationQuery.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
        : "Johannesburg";


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
                          <h1 className="text-4xl md:text-5xl font-extrabold">Get Quotes for {pluralServiceLabel}</h1>
                          <p className="mt-4 text-lg text-white/90">
                              Get matched with top-rated, verified professionals in your area.
                          </p>
                        </div>
                        <InlineQuoteForm service={params.service} location={locationName} />
                     </div>
                </section>

                <section className="py-16 bg-background">
                    <div className="container mx-auto px-4">
                         <div className="text-center md:text-left mb-8">
                            <p className="text-sm text-muted-foreground">Small &gt; {locationName} &gt; {pluralServiceLabel}</p>
                            <h2 className="text-3xl font-bold mt-1">Top {pluralServiceLabel} in {locationName}</h2>
                        </div>
                        <div className="grid lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-2 space-y-6">
                                {professionals.map(pro => (
                                    <Card key={pro.name} className="bg-card">
                                        <CardContent className="p-6">
                                            <div className="grid sm:grid-cols-4 gap-6">
                                                <div className="sm:col-span-3">
                                                    <div className="flex items-start gap-4">
                                                        <Image src={`https://picsum.photos/seed/${pro.avatarSeed}/80/80`} alt={pro.name} width={80} height={80} className="rounded-md border" data-ai-hint="company logo" />
                                                        <div>
                                                            <h3 className="text-xl font-bold text-foreground">{pro.name}</h3>
                                                            <p className="text-sm text-muted-foreground">{pro.location}</p>
                                                            <p className="text-sm mt-2 text-foreground">{pro.description}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-left sm:text-right">
                                                    <Badge className="text-base font-bold bg-green-100 text-green-800 border-green-200">{pro.rating.toFixed(1)}</Badge>
                                                    <p className="text-xs text-muted-foreground mt-1">{pro.reviews} reviews</p>
                                                    <div className="flex items-center gap-0.5 mt-2 justify-start sm:justify-end">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Star key={i} className={`h-4 w-4 ${pro.rating > i ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                                                        ))}
                                                    </div>
                                                    <Button variant="outline" className="mt-4 w-full sm:w-auto">Request a Quote</Button>
                                                </div>
                                            </div>
                                             <p className="text-xs text-muted-foreground mt-4">Have you used this business? <Link href="#" className="underline">Write Review</Link></p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                            <aside className="space-y-8">
                                <Card className="bg-card">
                                    <CardContent className="p-6">
                                        <h3 className="font-semibold mb-3 text-foreground">Need {pluralServiceLabel} in {locationName}?</h3>
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
                                        <h3 className="font-semibold mb-3 text-foreground">Price Estimate for {singularOrPluralLowercase} in {locationName}</h3>
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