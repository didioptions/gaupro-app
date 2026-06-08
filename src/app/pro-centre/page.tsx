import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { 
    BarChart2, 
    BookOpen, 
    CheckCircle, 
    ChevronRight, 
    Clock, 
    Mail, 
    MessageCircle, 
    Phone, 
    Zap, 
    Hammer, 
    Droplets, 
    Lightbulb, 
    Brush, 
    Trash2, 
    GraduationCap, 
    Camera,
    ShieldCheck,
    Globe,
    TrendingUp,
    Star,
    Users
} from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const resourceArticles = [
    { title: "How to Get More Customers as a Plumber in SA", href: "/blog/how-to-succeed-on-gaupro" },
    { title: "How to Generate Leads for Your Contracting Business", href: "/how-it-works-for-pros" },
    { title: "How Reviews Help Service Professionals Win More Jobs", href: "/blog/how-to-succeed-on-gaupro" },
    { title: "Marketing Tips for Small Businesses in South Africa", href: "/pro-centre" },
    { title: "How to Improve Your Online Reputation Fast", href: "/blog/how-to-succeed-on-gaupro" },
];

const tradeSolutions = [
    { 
        icon: <Droplets className="h-6 w-6" />, 
        title: "Plumbers", 
        description: "Connect with homeowners in Johannesburg and Pretoria needing urgent geyser repairs, leak detection, and new installations. Gaupro delivers high-intent leads directly to your phone." 
    },
    { 
        icon: <Zap className="h-6 w-6" />, 
        title: "Electricians", 
        description: "From CoC inspections in Sandton to solar installations in Cape Town, we help qualified electricians find steady work and build a trusted local brand." 
    },
    { 
        icon: <Hammer className="h-6 w-6" />, 
        title: "Builders", 
        description: "Find high-value renovation and construction projects in Midrand and Durban. Showcase your portfolio to clients ready to start their dream home projects." 
    },
    { 
        icon: <Brush className="h-6 w-6" />, 
        title: "Painters", 
        description: "Grow your painting business with painting leads for interior, exterior, and roof painting projects. Our review system helps professional painters stand out from unverified competition." 
    },
    { 
        icon: <CheckCircle className="h-6 w-6" />, 
        title: "Cleaners", 
        description: "Get consistent cleaning contracts for homes and offices across Bloemfontein and Port Elizabeth. Manage your schedule and client list effortlessly." 
    },
    { 
        icon: <Trash2 className="h-6 w-6" />, 
        title: "Rubble Removal", 
        description: "Fill your trucks with site clearing and waste removal leads. Perfect for rubble removal companies looking for local density in Gauteng and beyond." 
    },
    { 
        icon: <GraduationCap className="h-6 w-6" />, 
        title: "Tutors", 
        description: "Find students needing extra help with Maths, Science, and languages. Gaupro helps independent tutors in Polokwane and major cities find new pupils." 
    },
    { 
        icon: <Camera className="h-6 w-6" />, 
        title: "Photographers", 
        description: "Win more wedding and event bookings. Showcase your photography style and get matched with clients looking for professional visual storytelling." 
    },
];

const proFaqs = [
    {
        q: "How does Gaupro help South African professionals get more customers?",
        a: "Gaupro acts as a dedicated marketing engine for your service business. We invest heavily in search engine optimization (SEO) and digital advertising to attract thousands of customers every day who are searching for services like plumbing, building, and cleaning in cities like Johannesburg and Cape Town. When a customer posts a job request, we match it to your specific trade and location. This allows you to stop 'chasing' work and instead receive high-quality leads directly, enabling you to grow your client base efficiently and affordably."
    },
    {
        q: "Is Gaupro effective for finding leads in Sandton and Midrand?",
        a: "Yes, Sandton and Midrand are among our most active service hubs in Gauteng. Due to the high density of residential estates and commercial offices in these areas, there is a constant demand for trusted professionals. By setting your service area to include these regions, you will receive real-time notifications for everything from emergency repairs to large-scale corporate maintenance projects. Our platform is designed to help you dominate local search results in these high-value markets."
    },
    {
        q: "How can I improve my business ranking in the Gaupro directory?",
        a: "Your ranking in the Gaupro professional directory is determined by a combination of factors designed to reward excellence. The most critical elements are your average star rating, the number of verified customer reviews you've collected, and the completeness of your business profile. Professionals who respond to leads quickly (ideally under 30 minutes) and maintain a 'Pro Verified' status consistently rank higher. High-ranking pros receive significantly more profile views and direct inquiries from potential clients."
    },
    {
        q: "What is the cost of generating leads through Gaupro?",
        a: "Gaupro uses a transparent pay-per-lead credit system, which is far more cost-effective than traditional advertising. It is 100% free to create your profile and receive lead notifications. You only spend credits when you choose to 'unlock' a specific lead to see the customer's contact details and send a quote. Lead prices typically range from 1 to 5 credits depending on the service value and local demand. This ensures you only pay for the opportunities you actually want to pursue, giving you total control over your marketing budget."
    },
    {
        q: "How do customer reviews help me win more jobs?",
        a: "In the South African service industry, trust is the most important currency. 92% of customers read online reviews before hiring a contractor. Verified reviews on your Gaupro profile act as social proof of your reliability and quality of work. When a potential client in Pretoria or Durban compares multiple quotes, they are statistically much more likely to choose the professional with a history of glowing 5-star feedback from their neighbors. Gaupro provides tools to help you easily request reviews from happy clients after every job."
    },
    {
        q: "Can I target specific suburbs or just entire cities?",
        a: "You have complete control over your service coverage. In your Gaupro dashboard, you can select your primary city and then add specific suburbs or set a working radius (e.g., 20km from your base). Whether you want to focus exclusively on the Atlantic Seaboard in Cape Town or cover the entire East Rand, our system ensures you only receive job requests that are within your preferred travel distance, helping you save on fuel and travel time."
    },
    {
        q: "Is there a monthly subscription fee to stay on the platform?",
        a: "No, Gaupro does not charge any monthly or annual subscription fees. We believe in empowering local entrepreneurs and small businesses without the burden of fixed overheads. You only pay for performance. This flexible model allows you to scale your lead acquisition up when you need more work and pause it when you are fully booked, ensuring Gaupro remains a profitable partner for your business growth at every stage."
    },
    {
        q: "How does the 'Pro Verified' badge benefit my business?",
        a: "The 'Pro Verified' badge is a seal of trust that tells customers you are a legitimate, vetted professional. To earn this, we verify your identity and, where applicable, your business registration and professional certifications. Profiles with the verified badge receive up to 3x more clicks and quote acceptances. In a competitive market like Johannesburg, being verified is often the deciding factor for a customer choosing between you and an unverified competitor."
    },
    {
        q: "What support is available if I have issues with a lead?",
        a: "Gaupro is committed to the success of our professionals. We have a dedicated Pro Support team available via WhatsApp, email, and phone during business hours. If you encounter a lead with incorrect contact information or a job that was posted in error, you can use our lead dispute system. If verified, the credits used for that lead are promptly refunded to your account balance. Your satisfaction is a priority, as we aim to build long-term partnerships with our service providers."
    },
    {
        q: "Can Gaupro help me find commercial or corporate clients?",
        a: "Absolutely. While we are a leader in residential home services, Gaupro is increasingly used by property managers, body corporates, and office managers in business hubs like Rosebank and Umhlanga. These clients often look for professionals who can provide VAT invoices, CoC certificates, and ongoing maintenance contracts. By highlighting your commercial experience and certifications on your profile, you can attract these high-value, recurring business opportunities."
    },
    {
        q: "How quickly will I start receiving leads after signing up?",
        a: "Most new professionals who complete their profile to 100% and set their service keywords correctly start receiving lead notifications within 24 to 48 hours. The volume of leads depends on your service category and location. Popular trades like plumbing and electrical in Gauteng see a high daily volume, while more niche services may receive leads more intermittently. We recommend enabling push notifications on the Gaupro app so you never miss an opportunity."
    },
    {
        q: "How do I handle payments with customers I find through Gaupro?",
        a: "Gaupro is a connection platform, which means you handle all financial transactions directly with your clients. You set your own rates, terms, and preferred payment methods (Cash, EFT, or Card). We do not take a commission on the jobs you win or process the payments for you. This allows you to keep 100% of your hard-earned revenue and manage your cash flow according to your own business practices."
    },
    {
        q: "Is Gaupro better than advertising on social media?",
        a: "While social media is great for brand awareness, Gaupro delivers 'high-intent' leads. People on social media are browsing, while people on Gaupro are actively looking to hire a professional right now. Instead of paying for 'likes' or 'impressions' with no guarantee of a job, you only pay to connect with customers who have a specific need. This results in a significantly higher return on investment (ROI) and a more predictable way to grow your business."
    },
    {
        q: "What should I include in my business profile to stand out?",
        a: "A winning profile includes a professional logo, a clear and detailed 'About Us' section, and at least 10–15 high-quality photos of your past work. Photos are incredibly powerful in building trust. You should also list your specific skills, years of experience, and any industry-specific qualifications (like NHBRC or PIRB registration). A complete, visual, and professional profile is your best tool for convincing a customer that you are the right person for the job."
    },
    {
        q: "Can I use Gaupro if I am a solo freelancer or a one-man show?",
        a: "Yes, many of our most successful professionals are independent contractors and solo freelancers. Gaupro levels the playing field, allowing you to compete with larger companies by showcasing your individual expertise and building a stellar reputation through personal customer service and reviews. Whether you are an electrician with one bakkie or a large construction firm with multiple crews, Gaupro provides the leads you need to keep your calendar full."
    }
];

export default function ProCentrePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "name": "Gaupro",
                "url": "https://gaupro.co.za",
                "logo": "https://gaupro.co.za/logo.png"
            },
            {
                "@type": "FAQPage",
                "mainEntity": proFaqs.map(f => ({
                    "@type": "Question",
                    "name": f.q,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": f.a
                    }
                }))
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gaupro.co.za" },
                    { "@type": "ListItem", "position": 2, "name": "Pro Centre", "item": "https://gaupro.co.za/pro-centre" }
                ]
            }
        ]
    };

    return (
        <main className="flex-grow bg-background">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* Hero Section */}
            <section className="bg-secondary/30 py-16 md:py-24 border-b">
                <div className="container mx-auto px-4 text-center">
                    <Badge variant="outline" className="mb-4 text-primary border-primary">Version 3.0 | The Business Growth Edition</Badge>
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Gaupro Pro Centre</h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        The ultimate hub for South African service professionals. Learn how to generate more leads, build a 5-star online reputation, and scale your business in Johannesburg, Cape Town, Durban, and beyond.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" className="px-8 h-14 text-lg" asChild>
                            <Link href="/pro/signup">Join as a Pro - Start Growing</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="px-8 h-14 text-lg" asChild>
                            <Link href="/browse-leads">Browse Latest Job Leads</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16 space-y-24">
                
                {/* Section: Resource Library */}
                <section id="learn-grow">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">📘 Resource Library: Marketing & Lead Generation</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Expert guides to help you master digital marketing and customer acquisition in the South African service industry.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {resourceArticles.map((article, index) => (
                            <Link key={index} href={article.href}>
                                <Card className="hover:shadow-lg transition-all hover:-translate-y-1 h-full border-l-4 border-l-primary">
                                    <CardContent className="p-6 flex items-center justify-between">
                                        <p className="font-bold text-foreground pr-4">{article.title}</p>
                                        <ChevronRight className="h-5 w-5 text-primary flex-shrink-0" />
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                        <Card className="bg-primary text-primary-foreground flex flex-col justify-center items-center text-center p-6">
                             <TrendingUp className="h-10 w-10 mb-4" />
                             <p className="font-bold mb-2">Need a custom strategy?</p>
                             <p className="text-xs opacity-90 mb-4">Our Pro-Support team offers free profile audits for active members.</p>
                             <Button variant="secondary" size="sm" asChild>
                                 <Link href="/contact">Contact Support</Link>
                             </Button>
                        </Card>
                    </div>
                </section>

                {/* Section: Trade Solutions */}
                <section>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">🛠️ Tailored Lead Solutions for Your Trade</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            We help professionals across 500+ categories find more clients. See how we help these popular South African trades.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {tradeSolutions.map((trade, index) => (
                            <div key={index} className="space-y-4">
                                <div className="h-12 w-12 rounded-xl bg-secondary flex items-center justify-center text-primary">
                                    {trade.icon}
                                </div>
                                <h3 className="text-xl font-bold">{trade.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {trade.description}
                                </p>
                                <Link 
                                    href={`/services/${trade.title.toLowerCase().replace(/\s+/g, '-')}`} 
                                    className="text-sm font-bold text-primary hover:underline flex items-center gap-1"
                                >
                                    View {trade.title} Leads <ChevronRight className="h-3 w-3" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section: Tools & Resources */}
                <section id="tools">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">⚙️ Growth Tools for Professionals</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Powerful, built-in features to help you manage your digital presence and win more work.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: <BarChart2 className="h-8 w-8" />, title: "Live Analytics", desc: "Track profile views and lead conversion rates in real-time.", imgId: "analytics-dashboard-card" },
                            { icon: <ShieldCheck className="h-8 w-8" />, title: "Pro Verification", desc: "Earn the badge that increases trust and boosts your ranking.", imgId: "verified-badge-card" },
                            { icon: <Zap className="h-8 w-8" />, title: "Lead Alerts", desc: "Get instant SMS and email notifications the moment a job is posted.", imgId: "instant-quotes-card" },
                        ].map((tool, index) => {
                            const image = PlaceHolderImages.find(p => p.id === tool.imgId);
                            return (
                                <Card key={index} className="overflow-hidden group">
                                    {image && (
                                        <div className="relative h-48 w-full overflow-hidden">
                                            <Image
                                                src={image.imageUrl}
                                                alt={tool.title}
                                                fill
                                                className="object-cover transition-transform group-hover:scale-105"
                                                data-ai-hint={image.imageHint}
                                            />
                                        </div>
                                    )}
                                    <CardContent className="p-6 text-center">
                                        <div className="flex justify-center mb-4 text-primary">{tool.icon}</div>
                                        <h3 className="text-xl font-bold mb-2">{tool.title}</h3>
                                        <p className="text-sm text-muted-foreground">{tool.desc}</p>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </section>

                {/* Section: Support & Channels */}
                <section id="community" className="bg-secondary/10 p-8 md:p-12 rounded-3xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">💡 Build Your Reputation with the Gaupro Community</h2>
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                Join over 15,000 verified professionals across South Africa who trust Gaupro to keep their businesses running. Our community focus means your reputation is your most valuable asset. The more great work you do, the more reviews you earn, and the easier it becomes to win high-value jobs.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Globe className="h-6 w-6 text-primary" />
                                    <p className="font-semibold">Nationwide Coverage: From Polokwane to Cape Town</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Star className="h-6 w-6 text-primary" />
                                    <p className="font-semibold">Transparent Review System to build customer trust</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Users className="h-6 w-6 text-primary" />
                                    <p className="font-semibold">Peer success stories to learn from the best</p>
                                </div>
                            </div>
                            <Button className="mt-8 h-12 px-6 font-bold" asChild>
                                <Link href="/pro-success-stories">View Pro Success Stories</Link>
                            </Button>
                        </div>
                        <Card className="shadow-xl">
                            <CardHeader className="bg-primary text-primary-foreground">
                                <CardTitle>Professional Support Centre</CardTitle>
                                <p className="text-xs opacity-90">We're here to help your business succeed.</p>
                            </CardHeader>
                            <CardContent className="p-6 space-y-4">
                                {[
                                    { icon: <BookOpen className="h-5 w-5" />, title: "Knowledge Base", detail: "500+ articles & guides" },
                                    { icon: <MessageCircle className="h-5 w-5" />, title: "WhatsApp Support", detail: "060 PRO HELP (060 776 4357)" },
                                    { icon: <Mail className="h-5 w-5" />, title: "Email Enquiries", detail: "pro-support@gaupro.co.za" },
                                    { icon: <Phone className="h-5 w-5" />, title: "Call Centre", detail: "0861 GAUPRO (Mon-Fri, 8-6)" },
                                ].map((channel, i) => (
                                    <div key={i} className="flex items-center gap-4 p-3 rounded-lg border hover:bg-secondary transition-colors cursor-pointer">
                                        <div className="text-primary">{channel.icon}</div>
                                        <div>
                                            <p className="font-bold text-sm">{channel.title}</p>
                                            <p className="text-xs text-muted-foreground">{channel.detail}</p>
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* FAQ Hub */}
                <section id="faq-hub" className="scroll-mt-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">❓ Professional FAQ Hub</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Everything you need to know about growing your service business with Gaupro.
                        </p>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <Accordion type="single" collapsible className="w-full">
                            {proFaqs.map((faq, index) => (
                                <AccordionItem key={index} value={`faq-${index}`} className="border-b last:border-0">
                                    <AccordionTrigger className="text-left font-bold text-lg py-6 hover:no-underline">
                                        {faq.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-8">
                                        {faq.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="text-center bg-primary text-primary-foreground p-12 md:p-20 rounded-3xl shadow-2xl relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Scale Your Business?</h2>
                        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Join over 15,000 South African professionals winning work every day. Whether you're in the heart of Johannesburg or the suburbs of Port Elizabeth, we connect you with the customers you need.
                        </p>
                        <div className="flex flex-col items-center gap-4">
                            <Button asChild size="lg" className="h-16 px-12 text-2xl font-bold bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transform hover:scale-105 transition-all">
                                <Link href="/pro/register">Start My Free Profile Now</Link>
                            </Button>
                            <p className="text-sm opacity-80 italic">🔒 No credit card required. No monthly fees. Start for free.</p>
                        </div>
                    </div>
                    {/* Decorative background element */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
                </section>
            </div>
        </main>
    );
}
