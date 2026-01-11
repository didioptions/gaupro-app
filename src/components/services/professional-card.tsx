
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, MessageCircle, Verified } from 'lucide-react';
import { CategoryImages } from '@/lib/category-images';
import { RequestQuoteDialog } from '@/components/request-quote-dialog';

// Define the type for a professional object
// This should match the structure in professionals-data.ts
export type Professional = {
  id: string;
  name: string;
  location: string;
  description: string;
  rating: number;
  reviews: number;
  avatarSeed: string;
  reviewData?: {
    author: string;
    phone?: string;
    rating: number;
    comment: string;
  }[];
  // Add any other fields that might be passed
  [key: string]: any;
};

interface ProfessionalCardProps {
  professional: Professional;
  service: string; // The current service, e.g., 'painter'
}

export default function ProfessionalCard({ professional, service }: ProfessionalCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const proImage = CategoryImages.find(p => p.id === professional.avatarSeed);
  const imageUrl = proImage ? proImage.imageUrl : `https://picsum.photos/seed/${professional.avatarSeed}/80/80`;
  const imageHint = proImage ? proImage.imageHint : "company logo";
  
  const singularOrPluralLowercase = service.endsWith('s') ? service.toLowerCase() : `${service.toLowerCase()}s`;
  const description = professional.description.replace('{service}', singularOrPluralLowercase);

  const toggleDescription = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  const renderDescription = () => {
    if (isExpanded || description.length <= 150) {
      return (
        <>
          {description}
          {description.length > 150 && (
            <button onClick={toggleDescription} className="text-red-600 font-semibold ml-1">...show less</button>
          )}
        </>
      );
    }
    return (
      <>
        {description.substring(0, 150)}
        <button onClick={toggleDescription} className="text-red-600 font-semibold ml-1">...show more</button>
      </>
    );
  };

  return (
    <Card className="bg-card hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="grid sm:grid-cols-4 gap-6">
          <div className="sm:col-span-3">
            <div className="flex items-start gap-4">
              <Image src={imageUrl} alt={professional.name} width={80} height={80} className="rounded-md border" data-ai-hint={imageHint} />
              <div>
                <Link href={`/pro/${professional.id}?service=${service}`} className="hover:underline">
                  <h3 className="text-xl text-foreground">{professional.name}</h3>
                </Link>
                <p className="text-sm text-muted-foreground">{professional.location}</p>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm mt-2 text-muted-foreground">
                    <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <span className="font-bold text-foreground">{professional.rating > 0 ? professional.rating.toFixed(1) : '0.0'}</span>
                        <span>({professional.reviews} reviews)</span>
                    </div>
                    {professional.isProVerified && (
                        <div className="flex items-center gap-1 text-green-600">
                            <Verified className="h-4 w-4" />
                            <span>Verified</span>
                        </div>
                    )}
                </div>

                <p className="text-sm mt-2 text-foreground">
                  {renderDescription()}
                </p>
              </div>
            </div>
          </div>
          <div className="text-left sm:text-right space-y-2">
            <RequestQuoteDialog
              service={service}
              initialStep={0}
              initialData={{}}
            >
              <Button className="w-full sm:w-auto">
                Request a Quote
              </Button>
            </RequestQuoteDialog>
             <Button variant="outline" className="w-full sm:w-auto" asChild>
                <Link href={`/pro/${professional.id}?service=${service}`}>View Profile</Link>
             </Button>
          </div>
        </div>
        {professional.reviewData && professional.reviewData.length > 0 && (
          <div className="mt-4 pt-4 border-t">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < professional.reviewData![0].rating ? 'text-red-500 fill-red-500' : 'text-gray-300'}`} />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">by {professional.reviewData[0].author}{professional.reviewData[0].phone && `, ${professional.reviewData[0].phone}`}</p>
            </div>
            <div className="flex items-start gap-3 mt-2">
                <MessageCircle className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                <p className="text-sm text-foreground italic">"{professional.reviewData[0].comment}"</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
