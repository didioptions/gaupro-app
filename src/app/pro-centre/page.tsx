
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import Link from 'next/link';
import { BarChart2, BookOpen, Bot, CheckCircle, ChevronRight, Clock, Mail, MessageCircle, Phone, Search, Users, Zap } from 'lucide-react';

const learnAndGrowTopics = [
    { title: "5 Ways to Get More Leads on Gaupro" },
    { title: "How Reviews Can Grow Your Business" },
    { title: "Profile Optimization Tips for Local Pros" },
];

const tools = [
    { 
        icon: <BarChart2 className="h-6 w-6 text-primary" />,
        title: "Analytics Dashboard",
        description: "See how many clients view your profile"
    },
    { 
        icon: <Zap className="h-6 w-6 text-primary" />,
        title: "Instant Quotes",
        description: "Respond to client requests in real-time"
    },
    { 
        icon: <CheckCircle className="h-6 w-6 text-primary" />,
        title: "Verified Badge",
        description: "Build trust and get more bookings"
    },
];

const howItWorksSteps = [
    {
        title: "Create Your Profile",
        points: ["Choose categories and service areas", "Add photos, qualifications, and bio", "Enable notifications for instant leads"]
    },
    {
        title: "Get Verified Leads",
        points: ["Customers post jobs in your area", "Receive job details that match your skills"]
    },
    {
        title: "Win Jobs & Get Paid Directly",
        points: ["Agree terms with the customer", "Do the job and request a review", "Customers pay you directly — no commissions!"]
    }
];

const benefits = [
    "Verified, high-intent leads in your city",
    "No commissions — keep what you earn",
    "Build trust with real, verified reviews",
    "Profile and category rankings boost visibility",
    "Set your own service areas, hours, and pricing",
    "Support team and success guides when you need them"
];

const supportChannels = [
    { icon: <BookOpen className="h-5 w-5" />, title: "Knowledge Base", details: "500+ articles", href: "#" },
    { icon: <Mail className="h-5 w-5" />, title: "Email", details: "pro-support@gaupro.co.za", href: "mailto:pro-support@gaupro.co.za" },
    { icon: <MessageCircle className="h-5 w-5" />, title: "WhatsApp", details: "060 PRO HELP (060 776 4357)", href: "#" },
    { icon: <Phone className="h-5 w-5" />, title: "Phone", details: "0861 GAUPRO (business hours)", href: "#" },
    { icon: <Bot className="h-5 w-5" />, title: "Live Chat", details: "In Pro dashboard", href: "/pro/login" },
];

const responseTimes = [
    { time: "< 30 min", conversion: "70%" },
    { time: "< 1 hour", conversion: "50%" },
    { time: "< 4 hours", conversion: "30%" },
    { time: "Next day", conversion: "10%" },
];

export default function ProCentrePage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-background">
        
        {/* Hero Section */}
        <section className="bg-background py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="outline" className="mb-4 text-primary border-primary">Last Updated: June 2025 | Version: 2.0</Badge>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Gaupro Pro Centre</h1>
            <p className="mt-4 text-lg text-foreground max-w-2xl mx-auto">
              Empowering South Africa’s Service Pros to Grow Smarter. Your go-to hub for tips, tools, and real-world strategies to attract more clients, build your brand, and grow your business online.
            </p>
            <div className="mt-8 flex justify-center gap-4">
                <Button size="lg" asChild>
                    <Link href="/pro/signup">Join as a Pro</Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                    <Link href="#learn-grow">Explore Guides</Link>
                </Button>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 md:py-16 space-y-16">
            
            {/* Section 1: Learn & Grow */}
            <section id="learn-grow" className="scroll-mt-20">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold">📘 Learn & Grow</h2>
                    <p className="text-foreground max-w-2xl mx-auto mt-2">
                        Practical guides and insights to help your business stand out. From improving your profile to managing client reviews, every article is written by experts who know what works.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {learnAndGrowTopics.map((topic, index) => (
                        <Card key={index} className="hover:shadow-lg transition-shadow">
                            <CardContent className="p-6 flex items-center justify-between">
                                <p className="font-semibold">{topic.title}</p>
                                <ChevronRight className="h-5 w-5 text-foreground" />
                            </CardContent>
                        </Card>
                    ))}
                </div>
                 <div className="text-center mt-4 text-sm text-foreground">
                    <p>SEO Keywords: grow your small business online, tips for freelancers South Africa, online marketing for service providers</p>
                </div>
            </section>

            {/* Section 2: Tools & Resources */}
            <section id="tools" className="scroll-mt-20">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold">⚙️ Tools & Resources</h2>
                    <p className="text-foreground max-w-2xl mx-auto mt-2">
                        Access easy-to-use tools that help you manage your profile, respond to client requests faster, and track your growth.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {tools.map((tool, index) => (
                        <Card key={index}>
                            <CardContent className="p-6 text-center">
                                <div className="flex justify-center mb-4">{tool.icon}</div>
                                <h3 className="text-lg font-semibold">{tool.title}</h3>
                                <p className="text-sm text-foreground">{tool.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                 <div className="text-center mt-4 text-sm text-foreground">
                    <p>SEO Keywords: business tools for professionals, client management South Africa, verified service providers</p>
                </div>
            </section>

            {/* Section 3: Community & Support */}
            <section id="community" className="scroll-mt-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-bold">💡 Community & Support</h2>
                        <p className="text-foreground mt-2">
                            Join thousands of local pros who trust Gaupro to connect them with new clients every day. Learn from success stories, share advice, and grow together.
                        </p>
                        <Button variant="link" asChild className="mt-4 px-0">
                            <Link href="/pro-success-stories">Visit Pro Success Stories →</Link>
                        </Button>
                        <div className="mt-4 text-sm text-foreground">
                            <p>SEO Keywords: trusted professional community South Africa, freelancer network South Africa</p>
                        </div>
                    </div>
                     <Card className="bg-background">
                        <CardHeader>
                            <CardTitle>Pro Support Centre</CardTitle>
                            <p className="text-foreground text-sm">Get help when you need it.</p>
                        </CardHeader>
                        <CardContent className="space-y-3">
                           {supportChannels.map(channel => (
                               <Link href={channel.href} key={channel.title} className="flex items-center gap-4 text-sm p-2 rounded-md hover:bg-secondary">
                                   {channel.icon}
                                   <div>
                                       <p className="font-semibold">{channel.title}</p>
                                       <p className="text-foreground">{channel.details}</p>
                                   </div>
                               </Link>
                           ))}
                           <div className="text-xs text-center text-foreground pt-2">
                               <p>Hours: Mon-Fri 8am-6pm, Sat 9am-1pm</p>
                           </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* How It Works & Benefits */}
            <section className="grid md:grid-cols-2 gap-12">
                <div>
                    <h3 className="text-2xl font-bold mb-6">How Gaupro Works for Pros</h3>
                    <div className="space-y-6">
                        {howItWorksSteps.map((step, index) => (
                            <div key={index}>
                                <h4 className="text-lg font-semibold mb-2">{index + 1}. {step.title}</h4>
                                <ul className="list-disc list-inside space-y-1 text-foreground">
                                    {step.points.map(point => <li key={point}>{point}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                 <div>
                    <h3 className="text-2xl font-bold mb-6">Why Join Gaupro</h3>
                    <ul className="space-y-3">
                        {benefits.map(benefit => (
                            <li key={benefit} className="flex items-start gap-2">
                                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-foreground">{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            
            {/* Lead Management */}
            <section>
                 <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold">🎯 Lead Management Centre</h2>
                    <p className="text-foreground max-w-2xl mx-auto mt-2">
                       Convert More Gaupro Leads by responding quickly. Time is critical.
                    </p>
                </div>
                <Card>
                    <CardHeader>
                        <CardTitle>Lead Response System: Time is Money</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                            {responseTimes.map(item => (
                                <div key={item.time} className="p-4 bg-secondary/50 rounded-lg">
                                    <p className="text-sm font-semibold text-foreground">Response Time</p>
                                    <p className="font-bold text-lg">{item.time}</p>
                                    <p className="text-3xl font-extrabold text-primary mt-2">{item.conversion}</p>
                                    <p className="text-sm font-semibold text-foreground">Conversion</p>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </section>


            {/* Final CTA */}
            <section className="text-center bg-primary text-primary-foreground p-10 rounded-lg">
                <h2 className="text-3xl font-bold">Ready to Grow?</h2>
                <p className="mt-2 max-w-xl mx-auto text-primary-foreground/80">
                    Create your professional profile today and start connecting with real customers near you. Gaupro helps you showcase your expertise and grow your income — all in one place.
                </p>
                <Button asChild size="lg" className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/pro/signup">Join Gaupro as a Pro</Link>
                </Button>
            </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
