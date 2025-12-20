
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { allProfessionals } from '@/lib/professionals-data';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Verified } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';

export default function TopTreeFellingPage() {
  const treeFellingPros = allProfessionals['tree-felling'] || [];
  const topCompanies = treeFellingPros.sort((a, b) => b.rating - a.rating).slice(0, 7);

  return (
    <>
      <Header />
      <main className="flex-grow bg-secondary/50">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <header className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-normal tracking-tight">
              Top 7 Tree Felling Companies
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the best-rated, verified tree felling professionals on Gaupro.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

           <div className="text-center mt-16">
                <h2 className="text-2xl font-normal mb-4">Need a Different Service?</h2>
                <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                    Get free, no-obligation quotes from trusted professionals for any job, big or small.
                </p>
                 <Button asChild size="lg">
                    <Link href="/post-request">Request Quotes Now</Link>
                </Button>
            </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
