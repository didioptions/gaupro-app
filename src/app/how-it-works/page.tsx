import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, ShieldCheck, Star, Users, MapPin, Search, ArrowRight, MessageSquare, BadgeCheck } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';

const howItWorksSteps = [
  {
    icon: '🔍',
    title: 'Step 1: Tell Us What You Need',
    description: 'It starts with your job request. Just answer a few quick questions—like your location, what service you need, and your preferred time. This helps us find the best local professionals for your specific task.',
    example: '“I need a plumber in Sandton to fix a leaking tap tomorrow.”',
  },
  {
    icon: '💬',
    title: 'Step 2: Get Matched with Verified Pros',
    description:
      'Within minutes, you’ll receive responses from local professionals who are interested and available. Each pro is verified by Gaupro to ensure authenticity, reliability, and real experience.',
    details: [
      'Quotes or pricing estimates from top pros',
      'Ratings and reviews from real customers',
      'Profile details and contact info',
    ],
  },
  {
    icon: '🤝',
    title: 'Step 3: Choose the Right Pro',
    description:
      'Compare your options easily—no pressure, no middleman. You can message each pro directly, ask questions, and confirm all details before hiring. Gaupro makes it simple to hire local contractors with confidence.',
    details: [
      'Compare prices and experience side-by-side',
      'Read verified reviews from your neighbors',
      'View photos of previous work and portfolios',
      'Choose who feels right for your project',
    ],
  },
  {
    icon: '💼',
    title: 'Step 4: Get the Job Done',
    description:
      'Once you’ve chosen your pro, they’ll contact you to confirm your booking or schedule the job. Gaupro connects you directly—so you can agree on payment, timing, and project details with your chosen provider.',
    tip: 'Pro Tip: Always confirm final project details in writing',
  },
  {
    icon: '⭐',
    title: 'Step 5: Review Your Experience',
    description:
      'After your job is done, leave a review to help other customers make informed decisions. Your feedback also helps great professionals grow their business—and keeps our community trusted and transparent.',
    details: ['Communication', 'Quality of work', 'Value for money', 'Professionalism'],
  },
];

const popularServices = [
  { value: 'plumber', label: 'Plumbers' },
  { value: 'electrician', label: 'Electricians' },
  { value: 'builders', label: 'Builders' },
  { value: 'painter', label: 'Painters' },
  { value: 'cleaning-service', label: 'Cleaning Services' },
  { value: 'movers', label: 'Movers' },
  { value: 'handyman', label: 'Handymen' },
  { value: 'solar-systems', label: 'Solar Systems' },
  { value: 'security', label: 'Security' },
  { value: 'rubble-removal', label: 'Rubble Removal' },
  { value: 'gardeners', label: 'Gardeners' },
  { value: 'tree-felling', label: 'Tree Felling' },
  { value: 'roofing', label: 'Roofing' },
  { value: 'paving', label: 'Paving' },
  { value: 'interior-designing', label: 'Interior Designers' },
];

const majorCities = [
    { name: 'Johannesburg', slug: 'johannesburg' },
    { name: 'Cape Town', slug: 'cape-town' },
    { name: 'Pretoria', slug: 'pretoria' },
    { name: 'Durban', slug: 'durban' },
    { name: 'Port Elizabeth', slug: 'port-elizabeth' },
    { name: 'Bloemfontein', slug: 'bloemfontein' },
    { name: 'Centurion', slug: 'centurion' },
    { name: 'Sandton', slug: 'sandton' },
    { name: 'Randburg', slug: 'randburg' },
    { name: 'East London', slug: 'east-london' },
];

const faqs = [
    {
        q: "How can I find local professionals on Gaupro?",
        a: "Finding local professionals on Gaupro is designed to be a fast and intuitive process. Simply visit our homepage or the \"Post Request\" page and tell us what you need. You'll be asked a few quick questions about the nature of your job, your specific location, and your preferred timeline. Our smart matching technology then analyzes your requirements and alerts the most relevant, highly-rated service providers in your immediate area. Instead of you spending hours calling around, the professionals come to you. You’ll receive notifications when pros are interested, allowing you to view their detailed profiles, which showcase their past work, customer reviews, and verification status. This streamlined approach ensures you connect with experts who are actually available and interested in your project, saving you significant time and effort."
    },
    {
        q: "Is it really free to get quotes online through Gaupro?",
        a: "Yes, Gaupro is 100% free for customers to use. We believe that finding the right help shouldn't come with a barrier to entry. You can post unlimited job requests across any of our 500+ service categories without ever reaching for your wallet. When you submit a request to get quotes online, our platform facilitates the connection between you and up to five qualified professionals. These experts pay a small fee to access your contact details and send you a personalized quote, but there is absolutely no cost or hidden commission charged to the customer. You are also under no obligation to hire any of the professionals who provide quotes. We provide the tools for you to compare quotes and make an informed decision at your own pace, ensuring a transparent and pressure-free experience from start to finish."
    },
    {
        q: "How does Gaupro ensure I connect with trusted service providers?",
        a: "Trust is the cornerstone of the Gaupro community. We understand that inviting a stranger into your home or business requires a high level of confidence. That’s why we’ve implemented a multi-layered trust and safety system. Every professional on our platform is encouraged to go through our comprehensive \"Pro Verified\" process, which involves identity verification and business credential checks. Furthermore, we maintain a robust, transparent review system where real customers in your community share their honest experiences. You can see exactly how a contractor has performed on previous jobs, including ratings for communication, quality of work, and value for money. By looking for the \"Verified\" badge and reading authentic feedback, you can hire with the knowledge that you are choosing from the most reliable and trusted service providers in South Africa."
    },
    {
        q: "Can I find specific trades like plumbers near me or electricians near me on the platform?",
        a: "Absolutely. Gaupro has an extensive network of specialized tradespeople covering every major city and most smaller towns across South Africa. If you are facing an emergency and need plumbers near me to fix a burst pipe, or searching for electricians near me to handle a complex rewiring project, Gaupro is the fastest way to get help. Our platform is built to handle specific keyword searches and category selections, ensuring your request reaches the right hands. We have dedicated sections for the most common home services, as well as niche industries. Whether you need a builder for a renovation, a mechanic for a car repair, or a tutor for your children, our local database is constantly updated with active professionals who are ready to respond to your needs within minutes of your post."
    },
    {
        q: "How does the quote comparison process work on Gaupro?",
        a: "The quote comparison process is one of the most powerful features of Gaupro, designed to give you total control over your hiring decisions. Once you post your job, you can receive up to five competitive quotes. Instead of receiving just a price, you get a link to each professional's full business profile. This allows you to perform a side-by-side comparison that goes beyond just the bottom line. You can weigh the quoted price against the professional's years of experience, their gallery of previous projects, and their average customer rating. Many customers find that the cheapest quote isn't always the best fit; sometimes a pro with specialized experience in your specific task or glowing reviews from your neighbors is worth a small premium. Gaupro provides all this data in one organized dashboard, making it incredibly simple to choose the perfect match for your project."
    },
    {
        q: "Is it safe to hire local contractors through the Gaupro platform?",
        a: "Safety and security are top priorities at Gaupro. We facilitate safe connections by keeping your contact details private until you decide to share them or accept a quote. This prevents unwanted spam and ensures that you only interact with the professionals you are interested in. We also provide clear safety guidelines for both customers and professionals, encouraging communication through our secure platform. By using our system of verified profiles and community reviews, you significantly reduce the risks often associated with hiring through unverified classified ads or social media groups. While Gaupro is a connection platform and the final contract is between you and the pro, we offer a dispute resolution support channel to help facilitate communication if any issues arise, ensuring that our marketplace remains a safe and professional environment for everyone."
    },
    {
        q: "What if I'm not sure exactly what service I need?",
        a: "Don't worry—Gaupro is designed to help even when you only have a general idea of your problem. You can start by searching for broad categories or using our intelligent search bar. When you begin the 'Post Request' process, our smart forms will guide you through a series of questions that help clarify the scope of your work. This helps categorize your request so it reaches the most relevant experts. For example, if you have a damp patch on a wall, our system can help you decide if you need a plumber for a leak or a damp-proofing specialist. You can also upload photos of the issue, which is often the best way to explain a problem to a professional. This ensures that the service providers who contact you have a clear understanding of what's required, even if you don't know the technical terms."
    },
    {
        q: "How quickly can I expect to receive quotes after posting a job?",
        a: "In most cases, you can expect to receive your first response incredibly quickly. For popular services in major metropolitan areas like Johannesburg, Cape Town, or Pretoria, many customers see their first quote within 15 to 30 minutes. The average job request receives 3 to 5 quotes within just a few hours. The speed of response can depend on several factors, including the complexity of your request, the time of day, and the density of professionals in your specific area. To ensure you get the fastest possible results, we recommend providing as much detail as possible in your job description and uploading clear photos. This helps professionals understand the scope immediately and respond with an accurate estimate. Gaupro’s real-time notification system ensures that pros are alerted the moment your job goes live, prioritizing a rapid connection for your needs."
    },
    {
        q: "Do I have to hire one of the professionals who quotes on my job?",
        a: "No, there is absolutely no obligation to hire. Gaupro is a discovery and connection tool designed to help you find the best local professionals, but the final choice is entirely yours. If you receive quotes and decide that none of the professionals are a good fit for your specific needs, or if you change your mind about the project altogether, you can simply close your request. We provide you with the information and quotes so you can make an informed decision with confidence. Our goal is to make the hiring process easier and more transparent, but we respect your autonomy as a consumer. You can use the platform as many times as you like to get a sense of market pricing and availability for any project you’re considering, all at no cost and with no strings attached."
    },
    {
        q: "How do I leave a review after my service is completed?",
        a: "Leaving a review is a simple but vital part of the Gaupro ecosystem. Once your job is finished, you can log into your account and navigate to your \"My Requests\" section. There, you’ll find an option to \"Review this Pro\" for any service provider you’ve hired. You can give them a star rating and write a short description of your experience. This feedback is incredibly valuable; it helps the professional grow their reputation if they did a great job, and it provides essential guidance for future customers looking for help. We also encourage you to mention specific details about their punctuality, quality of work, and cleanliness. By sharing your experience, you contribute to a more transparent and trusted marketplace, rewarding excellence and ensuring that high standards are maintained across the South African service industry."
    }
];

export default function HowItWorksPage() {
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
        "name": "How It Works",
        "item": "https://gaupro.co.za/how-it-works"
      }
    ]
  };

  return (
    <main className="flex-grow">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-background border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-normal mb-6 max-w-4xl mx-auto leading-tight">
            How Gaupro Works: Find Trusted Local Professionals Fast
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Connect with qualified local service providers near you. No more endless searching—simply tell us what you need, get quotes online, and hire with confidence. Gaupro makes it simple, safe, and secure to find the best talent in South Africa.
          </p>
          <Button asChild size="lg" className="px-10 py-7 text-lg bg-red-600 hover:bg-red-700 h-auto">
              <Link href="/post-request">Get Quotes Now</Link>
          </Button>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-normal text-center mb-16">The Simple 5-Step Process</h2>
          <div className="space-y-20">
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-start gap-8 group">
                <div className="text-6xl flex-shrink-0 mx-auto sm:mx-0 bg-secondary/50 w-24 h-24 flex items-center justify-center rounded-2xl group-hover:bg-primary/10 transition-colors">
                    {step.icon}
                </div>
                <div className="flex-grow text-center sm:text-left">
                  <h3 className="text-2xl font-normal mb-4 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground mb-4 text-lg leading-relaxed">{step.description}</p>
                  {step.example && (
                      <p className="text-foreground italic bg-secondary/30 p-4 rounded-xl border border-dashed">
                          {step.example}
                      </p>
                  )}
                  {step.details && (
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
                          {step.details.map(detail => (
                              <li key={detail} className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                                  <span>{detail}</span>
                              </li>
                          ))}
                      </ul>
                  )}
                   {step.tip && (
                      <p className="text-sm font-semibold text-primary mt-6 flex items-center gap-2">
                         <BadgeCheck className="h-5 w-5" />
                         {step.tip}
                      </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-3xl font-normal text-center mb-12">Why Customers Choose Gaupro</h2>
              <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                      <div className="flex gap-4">
                          <ShieldCheck className="h-8 w-8 text-primary flex-shrink-0" />
                          <div>
                              <h4 className="text-xl font-semibold mb-2">Verified Professionals Only</h4>
                              <p className="text-muted-foreground">We take your safety seriously. All pros undergo a verification process that checks identity and business registration to ensure you hire trusted service providers.</p>
                          </div>
                      </div>
                      <div className="flex gap-4">
                          <Star className="h-8 w-8 text-primary flex-shrink-0" />
                          <div>
                              <h4 className="text-xl font-semibold mb-2">Transparent Customer Reviews</h4>
                              <p className="text-muted-foreground">Read honest, verified feedback from real South Africans. Our review system ensures professionals maintain high standards for every job.</p>
                          </div>
                      </div>
                  </div>
                  <div className="space-y-6">
                      <div className="flex gap-4">
                          <Users className="h-8 w-8 text-primary flex-shrink-0" />
                          <div>
                              <h4 className="text-xl font-semibold mb-2">Effortless Quote Comparison</h4>
                              <p className="text-muted-foreground">Receive up to 5 competitive quotes side-by-side. Compare prices, ratings, and experience in one place to find the perfect fit for your budget.</p>
                          </div>
                      </div>
                      <div className="flex gap-4">
                          <MessageSquare className="h-8 w-8 text-primary flex-shrink-0" />
                          <div>
                              <h4 className="text-xl font-semibold mb-2">Direct Communication</h4>
                              <p className="text-muted-foreground">Chat or call your pros directly. Finalize details, schedule bookings, and settle payments without any middleman interference or extra fees.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Popular Services Section */}
      <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
              <h2 className="text-3xl font-normal text-center mb-8">Popular Services on Gaupro</h2>
              <div className="max-w-3xl mx-auto text-center mb-12">
                <p className="text-muted-foreground text-lg leading-relaxed">
                    Gaupro is South Africa’s premier destination to find local professionals across a vast array of industries. From essential home services like <strong>plumbers near me</strong> and <strong>electricians near me</strong> to large-scale construction, we connect you with thousands of verified experts ready to assist. Our platform makes it simple to manage any project by allowing you to get quotes online from top-rated local experts across all these essential categories.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                  {popularServices.map((service) => (
                      <Link 
                        key={service.value} 
                        href={`/services/${service.value}`}
                        className="p-4 border rounded-xl hover:bg-secondary transition-all hover:shadow-md text-center group"
                      >
                          <span className="font-medium text-foreground group-hover:text-primary transition-colors">{service.label}</span>
                          <ArrowRight className="h-3 w-3 inline-block ml-2 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                      </Link>
                  ))}
              </div>
              <div className="mt-8 text-center">
                  <Button variant="link" asChild>
                      <Link href="/browse-categories">View All 500+ Categories →</Link>
                  </Button>
              </div>
          </div>
      </section>

      {/* Areas We Serve Section */}
      <section className="py-16 bg-secondary/10">
          <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-3xl font-normal text-center mb-10">Areas We Serve</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
                  We operate nationwide across South Africa, ensuring you can find local contractors no matter where you are located. Our most active hubs include:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                  {majorCities.map((city) => (
                      <Link 
                        key={city.slug} 
                        href={`/services/in/${city.slug}`}
                        className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium"
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
            <h2 className="text-3xl font-normal text-center mb-12">Frequently Asked Questions</h2>
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
              <h2 className="text-3xl md:text-5xl font-normal mb-8">Ready to Hire Local Pros?</h2>
              <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Join over 500,000 South Africans who use Gaupro to get the job done right. Post your request for free and connect with the best local experts today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button asChild size="lg" variant="secondary" className="px-10 py-7 text-lg font-bold shadow-xl">
                      <Link href="/post-request">Post a Job for Free</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-10 py-7 text-lg">
                      <Link href="/pro/signup">Join as a Pro Professional</Link>
                  </Button>
              </div>
          </div>
      </section>
    </main>
  );
}
