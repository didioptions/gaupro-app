
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Link from 'next/link';
import { CheckCircle, XCircle, AlertTriangle, Star } from 'lucide-react';

const comparisonData = [
    {
        feature: 'Verified Professionals',
        gaupro: { text: 'All verified', icon: <CheckCircle className="text-green-500" /> },
        facebook: { text: 'No verification', icon: <XCircle className="text-red-500" /> },
        gumtree: { text: 'Limited', icon: <XCircle className="text-red-500" /> },
        google: { text: 'No verification', icon: <XCircle className="text-red-500" /> },
        wordOfMouth: { text: "Can't verify", icon: <XCircle className="text-red-500" /> },
    },
    {
        feature: 'Instant Multiple Quotes',
        gaupro: { text: '2-4 hours', icon: <CheckCircle className="text-green-500" /> },
        facebook: { text: 'Days/weeks', icon: <XCircle className="text-red-500" /> },
        gumtree: { text: 'Individual contact', icon: <XCircle className="text-red-500" /> },
        google: { text: 'One at a time', icon: <XCircle className="text-red-500" /> },
        wordOfMouth: { text: 'Very slow', icon: <XCircle className="text-red-500" /> },
    },
    {
        feature: 'Authentic Reviews',
        gaupro: { text: 'Verified only', icon: <CheckCircle className="text-green-500" /> },
        facebook: { text: 'Can be fake', icon: <XCircle className="text-red-500" /> },
        gumtree: { text: 'Some fake', icon: <AlertTriangle className="text-yellow-500" /> },
        google: { text: 'Mixed sources', icon: <AlertTriangle className="text-yellow-500" /> },
        wordOfMouth: { text: 'Trusted but limited', icon: <CheckCircle className="text-green-500" /> },
    },
    {
        feature: 'Price Transparency',
        gaupro: { text: 'Full visibility', icon: <CheckCircle className="text-green-500" /> },
        facebook: { text: 'None', icon: <XCircle className="text-red-500" /> },
        gumtree: { text: 'Limited', icon: <AlertTriangle className="text-yellow-500" /> },
        google: { text: 'None', icon: <XCircle className="text-red-500" /> },
        wordOfMouth: { text: 'Awkward to ask', icon: <XCircle className="text-red-500" /> },
    },
    {
        feature: 'Dispute Protection',
        gaupro: { text: 'Full support', icon: <CheckCircle className="text-green-500" /> },
        facebook: { text: 'None', icon: <XCircle className="text-red-500" /> },
        gumtree: { text: 'None', icon: <XCircle className="text-red-500" /> },
        google: { text: 'None', icon: <XCircle className="text-red-500" /> },
        wordOfMouth: { text: 'Relationship risk', icon: <XCircle className="text-red-500" /> },
    },
    {
        feature: 'Mobile App',
        gaupro: { text: 'iOS & Android', icon: <CheckCircle className="text-green-500" /> },
        facebook: { text: 'Facebook app', icon: <AlertTriangle className="text-yellow-500" /> },
        gumtree: { text: 'Basic app', icon: <AlertTriangle className="text-yellow-500" /> },
        google: { text: 'None', icon: <XCircle className="text-red-500" /> },
        wordOfMouth: { text: 'None', icon: <XCircle className="text-red-500" /> },
    },
    {
        feature: 'Cost to Use',
        gaupro: { text: 'FREE', icon: <CheckCircle className="text-green-500" /> },
        facebook: { text: 'Free', icon: <CheckCircle className="text-green-500" /> },
        gumtree: { text: 'Free', icon: <CheckCircle className="text-green-500" /> },
        google: { text: 'Free', icon: <CheckCircle className="text-green-500" /> },
        wordOfMouth: { text: 'Free', icon: <CheckCircle className="text-green-500" /> },
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
              <h1 className="text-3xl md:text-4xl font-normal tracking-tight max-w-3xl mx-auto">
                Gaupro vs Other Options: Why We're South Africa's #1 Choice
              </h1>
            </div>
          </header>
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="max-w-4xl mx-auto prose lg:prose-lg prose-headings:font-normal prose-headings:text-foreground prose-a:text-primary hover:prose-a:underline">
              <section id="comparison" className="space-y-6 scroll-mt-20">
                <h2 className="text-2xl">Comprehensive Platform Comparison</h2>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Feature</TableHead>
                        <TableHead>Gaupro</TableHead>
                        <TableHead>Facebook Groups</TableHead>
                        <TableHead>Gumtree</TableHead>
                        <TableHead>Google Search</TableHead>
                        <TableHead>Word of Mouth</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {comparisonData.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-semibold">{row.feature}</TableCell>
                            <TableCell><div className="flex items-center gap-2">{row.gaupro.icon} {row.gaupro.text}</div></TableCell>
                            <TableCell><div className="flex items-center gap-2">{row.facebook.icon} {row.facebook.text}</div></TableCell>
                            <TableCell><div className="flex items-center gap-2">{row.gumtree.icon} {row.gumtree.text}</div></TableCell>
                            <TableCell><div className="flex items-center gap-2">{row.google.icon} {row.google.text}</div></TableCell>
                            <TableCell><div className="flex items-center gap-2">{row.wordOfMouth.icon} {row.wordOfMouth.text}</div></TableCell>
                        </TableRow>
                      ))}
                       <TableRow>
                        <TableCell className="font-semibold">Professional Quality</TableCell>
                        <TableCell>{renderStars(5)}</TableCell>
                        <TableCell>{renderStars(2)}</TableCell>
                        <TableCell>{renderStars(2)}</TableCell>
                        <TableCell>{renderStars(3)}</TableCell>
                        <TableCell>{renderStars(4)}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                <h2 className="text-2xl pt-6">Why Gaupro Wins Every Time</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div>
                        <h3 className="text-xl font-semibold">Security & Trust</h3>
                        <ul className="list-disc list-inside">
                            <li>Only Gaupro verifies every professional</li>
                            <li>Only Gaupro offers dispute protection</li>
                            <li>Only Gaupro has accountability measures</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Speed & Convenience</h3>
                        <ul className="list-disc list-inside">
                            <li>Fastest quote turnaround in SA</li>
                            <li>One post reaches hundreds of pros</li>
                            <li>Mobile-first design for on-the-go hiring</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Value & Transparency</h3>
                        <ul className="list-disc list-inside">
                            <li>Competitive quotes through competition</li>
                            <li>Clear pricing upfront</li>
                            <li>No middleman markups</li>
                        </ul>
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
