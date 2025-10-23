
import { Button } from '@/components/ui/button';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Heart, Lightbulb, CheckCircle, Globe, Award, Users, BarChart } from 'lucide-react';

const values = [
    { icon: <Award className="h-8 w-8 text-primary" />, name: "Empowerment", detail: "Helping professionals grow, not just work." },
    { icon: <Lightbulb className="h-8 w-8 text-primary" />, name: "Innovation", detail: "Using technology to simplify local business." },
    { icon: <CheckCircle className="h-8 w-8 text-primary" />, name: "Trust", detail: "Building reliable connections through real verification." },
    { icon: <Users className="h-8 w-8 text-primary" />, name: "Inclusivity", detail: "Giving everyone a fair chance to succeed." },
    { icon: <Heart className="h-8 w-8 text-primary" />, name: "Community", detail: "Creating stronger local networks that support one another." },
    { icon: <BarChart className="h-8 w-8 text-primary" />, name: "Impact", detail: "Making a difference in local communities" },
];

export default function MissionPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'mission-hero-image');
  
  return (
    <>
      <Header />
      <main className="flex-grow bg-background">
        <section className="relative min-h-[400px] flex items-center justify-center text-center text-white">
           {heroImage && (
             <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover"
                data-ai-hint={heroImage.imageHint}
              />
            )}
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative container mx-auto px-4 py-16">
            <h1 className="text-3xl md:text-5xl font-extrabold">Our Mission</h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90">
             Empowering South Africa’s Service Professionals — One Connection at a Time.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 md:py-20">
            <div className="max-w-4xl mx-auto space-y-16">
                <section className="text-center">
                    <p className="text-lg md:text-xl text-foreground leading-relaxed">
                        At Gaupro, our mission is simple: To help local service providers grow their businesses, connect with real customers, and build trusted reputations online. We believe every hardworking South African — whether you’re a plumber, tutor, designer, or beautician — deserves a fair opportunity to be seen, hired, and celebrated for your skills.
                    </p>
                </section>

                <section className="p-8 bg-background rounded-lg text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">💪 What Drives Us</h2>
                    <p className="text-foreground max-w-2xl mx-auto mb-6">
                        South Africa is full of talent — but too many professionals go unnoticed. That’s why Gaupro exists: to bring visibility, trust, and opportunity together in one platform.
                    </p>
                    <ul className="inline-block text-left space-y-3">
                        <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                            <span className="text-foreground">Empower local professionals with smart tools that help them stand out.</span>
                        </li>
                         <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                            <span className="text-foreground">Simplify hiring for customers looking for trusted service providers.</span>
                        </li>
                         <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                            <span className="text-foreground">Build lasting trust through verified profiles, reviews, and transparency.</span>
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">🚀 Our Vision</h2>
                    <p className="text-foreground text-center max-w-3xl mx-auto mb-8">
                       We’re building South Africa’s most trusted professional network, connecting people and businesses through meaningful relationships. We envision a country where:
                    </p>
                    <div className="grid sm:grid-cols-3 gap-6 text-center">
                        <div className="p-6 border rounded-lg">
                            <h3 className="font-semibold text-lg">Skilled Worker Success</h3>
                            <p className="text-sm text-foreground mt-1">Every skilled worker can grow and earn fairly.</p>
                        </div>
                        <div className="p-6 border rounded-lg">
                            <h3 className="font-semibold text-lg">Effortless Hiring</h3>
                            <p className="text-sm text-foreground mt-1">Every customer finds trusted help within minutes.</p>
                        </div>
                        <div className="p-6 border rounded-lg">
                            <h3 className="font-semibold text-lg">Thriving Communities</h3>
                            <p className="text-sm text-foreground mt-1">Every community thrives through collaboration and digital empowerment.</p>
                        </div>
                    </div>
                </section>

                 <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">❤️ Our Core Values</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {values.map(value => (
                            <div key={value.name} className="p-4 border rounded-lg bg-card text-center">
                                <div className="flex justify-center mb-3">{value.icon}</div>
                                <p className="font-semibold mb-1">{value.name}</p>
                                <p className="text-xs text-foreground">{value.detail}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="text-center border-t pt-16">
                    <h2 className="text-3xl font-bold">📈 Our Promise</h2>
                    <p className="mt-4 text-foreground max-w-xl mx-auto">
                        We’re more than just a business directory — we’re your growth partner. When local professionals succeed, our entire nation moves forward. Because when small businesses grow, communities grow too.
                    </p>
                </section>

                <section className="text-center bg-primary text-primary-foreground p-10 rounded-lg">
                    <h2 className="text-3xl font-bold">💬 Join the Movement</h2>
                    <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
                        Be part of a new generation of professionals shaping South Africa’s service economy. Join Gaupro today and discover how easy it is to grow your business online.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                            <Link href="/pro/signup">Join Gaupro as a Pro</Link>
                        </Button>
                        <Button asChild size="lg" variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                            <Link href="/about">Learn More About Us</Link>
                        </Button>
                    </div>
                </section>
            </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
