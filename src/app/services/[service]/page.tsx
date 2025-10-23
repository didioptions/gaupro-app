
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
import { RequestQuoteDialog } from '@/components/request-quote-dialog';

const professionals = [
    {
        name: "Gwasa Electrical",
        location: "Rosebank, Johannesburg",
        description: "Registered Electrical and Solar systems Experts in Inspection reporting and installation. We are registered with the Electrical Contractor Association (ECA) and Department of Labour (DOL). Our commitment to quality work has been recognized by... show more",
        rating: 4.6,
        reviews: 0,
        avatarSeed: "gwasa-electrical"
    },
    {
        name: "Inqama Yethu Holdings",
        location: "Rosebank, Johannesburg",
        description: "A new, fresh, exciting company who will handle all your garden, landscaping, cleaning, construction, renovation and rubble needs. We are a new, fresh and exciting company that...",
        rating: 0.0,
        reviews: 0,
        avatarSeed: "inqama-yethu"
    }
]

const priceEstimates = [
    "Hourly rate up to R600",
    "Emergency call-outs: R800 - R1500",
    "After Hours Rate: +50%"
]


export default function ServicePage({ params }: { params: { service: string } }) {
    const service = allServices.find(s => s.value === params.service);
    const serviceLabel = service?.label || params.service.charAt(0).toUpperCase() + params.service.slice(1);
    const heroImage = PlaceHolderImages.find(p => p.id === 'plumber-hero-image');

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
                     <div className="relative container mx-auto px-4">
                        <h1 className="text-4xl md:text-5xl font-extrabold">Get Quotes for {serviceLabel}s</h1>
                        <p className="mt-4 text-lg max-w-xl mx-auto text-white/90">
                            Get matched with top-rated, verified professionals in your area.
                        </p>
                        <RequestQuoteDialog>
                            <Button size="lg" variant="destructive" className="mt-8 text-lg px-10 h-14">
                                Get Free Quotes
                            </Button>
                        </RequestQuoteDialog>
                     </div>
                </section>

                <section className="py-16 bg-secondary/30">
                    <div className="container mx-auto px-4">
                         <div className="text-center md:text-left mb-8">
                            <p className="text-sm text-muted-foreground">Small > Johannesburg > Plumbers</p>
                            <h1 className="text-3xl font-bold mt-1">Top Plumbers in Rosebank, Johannesburg</h1>
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
                                                            <h2 className="text-xl font-bold">{pro.name}</h2>
                                                            <p className="text-sm text-muted-foreground">{pro.location}</p>
                                                            <p className="text-sm mt-2">{pro.description}</p>
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
                                        <h3 className="font-semibold mb-3">Need Plumbers in Johannesburg?</h3>
                                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                                            <li>602 Reviews for plumbers</li>
                                            <li>510 Positive Reviews</li>
                                            <li>Recently hired Pros have been rated 4.6/5 stars by customers</li>
                                            <li>View Johannesburg Pros for plumbers today</li>
                                        </ul>
                                    </CardContent>
                                </Card>
                                <Card className="bg-card">
                                    <CardContent className="p-6">
                                        <h3 className="font-semibold mb-3">Price Estimate for plumbers in Johannesburg</h3>
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
