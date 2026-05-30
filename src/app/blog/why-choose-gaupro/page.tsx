import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Image from 'next/image';
import { CheckCircle, XCircle } from 'lucide-react';

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


export default function WhyChooseGauproPage() {
  return (
    <main className="flex-grow bg-background">
      <article>
        <header className="bg-secondary/50 py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-normal tracking-tight max-w-3xl mx-auto">
              Why 50,000+ South Africans Choose Gaupro Over Traditional Hiring Methods [2024 Complete Review]
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">Updated: May 2025 | 15 min read</p>
          </div>
        </header>
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-4xl mx-auto prose lg:prose-lg prose-headings:font-normal prose-headings:text-foreground prose-a:text-primary hover:prose-a:underline">
            
            <div className="relative w-full aspect-video mb-8">
              <Image 
                  src="https://firebasestorage.googleapis.com/v0/b/studio-5618869838-18486.firebasestorage.app/o/The%20Hiring%20Nightmare.jpg?alt=media&token=187772b4-0504-4287-96ae-7b98f1470a3a"
                  alt="A frustrated person looking at their phone, symbolizing the difficulty of finding good service professionals."
                  fill
                  className="object-cover rounded-lg"
                  data-ai-hint="frustrated person phone"
              />
            </div>

            <section id="hiring-nightmare" className="scroll-mt-20">
              <h2 className='text-2xl'>The Hiring Nightmare Every South African Knows Too Well</h2>
              <p className="text-muted-foreground">
                  Remember the last time you needed a plumber urgently? The frantic Google searches, endless phone calls, waiting for callbacks that never came, and the anxiety of not knowing if you're being overcharged? That's exactly why we created Gaupro.
              </p>
              <Card className="my-8">
                  <CardContent className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                      <div>
                          <p className="text-3xl font-bold text-primary">6-8</p>
                          <p className="text-xs text-muted-foreground">Hours searching</p>
                      </div>
                      <div>
                          <p className="text-3xl font-bold text-primary">15+</p>
                          <p className="text-xs text-muted-foreground">Calls made</p>
                      </div>
                      <div>
                          <p className="text-3xl font-bold text-primary">40%</p>
                          <p className="text-xs text-muted-foreground">Overpayment risk</p>
                      </div>
                      <div>
                          <p className="text-3xl font-bold text-primary">73%</p>
                          <p className="text-xs text-muted-foreground">Felt anxious</p>
                      </div>
                  </CardContent>
              </Card>
            </section>

              <section id="gaupro-difference" className="space-y-6 scroll-mt-20">
                <h2 className="text-2xl">1. The Gaupro Difference: Traditional Hiring vs Smart Hiring</h2>
                
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
              
              <section id="how-it-works" className="scroll-mt-20 pt-12">
                  <h2 className="text-2xl">2. How Gaupro Works: Your 3-Step Solution</h2>
                  <div className="space-y-8 mt-6">
                      <div className="flex items-start gap-4">
                          <div className="text-4xl">1.</div>
                          <div>
                              <h3 className="text-xl font-semibold">Post Your Job</h3>
                              <p>Tell us what you need. Add details and photos for more accurate quotes. It's free and takes 2 minutes.</p>
                          </div>
                      </div>
                      <div className="flex items-start gap-4">
                          <div className="text-4xl">2.</div>
                          <div>
                              <h3 className="text-xl font-semibold">Receive & Compare Quotes</h3>
                              <p>Get multiple quotes from verified, local pros. Compare their profiles, reviews, and pricing.</p>
                          </div>
                      </div>
                      <div className="flex items-start gap-4">
                          <div className="text-4xl">3.</div>
                          <div>
                              <h3 className="text-xl font-semibold">Hire with Confidence</h3>
                              <p>Choose the right pro for you. Contact them directly, finalize details, and get the job done.</p>
                          </div>
                      </div>
                  </div>
              </section>

              <section id="faq" className="scroll-mt-20 pt-12">
                  <h2 className="text-2xl">Frequently Asked Questions</h2>
                  <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                          <AccordionTrigger>Is Gaupro really free for customers?</AccordionTrigger>
                          <AccordionContent>
                          Yes! It's 100% free to post jobs and receive quotes. Professionals pay a small fee for leads.
                          </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                          <AccordionTrigger>How quickly will I get quotes?</AccordionTrigger>
                          <AccordionContent>
                          Most users receive first quotes within 30 minutes and 3-5 quotes within 2 hours.
                          </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                          <AccordionTrigger>Is it safe?</AccordionTrigger>
                          <AccordionContent>
                          Yes. All professionals are verified. Your contact details are only shared after you accept a quote.
                          </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4">
                          <AccordionTrigger>Which areas do you cover?</AccordionTrigger>
                          <AccordionContent>
                          We cover all major cities and most towns across South Africa.
                          </AccordionContent>
                      </AccordionItem>
                  </Accordion>
              </section>

              <section className="text-center border-t pt-12 mt-12">
                  <h2 className="text-3xl">Ready to Experience the Gaupro Difference?</h2>
                  <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Join 50,000+ South Africans who've made the switch to smarter hiring.</p>
                  <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                      <Button asChild size="lg">
                          <Link href="/post-request">Post a Job Free - Takes 2 Minutes</Link>
                      </Button>
                       <Button asChild size="lg" variant="secondary">
                          <Link href="#">Download the App</Link>
                      </Button>
                  </div>
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
  );
}
