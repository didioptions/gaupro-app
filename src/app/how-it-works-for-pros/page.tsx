import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Briefcase, BadgeCheck, Star, BarChart, CheckCircle, Wallet, Map, Tag, Info, Users, MapPin, TrendingUp, Zap, MessageSquare, ShieldCheck, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const steps = [
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: "Step 1: Create Your Professional Profile",
    description: "Start by creating your free Gaupro profile. This is your digital business card — where potential customers can learn about your skills, experience, and services.",
    details: [
        "Your business name & logo",
        "Service categories (e.g., electrician, cleaner, tutor, etc.)",
        "Areas you serve",
        "Photos of your work",
        "Qualifications & experience",
        "Short bio"
    ],
    tip: "Complete your profile 100% to boost your ranking in Gaupro search results."
  },
  {
    icon: <BadgeCheck className="h-10 w-10 text-primary" />,
    title: "Step 2: Get Verified Leads in Real Time",
    description: "Once your profile is live, Gaupro connects you with real customers posting jobs in your area. You’ll receive instant notifications for new job requests that match your skills.",
    details: [
        "Customers post what they need (e.g., “Need a plumber in Johannesburg”)",
        "Gaupro matches them with qualified Pros",
        "You get an instant lead notification email",
        "Review the job details and respond with your quote"
    ],
    tip: "You only pay a small fee to unlock the customer’s contact info."
  },
  {
    icon: <span className="text-3xl">💰</span>,
    title: "Step 3: Win Jobs & Get Paid Directly",
    description: "Once the customer accepts your quote, you contact them directly to confirm details. You set your own rates, terms, and payment method — Gaupro does not take a commission or process payments.",
    details: [
        "You control your earnings.",
        "You manage your client relationship.",
        "You get paid directly by the customer."
    ],
    tip: "Contact leads within 1 hour for the best chance of getting hired."
  },
  {
    icon: <Star className="h-10 w-10 text-primary" />,
    title: "Step 4: Build Trust with Reviews",
    description: "After every job, customers can rate your work and leave a verified review. High ratings help you get noticed, attract more clients, and move up in Gaupro’s local rankings.",
    details: [],
    tip: "Encourage every satisfied customer to review you — it builds your reputation and credibility fast."
  }
];

const whoUsesGaupro = [
    { name: "Plumbers", slug: "plumber", description: "Get consistent plumber leads for emergency leaks, geyser repairs, and new bathroom installations in your city." },
    { name: "Electricians", slug: "electrician", description: "Find electrician leads for CoC certificates, residential wiring, solar installations, and power failure repairs." },
    { name: "Builders", slug: "builders", description: "Connect with high-value construction leads for home renovations, extensions, and new building projects." },
    { name: "Painters", slug: "painter", description: "Grow your business with painting leads for interior, exterior, and roof painting projects." },
    { name: "Cleaners", slug: "cleaning-service", description: "Receive cleaning leads for regular domestic cleaning, office maintenance, and deep cleaning services." },
    { name: "Rubble Removal", slug: "rubble-removal", description: "Find consistent rubble removal leads for construction sites, garden refuse, and site clearing." },
    { name: "Demolition", slug: "demolition", description: "Get matched with demolition leads for residential and commercial site preparation tasks." },
    { name: "Tutors", slug: "computer-courses", description: "Find students looking for tutoring, computer courses, and skills development near you." },
    { name: "Photographers", slug: "photographers", description: "Build your portfolio with photography leads for weddings, events, and family portraits." },
    { name: "Web Designers", slug: "website-designers", description: "Find clients online for logo design, SEO services, and custom website development projects." },
];

const majorCities = [
    { name: 'Johannesburg', slug: 'johannesburg' },
    { name: 'Pretoria', slug: 'pretoria' },
    { name: 'Cape Town', slug: 'cape-town' },
    { name: 'Durban', slug: 'durban' },
    { name: 'Sandton', slug: 'sandton' },
    { name: 'Randburg', slug: 'randburg' },
    { name: 'Centurion', slug: 'centurion' },
    { name: 'Port Elizabeth', slug: 'port-elizabeth' },
    { name: 'Bloemfontein', slug: 'bloemfontein' },
    { name: 'East London', slug: 'east-london' },
];

const faqs = [
    {
        q: "How does Gaupro help me get more customers?",
        a: "Gaupro is a powerful lead generation engine for service businesses in South Africa. We invest heavily in digital marketing, SEO, and social media to attract thousands of customers looking for services like yours. When a customer posts a request, we match it to your profile and send you a notification. This allows you to stop spending time on broad advertising and focus on quoting for high-intent clients who are ready to hire. By consistently providing great service and earning reviews, your business builds a digital reputation that acts as a 24/7 salesperson for your brand."
    },
    {
        q: "What are 'credits' and how do they work?",
        a: "Gaupro uses a fair, pay-as-you-go credit system. It's free to create a profile and receive job notifications. You only spend credits when you want to respond to a specific lead and unlock the customer's contact details. Leads typically cost between 1 and 5 credits depending on the service value and location. This system is designed to provide a much higher return on investment (ROI) than traditional advertising because you only pay when you see a job you actually want to do. You can buy credit packs in various sizes, with bulk discounts available for active professionals."
    },
    {
        q: "Can I find specific trades like plumber leads or electrician leads?",
        a: "Yes, Gaupro caters to over 500 service categories. Whether you are looking for specific plumber leads in Sandton or electrician leads in Cape Town, our system filters requests by category and location. You select your 'Service Keywords' during setup, and we only send you jobs that match your expertise. This ensure you don't waste time on irrelevant inquiries and can target the exact type of customers your business is equipped to serve efficiently."
    },
    {
        q: "How much can I earn as a professional on Gaupro?",
        a: "Your potential earnings on Gaupro are limited only by your capacity and response speed. Our data shows that top-performing professionals who respond to leads within 30 minutes win up to 78% more jobs. Many of our active pros report earning between R50,000 and R150,000+ in monthly revenue through the platform. By managing your reviews and maintaining a high rating, you increase your conversion rate, meaning every credit you spend has a higher chance of turning into a profitable project."
    },
    {
        q: "Is there a monthly subscription fee or registration cost?",
        a: "No, Gaupro does not charge any monthly subscription or registration fees. We believe in empowering local entrepreneurs without the burden of fixed overheads. You only pay for the leads you choose to pursue. This 'pay-for-performance' model makes Gaupro one of the most cost-effective local business marketing tools in South Africa. You maintain full control over your marketing budget and can scale your lead acquisition up or down depending on your current workload."
    },
    {
        q: "How do I become a 'Pro Verified' professional?",
        a: "Verification is key to winning trust on Gaupro. To become 'Pro Verified', you need to upload your identification documents (ID, Passport, or Driver's License) through your dashboard. For specific trades, we also verify business registrations and professional certifications. Verified professionals receive a special badge on their profile and in the emails sent to customers, which has been shown to significantly increase the likelihood of a customer choosing your quote over an unverified competitor."
    },
    {
        q: "What happens if a lead has wrong contact details?",
        a: "We strive to provide the highest quality leads, but we understand that occasionally contact info may be incorrect. Gaupro has a robust lead dispute system. If you purchase a lead and find that the phone number is invalid or the customer didn't actually request the service, you can report it via your dashboard within 14 days. Our team investigates every report, and if verified, we refund the credits back to your account balance. Your success is our priority, and we want to ensure you only pay for real opportunities."
    },
    {
        q: "Do I have to pay Gaupro a commission on jobs I win?",
        a: "Absolutely not. Gaupro is a connection platform, not a payment processor or middleman. The agreement for the job, the pricing, and the payment terms are strictly between you and the customer. You keep 100% of what you earn. We believe professionals should be rewarded for their hard work, and our goal is simply to facilitate the introduction and help you grow your client base online without taking a cut of your revenue."
    },
    {
        q: "How does the review system help my business grow?",
        a: "Reviews are the currency of trust in the digital economy. On Gaupro, every successful job is an opportunity to earn a verified review. When potential clients see a profile with numerous 5-star ratings and positive comments from their neighbors, they are much more likely to hire you. High-rated pros also rank higher in our directory searches. We provide tools for you to easily request reviews from satisfied customers, helping you build a lasting digital asset that attracts more customers over time."
    },
    {
        q: "Can I choose the areas I want to work in?",
        a: "Yes, you have total control over your service area. In your profile settings, you can set a primary city and a working radius (e.g., 50km from Johannesburg). Our smart matching system will only send you lead notifications for jobs within that specific area. This ensures you aren't bothered by requests that are too far away to be profitable, helping you optimize your travel time and focus on customers in your immediate vicinity."
    }
];

const successStories = [
    {
        name: "Themba",
        trade: "Electrician",
        city: "Randburg",
        story: "Themba joined Gaupro in 2023. By responding to local electrician leads within 15 minutes, he secured 12 new solar installation projects in his first two months, growing his team from 2 to 5 employees.",
        impact: "300% Revenue Increase"
    },
    {
        name: "Lerato",
        trade: "Cleaning Services",
        city: "Cape Town",
        story: "Lerato used Gaupro to pivot from domestic to commercial cleaning. Through the review system, she built enough credibility to win three long-term office cleaning contracts in the CBD.",
        impact: "Stable Recurring Income"
    },
    {
        name: "Sizwe",
        trade: "Building & Renovations",
        city: "Pretoria",
        story: "Sizwe used the 'Verified Pro' status to stand out. He now wins 1 in every 3 quotes he sends, focusing on high-value kitchen and bathroom renovation leads that come directly to his phone.",
        impact: "Consistent High-Value Leads"
    }
];

export default function HowItWorksForProsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Gaupro",
    "url": "https://gaupro.co.za",
    "logo": "https://gaupro.co.za/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+27-861-GAUPRO",
      "contactType": "customer service",
      "email": "support@gaupro.co.za"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://gaupro.co.za"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "How it Works for Pros",
        "item": "https://gaupro.co.za/how-it-works-for-pros"
      }
    ]
  };

  return (
    <main className="flex-grow bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section */}
      <section className="bg-secondary/50 py-16 md:py-24 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-normal mb-6 max-w-4xl mx-auto leading-tight">
            How Gaupro Works for Pros: Lead Generation for Service Businesses
          </h1>
          <p className="text-lg md:text-xl text-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Grow your business, find clients online, and build a trusted reputation. Gaupro connects South African contractors with high-intent leads every single day.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="px-10 py-7 text-lg bg-red-600 hover:bg-red-700 h-auto">
                  <Link href="/pro/signup">Join as a Pro</Link>
              </Button>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-normal text-center mb-16">The Path to Consistent Business Growth</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6 items-start group">
                <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-normal mb-3">{step.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{step.description}</p>
                  {step.details.length > 0 && (
                      <ul className="space-y-2 text-sm text-foreground mb-4">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-primary" /> {detail}
                            </li>
                          ))}
                      </ul>
                  )}
                  {step.tip && <p className="text-xs font-semibold text-primary italic bg-primary/5 p-3 rounded-lg border border-primary/10">💡 Pro Tip: {step.tip}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep SEO Content Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl font-normal text-center mb-8">Lead Generation for Service Businesses in South Africa</h2>
              <div className="prose prose-blue max-w-none text-muted-foreground leading-relaxed space-y-6">
                  <p>
                      In today’s digital-first economy, the old ways of finding work—like relying solely on word-of-mouth or expensive print ads—are no longer enough to scale. For independent contractors and small agencies, **finding clients online** is the most effective way to ensure a steady stream of work. Gaupro provides a dedicated platform for **local business marketing**, specifically designed for the South African service industry.
                  </p>
                  <p>
                      Our platform specializes in **lead generation for service businesses**, removing the complexity of managing your own digital advertising campaigns. Instead of spending thousands on Google Ads with no guarantee of results, you only pay a small fee to contact customers who have already expressed a direct need for your specific trade. Whether you need **plumber leads**, **electrician leads**, or general **contractor leads in South Africa**, we connect you with verified opportunities in real-time.
                  </p>
                  <p>
                      But Gaupro is more than just a lead site. It’s a tool to **grow your business** long-term. By collecting verified reviews, you build a digital asset that proves your reliability to future customers. Our 'Pro Verified' status acts as a seal of approval, helping you beat out unverified competition. Join thousands of South African professionals who have moved from chasing work to choosing work.
                  </p>
              </div>
          </div>
      </section>

      {/* Who Uses Section */}
      <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-6xl">
              <h2 className="text-3xl font-normal text-center mb-4">Who Uses Gaupro?</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">We provide tailored leads for hundreds of industries. See how we help these top categories:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                  {whoUsesGaupro.map(trade => (
                      <Link key={trade.slug} href={`/services/${trade.slug}`} className="group p-6 border rounded-xl hover:shadow-lg transition-all bg-card hover:border-primary">
                          <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{trade.name}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{trade.description}</p>
                          <span className="text-xs font-bold text-primary mt-4 block uppercase tracking-wider">Get {trade.name} Leads →</span>
                      </Link>
                  ))}
              </div>
          </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 md:py-24 bg-background border-y">
          <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-3xl font-normal text-center mb-16">Professional Success Stories</h2>
              <div className="grid md:grid-cols-3 gap-8">
                  {successStories.map((story, i) => (
                      <Card key={i} className="bg-secondary/10 border-0 shadow-sm">
                          <CardContent className="p-8 space-y-4">
                              <div className="flex items-center gap-3">
                                  <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">{story.name[0]}</div>
                                  <div>
                                      <p className="font-bold">{story.name}</p>
                                      <p className="text-xs text-muted-foreground">{story.trade} in {story.city}</p>
                                  </div>
                              </div>
                              <p className="text-sm italic text-muted-foreground leading-relaxed">"{story.story}"</p>
                              <div className="pt-4 flex items-center gap-2 text-primary font-bold">
                                  <TrendingUp className="h-5 w-5" />
                                  <span>{story.impact}</span>
                              </div>
                          </CardContent>
                      </Card>
                  ))}
              </div>
              <div className="text-center mt-12">
                  <Button variant="outline" asChild>
                      <Link href="/pro-success-stories">View All Stories</Link>
                  </Button>
              </div>
          </div>
      </section>

      {/* Cities We Serve Section */}
      <section className="py-16 md:py-24 bg-secondary/10">
          <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-3xl font-normal text-center mb-10">Serving Every Corner of South Africa</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
                  Gaupro operates nationwide, connecting professionals with clients in all major provinces and cities. We provide targeted local business marketing for pros in:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                  {majorCities.map((city) => (
                      <Link 
                        key={city.slug} 
                        href={`/services/in/${city.slug}`}
                        className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium p-3 bg-background rounded-lg border"
                      >
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          {city.name}
                      </Link>
                  ))}
              </div>
          </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-normal text-center mb-4">Frequently Asked Questions</h2>
            <p className="text-center text-muted-foreground mb-12">Everything you need to know about lead generation and growth with Gaupro.</p>
            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border-b-secondary">
                    <AccordionTrigger className="text-left hover:no-underline text-lg font-medium">
                        {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed whitespace-pre-wrap pt-2 pb-6">
                        {faq.a}
                    </AccordionContent>
                </AccordionItem>
                ))}
            </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
          <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-5xl font-normal mb-8">Ready to Get More Customers?</h2>
              <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Join 15,000+ South African professionals winning work every day. Create your free profile and start receiving leads instantly.
              </p>
              <div className="flex flex-col items-center gap-4">
                  <Button asChild size="lg" variant="secondary" className="px-12 py-8 text-2xl font-bold shadow-2xl hover:scale-105 transition-transform h-auto">
                      <Link href="/pro/register">Start My Free Profile</Link>
                  </Button>
                  <p className="text-sm opacity-70">🔒 No credit card required. No monthly fees.</p>
              </div>
          </div>
      </section>
    </main>
  );
}
