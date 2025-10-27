
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, XCircle, MousePointerClick, List, MessageSquare, Briefcase, Award, Shield, User, Camera, MapPin, AlertTriangle, BadgeDollarSign, MessageCircleIcon, Star, HandCoins } from 'lucide-react';

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
);

export default function GauproDifferencePage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-background">
        <article>
          <header className="bg-secondary/50 py-12 md:py-16">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-3xl md:text-4xl font-normal tracking-tight max-w-3xl mx-auto">
                The Gaupro Difference: Traditional Hiring vs Smart Hiring
              </h1>
            </div>
          </header>
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="max-w-4xl mx-auto prose lg:prose-lg prose-headings:font-normal prose-headings:text-foreground prose-a:text-primary hover:prose-a:underline">
              <p className="lead text-xl text-muted-foreground">
                Let's be honest about how frustrating finding service professionals used to be. Here's how Gaupro revolutionizes the process.
              </p>
                
              <section id="gaupro-difference" className="space-y-6 scroll-mt-20">
                <div className="grid md:grid-cols-2 gap-8 not-prose">
                    <Card className="bg-red-50/50 border-red-200">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4 text-red-800">The Old Way (Without Gaupro) 😓</h3>
                        <p className="font-semibold text-foreground mb-3">The Traditional Struggle:</p>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2"><XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" /> <span className="text-muted-foreground">Hours of searching through classifieds and Facebook groups</span></li>
                          <li className="flex items-start gap-2"><XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" /> <span className="text-muted-foreground">No verification - anyone can claim they're qualified</span></li>
                          <li className="flex items-start gap-2"><XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" /> <span className="text-muted-foreground">Price mystery - quotes vary wildly with no transparency</span></li>
                          <li className="flex items-start gap-2"><XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" /> <span className="text-muted-foreground">Zero accountability - no reviews, no recourse</span></li>
                          <li className="flex items-start gap-2"><XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" /> <span className="text-muted-foreground">Safety concerns - inviting strangers with no background checks</span></li>
                          <li className="flex items-start gap-2"><XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" /> <span className="text-muted-foreground">Time wasted - waiting days for callbacks</span></li>
                        </ul>
                        <blockquote className="mt-6 border-l-4 border-red-300 pl-4 italic text-red-900/80">
                          "I once spent an entire week trying to find an electrician. Made 15 calls, got 3 callbacks, 1 showed up, and the quote was ridiculous. Never again!"
                          <cite className="block not-italic mt-2 font-semibold">- Sarah from Sandton</cite>
                        </blockquote>
                      </CardContent>
                    </Card>

                    <Card className="bg-green-50/50 border-green-200">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4 text-green-800">The Gaupro Way (Smart Hiring) 🚀</h3>
                        <p className="font-semibold text-foreground mb-3">Here's how Gaupro revolutionizes the process:</p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /> <span className="text-muted-foreground">Post once, reach hundreds of professionals</span></li>
                            <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /> <span className="text-muted-foreground">Every professional is ID and credential checked</span></li>
                            <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /> <span className="text-muted-foreground">Compare multiple quotes side-by-side</span></li>
                            <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /> <span className="text-muted-foreground">Read experiences from verified customers</span></li>
                            <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /> <span className="text-muted-foreground">Your number stays private until you choose</span></li>
                            <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /> <span className="text-muted-foreground">Get responses within hours</span></li>
                        </ul>
                         <blockquote className="mt-6 border-l-4 border-green-300 pl-4 italic text-green-900/80">
                          "Posted my electrical job at 9am, had 4 quotes by lunch, hired someone with 47 five-star reviews, job done perfectly by 5pm. Game-changer!"
                          <cite className="block not-italic mt-2 font-semibold">- Sarah's Gaupro Experience</cite>
                        </blockquote>
                      </CardContent>
                    </Card>
                  </div>

                <h3 className="text-xl font-semibold pt-6">Why Gaupro Makes Everything Easier</h3>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Challenge</TableHead>
                        <TableHead>Without Gaupro</TableHead>
                        <TableHead>With Gaupro</TableHead>
                        <TableHead>Time Saved</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Finding professionals</TableCell>
                        <TableCell>6-8 hours of calling</TableCell>
                        <TableCell>2-minute job post</TableCell>
                        <TableCell>98% faster</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Getting quotes</TableCell>
                        <TableCell>3-5 days waiting</TableCell>
                        <TableCell>2-4 hours</TableCell>
                        <TableCell>85% faster</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Verifying credentials</TableCell>
                        <TableCell>Nearly impossible</TableCell>
                        <TableCell>Already done for you</TableCell>
                        <TableCell>100% peace of mind</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Comparing options</TableCell>
                        <TableCell>Messy spreadsheets</TableCell>
                        <TableCell>Built-in comparison</TableCell>
                        <TableCell>90% easier</TableCell>
                      </TableRow>
                        <TableRow>
                        <TableCell>Reading reviews</TableCell>
                        <TableCell>Scattered/unreliable</TableCell>
                        <TableCell>Verified & organized</TableCell>
                        <TableCell>100% trustworthy</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </section>

              <section id="how-gaupro-works" className="space-y-12 scroll-mt-20 pt-12">
                <h2 className="text-2xl">How Gaupro Works: Your 3-Step Solution to Any Service Need</h2>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Step 1: Post Your Job on Gaupro (2 Minutes)</h3>
                  <p>It's incredibly simple:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3"><MousePointerClick className="h-5 w-5 text-primary mt-1" /><span>Visit Gaupro.co.za and click "Post a Job" (it's FREE)</span></li>
                    <li className="flex items-start gap-3"><List className="h-5 w-5 text-primary mt-1" /><span>Select your service category (e.g., Plumbing, Electrical)</span></li>
                    <li className="flex items-start gap-3"><MessageSquare className="h-5 w-5 text-primary mt-1" /><span>Answer a few quick questions and add photos if relevant</span></li>
                  </ul>
                  <h4 className="font-semibold mt-4">What makes Gaupro's job posting special:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-1" /><span>Smart forms that adapt to your service type</span></li>
                    <li className="flex items-start gap-3"><Camera className="h-5 w-5 text-green-500 mt-1" /><span>Photo uploads for 40% more accurate quotes</span></li>
                    <li className="flex items-start gap-3"><MapPin className="h-5 w-5 text-green-500 mt-1" /><span>Location detection to find the closest pros</span></li>
                    <li className="flex items-start gap-3"><AlertTriangle className="h-5 w-5 text-green-500 mt-1" /><span>Urgency options for emergency services</span></li>
                    <li className="flex items-start gap-3"><BadgeDollarSign className="h-5 w-5 text-green-500 mt-1" /><span>Budget ranges to filter responses</span></li>
                  </ul>
                  <p className="font-semibold italic mt-2">💡 Pro Tip: The more details you provide, the more accurate your quotes will be.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Step 2: Receive & Compare Quotes on Gaupro</h3>
                   <p>Within hours, Gaupro delivers multiple quotes from interested professionals (average 3-5). You get access to:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3"><User className="h-5 w-5 text-primary mt-1" /><span>Detailed profiles with verification badges, experience, and job history</span></li>
                    <li className="flex items-start gap-3"><Star className="h-5 w-5 text-primary mt-1" /><span>Genuine customer reviews and ratings for past work</span></li>
                    <li className="flex items-start gap-3"><Briefcase className="h-5 w-5 text-primary mt-1" /><span>Portfolios with photos of their previous projects</span></li>
                  </ul>
                   <h4 className="font-semibold mt-4">Gaupro's Comparison Tools:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-1" /><span>Side-by-side quote comparison dashboard</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-1" /><span>Sort by price, rating, or response time</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-1" /><span>Secure messaging without sharing your phone number</span></li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Step 3: Hire with Confidence Through Gaupro</h3>
                  <p>Once you've chosen your professional, click "Accept Quote," arrange the service directly, and pay the pro upon completion. We don't handle payments.</p>
                  <h4 className="font-semibold mt-4">Gaupro Protection Benefits:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3"><Shield className="h-5 w-5 text-primary mt-1" /><span>Dispute support if issues arise</span></li>
                    <li className="flex items-start gap-3"><Star className="h-5 w-5 text-primary mt-1" /><span>Review system ensures accountability</span></li>
                    <li className="flex items-start gap-3"><Award className="h-5 w-5 text-primary mt-1" /><span>Professional standards enforcement</span></li>
                  </ul>
                </div>
              </section>

              <section className="space-y-6 pt-12 mt-12 border-t">
                    <h2 className="text-2xl">Connect with Gaupro</h2>
                    <p>Website: <a href="http://www.gaupro.co.za">www.gaupro.co.za</a></p>
                    <p>Email: <a href="mailto:support@gaupro.co.za">support@gaupro.co.za</a></p>
                    <p>WhatsApp: 060 123 4567</p>
                </section>
                <section className="space-y-4 pt-8 mt-8 border-t bg-secondary/50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold">About This Article</h3>
                    <p className="text-sm text-muted-foreground">This comprehensive guide is maintained by the Gaupro content team and updated monthly with the latest platform features, success stories, and market insights.</p>
                    <p className="text-sm"><strong className="text-foreground">Last Updated:</strong> May 2025</p>
                    <p className="text-sm"><strong className="text-foreground">Next Update:</strong> February 2026</p>
                    <div className="mt-4">
                        <p className="text-sm font-semibold">Share this guide and help other South Africans discover smarter hiring:</p>
                        <div className="flex gap-4 flex-wrap text-sm mt-2">
                          <a href="#" className="text-primary hover:underline flex items-center gap-1.5"><WhatsAppIcon /> Share on WhatsApp</a>
                          <a href="#" className="text-primary hover:underline flex items-center gap-1.5"><FacebookIcon /> Share on Facebook</a>
                          <a href="#" className="text-primary hover:underline flex items-center gap-1.5"><LinkedinIcon /> Share on LinkedIn</a>
                          <a href="mailto:?subject=Check out this guide from Gaupro" className="text-primary hover:underline flex items-center gap-1.5"><MailIcon /> Email to Friend</a>
                        </div>
                    </div>
                </section>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
