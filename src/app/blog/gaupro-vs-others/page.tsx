
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Link from 'next/link';
import { CheckCircle, XCircle, AlertTriangle, Star, TrendingUp, Users, Target, Shield, MessageCircle, Smartphone, Linkedin, Facebook, Copy, Share2, Bot, Mail, Phone, MessageSquare, Twitter, Instagram, Youtube, HardHat, Home, Handshake, Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Image from 'next/image';


const comparisonData = [
    {
        feature: 'Free for customers',
        gaupro: { text: 'Yes', icon: <CheckCircle className="text-green-500" /> },
        kandua: { text: 'Yes', icon: <CheckCircle className="text-green-500" /> },
        bark: { text: 'No', icon: <XCircle className="text-red-500" /> },
        facebook: { text: 'Yes', icon: <CheckCircle className="text-green-500" /> },
    },
    {
        feature: 'Verified pros',
        gaupro: { text: 'Complete', icon: <CheckCircle className="text-green-500" /> },
        kandua: { text: 'Partial', icon: <AlertTriangle className="text-yellow-500" /> },
        bark: { text: 'Basic', icon: <AlertTriangle className="text-yellow-500" /> },
        facebook: { text: 'None', icon: <XCircle className="text-red-500" /> },
    },
    {
        feature: 'Instant quotes',
        gaupro: { text: 'Yes', icon: <CheckCircle className="text-green-500" /> },
        kandua: { text: 'No', icon: <XCircle className="text-red-500" /> },
        bark: { text: 'No', icon: <XCircle className="text-red-500" /> },
        facebook: { text: 'No', icon: <XCircle className="text-red-500" /> },
    },
    {
        feature: 'Mobile app',
        gaupro: { text: 'iOS & Android', icon: <CheckCircle className="text-green-500" /> },
        kandua: { text: 'Yes', icon: <CheckCircle className="text-green-500" /> },
        bark: { text: 'Limited', icon: <AlertTriangle className="text-yellow-500" /> },
        facebook: { text: 'N/A', icon: <XCircle className="text-red-500" /> },
    },
    {
        feature: 'Reviews system',
        gaupro: { text: 'Verified', icon: <CheckCircle className="text-green-500" /> },
        kandua: { text: 'Mixed', icon: <AlertTriangle className="text-yellow-500" /> },
        bark: { text: 'Mixed', icon: <AlertTriangle className="text-yellow-500" /> },
        facebook: { text: 'Unverified', icon: <XCircle className="text-red-500" /> },
    },
     {
        feature: 'Support',
        gaupro: { text: '24/7', icon: <CheckCircle className="text-green-500" /> },
        kandua: { text: 'Business hours', icon: <AlertTriangle className="text-yellow-500" /> },
        bark: { text: 'Email only', icon: <XCircle className="text-red-500" /> },
        facebook: { text: 'None', icon: <XCircle className="text-red-500" /> },
    },
    {
        feature: 'Nationwide',
        gaupro: { text: 'Yes', icon: <CheckCircle className="text-green-500" /> },
        kandua: { text: 'Yes', icon: <CheckCircle className="text-green-500" /> },
        bark: { text: 'Limited', icon: <AlertTriangle className="text-yellow-500" /> },
        facebook: { text: 'Yes', icon: <CheckCircle className="text-green-500" /> },
    },
     {
        feature: 'Dispute help',
        gaupro: { text: 'Yes', icon: <CheckCircle className="text-green-500" /> },
        kandua: { text: 'Some', icon: <AlertTriangle className="text-yellow-500" /> },
        bark: { text: 'No', icon: <XCircle className="text-red-500" /> },
        facebook: { text: 'No', icon: <XCircle className="text-red-500" /> },
    },
];

const renderStars = (count: number) => (
    <div className="flex">
        {[...Array(5)].map((_, i) => (
            <Star key={i} className={`h-5 w-5 ${i < count ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
        ))}
    </div>
);


export default function GauproVsOthersPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-background">
        <article>
          <header className="bg-secondary/50 py-12 md:py-16">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-3xl md:text-4xl tracking-tight max-w-3xl mx-auto">
                Gaupro vs Other Options: Why We're South Africa's #1 Choice [2024 Comparison]
              </h1>
            </div>
          </header>
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="max-w-5xl mx-auto space-y-16">
              
              <section className="text-center">
                <Card className="max-w-md mx-auto bg-green-50 border-green-200">
                    <CardHeader>
                        <CardTitle className="text-2xl text-green-800">🥇 GAUPRO - Overall Winner</CardTitle>
                    </CardHeader>
                    <CardContent className="text-left space-y-2">
                        <p className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-600" />Completely FREE for customers</p>
                        <p className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-600" />100% verified professionals</p>
                        <p className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-600" />2-hour average response</p>
                        <p className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-600" />94% success rate</p>
                    </CardContent>
                </Card>
                 <Button asChild size="lg" className="mt-6">
                    <Link href="/post-request">Try Gaupro Free →</Link>
                </Button>
              </section>

              <section id="comparison" className="space-y-12 scroll-mt-20">
                <div>
                    <h2 className="text-2xl text-center mb-8">Head-to-Head Comparison</h2>
                    <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                        <TableRow>
                            <TableHead className="w-[200px]">Feature</TableHead>
                            <TableHead>Gaupro</TableHead>
                            <TableHead>Kandua</TableHead>
                            <TableHead>Bark</TableHead>
                            <TableHead>Facebook</TableHead>
                        </TableRow>
                        </TableHeader>
                        <TableBody>
                        {comparisonData.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-semibold">{row.feature}</TableCell>
                                <TableCell><div className="flex items-center gap-2">{row.gaupro.icon} {row.gaupro.text}</div></TableCell>
                                <TableCell><div className="flex items-center gap-2">{row.kandua.icon} {row.kandua.text}</div></TableCell>
                                <TableCell><div className="flex items-center gap-2">{row.bark.icon} {row.bark.text}</div></TableCell>
                                <TableCell><div className="flex items-center gap-2">{row.facebook.icon} {row.facebook.text}</div></TableCell>
                            </TableRow>
                        ))}
                        <TableRow>
                            <TableCell className="font-semibold">Overall Score</TableCell>
                            <TableCell className="font-bold text-green-600">8/8</TableCell>
                            <TableCell>5/8</TableCell>
                            <TableCell>2/8</TableCell>
                            <TableCell>2/8</TableCell>
                        </TableRow>
                        </TableBody>
                    </Table>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl text-center pt-6 mb-8">User Ratings</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>🥇 Gaupro</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {renderStars(5)}
                                <p className="text-sm mt-2">"2 hours, 5 quotes, job done same day!" - Sarah, Sandton</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>🥈 Kandua</CardTitle>
                            </CardHeader>
                             <CardContent>
                                {renderStars(4)}
                                <p className="text-sm mt-2">"Took 2 days but got the job done." - Mike, Cape Town</p>
                            </CardContent>
                        </Card>
                         <Card>
                            <CardHeader>
                                <CardTitle>🥉 Bark</CardTitle>
                            </CardHeader>
                             <CardContent>
                                {renderStars(3)}
                                 <p className="text-sm mt-2">"Paid for credits, but few responses." - Anna, Pretoria</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Facebook Groups</CardTitle>
                            </CardHeader>
                             <CardContent>
                                {renderStars(2)}
                                 <p className="text-sm mt-2">"Lots of messages, hard to verify who's real." - John, Durban</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <div className="text-center pt-12">
                    <h2 className="text-2xl">Why Gaupro Wins Every Time</h2>
                    <div className="mt-8 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="p-6 border rounded-lg">
                            <h3 className="text-xl font-semibold mb-2">Security & Trust</h3>
                            <ul className="list-disc list-inside text-muted-foreground text-left">
                                <li>Only Gaupro verifies every professional</li>
                                <li>Only Gaupro offers dispute protection</li>
                                <li>Only Gaupro has accountability measures</li>
                            </ul>
                        </div>
                        <div className="p-6 border rounded-lg">
                            <h3 className="text-xl font-semibold mb-2">Speed & Convenience</h3>
                            <ul className="list-disc list-inside text-muted-foreground text-left">
                                <li>Fastest quote turnaround in SA</li>
                                <li>One post reaches hundreds of pros</li>
                                <li>Mobile-first design for on-the-go hiring</li>
                            </ul>
                        </div>
                        <div className="p-6 border rounded-lg">
                            <h3 className="text-xl font-semibold mb-2">Value & Transparency</h3>
                            <ul className="list-disc list-inside text-muted-foreground text-left">
                                <li>Competitive quotes through competition</li>
                                <li>Clear pricing upfront</li>
                                <li>No middleman markups</li>
                            </ul>
                        </div>
                    </div>
                </div>
              </section>

              <section id="pro-benefits" className="scroll-mt-20">
                <h2 className="text-2xl text-center mb-8">Why Professionals Prefer Gaupro</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <Card className="p-4 border-0 shadow-none">
                        <CardContent className="p-0">
                            <TrendingUp className="h-10 w-10 text-primary mx-auto mb-2" />
                            <p className="font-semibold">40% more leads</p>
                            <p className="text-sm text-muted-foreground">than competitors</p>
                        </CardContent>
                    </Card>
                    <Card className="p-4 border-0 shadow-none">
                        <CardContent className="p-0">
                            <Star className="h-10 w-10 text-primary mx-auto mb-2" />
                            <p className="font-semibold">Better quality</p>
                            <p className="text-sm text-muted-foreground">customers</p>
                        </CardContent>
                    </Card>
                    <Card className="p-4 border-0 shadow-none">
                        <CardContent className="p-0">
                             <p className="text-3xl font-bold text-primary">R1,200</p>
                            <p className="font-semibold">Higher job values</p>
                            <p className="text-sm text-muted-foreground">(avg)</p>
                        </CardContent>
                    </Card>
                    <Card className="p-4 border-0 shadow-none">
                        <CardContent className="p-0">
                            <Target className="h-10 w-10 text-primary mx-auto mb-2" />
                            <p className="font-semibold">Targeted matches</p>
                            <p className="text-sm text-muted-foreground">not spam</p>
                        </CardContent>
                    </Card>
                </div>
              </section>

              <section id="coverage-comparison" className="scroll-mt-20">
                <h2 className="text-2xl text-center mb-8">City Coverage Comparison</h2>
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>City</TableHead>
                                <TableHead>Gaupro</TableHead>
                                <TableHead>Kandua</TableHead>
                                <TableHead>Bark</TableHead>
                                <TableHead>Facebook</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-semibold">Johannesburg</TableCell>
                                <TableCell>✅ 5000+ pros</TableCell>
                                <TableCell>✅ 2000+</TableCell>
                                <TableCell>⚠️ 500+</TableCell>
                                <TableCell>Random</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-semibold">Cape Town</TableCell>
                                <TableCell>✅ 3500+ pros</TableCell>
                                <TableCell>✅ 1500+</TableCell>
                                <TableCell>⚠️ 300+</TableCell>
                                <TableCell>Random</TableCell>
                            </TableRow>
                             <TableRow>
                                <TableCell className="font-semibold">Durban</TableCell>
                                <TableCell>✅ 2000+ pros</TableCell>
                                <TableCell>⚠️ 800+</TableCell>
                                <TableCell>❌ Limited</TableCell>
                                <TableCell>Random</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-semibold">Pretoria</TableCell>
                                <TableCell>✅ 2500+ pros</TableCell>
                                <TableCell>⚠️ 1000+</TableCell>
                                <TableCell>❌ Limited</TableCell>
                                <TableCell>Random</TableCell>
                            </TableRow>
                             <TableRow>
                                <TableCell className="font-semibold">Smaller towns</TableCell>
                                <TableCell>✅ Growing</TableCell>
                                <TableCell>⚠️ Some</TableCell>
                                <TableCell>❌ Rare</TableCell>
                                <TableCell>Variable</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
              </section>

              <section id="cost-comparison" className="scroll-mt-20">
                  <h2 className="text-2xl text-center mb-8">Cost Comparison for Customers</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Platform Fees</h3>
                        <div className="space-y-4">
                            <Card className="bg-green-50 border-green-200">
                                <CardContent className="p-4"><p><span className="font-bold">Gaupro:</span> 💚 R0 Forever free</p></CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-4"><p><span className="font-bold">Kandua:</span> 💚 R0 Free posting</p></CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-4"><p><span className="font-bold">Bark:</span> 💸 R50-200 Per job (credits)</p></CardContent>
                            </Card>
                             <Card>
                                <CardContent className="p-4"><p><span className="font-bold">Facebook:</span> 💚 R0 But time cost is high</p></CardContent>
                            </Card>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Hidden Costs of Wrong Choices</h3>
                        <div className="space-y-4">
                            <Card className="bg-red-50 border-red-200">
                                <CardContent className="p-4 flex items-center gap-2"><AlertTriangle className="h-5 w-5 text-red-600"/> <span>Time wasted without verification</span></CardContent>
                            </Card>
                             <Card className="bg-red-50 border-red-200">
                                <CardContent className="p-4 flex items-center gap-2"><AlertTriangle className="h-5 w-5 text-red-600"/> <span>Bad hires can cost 3x more to fix</span></CardContent>
                            </Card>
                             <Card className="bg-red-50 border-red-200">
                                <CardContent className="p-4 flex items-center gap-2"><AlertTriangle className="h-5 w-5 text-red-600"/> <span>No recourse or support means problems are yours alone</span></CardContent>
                            </Card>
                        </div>
                    </div>
                  </div>
              </section>
              
              <section id="advantage" className="scroll-mt-20">
                  <h2 className="text-2xl text-center mb-8">The Gaupro Advantage</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center max-w-3xl mx-auto">
                        <Card className="p-4">
                            <CardContent className="p-0">
                                <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                                <h3 className="font-semibold">Safety</h3>
                                <p className="text-sm text-muted-foreground">100% verified</p>
                            </CardContent>
                        </Card>
                         <Card className="p-4">
                            <CardContent className="p-0">
                                <MessageCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                                <h3 className="font-semibold">Support</h3>
                                <p className="text-sm text-muted-foreground">24/7 help</p>
                            </CardContent>
                        </Card>
                         <Card className="p-4">
                            <CardContent className="p-0">
                                <Smartphone className="h-8 w-8 text-primary mx-auto mb-2" />
                                <h3 className="font-semibold">Mobile App</h3>
                                <p className="text-sm text-muted-foreground">Full-featured</p>
                            </CardContent>
                        </Card>
                         <Card className="p-4">
                            <CardContent className="p-0">
                                <Star className="h-8 w-8 text-primary mx-auto mb-2" />
                                <h3 className="font-semibold">Reviews</h3>
                                <p className="text-sm text-muted-foreground">Verified only</p>
                            </CardContent>
                        </Card>
                         <Card className="p-4">
                            <CardContent className="p-0">
                                <p className="text-3xl font-bold text-primary">R0</p>
                                <h3 className="font-semibold">Free</h3>
                                <p className="text-sm text-muted-foreground">No hidden costs</p>
                            </CardContent>
                        </Card>
                  </div>
              </section>

              <section id="faq" className="scroll-mt-20">
                  <h2 className="text-2xl text-center mb-8">Quick FAQs</h2>
                  <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
                      <AccordionItem value="item-1">
                          <AccordionTrigger>Why is Gaupro free?</AccordionTrigger>
                          <AccordionContent>
                          Professionals pay a small fee to send you a quote, which means the service remains completely free for customers.
                          </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                          <AccordionTrigger>Is the 2-hour response time guaranteed?</AccordionTrigger>
                          <AccordionContent>
                          While not guaranteed, 87% of job posts receive their first quote within 2 hours. This can vary based on the service and location.
                          </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                          <AccordionTrigger>How are all pros verified?</AccordionTrigger>
                          <AccordionContent>
                          We have a multi-step process that includes ID verification and checking for relevant qualifications or certifications where applicable.
                          </AccordionContent>
                      </AccordionItem>
                  </Accordion>
              </section>


              <section className="text-center border-t pt-16 relative overflow-hidden rounded-lg">
                <Image 
                    src="https://picsum.photos/seed/cta-bg/1200/400"
                    alt="Abstract background"
                    fill
                    className="object-cover"
                    data-ai-hint="abstract background"
                />
                <div className="absolute inset-0 bg-primary/80"></div>
                <div className="relative z-10 text-primary-foreground p-8">
                    <h2 className="text-3xl">See Why We're #1</h2>
                    <p className="mt-4 max-w-xl mx-auto">
                       Join 50,000+ South Africans who have made the switch to smarter hiring.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
                           <Link href="/post-request">Try Gaupro Free - No Sign-up</Link>
                        </Button>
                    </div>
                </div>
              </section>

              <section className="text-center border-t pt-12">
                <h3 className="text-xl font-semibold mb-4">Share This Comparison</h3>
                <p className="text-muted-foreground mb-6">Help others choose smart:</p>
                <div className="flex justify-center gap-4">
                    <Button variant="outline" size="lg">
                        <Share2 className="mr-2 h-5 w-5" /> WhatsApp
                    </Button>
                    <Button variant="outline" size="lg">
                        <Facebook className="mr-2 h-5 w-5" /> Facebook
                    </Button>
                    <Button variant="outline" size="lg">
                        <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
                    </Button>
                    <Button variant="outline" size="icon" size="lg">
                        <Copy className="h-5 w-5" />
                    </Button>
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
