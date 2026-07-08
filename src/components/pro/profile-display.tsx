'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, BadgeCheck, Clock, Users, Mail, Pencil, MessageSquare, Phone, MapPin, AlertTriangle, Building2, ShieldAlert, Info, Globe, ShieldCheck, LayoutGrid } from 'lucide-react';
import Image from 'next/image';
import { CategoryImages } from '@/lib/category-images';
import Link from 'next/link';
import { allLocations } from '@/lib/locations';

export type Professional = {
  id: string;
  name: string;
  location?: string;
  locations?: string[];
  serviceAreas?: string[];
  description: string;
  rating: number | null;
  reviews: number;
  avatarSeed: string;
  tags?: string[];
  isProVerified?: boolean;
  isUnclaimed?: boolean;
  claimable?: boolean;
  yearsInBusiness?: string | number;
  employees?: string | number;
  address?: string;
  phone?: string;
  website?: string;
  email?: string;
  photos?: string[];
  businessHours?: string;
  serviceCategory: string;
  services?: string[];
  reviewData?: {
    author: string;
    phone?: string;
    rating: number;
    comment: string;
  }[];
  qa?: {
    question: string;
    answer: string;
  }[];
};

interface ProfileDisplayProps {
  professional: Professional;
}

export default function ProfileDisplay({ professional }: ProfileDisplayProps) {
  const proImage = CategoryImages.find(p => p.id === professional.avatarSeed);
  const imageUrl = proImage ? proImage.imageUrl : `https://picsum.photos/seed/${professional.avatarSeed}/120/120`;
  const imageHint = proImage ? proImage.imageHint : "company logo";
  
  const locationText = professional.location ? (allLocations.find(l => l.value === professional.location)?.label || professional.location) : (Array.isArray(professional.locations) && professional.locations.length > 0 ? professional.locations.map((loc: string) => allLocations.find(l => l.value === loc)?.label || loc).join(', ') : 'South Africa');
    
  const allOfferedServices = Array.from(new Set([...(professional.services || []), ...(professional.tags || [])]));

  // SEO JSON-LD - Strictly only include ratings if real reviews exist
  const hasRealReviews = professional.reviews > 0 && typeof professional.rating === 'number' && professional.rating > 0;

  const jsonLd: any = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": professional.name,
    "description": professional.description,
    "image": imageUrl,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": locationText,
      "addressCountry": "ZA"
    }
  };

  if (hasRealReviews) {
    jsonLd.aggregateRating = {
      "@type": "AggregateRating",
      "ratingValue": professional.rating?.toString(),
      "reviewCount": professional.reviews.toString(),
      "bestRating": "5",
      "worstRating": "1"
    };
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="grid lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-2">
            {professional.isUnclaimed && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6 flex flex-col sm:flex-row justify-between items-center gap-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 rounded-full shrink-0">
                    <ShieldCheck className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-blue-900">Unclaimed Business Profile</p>
                    <p className="text-sm text-blue-800 leading-relaxed mt-1">This listing was created from publicly available information. Are you the owner? Claim it now to unlock all features.</p>
                  </div>
                </div>
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 whitespace-nowrap shadow-md">
                   <Link href={`/pro/claim/${professional.id}`}>Claim Business</Link>
                </Button>
              </div>
            )}

            <Card className="overflow-hidden border-0 shadow-lg">
                <CardContent className="p-0">
                    <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8">
                      <div className="flex flex-col sm:flex-row gap-8">
                          <div className="relative w-32 h-32 mx-auto sm:mx-0 shrink-0">
                             <Image src={imageUrl} alt={professional.name} fill className="rounded-xl border-4 border-white shadow-xl object-cover bg-white" data-ai-hint={imageHint} unoptimized={imageUrl.includes('picsum')} />
                          </div>
                          <div className="flex-grow text-center sm:text-left">
                              <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">{professional.name}</h1>
                              <p className="text-muted-foreground flex items-center justify-center sm:justify-start gap-1.5 mt-2 capitalize font-medium">
                                <MapPin className="h-4 w-4 text-primary" /> {locationText}
                              </p>
                              
                              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-5">
                                 {professional.isProVerified && (
                                      <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                                          <BadgeCheck className="h-4 w-4 mr-1.5" />
                                          Verified Pro
                                      </Badge>
                                  )}
                                  <Badge variant="outline" className="px-3 py-1 text-xs font-bold uppercase tracking-wider border-primary/20 bg-primary/5 text-primary">
                                    {professional.serviceCategory}
                                  </Badge>
                              </div>
                          </div>
                          <div className="text-center sm:text-right flex-shrink-0">
                              <div className="bg-teal-500 text-white font-extrabold text-3xl rounded-2xl w-20 h-20 flex flex-col items-center justify-center mx-auto shadow-lg">
                                  {professional.rating ? professional.rating.toFixed(1) : '—'}
                                  <span className="text-[10px] font-normal uppercase opacity-80 mt-0.5">Rating</span>
                              </div>
                              <p className="text-xs font-bold text-muted-foreground mt-3 uppercase tracking-widest">{professional.reviews || 0} reviews</p>
                          </div>
                      </div>
                    </div>
                    <div className="p-8 flex flex-wrap gap-3 bg-white">
                        <Button size="lg" className="h-12 px-8 font-bold text-base shadow-lg"><MessageSquare className="h-5 w-5 mr-2" /> Get a Quote</Button>
                        <Button variant="outline" size="lg" className="h-12 px-8 font-bold text-base"><Mail className="h-5 w-5 mr-2" /> Send Message</Button>
                        {!professional.isUnclaimed && (
                          <Button variant="ghost" size="lg" className="h-12 px-6 font-bold text-base hover:bg-secondary/50" asChild>
                              <Link href={`/review/write?proId=${professional.id}`}>
                                  <Pencil className="h-5 w-5 mr-2" /> Write Review
                              </Link>
                          </Button>
                        )}
                    </div>
                </CardContent>
            </Card>

            <div className="mt-10">
                <Tabs defaultValue="overview" className="w-full">
                    <TabsList className="w-full justify-start bg-transparent border-b rounded-none h-auto p-0 gap-10">
                        <TabsTrigger value="overview" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-4 data-[state=active]:border-primary rounded-none px-0 pb-4 text-base font-bold uppercase tracking-widest">Overview</TabsTrigger>
                        <TabsTrigger value="photos" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-4 data-[state=active]:border-primary rounded-none px-0 pb-4 text-base font-bold uppercase tracking-widest">Gallery ({professional.photos?.length || 0})</TabsTrigger>
                        <TabsTrigger value="reviews" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-4 data-[state=active]:border-primary rounded-none px-0 pb-4 text-base font-bold uppercase tracking-widest">Reviews ({professional.reviewData?.length || 0})</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="overview" className="mt-8">
                        <Card className="border-0 shadow-md">
                            <CardContent className="p-8 space-y-10">
                                <div>
                                    <h3 className="font-extrabold text-2xl mb-5 flex items-center gap-2">
                                      <Info className="h-6 w-6 text-primary" />
                                      About the Business</h3>
                                    <p className="leading-relaxed text-foreground/80 text-lg whitespace-pre-wrap">{professional.description}</p>
                                </div>
                                
                                {allOfferedServices.length > 0 && (
                                    <div className="pt-10 border-t">
                                        <h3 className="font-bold text-lg mb-5 uppercase tracking-widest text-muted-foreground">Expertise & Services</h3>
                                        <div className="flex flex-wrap gap-3">
                                            {allOfferedServices.map((service, index) => (
                                                <Badge key={index} variant="secondary" className="px-4 py-2 bg-secondary/80 text-sm font-medium rounded-lg">{service}</Badge>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                
                                {professional.isUnclaimed && (
                                   <div className="pt-10 border-t">
                                      <div className="bg-secondary/20 rounded-xl p-6 border-l-4 border-l-primary flex gap-4">
                                         <ShieldAlert className="h-6 w-6 text-primary shrink-0" />
                                         <div>
                                            <p className="font-bold mb-1">Public Information Notice</p>
                                            <p className="text-sm text-muted-foreground leading-relaxed">This profile was created from publicly available business information and may be claimed by the business owner. GauPro does not verify the content of unclaimed profiles until the ownership verification process is complete.</p>
                                         </div>
                                      </div>
                                   </div>
                                )}
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="photos" className="mt-8">
                         <Card className="border-0 shadow-md">
                            <CardContent className="p-8">
                                 <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                    {professional.photos?.map((photo: string, index: number) => (
                                        <div key={index} className="relative aspect-square rounded-2xl overflow-hidden border shadow-sm group cursor-zoom-in">
                                           <Image src={photo} alt={`${professional.name} work portfolio ${index + 1}`} fill className="object-cover transition-transform duration-500 group-hover:scale-110" data-ai-hint="project photo" unoptimized={photo.includes('picsum')} />
                                           <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                                        </div>
                                    ))}
                                </div>
                                {(!professional.photos || professional.photos.length === 0) && (
                                  <div className="text-center py-20 text-muted-foreground">
                                    <LayoutGrid className="h-12 w-12 mx-auto mb-4 opacity-10" />
                                    <p className="text-lg">No portfolio photos available yet.</p>
                                  </div>
                                )}
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="reviews" className="mt-8">
                         <Card className="border-0 shadow-md">
                            <CardContent className="p-8">
                                {professional.reviewData && professional.reviewData.length > 0 ? (
                                  <div className="space-y-10">
                                    {professional.reviewData.map((review: any, index: number) => (
                                        <div key={index} className="border-b pb-10 last:border-b-0 last:pb-0">
                                            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                                                <div className="flex items-center gap-3">
                                                  <div className="flex">
                                                      {[...Array(5)].map((_, i) => (
                                                          <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} />
                                                      ))}
                                                  </div>
                                                  <span className="font-bold text-foreground">by {review.author}</span>
                                                </div>
                                                <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-100 text-[10px] uppercase font-bold px-2 py-0.5">verified client</Badge>
                                            </div>
                                            <p className="italic text-foreground/80 text-lg leading-relaxed bg-secondary/20 p-6 rounded-2xl border-l-4 border-l-teal-500">"{review.comment}"</p>
                                        </div>
                                    ))}
                                  </div>
                                ) : (
                                   <div className="text-center py-24">
                                      <Star className="h-16 w-16 text-muted-foreground mx-auto mb-6 opacity-10" />
                                      <h4 className="text-xl font-bold mb-2">No reviews yet</h4>
                                      <p className="text-muted-foreground max-w-xs mx-auto">Be the first to share your experience with this professional.</p>
                                      <Button variant="outline" className="mt-8 h-12 px-10 font-bold" disabled={professional.isUnclaimed}>
                                         {professional.isUnclaimed ? 'Reviews locked' : 'Leave Feedback'}
                                      </Button>
                                   </div>
                                )}
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>

        <aside className="space-y-8">
            <Card className="shadow-xl border-0 overflow-hidden">
                <CardHeader className="bg-primary text-primary-foreground p-6">
                    <CardTitle className="text-xl flex items-center gap-3">
                       <Phone className="h-6 w-6" />
                       Business Contact
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-8 text-sm">
                    <div className="space-y-2">
                       <p className="text-xs text-muted-foreground uppercase font-black tracking-widest">Verified Address</p>
                       <div className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 mt-1 shrink-0 text-primary opacity-60"/>
                          <p className="text-base font-semibold leading-relaxed">{professional.address || 'Gauteng, South Africa'}</p>
                       </div>
                    </div>
                    
                    <div className="space-y-2">
                       <p className="text-xs text-muted-foreground uppercase font-black tracking-widest">Direct Phone</p>
                       <div className="flex items-center gap-3">
                          <Phone className="h-5 w-5 shrink-0 text-primary opacity-60"/>
                          <p className="text-2xl font-black font-mono tracking-tighter">
                            {professional.isUnclaimed ? (professional.phone ? `${professional.phone.substring(0, 7)} ***` : '011 *** ****') : (professional.phone || 'N/A')}
                          </p>
                       </div>
                       {professional.isUnclaimed && (
                         <div className="bg-amber-50 p-3 rounded-lg border border-amber-100 flex gap-2 mt-3 animate-pulse">
                            <ShieldAlert className="h-4 w-4 text-amber-600 shrink-0" />
                            <p className="text-[10px] text-amber-800 font-bold leading-tight uppercase">Number hidden. Post a request to connect with this pro.</p>
                         </div>
                       )}
                    </div>

                    {professional.website && (
                      <div className="space-y-2">
                        <p className="text-xs text-muted-foreground uppercase font-black tracking-widest">Official Website</p>
                        <a href={professional.website} target="_blank" className="flex items-center gap-3 text-primary hover:underline font-bold text-base truncate">
                           <Globe className="h-5 w-5 shrink-0 opacity-60" />
                           {professional.website.replace('https://', '').replace('http://', '').split('/')[0]}
                        </a>
                      </div>
                    )}
                    
                    <Button variant="secondary" className="w-full h-12 font-bold text-xs uppercase tracking-widest mt-4" asChild>
                       <Link href="/contact?subject=report-business"><AlertTriangle className="h-4 w-4 mr-2" /> Report Inaccurate Data</Link>
                    </Button>
                </CardContent>
            </Card>

             <Card className="bg-primary text-primary-foreground shadow-2xl border-0 overflow-hidden relative group">
                <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-3xl transition-transform group-hover:scale-150 duration-700"></div>
                <CardHeader className="relative z-10">
                    <CardTitle className="text-2xl font-bold">Need multiple quotes?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 relative z-10">
                    <p className="text-base opacity-90 leading-relaxed">Save time by letting us find the best local professionals for your project. Receive up to 5 competitive quotes in minutes.</p>
                    <Button variant="secondary" size="lg" className="w-full h-14 font-black text-lg shadow-2xl uppercase tracking-wider" asChild>
                        <Link href="/post-request">Get Free Quotes</Link>
                    </Button>
                </CardContent>
             </Card>

             {professional.isUnclaimed && (
               <Card className="border-2 border-blue-100 bg-blue-50/50 shadow-lg">
                  <CardHeader>
                     <CardTitle className="text-blue-900 text-xl flex items-center gap-3">
                        <Building2 className="h-6 w-6 text-blue-600" />
                        Own this Business?
                     </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-5">
                     <p className="text-sm text-blue-800 leading-relaxed font-medium">
                        Securely claim your profile today to manage your leads, respond to reviews, and upload your latest portfolio photos.
                     </p>
                     <Button asChild size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-md h-12">
                        <Link href={`/pro/claim/${professional.id}`}>Start Verification</Link>
                     </Button>
                  </CardContent>
               </Card>
             )}
        </aside>

      </div>
    </div>
  );
}
