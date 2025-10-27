
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Link from 'next/link';
import { CheckCircle, XCircle, AlertTriangle, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

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

               <section className="text-center border-t pt-16">
                    <h2 className="text-3xl">See Why We're #1</h2>
                    <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                       Join 50,000+ South Africans who have made the switch to smarter hiring.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" asChild>
                           <Link href="/post-request">Try Gaupro Free - No Sign-up</Link>
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
