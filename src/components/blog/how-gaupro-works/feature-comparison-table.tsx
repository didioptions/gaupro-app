
'use client';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { featureComparison } from '@/lib/blog-data';

export default function FeatureComparisonTable() {
  return (
    <div className="my-6 overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Feature</TableHead>
            <TableHead>Benefit</TableHead>
            <TableHead>SEO Keywords</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {featureComparison.map((item) => (
            <TableRow key={item.feature}>
              <TableCell className="font-medium">{item.feature}</TableCell>
              <TableCell>{item.benefit}</TableCell>
              <TableCell className="text-xs italic">{item.keywords}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
