
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import Link from 'next/link';
import Image from 'next/image';
import { Star, TrendingUp, CheckCircle, Users, User, Tv, Edit, MessageSquare, Handshake } from 'lucide-react';
import GrowClientBaseCta from '@/components/layout/grow-client-base-cta';

const realStories = [
  {
    name: 'Thabo',
    business: 'Electrician, Johannesburg',
    quote: '“Before Gaupro, finding reliable clients was a constant struggle. Now, I get calls daily from people who need my services. My reputation online has never been stronger!”',
    avatarSeed: 'pro-themba',
  },
  {
    name: 'Lerato',
    business: 'Interior Designer, Cape Town',
    quote: '“Gaupro helped me showcase my portfolio professionally. I now attract high-quality leads and have repeat clients who trust my work.”',
    avatarSeed: 'pro-lerato',
  },
  {
    name: 'Nokuthula',
    business: 'Painter, Pretoria',
    quote: '“I went from 2 jobs a week to 10, just through Gaupro. I no longer spend money on advertising, and referrals are flowing in naturally.”',
    avatarSeed: 'pro-nokuthula',
  },
  {
    name: 'Sizwe',
    business: 'Plumber, Durban',
    quote: '“Gaupro made connecting with clients simple. I can focus on doing great work while the platform helps me manage bookings and reviews.”',
    avatarSeed: 'pro-sizwe',
  },
];

const impactStats = [
    {
        icon: <TrendingUp className="h-10 w-10 text-primary" />,
        stat: "70% Increase",
        description: "in client inquiries reported by pros within the first 3 months."
    },
    {
        icon: <Star className="h-10 w-10 text-primary" />,
        stat: "95% of Users",
        description: "say their online credibility improved thanks to verified reviews."
    },
    {
        icon: <Users className="h-10 w-10 text-primary" />,
        stat: "2x-3x More Jobs",
        description: "Many small businesses have doubled or tripled their weekly jobs by connecting with clients directly through Gaupro."
    }
];

const whatProsSay = [
    {
        quote: "I never imagined finding reliable clients could be this easy. Gaupro changed the game for my business.",
        author: "– Thabo, Plumber",
        avatarSeed: 'pro-thabo-says'
    },
    {
        quote: "Being on Gaupro boosted my credibility. Clients trust me because of the reviews and professional profile.",
        author: "– Lerato, Designer",
        avatarSeed: 'pro-lerato-says'
    },
    {
        quote: "The platform is simple to use and really works. I recommend it to any local professional.",
        author: "– Sizwe, Electrician",
        avatarSeed: 'pro-sizwe-says'
    },
    {
        quote: "Before Gaupro, we struggled with scattered advertising on every sites. Now, the platform makes finding new clients simple. With email notifications for leads, we no longer have to keep checking the site, and excellent support makes the experience even better. Gaupro has truly streamlined our client acquisition.",
        author: "– Keke Sithole, IntePro",
        avatarSeed: 'pro-keke-says'
    },
    {
        quote: "Gaupro connects me with clients who need small repairs or larger projects without the usual hassle of advertising. Everything from bookings to client communication is easy to manage, and my reputation grows with every completed job.",
        author: "– Jabu, Handyman, Soweto",
        avatarSeed: 'pro-jabu-says'
    },
    {
        quote: "Finding steady work used to be a challenge, but Gaupro changed that. I now have regular leads and can showcase my projects online, giving clients confidence in my services. The platform is simple, reliable, and has helped my business grow faster than I imagined.",
        author: "– Michael, Builder, Durban",
        avatarSeed: 'pro-michael-says'
    }
];

const howItWorksSteps = [
    {
        icon: <Edit className="h-8 w-8 text-primary"/>,
        title: "Create Your Profile",
        description: "Highlight your skills, services, and portfolio."
    },
    {
        icon: <Tv className="h-8 w-8 text-primary"/>,
        title: "Showcase Your Work",
        description: "Share pictures, descriptions, and past projects."
    },
    {
        icon: <MessageSquare className="h-8 w-8 text-primary"/>,
        title: "Connect with Verified Clients",
        description: "Get leads and inquiries from people looking for your services."
    },
    {
        icon: <Handshake className="h-8 w-8 text-primary"/>,
        title: "Get Hired & Build Your Reputation",
        description: "Manage bookings, earn reviews, and grow your brand online."
    }
]


export default function ProSuccessStoriesPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-background">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <header className="text-center mb-16 max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-normal tracking-tight">Gaupro Success Stories</h1>
            <div className="mt-6 text-foreground space-y-4">
                <p>
                    Discover how local professionals across South Africa are growing their businesses through Gaupro. From electricians and plumbers to designers and consultants, Gaupro helps experts reach more clients, build credibility, and manage their reputation online.
                </p>
                <p>
                    Whether you’re a small business owner or an independent professional, Gaupro gives you the tools to showcase your skills, connect with real clients, and grow your brand — all in one powerful platform.
                </p>
            </div>
          </header>

          <section className="space-y-12">
            <div>
                <h2 className="text-2xl font-normal text-center mb-10">Real Success Stories from South African Professionals</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {realStories.map((story) => (
                    <Card key={story.name} className="bg-secondary/50 border h-full">
                        <CardContent className="p-6 flex flex-col items-center text-center h-full">
                            <Image
                                src={`https://picsum.photos/seed/${story.avatarSeed}/80/80`}
                                alt={`Avatar of ${story.name}`}
                                width={80}
                                height={80}
                                className="rounded-full mb-4"
                                data-ai-hint="professional portrait"
                            />
                            <blockquote className="italic text-foreground mb-4 flex-grow">
                            {story.quote}
                            </blockquote>
                            <p className="font-semibold text-sm">{story.name} – <span className="text-muted-foreground font-normal">{story.business}</span></p>
                        </CardContent>
                    </Card>
                    ))}
                </div>
            </div>

            <div className="border-t pt-12">
                 <h2 className="text-2xl font-normal text-center mb-10">Before & After: Real Impact</h2>
                 <div className="grid md:grid-cols-3 gap-8 text-center">
                    {impactStats.map(stat => (
                        <Card key={stat.stat} className="bg-card border p-6">
                            <div className="flex justify-center mb-4">{stat.icon}</div>
                            <p className="text-2xl font-semibold text-primary">{stat.stat}</p>
                            <p className="text-foreground mt-1">{stat.description}</p>
                        </Card>
                    ))}
                 </div>
            </div>

             <div className="border-t pt-12">
                 <h2 className="text-2xl font-normal text-center mb-10">What Our Professionals Say</h2>
                 <div className="grid md:grid-cols-3 gap-8">
                    {whatProsSay.map(testimonial => (
                        <Card key={testimonial.author} className="bg-secondary/50 border h-full">
                            <CardContent className="p-6 flex flex-col items-center text-center h-full">
                                <Image
                                    src={`https://picsum.photos/seed/${testimonial.avatarSeed}/80/80`}
                                    alt={`Avatar of ${testimonial.author}`}
                                    width={80}
                                    height={80}
                                    className="rounded-full mb-4"
                                    data-ai-hint="professional portrait"
                                />
                                <blockquote className="italic text-foreground mb-4 flex-grow">"{testimonial.quote}"</blockquote>
                                <p className="font-semibold text-sm">{testimonial.author}</p>
                            </CardContent>
                        </Card>
                    ))}
                 </div>
            </div>
            
            <div className="border-t pt-12">
                 <h2 className="text-2xl font-normal text-center mb-10">How Gaupro Works</h2>
                 <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {howItWorksSteps.map(step => (
                        <div key={step.title} className="text-center">
                            <div className="flex justify-center mb-4">{step.icon}</div>
                            <h3 className="font-semibold text-lg">{step.title}</h3>
                            <p className="text-muted-foreground text-sm mt-1">{step.description}</p>
                        </div>
                    ))}
                 </div>
            </div>

            <div className="border-t pt-12 text-center bg-primary text-primary-foreground p-10 rounded-lg">
                <h2 className="text-3xl font-bold">Join Gaupro Today & Start Your Success Story</h2>
                <p className="mt-4 max-w-2xl mx-auto text-primary-foreground/80">
                    Gaupro is the platform for South African professionals who want steady work, reliable clients, and growth opportunities.
                </p>
                <p className="mt-4 max-w-2xl mx-auto text-primary-foreground/80">
                    Don’t wait — showcase your skills, attract clients, and build your business now.
                </p>
                <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-lg">
                    <Link href="/pro/register">Join Now</Link>
                </Button>
            </div>

          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
