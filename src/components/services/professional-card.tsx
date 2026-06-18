
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, BadgeCheck, Clock, Users, ShieldAlert, Building2 } from 'lucide-react';
import { CategoryImages } from '@/lib/category-images';
import { RequestQuoteDialog } from '@/components/request-quote-dialog';
import { cn } from '@/lib/utils';

export type Professional = {
  id: string;
  name: string;
  location?: string;
  locations?: string[];
  description: string;
  rating: number | null;
  reviews: number;
  avatarSeed: string;
  isUnclaimed?: boolean;
  isProVerified?: boolean;
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
  [key: string]: any;
};

interface ProfessionalCardProps {
  professional: Professional;
  service: string;
}

export default function ProfessionalCard({ professional, service }: ProfessionalCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const proImage = CategoryImages.find(p => p.id === professional.avatarSeed);
  const imageUrl = proImage ? proImage.imageUrl : `https://picsum.photos/seed/${professional.avatarSeed}/80/80`;
  const imageHint = proImage ? proImage.imageHint : "company logo";
  
  const singularOrPluralLowercase = service.endsWith('s') ? service.toLowerCase() : `${service.toLowerCase()}s`;
  const description = (professional.description || '').replace('{service}', singularOrPluralLowercase);

  const toggleDescription = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  const renderDescription = () => {
    const text = description.length > 150 ? (isExpanded ? description : `${description.substring(0, 150)}...`) : description;
    return (
      <>
        {text}
        {description.length > 150 && (
          <button onClick={toggleDescription} className="text-primary font-bold ml-1 hover:underline">
            {isExpanded ? 'Show less' : 'Read more'}
          </button>
        )}
      </>
    );
  };

  const locationText = Array.isArray(professional.locations)
    ? professional.locations.map(l => l.charAt(0).toUpperCase() + l.slice(1).replace(/-/g, ' ')).join(', ')
    : professional.location?.charAt(0).toUpperCase() + (professional.location?.slice(1).replace(/-/g, ' ') || '');

  return (
    <Card className={cn(
      "bg-card hover:shadow-xl transition-all duration-300 border-l-4",
      professional.isUnclaimed ? "border-l-amber-400" : "border-l-primary"
    )}>
      <CardContent className="p-6">
        <div className="grid sm:grid-cols-4 gap-6">
          <div className="sm:col-span-3">
            <div className="flex items-start gap-4">
              <div className="relative w-20 h-20 shrink-0">
                <Image src={imageUrl} alt={professional.name} fill className="rounded-md border object-cover shadow-sm" data-ai-hint={imageHint} unoptimized={imageUrl.includes('picsum')} />
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <Link href={`/pro/${professional.id}?service=${service}`} className="hover:text-primary transition-colors">
                    <h3 className="text-xl font-bold leading-tight">{professional.name}</h3>
                  </Link>
                  {professional.isUnclaimed && (
                    <Badge variant="outline" className="bg-amber-50 text-amber-600 border-amber-200 text-[10px] font-bold uppercase tracking-tight py-0">
                      Unclaimed Listing
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {locationText}</p>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm mt-2 text-muted-foreground">
                    <div className="flex items-center gap-1">
                        <Star className={cn("h-4 w-4", professional.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200")} />
                        <span className="font-bold text-foreground">{professional.rating ? professional.rating.toFixed(1) : '—'}</span>
                        <span>({professional.reviews} reviews)</span>
                    </div>
                    {professional.isProVerified && (
                        <div className="flex items-center gap-1 text-green-600">
                            <BadgeCheck className="h-4 w-4" />
                            <span className="font-medium">Verified Pro</span>
                        </div>
                    )}
                    {professional.yearsInBusiness && <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {professional.yearsInBusiness}y in Business</span>}
                </div>
                
                <p className="text-sm mt-3 text-foreground/80 leading-relaxed italic border-l-2 pl-3 border-secondary">
                  {renderDescription()}
                </p>
              </div>
            </div>
          </div>
          <div className="text-left sm:text-right flex flex-col gap-2">
             <RequestQuoteDialog
              service={service}
              initialStep={0}
              initialData={{}}
            >
              <Button className="w-full font-bold h-11">
                Request a Quote
              </Button>
            </RequestQuoteDialog>
             <Button variant="outline" className="w-full h-11 font-medium bg-secondary/10 hover:bg-secondary/30" asChild>
                <Link href={`/pro/${professional.id}?service=${service}`}>
                   {professional.isUnclaimed ? 'View Listing' : 'View Profile'}
                </Link>
             </Button>
             {professional.isUnclaimed && (
               <Button variant="link" size="sm" className="text-amber-600 hover:text-amber-700 h-auto p-0 font-bold flex items-center justify-start sm:justify-end gap-1">
                  <Building2 className="h-3 w-3" /> Claim Business
               </Button>
             )}
          </div>
        </div>
        {professional.reviewData && professional.reviewData.length > 0 && (
          <div className="mt-6 pt-4 border-t border-dashed">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-3 w-3 ${i < professional.reviewData![0].rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} />
                ))}
              </div>
              <p className="text-[11px] text-muted-foreground">Recent feedback by {professional.reviewData[0].author}</p>
            </div>
            <div className="mt-1">
                <p className="text-xs text-foreground/70 italic line-clamp-1">"{professional.reviewData[0].comment}"</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
