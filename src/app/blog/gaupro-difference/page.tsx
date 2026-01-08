
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function GauproDifferencePage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-background">
        <article>
          <header className="bg-secondary/50 py-12 md:py-16">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-3xl md:text-4xl font-normal tracking-tight max-w-3xl mx-auto">
                From Chaos to Confidence: How Gaupro Is Changing How South Africans Hire Service Professionals
              </h1>
            </div>
          </header>
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="max-w-4xl mx-auto prose lg:prose-lg prose-headings:font-normal prose-headings:text-foreground prose-a:text-primary hover:prose-a:underline">
              
              <p className="lead text-xl text-muted-foreground">
                Finding reliable service professionals in South Africa has never been easy.
              </p>
              
              <p>Whether you need a plumber in Johannesburg, an electrician in Cape Town, or a builder in Durban, the process often involves endless phone calls, unreliable referrals, and uncertainty about quality and pricing.</p>
              
              <p>For many South Africans, hiring a service professional has felt like a gamble.</p>
              
              <p>That’s exactly the problem Gaupro was created to solve.</p>

              <section className="space-y-4">
                <h2 className="text-2xl">Why Hiring Service Professionals Used to Be So Frustrating</h2>
                <p>Traditionally, people relied on word-of-mouth recommendations, classified ads, or social media groups. While these options sometimes worked, they often came with problems such as:</p>
                <ul>
                    <li>Unverified contractors</li>
                    <li>No real reviews or job history</li>
                    <li>Unclear pricing</li>
                    <li>Professionals who don’t show up or don’t deliver quality work</li>
                </ul>
                <p>This made hiring stressful, time-consuming, and risky — especially when urgent work was needed.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl">How Gaupro Brings Confidence to the Process</h2>
                <p>Gaupro is a South African-built platform designed to make hiring service professionals simple, transparent, and reliable.</p>
                <p>Instead of searching across multiple platforms, users can find trusted professionals in one place.</p>
                
                <h3>Verified Local Professionals</h3>
                <p>Each professional on Gaupro has a detailed profile that includes experience, customer reviews, and a history of completed jobs. This helps users make informed decisions instead of guessing.</p>
                
                <h3>Multiple Quotes, One Request</h3>
                <p>Users post a job once and receive several competitive quotes from interested professionals. This makes it easy to compare options and choose the right fit.</p>
                
                <h3>Transparency You Can Trust</h3>
                <p>With clear information, real reviews, and side-by-side comparisons, Gaupro removes uncertainty and replaces it with confidence.</p>
                
                <h3>Built for South Africa’s Needs</h3>
                <p>Gaupro connects customers with professionals across major South African cities and surrounding areas, including Johannesburg, Pretoria, Cape Town, Durban, and more.</p>
                <p>By supporting local professionals and protecting customers, Gaupro creates a better experience for everyone involved.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl">A Better Way to Hire Service Professionals</h2>
                <p>Hiring a service professional doesn’t have to be frustrating anymore.</p>
                <p>Gaupro is changing the way South Africans find and hire service professionals by turning a broken, stressful process into one that is simple, fair, and trustworthy.</p>
                <p>With Gaupro, hiring moves from chaos to confidence.</p>
              </section>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
