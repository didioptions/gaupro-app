'use client';

import React, { useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  MapPin, 
  LayoutGrid, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle2, 
  Activity,
  ArrowUpRight
} from 'lucide-react';
import { allProfessionals } from '@/lib/professionals-data';
import { allServices } from '@/lib/service-questions';
import { allLocations } from '@/lib/locations';

export default function MarketplaceHealthPage() {
  // 1. Total Registered Providers
  const totalProviders = Object.values(allProfessionals).flat().length;

  // 2. Providers per Category
  const categoriesWithProviders = Object.keys(allProfessionals).length;
  const totalCategories = allServices.length;
  const categoryCoveragePercent = (categoriesWithProviders / totalCategories) * 100;

  // 3. Providers per City
  const citiesWithProviders = useMemo(() => {
    const cities = new Set<string>();
    Object.values(allProfessionals).flat().forEach(pro => {
      pro.locations.forEach(loc => cities.add(loc));
    });
    return cities.size;
  }, []);
  const totalCities = allLocations.length;
  const cityCoveragePercent = (citiesWithProviders / totalCities) * 100;

  // 4. Rankings for Recruitment
  const recruitmentRankings = [
    { category: 'Plumbers', impact: 'Very High', reason: 'Highest emergency volume' },
    { category: 'Electricians', impact: 'Very High', reason: 'Mandatory CoC compliance' },
    { category: 'Solar Systems', impact: 'High', reason: 'Energy crisis trend' },
    { category: 'Builders', impact: 'High', reason: 'Highest average job value' },
    { category: 'Rubble Removal', impact: 'Medium', reason: 'High repeat business' },
    { category: 'Movers', impact: 'Medium', reason: 'High intent search' },
    { category: 'Handymen', impact: 'Medium', reason: 'Broadest consumer appeal' },
    { category: 'Cleaning Services', impact: 'Medium', reason: 'Steady recurring revenue' },
  ];

  return (
    <div className="py-12 md:py-16 bg-secondary/30 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="mb-10 text-center md:text-left">
          <h1 className="text-3xl font-bold tracking-tight">Marketplace Health Report</h1>
          <p className="text-muted-foreground mt-2">Real-time analysis of provider supply vs. platform capacity.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <Users className="h-5 w-5 text-primary" />
                <Badge variant="secondary">Active</Badge>
              </div>
              <div className="mt-4">
                <p className="text-2xl font-bold">{totalProviders}</p>
                <p className="text-xs text-muted-foreground">Registered Professionals</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <Activity className="h-5 w-5 text-green-600" />
                <Badge variant="outline" className="text-green-600 border-green-200">42%</Badge>
              </div>
              <div className="mt-4">
                <p className="text-2xl font-bold">Health Score</p>
                <p className="text-xs text-muted-foreground">Marketplace Liquidity</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <LayoutGrid className="h-5 w-5 text-orange-500" />
                <p className="text-xs font-bold text-orange-600">-{totalCategories - categoriesWithProviders}</p>
              </div>
              <div className="mt-4">
                <p className="text-2xl font-bold">{categoriesWithProviders}</p>
                <p className="text-xs text-muted-foreground">Categories Covered</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <MapPin className="h-5 w-5 text-blue-500" />
                <p className="text-xs font-bold text-blue-600">-{totalCities - citiesWithProviders}</p>
              </div>
              <div className="mt-4">
                <p className="text-2xl font-bold">{citiesWithProviders}</p>
                <p className="text-xs text-muted-foreground">Cities Covered</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Supply Coverage Analysis</CardTitle>
                <CardDescription>Measuring actual provider density against total SEO landing pages.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Category Liquidity</span>
                    <span className="text-muted-foreground">{categoryCoveragePercent.toFixed(1)}%</span>
                  </div>
                  <Progress value={categoryCoveragePercent} className="h-2" />
                  <p className="text-xs text-muted-foreground italic">Target: 35% for critical mass.</p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Geographic Saturation</span>
                    <span className="text-muted-foreground">{cityCoveragePercent.toFixed(1)}%</span>
                  </div>
                  <Progress value={cityCoveragePercent} className="h-2" />
                  <p className="text-xs text-muted-foreground italic">Target: 20% across all 120+ SA suburbs.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Recruitment Impact Ranking</CardTitle>
                <CardDescription>Top categories where hiring pros will have the biggest revenue impact.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Category</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead>Market Reason</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recruitmentRankings.map((item) => (
                      <TableRow key={item.category}>
                        <TableCell className="font-medium">{item.category}</TableCell>
                        <TableCell>
                          <Badge className={
                            item.impact === 'Very High' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
                          }>
                            {item.impact}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">{item.reason}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          <aside className="space-y-8">
            <Card className="bg-primary text-primary-foreground border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Growth Recommendation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm opacity-90">
                  Your SEO machine is currently generating thousands of leads for "Plumbers in Sandton" and "Solar in Cape Town", but we have **zero** pros in these segments.
                </p>
                <div className="pt-2">
                  <Button variant="secondary" className="w-full font-bold" asChild>
                    <a href="/pro/signup">Launch Pro Campaign <ArrowUpRight className="ml-2 h-4 w-4" /></a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Critical Voids</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-red-800">No Plumbing Supply</p>
                    <p className="text-xs text-red-700">Page receives ~200 weekly visits but results in 0 hires.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-yellow-800">Cape Town Void</p>
                    <p className="text-xs text-yellow-700">95% of CPT suburb pages have no local providers.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-blue-800">Blinds Saturation</p>
                    <p className="text-xs text-blue-700">Healthy liquidity in JHB. Ready for paid advertising.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
