
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function GauproDifferencePage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-white">
        <article>
          <header className="bg-secondary/50 py-12 md:py-16">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight max-w-3xl mx-auto">
                The Gaupro Difference: Traditional Hiring vs Smart Hiring
              </h1>
            </div>
          </header>
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="max-w-3xl mx-auto prose lg:prose-lg prose-headings:font-bold prose-headings:text-foreground prose-a:text-primary hover:prose-a:underline">
              <p className="lead text-xl text-muted-foreground">
                Let's be honest about how frustrating finding service professionals used to be. Here's how Gaupro revolutionizes the process.
              </p>
                
              <section id="gaupro-difference" className="space-y-6 scroll-mt-20">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">The Old Way (Without Gaupro) 😓</h3>
                    <p className="font-semibold text-foreground">The Traditional Struggle:</p>
                    <ul className="list-none p-0 space-y-2 text-muted-foreground">
                      <li>❌ Hours of searching through classifieds and Facebook groups</li>
                      <li>❌ No verification - anyone can claim they're qualified</li>
                      <li>❌ Price mystery - quotes vary wildly with no transparency</li>
                      <li>❌ Zero accountability - no reviews, no recourse</li>
                      <li>❌ Safety concerns - inviting strangers with no background checks</li>
                      <li>❌ Time wasted - waiting days for callbacks</li>
                      <li>❌ Geographic limitations - only knowing professionals in your immediate area</li>
                    </ul>
                    <blockquote className="mt-4 border-l-4 pl-4 italic text-muted-foreground">
                      "I once spent an entire week trying to find an electrician. Made 15 calls, got 3 callbacks, 1 showed up, and the quote was ridiculous. Never again!"
                      <cite className="block not-italic mt-2 font-semibold">- Sarah from Sandton</cite>
                    </blockquote>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">The Gaupro Way (Smart Hiring) 🚀</h3>
                      <p className="font-semibold text-foreground">Here's how Gaupro revolutionizes the process:</p>
                    <ul className="list-none p-0 space-y-2 text-muted-foreground">
                      <li>✅ Instant Connections - Post once, reach hundreds of professionals</li>
                      <li>✅ Pre-Verified Pros - Every professional is ID and credential checked</li>
                      <li>✅ Transparent Pricing - Compare multiple quotes side-by-side</li>
                      <li>✅ Authentic Reviews - Read experiences from verified customers</li>
                      <li>✅ Protected Communication - Your number stays private until you choose</li>
                      <li>✅ 24/7 Availability - Post jobs anytime, get responses within hours</li>
                      <li>✅ Nationwide Network - Access professionals across all of South Africa</li>
                    </ul>
                      <blockquote className="mt-4 border-l-4 pl-4 italic text-muted-foreground">
                      "Posted my electrical job at 9am, had 4 quotes by lunch, hired someone with 47 five-star reviews, job done perfectly by 5pm. Game-changer!"
                      <cite className="block not-italic mt-2 font-semibold">- Sarah's Gaupro Experience</cite>
                    </blockquote>
                  </div>
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
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
