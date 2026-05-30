import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { UserCheck, Lock, CreditCard, Star, AlertTriangle, ListChecks, FileText, Handshake } from 'lucide-react';
import Image from 'next/image';

const safetyFeatures = [
    {
        icon: <UserCheck className="h-8 w-8 text-primary" />,
        title: "Verified Professionals",
        description: "All pros on Gaupro are verified with ID, business registration, and licenses where applicable. This ensures clients get trusted and qualified professionals."
    },
    {
        icon: <Lock className="h-8 w-8 text-primary" />,
        title: "Secure Communication",
        description: "Messages and quotes are encrypted and private. Contact info is shared only with your consent, allowing safe, direct communication on the platform."
    },
    {
        icon: <CreditCard className="h-8 w-8 text-primary" />,
        title: "Payment Safety",
        description: "Payments are secure and protected via trusted providers. Use Gaupro’s platform to avoid scams or fraud."
    },
    {
        icon: <Star className="h-8 w-8 text-primary" />,
        title: "Customer Reviews & Ratings",
        description: "Clients leave honest reviews after each job, and all reviews are monitored for authenticity. This helps trusted pros stand out and build their reputation."
    },
    {
        icon: <AlertTriangle className="h-8 w-8 text-primary" />,
        title: "Reporting & Support",
        description: "Users can report suspicious activity or violations. Our Trust & Safety team acts promptly to maintain a safe environment. Accounts that violate guidelines may be suspended or removed."
    },
    {
        icon: <ListChecks className="h-8 w-8 text-primary" />,
        title: "Safety Guidelines for Users",
        description: "Verify all job details before committing. Use platform communication—avoid sharing sensitive info outside Gaupro. Report concerns immediately."
    },
     {
        icon: <FileText className="h-8 w-8 text-primary" />,
        title: "Data Protection & Privacy",
        description: "Gaupro protects all personal and professional data and complies with South Africa’s POPIA and other privacy laws."
    },
    {
        icon: <Handshake className="h-8 w-8 text-primary" />,
        title: "Commitment to Transparency",
        description: "Our policies and safety measures are easily accessible. Gaupro continuously improves security and trust features to keep our community safe."
    }
];

export default function TrustAndSafetyPage() {
  return (
    <main className="flex-grow bg-background">
      <section className="relative min-h-[400px] flex items-center justify-center text-center text-white">
          <Image
              src="https://picsum.photos/seed/trust-hero/1920/500"
              alt="Professional shaking hands with a client"
              fill
              className="object-cover"
              priority
              data-ai-hint="professional handshake"
          />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-4 py-16">
          <h1 className="text-3xl md:text-5xl font-extrabold">Your Safety is Our Priority</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90">
            Gaupro ensures verified professionals, secure payments, and protected communication so you can connect with confidence.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto space-y-16">
          
          <section>
              <div className="grid md:grid-cols-2 gap-8">
                  {safetyFeatures.map(item => (
                      <div key={item.title} className="flex items-start gap-6 p-6 border rounded-lg bg-card">
                          <div className="flex-shrink-0 mt-1">{item.icon}</div>
                          <div>
                              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                              <p className="text-foreground">{item.description}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </section>

          <section className="text-center bg-primary text-primary-foreground p-10 rounded-lg">
              <div className="relative max-w-3xl mx-auto">
                  <Image 
                      src="https://picsum.photos/seed/trust-cta/1200/400"
                      alt="Happy professional and client completing a job"
                      width={1200}
                      height={400}
                      className="rounded-lg mb-8"
                      data-ai-hint="happy client job"
                  />
                  <h2 className="text-3xl font-bold">Join Gaupro and Connect with Confidence</h2>
                  <div className="mt-8">
                      <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                          <Link href="/pro/signup">Join as a Pro</Link>
                      </Button>
                  </div>
              </div>
          </section>

        </div>
      </div>
    </main>
  );
}
