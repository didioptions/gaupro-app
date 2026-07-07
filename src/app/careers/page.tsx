import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Briefcase, Globe, TrendingUp, Users, Heart, Lightbulb, CheckCircle, Mail, Linkedin, Facebook } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const whyWorkItems = [
    {
        icon: <Globe className="h-8 w-8 text-primary" />,
        title: "Meaningful Work",
        description: "Your ideas help thousands of local professionals succeed.",
        imageId: "meaningful-work-card"
    },
    {
        icon: <TrendingUp className="h-8 w-8 text-primary" />,
        title: "Growth & Learning",
        description: "We support personal and career development through mentorship and flexibility.",
        imageId: "growth-learning-card"
    },
    {
        icon: <Users className="h-8 w-8 text-primary" />,
        title: "Positive Culture",
        description: "Collaborative, remote-friendly, and built on trust, creativity, and impact.",
        imageId: "positive-culture-card"
    }
];

const teams = [
    { name: "Tech & Product", description: "Building powerful, user-friendly tools for web and mobile." },
    { name: "Marketing & Growth", description: "Sharing Gaupro’s story and helping professionals reach more clients." },
    { name: "Customer Success", description: "Supporting Pros and Customers to make every connection seamless." },
    { name: "Operations & Strategy", description: "Ensuring everything runs smoothly behind the scenes." },
];

const values = [
    { icon: <Heart className="h-6 w-6 text-primary" />, name: "Empowerment", detail: "Helping others grow" },
    { icon: <Lightbulb className="h-6 w-6 text-primary" />, name: "Innovation", detail: "Finding smarter solutions" },
    { icon: <CheckCircle className="h-6 w-6 text-primary" />, name: "Integrity", detail: "Doing what’s right, always" },
    { icon: <Globe className="h-6 w-6 text-primary" />, name: "Impact", detail: "Making a difference in local communities" },
];

export default function CareersPage() {
  return (
    <main className="flex-grow bg-background">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl tracking-tight">Careers at Gaupro</h1>
          <p className="mt-4 text-lg text-foreground max-w-2xl mx-auto">
            Join the Team Building South Africa’s #1 Service Marketplace
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto space-y-16">

          <section className="text-center">
              <p className="text-lg text-foreground">
                  At Gaupro, we’re on a mission to empower South Africa’s service professionals — from plumbers to designers — helping them grow their businesses and connect with real customers. Our platform makes local hiring simpler, smarter, and more trusted for everyone.
              </p>
              <div className="mt-8 bg-blue-100/50 border border-blue-200 text-blue-800 rounded-lg p-6">
                  <p className="font-semibold">
                      We’re not hiring right now, but we’re always excited to meet talented people who believe in what we’re building.
                  </p>
              </div>
          </section>
          
          <section>
              <h2 className="text-3xl text-center mb-10">🌟 Why Work at Gaupro?</h2>
                <p className="text-foreground text-center max-w-2xl mx-auto mb-10">We believe in purpose, people, and progress. When you join Gaupro, you become part of a passionate team that values innovation, collaboration, and growth.</p>
              <div className="grid md:grid-cols-3 gap-8">
                  {whyWorkItems.map(item => {
                      const image = PlaceHolderImages.find(p => p.id === item.imageId);
                      return (
                      <div key={item.title} className="relative text-center p-6 border rounded-lg bg-card overflow-hidden text-white">
                          {image && (
                            <Image
                              src={image.imageUrl}
                              alt={image.description}
                              fill
                              className="object-cover"
                              data-ai-hint={image.imageHint}
                            />
                          )}
                          <div className="absolute inset-0 bg-black/50"></div>
                          <div className="relative z-10 flex flex-col items-center justify-center h-full">
                              <div className="flex justify-center mb-4 bg-white/20 rounded-full p-2">{item.icon}</div>
                              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                              <p className="text-white/80">{item.description}</p>
                          </div>
                      </div>
                      )
                  })}
              </div>
          </section>
          
          <section className="grid md:grid-cols-2 gap-12 items-center p-8 rounded-lg">
              <div>
                  <h2 className="text-3xl mb-4">📬 Stay Connected</h2>
                  <p className="text-foreground mb-6">Here’s how to stay in touch. We’re growing fast — new roles in tech, marketing, operations, and customer success open regularly!</p>
                  <ul className="space-y-4">
                      <li className="flex items-center gap-3">
                          <Linkedin className="h-5 w-5 text-primary" />
                          <Link href="#" className="font-medium hover:underline">Follow us on LinkedIn for updates</Link>
                      </li>
                      <li className="flex items-center gap-3">
                          <Facebook className="h-5 w-5 text-primary" />
                          <a href="https://www.facebook.com/GauProSouthAfrica" target="_blank" rel="noopener noreferrer" className="font-medium hover:underline">Follow us on Facebook</a>
                      </li>
                      <li className="flex items-center gap-3">
                            <Mail className="h-5 w-5 text-primary" />
                          <a href="mailto:careers@gaupro.co.za" className="font-medium hover:underline">Send your CV to careers@gaupro.co.za</a>
                      </li>
                  </ul>
              </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Our Teams</h3>
                  <div className="space-y-3">
                      {teams.map(team => (
                          <div key={team.name}>
                              <p className="font-semibold">{team.name}:</p>
                              <p className="text-sm text-foreground">{team.description}</p>
                          </div>
                      ))}
                  </div>
              </div>
          </section>

            <section>
              <h2 className="text-3xl text-center mb-6">❤️ Our Culture</h2>
                <p className="text-foreground text-center max-w-2xl mx-auto mb-10">We’re a team of doers, creators, and problem-solvers. At Gaupro, every voice matters — and every idea helps us improve the way South Africans connect with trusted services.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  {values.map(value => (
                      <div key={value.name} className="p-4 border rounded-lg bg-card">
                          <div className="flex justify-center mb-2">{value.icon}</div>
                          <p className="font-semibold">{value.name}</p>
                          <p className="text-sm text-foreground">{value.detail}</p>
                      </div>
                  ))}
              </div>
          </section>

          <section className="text-center border-t pt-16">
              <h2 className="text-3xl font-normal">🚀 Join Our Mission</h2>
              <p className="mt-4 text-foreground max-w-xl mx-auto">
                  Even if there’s no opening today, we’d love to hear from you. Your passion could help shape the future of local services in South Africa.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
                    <Button size="lg" asChild>
                        <a href="mailto:careers@gaupro.co.za">Send Your CV</a>
                  </Button>
                    <Button size="lg" variant="secondary" asChild>
                        <Link href="/about">Learn More About Gaupro</Link>
                  </Button>
              </div>
          </section>

        </div>
      </div>
    </main>
  );
}