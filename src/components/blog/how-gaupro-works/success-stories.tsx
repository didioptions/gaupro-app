
'use client';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { successStoriesData } from '@/lib/blog-data';
import { Star } from 'lucide-react';

export default function SuccessStories() {
  return (
    <div className="not-prose grid md:grid-cols-3 gap-6 my-8">
      {successStoriesData.map((story) => (
        <Card key={story.name}>
          <CardContent className="p-4 text-center">
            <Image
              src={`https://picsum.photos/seed/${story.avatarSeed}/80/80`}
              alt={`Avatar of ${story.name}`}
              width={80}
              height={80}
              className="rounded-full mx-auto mb-3"
              data-ai-hint="person photo"
            />
            <blockquote className="text-sm italic text-muted-foreground">"{story.quote}"</blockquote>
            <div className="flex justify-center mt-2">
                {[...Array(5)].map((_,i) => <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />)}
            </div>
            <p className="mt-3 font-semibold text-xs">{story.name}, {story.location}</p>
            <p className="text-xs text-muted-foreground">{story.review}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
