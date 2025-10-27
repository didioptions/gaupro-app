
'use client';
import { Card, CardContent } from '@/components/ui/card';
import { trustBadges } from '@/lib/blog-data';

export default function TrustBadges() {
  return (
    <div className="not-prose grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
      {trustBadges.map((badge, index) => (
        <Card key={index} className="bg-secondary/50 border-0">
          <CardContent className="p-4 text-center">
            <div className="flex justify-center mb-2">
              <badge.icon className="h-6 w-6 text-primary" />
            </div>
            <p className="font-semibold text-sm">{badge.text}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
