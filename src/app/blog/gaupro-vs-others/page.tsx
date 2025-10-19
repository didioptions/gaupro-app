
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Link from 'next/link';

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

              <section className="space-y-6 pt-12 mt-12 border-t">
                  <h2 className="text-2xl">Connect with Gaupro</h2>
                  <p>Website: <a href="http://www.gaupro.co.za">www.gaupro.co.za</a></p>
                  <p>Email: <a href="mailto:support@gaupro.co.za">support@gaupro.co.za</a></p>
                  <p>WhatsApp: 060 123 4567</p>
                  <p>Download: <a href="#">[App Store]</a> | <a href="#">[Google Play]</a></p>
                  <p>Follow Gaupro: <a href="#">[Facebook: @GauproSA]</a> | <a href="#">[Instagram: @gaupro_sa]</a> | <a href="#">[LinkedIn: Gaupro]</a> | <a href="#">[Twitter: @Gaupro_SA]</a></p>
              </section>

              <section className="space-y-4 pt-8 mt-8 border-t bg-secondary/50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold">About This Article</h3>
                  <p className="text-sm text-muted-foreground">This comprehensive guide is maintained by the Gaupro content team and updated monthly with the latest platform features, success stories, and market insights.</p>
                  <p className="text-sm"><strong className="text-foreground">Last Updated:</strong> December 2024</p>
                  <p className="text-sm"><strong className="text-foreground">Next Update:</strong> January 2025</p>
                  <div className="mt-4">
                      <p className="text-sm font-semibold">Share this guide and help other South Africans discover smarter hiring:</p>
                      <div className="flex gap-2 flex-wrap text-sm mt-2">
                        <a href="#" className="text-primary hover:underline">[Share on WhatsApp]</a>
                        <span className="text-muted-foreground">|</span>
                        <a href="#" className="text-primary hover:underline">[Share on Facebook]</a>
                        <span className="text-muted-foreground">|</span>
                        <a href="#" className="text-primary hover:underline">[Share on LinkedIn]</a>
                        <span className="text-muted-foreground">|</span>
                        <a href="#" className="text-primary hover:underline">[Email to Friend]</a>
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
