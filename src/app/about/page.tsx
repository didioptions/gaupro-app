
import { Button } from '@/components/ui/button';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { RequestQuoteDialog } from '@/components/request-quote-dialog';

const stats = [
  { value: '15,000+', label: 'Verified Professionals' },
  { value: '200+', label: 'Service Categories' },
  { value: 'R50 Million+', label: 'in jobs completed' },
  { value: '4.7/5', label: 'Average Rating' },
];

const customerBenefits = [
    { text: "100% Free to Use - Post unlimited job requests at no cost" },
    { text: "Pre-Verified Professionals - All pros undergo identity and qualification checks" },
    { text: "Authentic Reviews - Read genuine feedback from verified South African customers" },
    { text: "Competitive Pricing - Compare multiple quotes to find the best value" },
    { text: "Privacy Protected - Your contact details are only shared with pros you choose" },
    { text: "Fast Response Times - Get your first quote within 2 hours on average" },
    { text: "Mobile-Friendly - Access Gaupro anywhere, anytime" },
];

const proBenefits = [
    { text: "Qualified Leads - Connect with customers actively looking for your services" },
    { text: "Business Growth Tools - Analytics dashboard to track your performance" },
    { text: "Build Your Reputation - Collect reviews and showcase your best work" },
    { text: "Flexible Membership Plans - Choose a plan that fits your business size" },
    { text: "Fair Marketplace - No bidding wars, just quality-based competition" },
]

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-background">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-4xl mx-auto space-y-12">
            <header className="text-center space-y-4">
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">About Gaupro - South Africa's Leading Service Professional Marketplace</h1>
              <p className="text-xl font-semibold text-primary">🌍 Connecting South Africa with Trusted Local Professionals</p>
              <p className="text-lg text-foreground">
                Gaupro is South Africa's fastest-growing platform for finding, comparing, and hiring verified local service professionals — making it simple, safe, and stress-free to get any job done right.
              </p>
               <p className="text-foreground">
                Since our launch, we've connected thousands of South Africans with skilled professionals across 50+ service categories. Whether you need an emergency plumber in Johannesburg, a certified electrician in Cape Town, a reliable builder in Durban, or a creative web designer in Pretoria, Gaupro matches you with the right professional for your specific needs and budget.
              </p>
            </header>
            
            <section className="space-y-4 text-center p-8 bg-background rounded-lg">
                <h2 className="text-2xl font-bold">🚀 Our Mission: Transforming How South Africa Hires Professionals</h2>
                <p className="text-foreground max-w-3xl mx-auto">
                    At Gaupro, we're on a mission to revolutionize the service industry in South Africa by:
                </p>
                <ul className="list-inside space-y-2 text-foreground text-left md:text-center max-w-xl mx-auto">
                    <li>Making it effortless for customers to find trusted, qualified professionals within minutes</li>
                    <li>Empowering local businesses and independent contractors to grow their client base online</li>
                    <li>Building trust through transparency, verification, and authentic customer reviews</li>
                    <li>Supporting the growth of South Africa's small business economy</li>
                </ul>
                <p className="font-semibold pt-2">We believe every South African deserves access to quality, reliable services — and every skilled professional deserves the opportunity to thrive in the digital economy.</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-center">🤝 How Gaupro Works: Simple, Fast, Effective</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-6 border rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">For Customers:</h3>
                         <ul className="space-y-2 text-foreground">
                            <li><strong className="text-foreground">Post Your Job (Free)</strong> - Describe what you need in under 2 minutes</li>
                            <li><strong className="text-foreground">Receive Multiple Quotes</strong> - Get responses from interested professionals within hours</li>
                            <li><strong className="text-foreground">Compare & Choose</strong> - Review profiles, ratings, portfolios, and prices</li>
                            <li><strong className="text-foreground">Hire with Confidence</strong> - Select your preferred pro and get the job done</li>
                        </ul>
                    </div>
                     <div className="p-6 border rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">For Professionals:</h3>
                         <ul className="space-y-2 text-foreground">
                            <li><strong className="text-foreground">Create Your Profile</strong> - Showcase your skills, experience, and past work</li>
                            <li><strong className="text-foreground">Get Notified</strong> - Receive alerts for jobs matching your expertise</li>
                            <li><strong className="text-foreground">Send Quotes</strong> - Respond to interested customers with competitive quotes</li>
                            <li><strong className="text-foreground">Grow Your Business</strong> - Build your reputation through reviews and ratings</li>
                        </ul>
                    </div>
                </div>
                 <p className="text-center text-foreground italic pt-4">No more endless searching. No unreliable classifieds. No middlemen. Just direct connections between customers and verified professionals.</p>
            </section>
            
            <section className="space-y-6">
                <h2 className="text-2xl font-bold text-center">💡 Why 50,000+ South Africans Choose Gaupro</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">For Customers:</h3>
                        <ul className="space-y-3">
                        {customerBenefits.map((benefit, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-foreground">{benefit.text}</span>
                            </li>
                        ))}
                        </ul>
                    </div>
                     <div>
                        <h3 className="text-xl font-semibold mb-4">For Service Professionals:</h3>
                         <ul className="space-y-3">
                        {proBenefits.map((benefit, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-foreground">{benefit.text}</span>
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
            </section>

             <section className="space-y-6 text-center">
                <h2 className="text-2xl font-bold">🌱 Empowering South Africa's Service Economy</h2>
                 <p className="text-foreground max-w-3xl mx-auto">
                    Gaupro is more than a marketplace — we're a catalyst for economic growth in South Africa.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-4">
                    {stats.map((stat, index) => (
                        <div key={index} className="p-4 bg-card border rounded-lg">
                            <p className="text-3xl font-extrabold text-primary">{stat.value}</p>
                            <p className="text-sm text-foreground">{stat.label}</p>
                        </div>
                    ))}
                </div>
                 <p className="text-foreground max-w-3xl mx-auto">
                    We're proud to support South African entrepreneurs, from established companies to emerging freelancers, helping them expand their customer reach, build credibility, compete fairly, and access business tools typically reserved for large companies.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-center">📍 Serving Every Corner of South Africa</h2>
                 <p className="text-foreground text-center">
                    Gaupro operates nationwide, with strong networks of professionals in:
                </p>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                    <div>
                        <h3 className="font-semibold">Major Cities:</h3>
                        <ul className="list-disc list-inside text-foreground">
                            <li>Johannesburg & Sandton - 5,000+ professionals</li>
                            <li>Cape Town & Surrounds - 3,500+ professionals</li>
                            <li>Durban & Pietermaritzburg - 2,000+ professionals</li>
                            <li>Pretoria & Centurion - 2,500+ professionals</li>
                            <li>Port Elizabeth & East London - 1,000+ professionals</li>
                            <li>Bloemfontein & Kimberley - 500+ professionals</li>
                        </ul>
                    </div>
                     <div>
                        <h3 className="font-semibold">Popular Services by Region:</h3>
                        <ul className="list-disc list-inside text-foreground">
                            <li>Gauteng: Home renovations, IT services, business consulting</li>
                            <li>Western Cape: Solar installations, garden services, tourism services</li>
                            <li>KwaZulu-Natal: Construction, automotive services, event planning</li>
                            <li>Eastern Cape: Agricultural services, maintenance, logistics</li>
                        </ul>
                    </div>
                </div>
                 <p className="text-foreground text-center pt-2">
                    No matter where you are in South Africa — from Musina to Cape Agulhas, from Alexander Bay to Richards Bay — Gaupro connects you with skilled professionals in your area.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-center">🏅 Our Commitment to Quality & Trust</h2>
                <div className="grid md:grid-cols-2 gap-8">
                     <div className="p-6 border rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">Professional Verification Process:</h3>
                         <ul className="space-y-2 text-foreground">
                            <li>✓ Identity verification</li>
                            <li>✓ Business registration checks (where applicable)</li>
                            <li>✓ Qualification and certification validation</li>
                            <li>✓ Reference checks</li>
                            <li>✓ Continuous performance monitoring</li>
                        </ul>
                    </div>
                     <div className="p-6 border rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">Customer Protection:</h3>
                         <ul className="space-y-2 text-foreground">
                            <li>Transparent pricing with no hidden fees</li>
                            <li>Dispute resolution support</li>
                            <li>Review authenticity verification</li>
                            <li>Professional insurance verification (for applicable services)</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="space-y-6 text-center border-t pt-12">
                 <h2 className="text-2xl font-bold">🚀 Join the Gaupro Community Today</h2>
                 <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                     <div>
                        <p className="mb-2">For Customers:</p>
                        <RequestQuoteDialog>
                          <Button size="lg">Post a Job Free →</Button>
                        </RequestQuoteDialog>
                     </div>
                      <div>
                        <p className="mb-2">For Professionals:</p>
                        <Button asChild size="lg" variant="secondary">
                            <Link href="/pro/signup">Join as a Pro →</Link>
                        </Button>
                     </div>
                 </div>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
