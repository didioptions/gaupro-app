
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { allProfessionals } from '@/lib/professionals-data';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Verified, ChevronRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import InlineQuoteForm from '@/components/inline-quote-form';

export default function TopTreeFellingPage() {
  const treeFellingPros = allProfessionals['tree-felling'] || [];
  const topCompanies = treeFellingPros.sort((a, b) => b.rating - a.rating).slice(0, 7);

  const heroImage = PlaceHolderImages.find(p => p.id === 'tree-felling-image');

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
                  <h1 className="text-4xl md:text-5xl font-normal">Tree Felling Companies</h1>
                  <p className="mt-4 text-lg text-white/90">
                      Get matched with top-rated, verified professionals in your area.
                  </p>
                </div>
                <InlineQuoteForm service="tree-felling" location="South Africa" />
             </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-left mb-8">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Link href="/" className="hover:text-primary">Gaupro</Link>
                    <ChevronRight className="h-4 w-4" />
                    <span className="font-medium text-foreground">Top Tree Felling Companies</span>
                </div>
                <h2 className="text-3xl mt-1">Top 7 Tree Felling Companies</h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-6">
                    {topCompanies.map((pro) => {
                      const logo = PlaceHolderImages.find(p => p.id === pro.avatarSeed);
                      return (
                        <Link href={`/pro/${pro.id}?service=tree-felling`} key={pro.id} className="group">
                          <Card className="h-full overflow-hidden transition-shadow hover:shadow-xl">
                            <CardContent className="p-6 text-center flex flex-col items-center">
                              {logo && (
                                <Image
                                  src={logo.imageUrl}
                                  alt={`${pro.name} logo`}
                                  width={80}
                                  height={80}
                                  className="rounded-full mb-4 border bg-background"
                                  data-ai-hint={logo.imageHint}
                                />
                              )}
                              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                                {pro.name}
                              </h3>
                              <p className="text-sm text-muted-foreground mb-3">{pro.location}</p>
                              
                              <div className="flex items-center gap-4 text-sm mb-4">
                                <div className="flex items-center gap-1">
                                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                  <span className="font-bold">{pro.rating.toFixed(1)}</span>
                                  <span className="text-muted-foreground">({pro.reviews} reviews)</span>
                                </div>
                                {pro.isProVerified && (
                                  <div className="flex items-center gap-1 text-green-600">
                                    <Verified className="h-4 w-4" />
                                    <span>Verified</span>
                                  </div>
                                )}
                              </div>

                              <p className="text-sm text-muted-foreground flex-grow">
                                {pro.description.replace('{service}', 'tree felling').substring(0, 100)}...
                              </p>
                            </CardContent>
                          </Card>
                        </Link>
                      );
                    })}
                </div>
                <aside className="space-y-8">
                    <Card className="bg-card">
                        <CardContent className="p-6">
                            <h3 className="mb-3 text-foreground">Need Tree Felling Services?</h3>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                                <li>400+ Reviews for tree felling</li>
                                <li>380 Positive Reviews</li>
                                <li>Recently hired Pros have been rated 4.8/5 stars by customers</li>
                                <li>View Top Tree Felling Pros today</li>
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
                    <Card>
                      <CardContent className="p-6 text-center">
                        <h3 className="text-lg font-semibold mb-4">Can't find the right pro?</h3>
                        <p className="text-sm text-muted-foreground mb-4">Let us do the work. Post a job request and get quotes from available professionals in your area.</p>
                        <Button asChild>
                          <Link href="/post-request?service=tree-felling">Get Free Quotes</Link>
                        </Button>
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
