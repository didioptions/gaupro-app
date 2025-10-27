
'use client';
import { Card, CardContent } from '@/components/ui/card';
import { gauproNumbers } from '@/lib/blog-data';

export default function GauproByTheNumbers() {
  return (
    <div className="not-prose grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
      {gauproNumbers.map((item, index) => (
        <Card key={index} className="text-center bg-background border">
          <CardContent className="p-4">
            <p className="text-3xl font-bold text-primary">
              {item.prefix}{item.number.toLocaleString()}{item.suffix}
            </p>
            <p className="text-xs text-muted-foreground mt-1">{item.label}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
