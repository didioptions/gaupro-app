
'use client';

import { useParams, useSearchParams } from 'next/navigation';
import { getProfessionalById } from '@/app/services/[service]/page';
import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, ShieldCheck, Clock, Users, Mail, Pencil, MessageSquare, Phone, MapPin, Globe, AlertTriangle } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function ProfessionalProfilePage() {
  const params = useParams();
  const searchParams = useSearchParams();

  const [professional, setProfessional] = useState<any>(null);

  useEffect(() => {
    if (params.profileId) {
      const profileId = Array.isArray(params.profileId) ? params.profileId[0] : params.profileId;
      const proData = getProfessionalById(profileId);
      
      const serviceQuery = searchParams.get('service');
      if (proData && serviceQuery) {
        const singularOrPluralLowercase = serviceQuery.endsWith('s') ? serviceQuery.toLowerCase() : `${serviceQuery.toLowerCase()}s`;
        proData.tags = [proData.description.match(/{service}/) ? singularOrPluralLowercase : 'general services'];
        proDara.description = proData.description.replace('{service}', singularOrPluralLowercase);
      }
      
      setProfessional(proData);
    }
  }, [params.profileId, searchParams]);

  if (!professional) {
    // You can return a loading skeleton here
    return (
        <div className="container mx-auto px-4 py-12">Loading...</div>
    );
  }

  const proImage = PlaceHolderImages.find(p => p.id === professional.avatarSeed);
  const imageUrl = proImage ? proImage.imageUrl : `https://picsum.photos/seed/${professional.avatarSeed}/80/80`;
  const imageHint = proImage ? proImage.imageHint : "company logo";
  
  return (
    <>
      <main className="bg-secondary/50">
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
                                {professional.tags && (
                                  <div className="flex flex-wrap gap-2 mt-2">
                                    {professional.tags.map((tag: string) => <Badge variant="outline" key={tag}>{tag}</Badge>)}
                                  </div>
                                )}
                                <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground mt-4">
                                    {professional.isProVerified && <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-green-500" /> Pro Verified</span>}
                                    {professional.yearsInBusiness && <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {professional.yearsInBusiness} Years in Business</span>}
                                    {professional.employees && <span className="flex items-center gap-1.5"><Users className="h-4 w-4" /> {professional.employees} Employees</span>}
                                </div>
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
                            <Button variant="secondary"><Pencil className="h-4 w-4 mr-2" /> Write a Review</Button>
                        </div>
                    </CardContent>
                </Card>

                <div className="mt-6">
                    <Tabs defaultValue="overview">
                        <TabsList>
                            <TabsTrigger value="overview">Overview</TabsTrigger>
                            <TabsTrigger value="photos">Photos</TabsTrigger>
                            <TabsTrigger value="reviews">Reviews ({professional.reviewData.length})</TabsTrigger>
                            <TabsTrigger value="qa">Q & A</TabsTrigger>
                        </TabsList>
                        <TabsContent value="overview">
                            <Card>
                                <CardContent className="p-6 space-y-4">
                                    <div>
                                        <h3 className="font-semibold text-lg mb-2">About Us</h3>
                                        <p>{professional.description}</p>
                                    </div>
                                    
                                    {professional.photos && professional.photos.length > 0 &&
                                    <div className="pt-4">
                                        <h3 className="font-semibold text-lg mb-2">Photos</h3>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            {professional.photos.slice(0, 4).map((photo: string, index: number) => (
                                                <Image key={index} src={photo} alt={`${professional.name} work photo ${index + 1}`} width={200} height={150} className="rounded-md object-cover aspect-video" data-ai-hint="project photo" />
                                            ))}
                                        </div>
                                    </div>
                                    }
                                    
                                    {professional.reviewData && professional.reviewData.length > 0 &&
                                    <div className="pt-4">
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
                                        {professional.photos.map((photo: string, index: number) => (
                                            <Image key={index} src={photo} alt={`${professional.name} work photo ${index + 1}`} width={200} height={150} className="rounded-md object-cover aspect-video" data-ai-hint="project photo" />
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="reviews">
                             <Card>
                                <CardContent className="p-6 space-y-6">
                                    {professional.reviewData.map((review: any, index: number) => (
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
                                    {professional.reviewData.length === 0 && <p>No reviews yet.</p>}
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

            <aside className="space-y-6">
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
      </main>
    </>
  );
}
