
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const comparisonData = [
    { feature: 'Verified Professionals', gaupro: '✅ All verified', facebook: '❌ No verification', gumtree: '❌ Limited', google: '❌ No verification', wordOfMouth: "❌ Can't verify" },
    { feature: 'Instant Multiple Quotes', gaupro: '✅ 2-4 hours', facebook: '❌ Days/weeks', gumtree: '❌ Individual contact', google: '❌ One at a time', wordOfMouth: '❌ Very slow' },
    { feature: 'Authentic Reviews', gaupro: '✅ Verified only', facebook: '❌ Can be fake', gumtree: '⚠️ Some fake', google: '⚠️ Mixed sources', wordOfMouth: '✅ Trusted but limited' },
    { feature: 'Price Transparency', gaupro: '✅ Full visibility', facebook: '❌ None', gumtree: '⚠️ Limited', google: '❌ None', wordOfMouth: '❌ Awkward to ask' },
    { feature: 'Dispute Protection', gaupro: '✅ Full support', facebook: '❌ None', gumtree: '❌ None', google: '❌ None', wordOfMouth: '❌ Relationship risk' },
    { feature: 'Mobile App', gaupro: '✅ iOS & Android', facebook: '⚠️ Facebook app', gumtree: '⚠️ Basic app', google: '❌ None', wordOfMouth: '❌ None' },
    { feature: 'Cost to Use', gaupro: '✅ FREE', facebook: '✅ Free', gumtree: '✅ Free', google: '✅ Free', wordOfMouth: '✅ Free' },
    { feature: 'Professional Quality', gaupro: '⭐⭐⭐⭐⭐', facebook: '⭐⭐', gumtree: '⭐⭐', google: '⭐⭐⭐', wordOfMouth: '⭐⭐⭐⭐' },
];

export default function GauproVsOthersPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-white">
        <article>
          <header className="bg-secondary/50 py-12 md:py-16">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight max-w-3xl mx-auto">
                Gaupro vs Other Options: Why We're South Africa's #1 Choice
              </h1>
            </div>
          </header>
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="max-w-4xl mx-auto prose lg:prose-lg prose-headings:font-bold prose-headings:text-foreground prose-a:text-primary hover:prose-a:underline">
              
              <section id="comparison" className="space-y-8 scroll-mt-20">
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
                      {comparisonData.map((row) => (
                        <TableRow key={row.feature}>
                          <TableCell className="font-semibold">{row.feature}</TableCell>
                          <TableCell>{row.gaupro}</TableCell>
                          <TableCell>{row.facebook}</TableCell>
                          <TableCell>{row.gumtree}</TableCell>
                          <TableCell>{row.google}</TableCell>
                          <TableCell>{row.wordOfMouth}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div>
                    <h2 className="text-2xl mt-12">Why Gaupro Wins Every Time</h2>
                    <div className="grid md:grid-cols-3 gap-8 mt-6">
                        <div>
                            <h3 className="text-xl font-semibold">Security & Trust</h3>
                            <ul className="list-disc list-inside mt-2">
                                <li>Only Gaupro verifies every professional</li>
                                <li>Only Gaupro offers dispute protection</li>
                                <li>Only Gaupro has accountability measures</li>
                            </ul>
                        </div>
                         <div>
                            <h3 className="text-xl font-semibold">Speed & Convenience</h3>
                            <ul className="list-disc list-inside mt-2">
                                <li>Fastest quote turnaround in SA</li>
                                <li>One post reaches hundreds of pros</li>
                                <li>Mobile-first design for on-the-go hiring</li>
                            </ul>
                        </div>
                         <div>
                            <h3 className="text-xl font-semibold">Value & Transparency</h3>
                            <ul className="list-disc list-inside mt-2">
                                <li>Competitive quotes through competition</li>
                                <li>Clear pricing upfront</li>
                                <li>No hidden platform fees</li>
                            </ul>
                        </div>
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
