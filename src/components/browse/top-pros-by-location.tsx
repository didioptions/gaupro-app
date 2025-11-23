'use client';

import React, { useMemo, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Check, Send } from 'lucide-react';
import { allProfessionals } from '@/lib/professionals-data';
import { Professional } from '@/components/services/professional-card';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface TopProsByLocationProps {
  location: string;
  service: string;
}

const getTopPros = (location: string, service: string) => {
  const locationSlug = location.toLowerCase().replace(/\s+/g, '-');
  const serviceSlug = service.toLowerCase().replace(/\s+/g, '-');

  const prosForService = (allProfessionals as any)[serviceSlug] || [];
  
  const filteredPros = prosForService.filter((pro: Professional) => 
    pro.serviceLocations?.includes(locationSlug)
  );
  
  // If no pros for specific service, find any pros in that location
  if (filteredPros.length === 0) {
    const allProsArray = Object.values(allProfessionals).flat();
    const locationPros = allProsArray.filter((pro: any) => pro.serviceLocations?.includes(locationSlug));
    return locationPros.sort((a, b) => b.rating - a.rating).slice(0, 4);
  }
  
  return filteredPros.sort((a, b) => b.rating - a.rating).slice(0, 4);
};


export default function TopProsByLocation({ location, service }: TopProsByLocationProps) {
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const topPros = useMemo(() => getTopPros(location, service), [location, service]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description || !name || !phone) {
        alert('Please fill in all fields.');
        return;
    }
    console.log({
        description,
        name,
        phone,
        location,
        service,
        pros: topPros.map(p => p.id)
    });
    setIsSubmitted(true);
  }

  if (topPros.length === 0) {
    return null;
  }

  const locationName = location.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="my-12">
        <Card className="shadow-lg">
            <CardHeader className="bg-secondary/50">
                <CardTitle className="text-xl md:text-2xl font-normal text-center">
                    Get quotes from top-rated professionals in {locationName}
                </CardTitle>
            </CardHeader>
            <CardContent className="p-6 grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Top companies for you:</h3>
                    {topPros.map((pro: Professional) => (
                        <div key={pro.id} className="flex items-center gap-3 p-2 rounded-md">
                            <Avatar>
                                <AvatarImage src={`https://picsum.photos/seed/${pro.avatarSeed}/40/40`} alt={pro.name} />
                                <AvatarFallback>{pro.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="flex-grow">
                                <p className="font-semibold text-sm">{pro.name}</p>
                                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                    <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                                    <span>{pro.rating.toFixed(1)} ({pro.reviews} reviews)</span>
                                </div>
                            </div>
                            <Check className="h-5 w-5 text-green-500" />
                        </div>
                    ))}
                </div>

                {isSubmitted ? (
                     <div className="flex flex-col items-center justify-center text-center p-6 bg-green-50 border border-green-200 rounded-lg">
                        <Check className="h-12 w-12 text-green-600 mb-4" />
                        <h3 className="text-xl font-semibold text-green-800">Request Sent!</h3>
                        <p className="text-green-700 mt-2">
                            Your request has been sent to the top professionals. They will contact you shortly with quotes.
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <Label htmlFor="description" className="font-semibold">Tell us what you need</Label>
                            <Textarea 
                                id="description"
                                placeholder={`e.g., I need a plumber to fix a leaking tap in my kitchen...`}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                                className="mt-1"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                             <div>
                                <Label htmlFor="name">Your Name</Label>
                                <Input id="name" placeholder="John Doe" value={name} onChange={e => setName(e.target.value)} required />
                            </div>
                            <div>
                                <Label htmlFor="phone">Your Phone</Label>
                                <Input id="phone" placeholder="082 123 4567" value={phone} onChange={e => setPhone(e.target.value)} required />
                            </div>
                        </div>

                        <Button type="submit" className="w-full text-base" size="lg">
                            <Send className="mr-2 h-4 w-4" />
                            Get Free Quotes
                        </Button>
                        <p className="text-xs text-muted-foreground text-center">
                            Your request will be sent to the companies listed.
                        </p>
                    </form>
                )}
            </CardContent>
        </Card>
    </div>
  );
}