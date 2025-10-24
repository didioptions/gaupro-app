
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, HelpCircle, User, Briefcase } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'contact-hero');
  
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof contactFormSchema>) {
    console.log(values);
    // Here you would typically send the form data to your backend
    alert("Message sent! We'll get back to you shortly.");
    form.reset();
  }

  return (
    <>
      <Header />
      <main className="flex-grow bg-background">
        <section className="relative min-h-[400px] flex items-center justify-center text-center text-white">
           {heroImage && (
             <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover"
                priority
                data-ai-hint={heroImage.imageHint}
              />
            )}
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative container mx-auto px-4 py-16">
            <h1 className="text-3xl md:text-5xl font-extrabold">We’re Here to Help</h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90">
             Whether you’re a professional or a client, our team is ready to assist you with any questions or concerns.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-5xl mx-auto space-y-16">
            
            <section className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                    <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                     <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold">Email</h3>
                                <a href="mailto:support@gaupro.co.za" className="text-foreground hover:underline">support@gaupro.co.za</a>
                            </div>
                        </div>
                         <div className="flex items-center gap-4">
                            <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold">Phone</h3>
                                <p className="text-foreground">0861 GAUPRO (Mon–Fri, 8:00 AM – 6:00 PM)</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold">Address</h3>
                                <p className="text-foreground">123 Market Street, Johannesburg, South Africa</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10">
                        <h3 className="text-xl font-bold mb-4">Support For</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <Card className="p-4">
                                <User className="h-6 w-6 text-primary mb-2" />
                                <h4 className="font-semibold">Customers</h4>
                                <ul className="text-sm text-foreground list-disc list-inside mt-2">
                                    <li>Finding a pro</li>
                                    <li>Quote questions</li>
                                    <li>Technical support</li>
                                </ul>
                            </Card>
                            <Card className="p-4">
                                <Briefcase className="h-6 w-6 text-primary mb-2" />
                                <h4 className="font-semibold">Professionals</h4>
                                <ul className="text-sm text-foreground list-disc list-inside mt-2">
                                    <li>Profile setup</li>
                                    <li>Verification</li>
                                    <li>Lead inquiries</li>
                                </ul>
                            </Card>
                        </div>
                    </div>
                </div>

                <Card className="p-8">
                    <h2 className="text-2xl font-bold mb-2">Send us a Message</h2>
                    <p className="text-foreground mb-6">Fill out the form below and our team will respond within 24–48 hours.</p>
                     <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your Name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="you@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                         <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Subject</FormLabel>
                              <FormControl>
                                <Input placeholder="Reason for contacting us" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message</FormLabel>
                              <FormControl>
                                <Textarea placeholder="Tell us more..." {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Button type="submit">Send Message</Button>
                      </form>
                    </Form>
                </Card>
            </section>

             <section className="text-center border-t pt-16">
                 <h2 className="text-2xl font-bold mb-6">Stay Connected</h2>
                <div className="flex justify-center gap-6 mb-8">
                    <Link href="#" className="text-foreground hover:text-primary"><Facebook className="h-7 w-7"/></Link>
                    <Link href="#" className="text-foreground hover:text-primary"><Twitter className="h-7 w-7"/></Link>
                    <Link href="#" className="text-foreground hover:text-primary"><Linkedin className="h-7 w-7"/></Link>
                </div>
                 <div className="flex items-center justify-center gap-4 p-6 bg-secondary/50 rounded-lg">
                    <HelpCircle className="h-8 w-8 text-primary" />
                    <div>
                        <h3 className="text-xl font-semibold">Check our Help Center</h3>
                        <p className="text-foreground">Find quick answers to common questions about accounts, payments, or leads.</p>
                        <Button variant="link" asChild className="px-0">
                            <Link href="#">Visit Help Center →</Link>
                        </Button>
                    </div>
                </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
