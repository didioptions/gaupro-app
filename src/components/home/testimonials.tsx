
'use client';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Gaupro made it so easy to find a reliable plumber. I got three quotes within an hour and the job was done the next day. Highly recommend!",
    author: "Sarah L.",
    location: "Johannesburg",
    avatarUrl: "https://firebasestorage.googleapis.com/v0/b/studio-5618869838-18486.firebasestorage.app/o/ssahar_with_bgc.png?alt=media&token=5ff80b39-0784-4e48-ab79-0beed01c61c0",
    avatarSeed: "1",
  },
  {
    quote: "The quality of professionals on this platform is outstanding. We found an amazing photographer for our wedding and couldn't be happier with the results.",
    author: "David & Emily R.",
    location: "Cape Town",
    avatarSeed: "2",
  },
  {
    quote: "As a small business owner, finding a good web designer was crucial. Gaupro connected me with a talented developer who built a fantastic website for us.",
    author: "Mike T.",
    location: "Durban",
    avatarSeed: "3",
  },
  {
    quote: "I needed my garden completely redone. The quotes were fair, and the pro I hired did an incredible job. My backyard is now my favorite place to be.",
    author: "Jessica P.",
    location: "Pretoria",
    avatarSeed: "4",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">Loved by Homeowners Everywhere</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => {
              const imageUrl = (testimonial as any).avatarUrl || `https://picsum.photos/seed/${testimonial.avatarSeed}/80/80`;
              return (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-full">
                    <CardContent className="flex flex-col justify-between h-full p-6">
                      <div>
                        <div className="flex gap-1 mb-4">
                          {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-accent fill-accent" />)}
                        </div>
                        <blockquote className="text-muted-foreground italic mb-6">"{testimonial.quote}"</blockquote>
                      </div>
                      <div className="flex items-center gap-4">
                        <Image
                          src={imageUrl}
                          alt={`Avatar of ${testimonial.author}`}
                          width={80}
                          height={80}
                          className="rounded-full"
                          data-ai-hint="profile picture"
                        />
                        <div>
                          <p className="font-semibold">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            )})}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
