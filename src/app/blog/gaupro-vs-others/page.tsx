
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

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
            <div className="max-w-3xl mx-auto prose lg:prose-lg prose-headings:font-bold prose-headings:text-foreground prose-a:text-primary hover:prose-a:underline">
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
                      <TableRow>
                        <TableCell>Verified Professionals</TableCell>
                        <TableCell>✅ All verified</TableCell>
                        <TableCell>❌ No verification</TableCell>
                        <TableCell>❌ Limited</TableCell>
                        <TableCell>❌ No verification</TableCell>
                        <TableCell>❌ Can't verify</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Instant Multiple Quotes</TableCell>
                        <TableCell>✅ 2-4 hours</TableCell>
                        <TableCell>❌ Days/weeks</TableCell>
                        <TableCell>❌ Individual contact</TableCell>
                        <TableCell>❌ One at a time</TableCell>
                        <TableCell>❌ Very slow</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Authentic Reviews</TableCell>
                        <TableCell>✅ Verified only</TableCell>
                        <TableCell>❌ Can be fake</TableCell>
                        <TableCell>⚠️ Some fake</TableCell>
                        <TableCell>⚠️ Mixed sources</TableCell>
                        <TableCell>✅ Trusted but limited</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Price Transparency</TableCell>
                        <TableCell>✅ Full visibility</TableCell>
                        <TableCell>❌ None</TableCell>
                        <TableCell>⚠️ Limited</TableCell>
                        <TableCell>❌ None</TableCell>
                        <TableCell>❌ Awkward to ask</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Dispute Protection</TableCell>
                        <TableCell>✅ Full support</TableCell>
                        <TableCell>❌ None</TableCell>
                        <TableCell>❌ None</TableCell>
                        <TableCell>❌ None</TableCell>
                        <TableCell>❌ Relationship risk</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Mobile App</TableCell>
                        <TableCell>✅ iOS & Android</TableCell>
                        <TableCell>⚠️ Facebook app</TableCell>
                        <TableCell>⚠️ Basic app</TableCell>
                        <TableCell>❌ None</TableCell>
                        <TableCell>❌ None</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Cost to Use</TableCell>
                        <TableCell>✅ FREE</TableCell>
                        <TableCell>✅ Free</TableCell>
                        <TableCell>✅ Free</TableCell>
                        <TableCell>✅ Free</TableCell>
                        <TableCell>✅ Free</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Professional Quality</TableCell>
                        <TableCell>⭐⭐⭐⭐⭐</TableCell>
                        <TableCell>⭐⭐</TableCell>
                        <TableCell>⭐⭐</TableCell>
                        <TableCell>⭐⭐⭐</TableCell>
                        <TableCell>⭐⭐⭐⭐</TableCell>
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
