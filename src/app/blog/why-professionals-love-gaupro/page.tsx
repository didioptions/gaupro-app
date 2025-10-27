
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, WhatsApp, Mail, Copy, CheckCircle, X, ArrowRight, Star, Clock, BarChart, FileText } from 'lucide-react';

const problems = [
    { title: "Expensive Advertising with Poor ROI", icon: <X className="text-red-500"/> },
    { title: "Time-Wasters and No-Shows", icon: <X className="text-red-500"/> },
    { title: "Competing on Price Alone", icon: <X className="text-red-500"/> },
    { title: "No Online Presence or Credibility", icon: <X className="text-red-500"/> },
    { title: "Feast or Famine Work Cycles", icon: <X className="text-red-500"/> }
]

const solutions = [
    { title: "Quality Leads Daily - Real Customers, Real Jobs", icon: <CheckCircle className="text-green-500"/> },
    { title: "Build Your Online Reputation Automatically", icon: <CheckCircle className="text-green-500"/> },
    { title: "Flexible Membership Options That Fit Your Budget", icon: <CheckCircle className="text-green-500"/> },
    { title: "Business Growth Tools That Drive Success", icon: <CheckCircle className="text-green-500"/> }
]

const leadComparison = [
    { feature: 'Verified contact details', gaupro: '✅', others: '❌ Fake numbers common' },
    { feature: 'Detailed job descriptions', gaupro: '✅', others: '❌ Vague "need help" messages' },
    { feature: 'Budget range disclosed', gaupro: '✅', others: '❌ Price shoppers only' },
    { feature: 'Location verified', gaupro: '✅', others: '❌ Outside service area' },
    { feature: 'Ready to hire now', gaupro: '✅', others: '❌ "Just checking prices"' },
]

const faqItems = [
    {
        question: "How much does Gaupro cost for professionals?",
        answer: "You can start for FREE with 5 lead credits per month. Our paid plans begin at R299/month for 30 leads, offering enhanced profiles and more tools. You only pay for the leads you choose to respond to."
    },
    {
        question: "How quickly will I get leads?",
        answer: "Most professionals receive their first relevant lead within 24 hours of getting their profile verified. Turning on instant notifications ensures you never miss an opportunity."
    },
    {
        question: "Can I choose which leads to respond to?",
        answer: "Absolutely! You have full control. You can review the details of every job request, including the customer's needs and budget, before deciding to use your credits to send a quote."
    },
     {
        question: "What's the average job value on Gaupro?",
        answer: "The average job value is R1,200, but it ranges widely from smaller R300 repairs to large projects exceeding R10,000+. The value depends on your industry and the scope of work."
    }
]

const successStories = [
    {
        name: "Sarah's Cleaning",
        location: "Johannesburg",
        quote: "From 5 clients to 150+ regular customers in one year!",
        rating: 4.8,
        jobs: 300,
        revenue: "R30K monthly",
        avatarSeed: "pro-sarah-clean"
    },
    {
        name: "Mike's Electrical",
        location: "Durban",
        quote: "Gaupro helped me quit my day job and go full-time!",
        rating: 4.9,
        jobs: 400,
        revenue: "Hired 2 employees",
        avatarSeed: "pro-mike-electric"
    },
    {
        name: "Precious Beauty",
        location: "Pretoria",
        quote: "Built my entire client base through Gaupro.",
        rating: 5.0,
        jobs: 200,
        revenue: "Fully booked",
        avatarSeed: "pro-precious-beauty"
    }
]

export default function WhyProfessionalsLoveGauproPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-background">
        <article>
          <header className="bg-secondary/50 py-12 md:py-16">
            <div className="container mx-auto px-4 text-center">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">For Service Providers</p>
              <h1 className="text-3xl md:text-4xl font-normal tracking-tight max-w-4xl mx-auto">
                Why 15,000+ Service Professionals Choose Gaupro to Grow Their Business in South Africa [2024 Success Guide]
              </h1>
              <p className="mt-4 text-sm text-muted-foreground">Published: December 2024 | 8 min read</p>
            </div>
          </header>
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="max-w-4xl mx-auto prose lg:prose-lg prose-headings:font-normal prose-headings:text-foreground prose-a:text-primary hover:prose-a:underline">
                
                <div className="relative w-full aspect-video mb-8">
                     <Image
                        src="https://picsum.photos/seed/pro-hero-collage/1200/675"
                        alt="South African service professionals growing business with Gaupro"
                        fill
                        className="rounded-lg object-cover"
                        data-ai-hint="professionals using app"
                    />
                </div>

                <Card className="not-prose my-8">
                    <CardContent className="p-6 text-center">
                        <h3 className="text-lg font-semibold">Quick Stats: Gaupro for Professionals</h3>
                         <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4 text-center">
                            <div><p className="text-2xl font-bold text-primary">15,000+</p><p className="text-xs text-muted-foreground">Active Pros</p></div>
                            <div><p className="text-2xl font-bold text-primary">4.7/5</p><p className="text-xs text-muted-foreground">Average Rating</p></div>
                            <div><p className="text-2xl font-bold text-primary">R50M+</p><p className="text-xs text-muted-foreground">Revenue Generated</p></div>
                            <div><p className="text-2xl font-bold text-primary">40%</p><p className="text-xs text-muted-foreground">Business Growth</p></div>
                            <div><p className="text-2xl font-bold text-primary">200K+</p><p className="text-xs text-muted-foreground">Jobs Done</p></div>
                        </div>
                        <Button asChild className="mt-6">
                            <Link href="/pro/signup">Join Gaupro FREE Today →</Link>
                        </Button>
                    </CardContent>
                </Card>

                <h2 className="text-2xl">For Service Professionals: Why Gaupro is Your Business Game-Changer</h2>
                 <div className="grid md:grid-cols-2 gap-8 my-8">
                    <div className="p-6 rounded-lg border border-red-200 bg-red-50/50">
                        <h3 className="text-xl font-semibold mb-4 text-red-800">The Problems Professionals Faced Before Gaupro:</h3>
                        <ul className="space-y-3">
                            {problems.map(item => (
                                <li key={item.title} className="flex items-start gap-3"><div className="mt-1">{item.icon}</div> <span>{item.title}</span></li>
                            ))}
                        </ul>
                    </div>
                     <div className="p-6 rounded-lg border border-green-200 bg-green-50/50">
                        <h3 className="text-xl font-semibold mb-4 text-green-800">With Gaupro, Professionals Enjoy:</h3>
                        <ul className="space-y-3">
                             {solutions.map(item => (
                                <li key={item.title} className="flex items-start gap-3"><div className="mt-1">{item.icon}</div> <span>{item.title}</span></li>
                            ))}
                        </ul>
                    </div>
                </div>

                <h2 className="text-2xl pt-8">✅ Quality Leads Daily - Real Customers, Real Jobs</h2>
                <p>Gaupro's intelligent matching system connects you with customers who are actively looking for your specific services, in your designated service area.</p>
                
                <h3 className="text-xl font-semibold">What Makes Gaupro Leads Different:</h3>
                <div className="not-prose overflow-x-auto my-6">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Feature</TableHead>
                        <TableHead>Gaupro Leads</TableHead>
                        <TableHead>Other Platforms</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {leadComparison.map(item => (
                         <TableRow key={item.feature}>
                           <TableCell className="font-medium">{item.feature}</TableCell>
                           <TableCell>{item.gaupro}</TableCell>
                           <TableCell>{item.others}</TableCell>
                         </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                
                <h2 className="text-2xl pt-8">✅ Build Your Online Reputation Automatically</h2>
                <p>A strong online reputation is your most valuable asset. Gaupro makes it easy to collect verified reviews, showcase your best work, and build trust with potential customers.</p>
                <div className="relative w-full aspect-video my-6">
                     <Image
                        src="https://picsum.photos/seed/pro-profile-mockup/1200/675"
                        alt="Mockup of a professional's profile on Gaupro with a high rating and verified badge"
                        fill
                        className="rounded-lg object-cover border"
                        data-ai-hint="profile page mockup"
                    />
                </div>


                <h2 className="text-2xl pt-8">✅ Flexible Membership Options That Fit Your Budget</h2>
                <p>Whether you're just starting out or ready to scale, Gaupro has a plan that's right for you. Start for free and upgrade as you grow.</p>
                <div className="not-prose grid md:grid-cols-3 gap-6 my-8 text-center">
                    <Card>
                        <CardHeader>
                            <CardTitle>FREE STARTER</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-3xl font-bold">R0<span className="text-sm font-normal text-muted-foreground">/month</span></p>
                            <ul className="text-sm text-muted-foreground space-y-2">
                                <li>5 lead credits/month</li>
                                <li>Basic profile</li>
                                <li>Standard support</li>
                            </ul>
                            <Button variant="outline" className="w-full">Start Free</Button>
                        </CardContent>
                    </Card>
                     <Card className="border-primary border-2 relative">
                         <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 text-sm font-semibold rounded-full">Most Popular</div>
                        <CardHeader>
                            <CardTitle>PROFESSIONAL</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-3xl font-bold">R299<span className="text-sm font-normal text-muted-foreground">/month</span></p>
                            <ul className="text-sm text-muted-foreground space-y-2">
                                <li>30 lead credits/month</li>
                                <li>Enhanced profile</li>
                                <li>Priority support</li>
                                <li>Analytics dashboard</li>
                            </ul>
                            <Button className="w-full">Go Pro</Button>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <CardTitle>BUSINESS</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-3xl font-bold">R899<span className="text-sm font-normal text-muted-foreground">/month</span></p>
                            <ul className="text-sm text-muted-foreground space-y-2">
                                <li>Unlimited leads</li>
                                <li>Premium profile</li>
                                <li>Dedicated support</li>
                                <li>Advanced analytics</li>
                                <li>Team accounts</li>
                            </ul>
                            <Button variant="outline" className="w-full">Scale Up</Button>
                        </CardContent>
                    </Card>
                </div>

                <h2 className="text-2xl pt-8">Success Story Spotlight: From Struggling to Thriving</h2>
                <Card className="not-prose my-8">
                    <CardContent className="p-6">
                        <div className="grid md:grid-cols-3 gap-6 items-center">
                            <div className="relative w-full aspect-square">
                                 <Image
                                    src="https://picsum.photos/seed/pro-john-plumber/600/600"
                                    alt="John Vermeulen from John's Plumbing"
                                    fill
                                    className="rounded-lg object-cover"
                                    data-ai-hint="plumber portrait"
                                />
                            </div>
                            <div className="md:col-span-2">
                                <h3 className="text-xl font-semibold">John's Plumbing, Cape Town - 500+ Jobs, 4.9 Stars</h3>
                                <blockquote className="border-l-4 pl-4 my-4 italic">"Gaupro transformed my one-man operation into a thriving business with 3 employees. I've completed 500+ jobs through Gaupro with a 4.9-star rating. The platform pays for itself in the first job every month!"</blockquote>
                                <p className="font-semibold">- John Vermeulen, John's Plumbing</p>
                                <div className="mt-4">
                                  <h4 className="font-semibold">John's Results:</h4>
                                  <p><strong>Before Gaupro:</strong> R15,000/month revenue<br/>
                                  <strong>After 6 months:</strong> R65,000/month revenue<br/>
                                  <strong>Growth:</strong> 333% increase<br/>
                                  <strong>Team:</strong> From 1 to 3 employees</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <h3 className="text-xl font-semibold">More Gaupro Professional Success Stories</h3>
                 <div className="not-prose my-6">
                    <Carousel>
                        <CarouselContent>
                            {successStories.map(story => (
                                <CarouselItem key={story.name} className="md:basis-1/2 lg:basis-1/3">
                                <Card>
                                    <CardContent className="p-4">
                                        <div className="flex items-center gap-4 mb-2">
                                             <Image
                                                src={`https://picsum.photos/seed/${story.avatarSeed}/64/64`}
                                                alt={`Photo of ${story.name}`}
                                                width={64}
                                                height={64}
                                                className="rounded-full"
                                                data-ai-hint="professional portrait"
                                            />
                                            <div>
                                                <h4 className="font-semibold">{story.name}</h4>
                                                <p className="text-sm text-muted-foreground">{story.location}</p>
                                            </div>
                                        </div>
                                        <blockquote className="text-sm italic">"{story.quote}"</blockquote>
                                        <div className="text-xs text-muted-foreground mt-2 space-x-2">
                                            <span>⭐ {story.rating} rating</span>
                                            <span>|</span>
                                            <span>{story.jobs}+ jobs</span>
                                             <span>|</span>
                                            <span>{story.revenue}</span>
                                        </div>
                                    </CardContent>
                                </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                 </div>
                 

                <h2 className="text-2xl pt-8">Frequently Asked Questions - Professionals</h2>
                <Accordion type="single" collapsible className="w-full my-6">
                    {faqItems.map((item, index) => (
                        <AccordionItem value={`item-${index}`} key={index}>
                            <AccordionTrigger>{item.question}</AccordionTrigger>
                            <AccordionContent>
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                <div className="not-prose text-center bg-primary text-primary-foreground p-10 my-12 rounded-lg">
                    <h2 className="text-3xl font-normal">Ready to Transform Your Business?</h2>
                    <p className="mt-2 max-w-2xl mx-auto text-primary-foreground/80">
                        Join 15,000+ professionals who trust Gaupro to connect them with real customers, build their reputation, and grow their income.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                            <Link href="/pro/signup">Start Free Today - No Credit Card</Link>
                        </Button>
                    </div>
                </div>

            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
