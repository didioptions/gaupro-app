
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function ServiceCostsPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-background">
        <article>
          <header className="bg-secondary/50 py-12 md:py-16">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-3xl md:text-4xl tracking-tight max-w-3xl mx-auto">
                How Much Do Services Cost in South Africa? The Complete 2024 Pricing Guide
              </h1>
            </div>
          </header>
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="max-w-3xl mx-auto prose lg:prose-lg prose-headings:font-normal prose-headings:text-foreground prose-a:text-primary hover:prose-a:underline">
              
              <p>Wondering how much you should pay for a plumber, electrician, painter, or any other service provider in South Africa? You're not alone.</p>
              <p>Every day, thousands of South Africans search for pricing information before hiring professionals. The challenge? Costs vary dramatically based on location, complexity, provider experience, and dozens of other factors.</p>
              <p><strong>That's why we created this comprehensive guide.</strong></p>
              <p>Whether you're planning a home renovation, dealing with an emergency repair, or simply budgeting for regular maintenance, this guide gives you realistic pricing expectations for the most common services in South Africa.</p>
              <p>We've researched current market rates, surveyed service providers, and analysed thousands of quotes submitted through <strong>Gaupro</strong> to bring you the most accurate and up-to-date pricing information available.</p>
              
              <nav className="my-8 p-4 border rounded-lg bg-secondary/50">
                <h3 className="text-lg font-semibold mb-2">Table of Contents</h3>
                <ol className="list-decimal list-inside space-y-1 text-sm">
                    <li><a href="#how-to-use">How to Use This Pricing Guide</a></li>
                    <li><a href="#plumbing-costs">Plumbing Costs</a></li>
                    <li><a href="#electrical-costs">Electrical Costs</a></li>
                    <li><a href="#painting-costs">Painting Costs</a></li>
                    <li><a href="#moving-costs">Moving and Removals Costs</a></li>
                    <li><a href="#renovation-costs">Building and Renovation Costs</a></li>
                    <li><a href="#roofing-costs">Roofing Costs</a></li>
                    <li><a href="#tiling-costs">Tiling and Flooring Costs</a></li>
                    <li><a href="#landscaping-costs">Landscaping and Garden Costs</a></li>
                    <li><a href="#pool-costs">Pool Services Costs</a></li>
                    <li><a href="#pest-control-costs">Pest Control Costs</a></li>
                    <li><a href="#cleaning-costs">Cleaning Services Costs</a></li>
                    <li><a href="#handyman-costs">Handyman Costs</a></li>
                    <li><a href="#security-costs">Security Services Costs</a></li>
                    <li><a href="#hvac-costs">HVAC and Air Conditioning Costs</a></li>
                    <li><a href="#factors">Factors That Affect Service Costs</a></li>
                    <li><a href="#best-prices">How to Get the Best Prices</a></li>
                    <li><a href="#city-comparison">City-by-City Price Comparison</a></li>
                    <li><a href="#faqs">FAQs About Service Costs</a></li>
                    <li><a href="#get-quotes">Get Free Quotes on Gaupro</a></li>
                </ol>
              </nav>

              <section id="how-to-use" className="scroll-mt-20">
                <h2 className="text-2xl">How to Use This Pricing Guide</h2>
                <p>Before diving into specific costs, here's how to get the most value from this guide:</p>
                <h3>Understanding Price Ranges</h3>
                <p>We provide <strong>low</strong>, <strong>average</strong>, and <strong>high</strong> price ranges for each service:</p>
                <Table>
                    <TableHeader><TableRow><TableHead>Range</TableHead><TableHead>What It Means</TableHead></TableRow></TableHeader>
                    <TableBody>
                        <TableRow><TableCell><strong>Low</strong></TableCell><TableCell>Budget-friendly options, simpler jobs, or less experienced providers</TableCell></TableRow>
                        <TableRow><TableCell><strong>Average</strong></TableCell><TableCell>Typical market rate for standard jobs from established providers</TableCell></TableRow>
                        <TableRow><TableCell><strong>High</strong></TableCell><TableCell>Premium services, complex jobs, or top-tier professionals</TableCell></TableRow>
                    </TableBody>
                </Table>
                <h3>Important Notes</h3>
                <ul>
                    <li><strong>All prices are estimates</strong> based on 2024 market research</li>
                    <li><strong>Prices exclude VAT</strong> unless otherwise stated</li>
                    <li><strong>Actual costs may vary</strong> based on your specific requirements</li>
                    <li><strong>Always get multiple quotes</strong> for accurate pricing</li>
                    <li><strong>Prices may be higher</strong> in major metros like Johannesburg and Cape Town</li>
                </ul>
                <div className="p-4 bg-secondary/50 rounded-lg my-6">
                    <p>Want verified professionals at fair prices? <Link href="/blog/gaupro-difference">See how Gaupro makes hiring easier.</Link></p>
                </div>
                <h3>The Best Way to Get Accurate Pricing</h3>
                <p>While this guide provides excellent benchmarks, the only way to get accurate pricing for YOUR specific job is to request quotes from multiple providers.</p>
                <p><strong>Gaupro makes this easy:</strong> Post your job once, receive multiple quotes, and compare prices from verified service providers in your area.</p>
              </section>

              <section id="plumbing-costs" className="scroll-mt-20 pt-8">
                <h2 className="text-2xl">Plumbing Costs in South Africa</h2>
                <p>Plumbing is one of the most frequently needed home services. Here's what you can expect to pay in 2024.</p>
                <h3>Plumber Call-Out Fees</h3>
                 <Table>
                    <TableHeader><TableRow><TableHead>Time of Service</TableHead><TableHead>Low</TableHead><TableHead>Average</TableHead><TableHead>High</TableHead></TableRow></TableHeader>
                    <TableBody>
                        <TableRow><TableCell>Standard hours (Mon-Fri, 8am-5pm)</TableCell><TableCell>R250</TableCell><TableCell>R400</TableCell><TableCell>R600</TableCell></TableRow>
                        <TableRow><TableCell>After hours (evenings)</TableCell><TableCell>R400</TableCell><TableCell>R600</TableCell><TableCell>R900</TableCell></TableRow>
                        <TableRow><TableCell>Weekends</TableCell><TableCell>R450</TableCell><TableCell>R700</TableCell><TableCell>R1,000</TableCell></TableRow>
                        <TableRow><TableCell>Public holidays</TableCell><TableCell>R500</TableCell><TableCell>R850</TableCell><TableCell>R1,200</TableCell></TableRow>
                        <TableRow><TableCell>Emergency (24/7)</TableCell><TableCell>R600</TableCell><TableCell>R1,000</TableCell><TableCell>R1,500</TableCell></TableRow>
                    </TableBody>
                </Table>
                <p className="text-sm italic">Note: Call-out fees typically cover the first 30-60 minutes of work.</p>
                
                <h3>Common Plumbing Job Costs</h3>
                 <Table>
                    <TableHeader><TableRow><TableHead>Job</TableHead><TableHead>Low</TableHead><TableHead>Average</TableHead><TableHead>High</TableHead></TableRow></TableHeader>
                    <TableBody>
                        <TableRow><TableCell><strong>Blocked drain (simple)</strong></TableCell><TableCell>R350</TableCell><TableCell>R550</TableCell><TableCell>R900</TableCell></TableRow>
                        <TableRow><TableCell><strong>Blocked drain (severe/main line)</strong></TableCell><TableCell>R800</TableCell><TableCell>R1,500</TableCell><TableCell>R3,500</TableCell></TableRow>
                        <TableRow><TableCell><strong>Burst pipe repair</strong></TableCell><TableCell>R500</TableCell><TableCell>R1,200</TableCell><TableCell>R3,000</TableCell></TableRow>
                        <TableRow><TableCell><strong>Geyser replacement (electric)</strong></TableCell><TableCell>R6,000</TableCell><TableCell>R9,500</TableCell><TableCell>R15,000</TableCell></TableRow>
                        <TableRow><TableCell><strong>Geyser repair</strong></TableCell><TableCell>R800</TableCell><TableCell>R1,800</TableCell><TableCell>R4,000</TableCell></TableRow>
                        <TableRow><TableCell><strong>Toilet replacement (incl. toilet)</strong></TableCell><TableCell>R2,500</TableCell><TableCell>R4,500</TableCell><TableCell>R8,000</TableCell></TableRow>
                        <TableRow><TableCell><strong>Tap replacement</strong></TableCell><TableCell>R350</TableCell><TableCell>R650</TableCell><TableCell>R1,200</TableCell></TableRow>
                        <TableRow><TableCell><strong>Leak detection</strong></TableCell><TableCell>R500</TableCell><TableCell>R1,200</TableCell><TableCell>R2,500</TableCell></TableRow>
                    </TableBody>
                </Table>
              </section>

              <section id="electrical-costs" className="scroll-mt-20 pt-8">
                <h2 className="text-2xl">Electrical Costs in South Africa</h2>
                <p><strong>Important:</strong> All electrical work in South Africa must be performed by a registered electrician who can issue a Certificate of Compliance (COC).</p>
                <h3>Electrician Call-Out Fees</h3>
                 <Table>
                    <TableHeader><TableRow><TableHead>Time of Service</TableHead><TableHead>Low</TableHead><TableHead>Average</TableHead><TableHead>High</TableHead></TableRow></TableHeader>
                    <TableBody>
                        <TableRow><TableCell>Standard hours</TableCell><TableCell>R300</TableCell><TableCell>R500</TableCell><TableCell>R750</TableCell></TableRow>
                        <TableRow><TableCell>After hours</TableCell><TableCell>R500</TableCell><TableCell>R750</TableCell><TableCell>R1,100</TableCell></TableRow>
                        <TableRow><TableCell>Emergency</TableCell><TableCell>R700</TableCell><TableCell>R1,100</TableCell><TableCell>R1,800</TableCell></TableRow>
                    </TableBody>
                </Table>

                <h3>Common Electrical Job Costs</h3>
                 <Table>
                    <TableHeader><TableRow><TableHead>Job</TableHead><TableHead>Low</TableHead><TableHead>Average</TableHead><TableHead>High</TableHead></TableRow></TableHeader>
                    <TableBody>
                        <TableRow><TableCell><strong>Light fitting installation</strong></TableCell><TableCell>R200</TableCell><TableCell>R400</TableCell><TableCell>R700</TableCell></TableRow>
                        <TableRow><TableCell><strong>Plug point installation</strong></TableCell><TableCell>R400</TableCell><TableCell>R700</TableCell><TableCell>R1,200</TableCell></TableRow>
                        <TableRow><TableCell><strong>DB board upgrade</strong></TableCell><TableCell>R4,500</TableCell><TableCell>R8,000</TableCell><TableCell>R15,000</TableCell></TableRow>
                        <TableRow><TableCell><strong>Certificate of Compliance (COC)</strong></TableCell><TableCell>R1,200</TableCell><TableCell>R2,000</TableCell><TableCell>R3,500</TableCell></TableRow>
                        <TableRow><TableCell><strong>Fault finding (per hour)</strong></TableCell><TableCell>R400</TableCell><TableCell>R650</TableCell><TableCell>R950</TableCell></TableRow>
                    </TableBody>
                </Table>
              </section>

              <section id="painting-costs" className="scroll-mt-20 pt-8">
                <h2 className="text-2xl">Painting Costs in South Africa</h2>
                <h3>Interior Painting Costs</h3>
                 <Table>
                    <TableHeader><TableRow><TableHead>Room/Area</TableHead><TableHead>Low</TableHead><TableHead>Average</TableHead><TableHead>High</TableHead></TableRow></TableHeader>
                    <TableBody>
                        <TableRow><TableCell><strong>Single room (walls only)</strong></TableCell><TableCell>R1,500</TableCell><TableCell>R2,800</TableCell><TableCell>R5,000</TableCell></TableRow>
                        <TableRow><TableCell><strong>3-bedroom house interior</strong></TableCell><TableCell>R12,000</TableCell><TableCell>R22,000</TableCell><TableCell>R40,000</TableCell></TableRow>
                    </TableBody>
                </Table>
                <h3>Exterior Painting Costs</h3>
                <Table>
                    <TableHeader><TableRow><TableHead>Property Size</TableHead><TableHead>Low</TableHead><TableHead>Average</TableHead><TableHead>High</TableHead></TableRow></TableHeader>
                    <TableBody>
                        <TableRow><TableCell><strong>Small house (under 150m²)</strong></TableCell><TableCell>R15,000</TableCell><TableCell>R28,000</TableCell><TableCell>R45,000</TableCell></TableRow>
                        <TableRow><TableCell><strong>Medium house (150-250m²)</strong></TableCell><TableCell>R25,000</TableCell><TableCell>R45,000</TableCell><TableCell>R75,000</TableCell></TableRow>
                    </TableBody>
                </Table>
              </section>
              
              <section id="get-quotes" className="text-center border-t pt-12 mt-12">
                <h2 className="text-3xl">Ready to Get Accurate Pricing for Your Project?</h2>
                <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Stop guessing. Start comparing. Post your job on Gaupro and receive free, no-obligation quotes from trusted service providers in your area.</p>
                <div className="mt-8">
                    <Button asChild size="lg">
                        <Link href="/post-request">Get Free Quotes on Gaupro Now</Link>
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
