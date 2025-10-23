
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function HowGauproWorksPostPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-background">
        <article>
          <header className="bg-secondary/50 py-12 md:py-16">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight max-w-3xl mx-auto">
                How Gaupro Works: Your 3-Step Solution to Any Service Need
              </h1>
            </div>
          </header>
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="max-w-3xl mx-auto prose lg:prose-lg prose-headings:font-bold prose-headings:text-foreground prose-a:text-primary hover:prose-a:underline">
              <section id="how-gaupro-works" className="space-y-6 scroll-mt-20">
                <div>
                  <h3 className="text-xl font-semibold">Step 1: Post Your Job on Gaupro (2 Minutes)</h3>
                  <p>It's incredibly simple:</p>
                  <ul className="list-disc list-inside">
                    <li>Visit Gaupro.co.za or open the Gaupro app</li>
                    <li>Click "Post a Job" (it's FREE)</li>
                    <li>Select your service category (e.g., Plumbing, Electrical, Painting)</li>
                    <li>Answer a few quick questions about your needs</li>
                    <li>Add photos if relevant</li>
                    <li>Click submit</li>
                  </ul>
                  <h4 className="font-semibold mt-4">What makes Gaupro's job posting special:</h4>
                  <ul className="list-disc list-inside">
                    <li>Smart forms that adapt to your service type</li>
                    <li>Photo uploads for accurate quotes</li>
                    <li>Location detection to find nearby pros</li>
                    <li>Urgency options for emergency services</li>
                    <li>Budget ranges to filter responses</li>
                  </ul>
                  <p className="font-semibold italic mt-2">Pro Tip: The more details you provide on Gaupro, the more accurate your quotes will be. Our smart system helps professionals understand exactly what you need.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Step 2: Receive & Compare Quotes on Gaupro</h3>
                   <p>Within hours, Gaupro delivers:</p>
                  <ul className="list-disc list-inside">
                    <li>Multiple quotes from interested professionals (average 3-5)</li>
                    <li>Detailed profiles including:
                      <ul className="list-['-_'] list-inside ml-4">
                        <li>Professional's Gaupro verification badge</li>
                        <li>Years of experience</li>
                        <li>Completed jobs on Gaupro</li>
                        <li>Customer reviews and ratings</li>
                        <li>Response time statistics</li>
                        <li>Gallery of previous work</li>
                        <li>Certifications and qualifications</li>
                      </ul>
                    </li>
                  </ul>
                   <h4 className="font-semibold mt-4">Gaupro's Comparison Tools:</h4>
                  <ul className="list-disc list-inside">
                    <li>Side-by-side quote comparison</li>
                    <li>Sort by price, rating, or response time</li>
                    <li>Filter by availability</li>
                    <li>Direct messaging without sharing your phone number</li>
                    <li>Save favorites for later</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Step 3: Hire with Confidence Through Gaupro</h3>
                  <p>Once you've chosen your professional:</p>
                  <ul className="list-disc list-inside">
                    <li>Click "Accept Quote" on Gaupro</li>
                    <li>Your contact details are shared securely</li>
                    <li>Arrange the service directly</li>
                    <li>Pay the professional (not Gaupro - we don't handle payments)</li>
                    <li>Rate and review after completion</li>
                  </ul>
                  <h4 className="font-semibold mt-4">Gaupro Protection Benefits:</h4>
                  <ul className="list-disc list-inside">
                    <li>Dispute support if issues arise</li>
                    <li>Review system ensures accountability</li>
                    <li>Professional standards enforcement</li>
                    <li>Blacklist system for problematic users</li>
                  </ul>
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
