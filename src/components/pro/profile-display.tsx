
'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, BadgeCheck, Clock, Users, Mail, Pencil, MessageSquare, Phone, MapPin, AlertTriangle, Building2, ShieldAlert, Info } from 'lucide-react';
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
  photos?: string[];
  businessHours?: string;
  services?: string[];
  otherServices?: string[];
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
  
  const locationText = professional.location ? (allLocations.find(l => l.value === professional.location)?.label || professional.location) : (Array.isArray(professional.locations) && professional.locations.length > 0 ? professional.locations.map((loc: string) => allLocations.find(l => l.value === loc)?.label || loc).join(', ') : '');
    
  const allOfferedServices = Array.from(new Set([...(professional.services || []), ...(professional.tags || [])]));

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-2">
            {professional.isUnclaimed && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 flex flex-col sm:flex-row justify-between items-center gap-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-amber-100 rounded-full">
                    <ShieldAlert className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-bold text-amber-900 text-sm">Unclaimed Business Profile</p>
                    <p className="text-xs text-amber-800">This profile has not been claimed by the business owner yet.</p>
                  </div>
                </div>
                <Button size="sm" variant="default" className="bg-amber-600 hover:bg-amber-700 whitespace-nowrap">
                   Claim This Business
                </Button>
              </div>
            )}

            <Card>
                <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row gap-6">
                        <div className="relative w-[120px] h-[120px] mx-auto sm:mx-0">
                           <Image src={imageUrl} alt={professional.name} fill className="rounded-md border object-cover" data-ai-hint={imageHint} />
                        </div>
                        <div className="flex-grow">
                            <h1 className="text-3xl font-bold text-foreground leading-tight">{professional.name}</h1>
                            <p className="text-muted-foreground flex items-center gap-1.5 mt-1 capitalize"><MapPin className="h-4 w-4" /> {locationText}</p>
                            
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mt-4">
                               {professional.isProVerified && (
                                    <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                                        <BadgeCheck className="h-4 w-4 mr-1" />
                                        Verified Pro
                                    </Badge>
                                )}
                                {professional.isUnclaimed && (
                                     <Badge variant="outline" className="text-amber-600 border-amber-200 bg-amber-50">
                                        Public Listing
                                     </Badge>
                                )}
                                {professional.yearsInBusiness && <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {professional.yearsInBusiness} Years in Business</span>}
                                {professional.employees && (
                                  <span className="flex items-center gap-1.5">
                                    <Users className="h-4 w-4" /> {professional.employees} Employees
                                  </span>
                                )}
                            </div>

                            {professional.isUnclaimed && (
                               <div className="mt-4 p-3 bg-secondary/20 rounded-md border flex gap-2 text-xs text-muted-foreground italic">
                                  <Info className="h-4 w-4 shrink-0 text-primary" />
                                  <p>This profile was created from publicly available business information and may be claimed by the business owner.</p>
                               </div>
                            )}

                            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0"/>
                              <span className="font-medium">Covered Areas:</span>
                              {professional.locations && professional.locations.length > 0 ? (
                                <span className="text-foreground">
                                  {professional.locations.map((loc: string) => allLocations.find(l => l.value === loc)?.label || loc.charAt(0).toUpperCase() + loc.slice(1)).join(", ")}
                                </span>
                              ) : (
                                <span className="text-foreground capitalize">{professional.location}</span>
                              )}
                            </div>

                        </div>
                        <div className="text-center flex-shrink-0">
                            <div className="bg-teal-500 text-white font-bold text-2xl rounded-md w-16 h-16 flex items-center justify-center mx-auto shadow-md">
                                {professional.rating ? professional.rating.toFixed(1) : '—'}
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">{professional.reviews || 0} reviews</p>
                        </div>
                    </div>
                    <div className="mt-6 pt-6 border-t flex flex-wrap gap-2">
                        <Button className="h-11 px-6"><MessageSquare className="h-4 w-4 mr-2" /> Request a quote</Button>
                        <Button variant="secondary" className="h-11 px-6"><Mail className="h-4 w-4 mr-2" /> Send an enquiry</Button>
                        {!professional.isUnclaimed && (
                          <Button variant="secondary" className="h-11 px-6" asChild>
                              <Link href={`/review/write?proId=${professional.id}`}>
                                  <Pencil className="h-4 w-4 mr-2" /> Write a Review
                              </Link>
                          </Button>
                        )}
                    </div>
                </CardContent>
            </Card>

            <div className="mt-6">
                <Tabs defaultValue="overview">
                    <TabsList className="w-full justify-start bg-transparent border-b rounded-none h-auto p-0 gap-8">
                        <TabsTrigger value="overview" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 pb-4">Overview</TabsTrigger>
                        <TabsTrigger value="photos" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 pb-4">Photos ({professional.photos?.length || 0})</TabsTrigger>
                        <TabsTrigger value="reviews" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 pb-4">Reviews ({professional.reviewData?.length || 0})</TabsTrigger>
                        <TabsTrigger value="qa" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 pb-4">Q & A</TabsTrigger>
                    </TabsList>
                    <TabsContent value="overview" className="mt-6">
                        <Card>
                            <CardContent className="p-8 space-y-8">
                                <div>
                                    <h3 className="font-bold text-xl mb-4">About {professional.name}</h3>
                                    <p className="leading-relaxed text-foreground/80 whitespace-pre-wrap">{professional.description}</p>
                                </div>
                                
                                {allOfferedServices.length > 0 && (
                                    <div className="pt-8 border-t">
                                        <h3 className="font-bold text-lg mb-4">Core Competencies</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {allOfferedServices.map((service, index) => (
                                                <Badge key={index} variant="secondary" className="px-3 py-1 bg-secondary/50">{service}</Badge>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                
                                {professional.photos && professional.photos.length > 0 &&
                                <div className="pt-8 border-t">
                                    <h3 className="font-bold text-lg mb-4">Project Gallery</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        {professional.photos.slice(0, 3).map((photo: string, index: number) => (
                                            <div key={index} className="relative aspect-video rounded-lg overflow-hidden border shadow-sm group">
                                               <Image src={photo} alt={`${professional.name} work photo ${index + 1}`} fill className="object-cover transition-transform group-hover:scale-105" data-ai-hint="project photo" unoptimized={photo.includes('picsum')} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                }
                                
                                {professional.reviewData && professional.reviewData.length > 0 ? (
                                <div className="pt-8 border-t">
                                    <h3 className="font-bold text-lg mb-6">What Customers Say</h3>
                                    <div className="space-y-8">
                                        {professional.reviewData.slice(0, 5).map((review: any, index: number) => (
                                            <div key={index} className="border-b pb-8 last:border-b-0 last:pb-0">
                                                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                                                    <div className="flex">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} />
                                                        ))}
                                                    </div>
                                                    <span className="font-medium text-foreground">by {review.author}</span>
                                                    <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-100 text-[10px] uppercase font-bold">verified</Badge>
                                                </div>
                                                <p className="italic text-foreground/90 bg-secondary/30 p-4 rounded-lg">"{review.comment}"</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                ) : (
                                  <div className="pt-8 border-t text-center py-12">
                                     <MessageSquare className="h-10 w-10 text-muted-foreground mx-auto mb-4 opacity-20" />
                                     <p className="text-muted-foreground italic">No verified reviews yet for this business listing.</p>
                                  </div>
                                )}
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="photos" className="mt-6">
                         <Card>
                            <CardContent className="p-8">
                                 <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                    {professional.photos?.map((photo: string, index: number) => (
                                        <div key={index} className="relative aspect-square rounded-xl overflow-hidden border shadow-sm">
                                           <Image src={photo} alt={`${professional.name} work photo ${index + 1}`} fill className="object-cover" data-ai-hint="project photo" unoptimized={photo.includes('picsum')} />
                                        </div>
                                    ))}
                                </div>
                                {(!professional.photos || professional.photos.length === 0) && <p className="text-center text-muted-foreground py-12">No photos uploaded yet.</p>}
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="reviews" className="mt-6">
                         <Card>
                            <CardContent className="p-8 space-y-8">
                                {professional.reviewData && professional.reviewData.length > 0 ? professional.reviewData?.map((review: any, index: number) => (
                                    <div key={index} className="border-b pb-8 last:border-b-0 last:pb-0">
                                        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                                            <div className="flex">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} />
                                                ))}
                                            </div>
                                            <span className="font-medium text-foreground">by {review.author}</span>
                                            <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-100 text-[10px] uppercase font-bold">verified</Badge>
                                        </div>
                                        <p className="italic text-foreground/90 mb-6 bg-secondary/20 p-4 rounded-lg">"{review.comment}"</p>
                                        <Card className="bg-secondary/40 border-0 shadow-none">
                                            <CardContent className="p-5 text-sm">
                                                <div className="flex items-center gap-2 mb-2">
                                                   <Building2 className="h-4 w-4 text-primary" />
                                                   <h5 className="font-bold text-primary">{professional.name}</h5>
                                                </div>
                                                <p className="text-foreground/80">Thank you for sharing your experience, {review.author.split(' ')[0]}. We appreciate the feedback!</p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                )) : (
                                   <div className="text-center py-20">
                                      <Star className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-10" />
                                      <p className="text-muted-foreground">Be the first to review this business.</p>
                                      <Button variant="outline" className="mt-6" disabled={professional.isUnclaimed}>
                                         {professional.isUnclaimed ? 'Reviews Disabled for Unclaimed Listings' : 'Write a Review'}
                                      </Button>
                                   </div>
                                )}
                            </CardContent>
                        </Card>
                    </TabsContent>
                     <TabsContent value="qa" className="mt-6">
                        <Card>
                            <CardContent className="p-8 space-y-8">
                                {professional.qa && professional.qa.length > 0 ? (
                                    professional.qa.map((item, index) => (
                                        <div key={index} className="space-y-2 pb-6 border-b last:border-0 last:pb-0">
                                            <div className="flex items-start gap-3">
                                               <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 shrink-0">Q</Badge>
                                               <p className="font-bold text-foreground pt-0.5">{item.question}</p>
                                            </div>
                                            <div className="flex items-start gap-3 pl-4">
                                               <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 shrink-0">A</Badge>
                                               <p className="text-muted-foreground leading-relaxed pt-0.5">{item.answer}</p>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center py-20">
                                       <p className="text-muted-foreground">No community questions answered yet.</p>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>

        <aside className="space-y-6 lg:col-start-3">
            <Card className="shadow-md">
                <CardHeader className="bg-secondary/20 border-b">
                    <CardTitle className="text-lg flex items-center gap-2">
                       <Phone className="h-4 w-4 text-primary" />
                       Business Contact
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4 text-sm">
                    <div className="space-y-1">
                       <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Office Address</p>
                       <p className="flex items-start gap-2 leading-relaxed font-medium">
                          <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-muted-foreground"/>
                          {professional.address || 'Location data restricted for unclaimed profiles.'}
                       </p>
                    </div>
                    <div className="space-y-1">
                       <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Telephone</p>
                       <p className="flex items-start gap-2 font-mono text-lg font-bold">
                          <Phone className="h-4 w-4 mt-1.5 flex-shrink-0 text-muted-foreground"/>
                          {professional.isUnclaimed ? (professional.phone ? `${professional.phone.substring(0, 7)} ***` : '011 *** ****') : (professional.phone || '011 442 1211')}
                       </p>
                       {professional.isUnclaimed && <p className="text-[10px] text-amber-600 bg-amber-50 p-2 rounded mt-1 border border-amber-100">Contact restricted. Request a quote to connect with this service provider.</p>}
                    </div>
                    <Button variant="outline" className="w-full mt-2 border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"><AlertTriangle className="h-4 w-4 mr-2" /> Report Inaccurate Data</Button>
                </CardContent>
            </Card>
             <Card className="bg-primary text-primary-foreground shadow-xl border-0 overflow-hidden relative">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                   <Star className="h-24 w-24" />
                </div>
                <CardHeader>
                    <CardTitle className="text-lg">Need competitive quotes?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-sm opacity-90 leading-relaxed">Let GauPro find the best local professionals for your project. Receive up to 5 quotes in minutes.</p>
                    <Button variant="secondary" className="w-full h-12 font-bold shadow-lg">Get Free Quotes Now</Button>
                </CardContent>
             </Card>

             {professional.isUnclaimed && (
               <Card className="border-amber-200 bg-amber-50">
                  <CardHeader>
                     <CardTitle className="text-amber-900 text-lg flex items-center gap-2">
                        <Building2 className="h-5 w-5" />
                        Business Owner?
                     </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                     <p className="text-xs text-amber-800 leading-relaxed">
                        If this is your business, claim this profile to update your contact details, upload work photos, and respond to customer reviews.
                     </p>
                     <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white shadow-md">Claim This Listing</Button>
                  </CardContent>
               </Card>
             )}
        </aside>

      </div>
    </div>
  );
}
