
'use client';
import { Card, CardContent } from '@/components/ui/card';
import { serviceCategories } from '@/lib/blog-data';

export default function ServiceCategoriesGrid() {
  return (
    <div className="not-prose grid grid-cols-2 md:grid-cols-3 gap-4 my-6">
      {serviceCategories.map((category, index) => (
        <Card key={index} className="bg-secondary/30">
          <CardContent className="p-4 flex items-center gap-3">
            <category.icon className="h-6 w-6 text-primary flex-shrink-0" />
            <div>
              <p className="font-semibold text-sm">{category.name}</p>
              <p className="text-xs text-muted-foreground">{category.description}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
