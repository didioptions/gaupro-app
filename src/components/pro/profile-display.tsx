

'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, ShieldCheck, Clock, Users, Mail, Pencil, MessageSquare, Phone, MapPin, AlertTriangle } from 'lucide-react';
import Image from 'next/image';
import { CategoryImages } from '@/lib/category-images';
import Link from 'next/link';

export type Professional = {
  id: string;
  name: string;
  location: string;
  description: string;
  rating: number;
  reviews: number;
  avatarSeed: string;
  tags?: string[];
  isProVerified?: boolean;
  yearsInBusiness?: number;
  employees?: number;
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
};

interface ProfileDisplayProps {
  professional: Professional;
}

export default function ProfileDisplay({ professional }: ProfileDisplayProps) {
  const proImage = CategoryImages.find(p => p.id === professional.avatarSeed);
  const imageUrl = proImage ? proImage.imageUrl : `https://picsum.photos/seed/${professional.avatarSeed}/120/120`;
  const imageHint = proImage ? proImage.imageHint : "company logo";
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-2">
            <Card>
                <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row gap-6">
                        <Image src={imageUrl} alt={professional.name} width={120} height={120} className="rounded-md border mx-auto sm:mx-0" data-ai-hint={imageHint} />
                        <div className="flex-grow">
                            <h1 className="text-3xl">{professional.name}</h1>
                            <p className="text-muted-foreground">{professional.location}</p>
                            
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mt-4">
                               {professional.isProVerified && (
                                    <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                                        <ShieldCheck className="h-4 w-4 mr-1" />
                                        Verified Pro
                                    </Badge>
                                )}
                                {professional.yearsInBusiness && <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {professional.yearsInBusiness} Years in Business</span>}
                                {professional.employees && (
                                  <span className="flex items-center gap-1.5">
                                    <Users className="h-4 w-4" /> {professional.employees} Employees
                                  </span>
                                )}
                            </div>

                             {professional.services && professional.services.length > 0 && (
                                <div className="mt-4">
                                    <h4 className="text-sm font-semibold text-foreground mb-2">Services Offered</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {professional.services.slice(0, 5).map((service, index) => (
                                            <Badge key={index} variant="outline">{service}</Badge>
                                        ))}
                                    </div>
                                </div>
                            )}

                        </div>
                        <div className="text-center flex-shrink-0">
                            <div className="bg-teal-500 text-white font-bold text-2xl rounded-md w-16 h-16 flex items-center justify-center mx-auto">
                                {professional.rating.toFixed(1)}
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">{professional.reviews} reviews</p>
                        </div>
                    </div>
                    <div className="mt-6 pt-6 border-t flex flex-wrap gap-2">
                        <Button><MessageSquare className="h-4 w-4 mr-2" /> Request a quote</Button>
                        <Button variant="secondary"><Mail className="h-4 w-4 mr-2" /> Send an enquiry email</Button>
                        <Button variant="secondary" asChild>
                            <Link href={`/review/write?proId=${professional.id}`}>
                                <Pencil className="h-4 w-4 mr-2" /> Write a Review
                            </Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <div className="mt-6">
                <Tabs defaultValue="overview">
                    <TabsList>
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="photos">Photos ({professional.photos?.length || 0})</TabsTrigger>
                        <TabsTrigger value="reviews">Reviews ({professional.reviewData?.length || 0})</TabsTrigger>
                        <TabsTrigger value="qa">Q & A</TabsTrigger>
                    </TabsList>
                    <TabsContent value="overview">
                        <Card>
                            <CardContent className="p-6 space-y-6">
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">About Us</h3>
                                    <p>{professional.description}</p>
                                </div>
                                
                                {professional.photos && professional.photos.length > 0 &&
                                <div className="pt-4 border-t">
                                    <h3 className="font-semibold text-lg mb-2">Photos</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {professional.photos.slice(0, 4).map((photo: string, index: number) => (
                                            <Image key={index} src={photo} alt={`${professional.name} work photo ${index + 1}`} width={200} height={150} className="rounded-md object-cover aspect-video" data-ai-hint="project photo" />
                                        ))}
                                    </div>
                                </div>
                                }
                                
                                {professional.reviewData && professional.reviewData.length > 0 &&
                                <div className="pt-4 border-t">
                                    <h3 className="font-semibold text-lg mb-4">Latest Reviews</h3>
                                    <div className="space-y-6">
                                        {professional.reviewData.slice(0, 5).map((review: any, index: number) => (
                                            <div key={index} className="border-b pb-6 last:border-b-0 last:pb-0">
                                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                    <div className="flex">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'text-red-500 fill-red-500' : 'text-gray-300'}`} />
                                                        ))}
                                                    </div>
                                                    <span>by {review.author} {review.phone}</span>
                                                    <Badge variant="secondary" className="bg-green-100 text-green-800">verified</Badge>
                                                </div>
                                                <p className="mt-2 italic">"{review.comment}"</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                }
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="photos">
                         <Card>
                            <CardContent className="p-6">
                                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {professional.photos?.map((photo: string, index: number) => (
                                        <Image key={index} src={photo} alt={`${professional.name} work photo ${index + 1}`} width={200} height={150} className="rounded-md object-cover aspect-video" data-ai-hint="project photo" />
                                    ))}
                                </div>
                                {(!professional.photos || professional.photos.length === 0) && <p>No photos yet.</p>}
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="reviews">
                         <Card>
                            <CardContent className="p-6 space-y-6">
                                {professional.reviewData?.map((review: any, index: number) => (
                                    <div key={index} className="border-b pb-6 last:border-b-0 last:pb-0">
                                        <h4 className="font-semibold">Excellent</h4>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <div className="flex">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'text-red-500 fill-red-500' : 'text-gray-300'}`} />
                                                ))}
                                            </div>
                                            <span>by {review.author} {review.phone}</span>
                                            <Badge variant="secondary" className="bg-green-100 text-green-800">verified</Badge>
                                        </div>
                                        <p className="mt-2 italic">"{review.comment}"</p>
                                        <Card className="mt-4 bg-secondary/50">
                                            <CardContent className="p-4 text-sm">
                                                <h5 className="font-semibold">{professional.name}'s response</h5>
                                                <p>Morning Mr {review.author}, Thank you for using our service.</p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                ))}
                                {(!professional.reviewData || professional.reviewData.length === 0) && <p>No reviews yet.</p>}
                            </CardContent>
                        </Card>
                    </TabsContent>
                     <TabsContent value="qa">
                        <Card>
                            <CardContent className="p-6">
                            <p>No questions and answers yet.</p>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>

        <aside className="space-y-6 lg:col-start-3">
            <Card>
                <CardHeader>
                    <CardTitle className="text-lg">Contact Details</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-3">
                    <p className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 flex-shrink-0"/>{professional.address}</p>
                    <p className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 flex-shrink-0"/>061****434</p>
                    <Button variant="outline" className="w-full mt-2"><AlertTriangle className="h-4 w-4 mr-2" /> Report Error</Button>
                </CardContent>
            </Card>
             <Card className="bg-card">
                <CardHeader>
                    <CardTitle className="text-lg">Hire the right Professional</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                    <p className="text-muted-foreground text-sm mb-4">Get multiple quotes from Pro's and compare.</p>
                    <Button>Get Started</Button>
                </CardContent>
            </Card>
        </aside>

      </div>
    </div>
  );
}
