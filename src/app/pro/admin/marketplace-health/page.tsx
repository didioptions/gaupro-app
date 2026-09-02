
'use client';

import React, { useMemo, useState } from 'react';
import { useCollection, useFirestore, useMemoFirebase, useUser } from '@/firebase';
import { collection, query, orderBy, limit, DocumentData } from 'firebase/firestore';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  MapPin, 
  TrendingUp, 
  AlertTriangle, 
  Target,
  Briefcase,
  Loader2,
  ChevronRight,
  CircleAlert,
  HelpCircle,
  CheckCircle2
} from 'lucide-react';
import { allServices } from '@/lib/services-list';
import { allLocations } from '@/lib/locations';
import { cityExpansionMap } from '@/lib/location-data';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const PRIORITY_JHB_SUBURBS = [
    'sandton', 'randburg', 'midrand', 'fourways', 'roodepoort', 'soweto', 
    'rosebank', 'bedfordview', 'edenvale', 'germiston', 'alberton', 'benoni'
];

const PRIORITY_SERVICES = [
    'plumber', 'electrician', 'solar-systems', 'cleaning-service', 
    'rubble-removal', 'demolition', 'tlb-hire', 'handyman'
];

export default function MarketplaceHealthPage() {
  const firestore = useFirestore();
  const { isUserLoading } = useUser();

  const prosQuery = useMemoFirebase(() => {
    if (!firestore || isUserLoading) return null;
    return collection(firestore, 'professionalProfiles');
  }, [firestore, isUserLoading]);

  const leadsQuery = useMemoFirebase(() => {
      if (!firestore || isUserLoading) return null;
      return query(collection(firestore, 'leads_public'), orderBy('createdAt', 'desc'), limit(500));
  }, [firestore, isUserLoading]);

  const { data: professionals, loading: loadingPros } = useCollection<DocumentData>(prosQuery);
  const { data: leads, loading: loadingLeads } = useCollection<DocumentData>(leadsQuery);

  const analytics = useMemo(() => {
    if (!professionals) return { total: 0, gauteng: 0, johannesburg: 0 };
    
    return {
        total: professionals.length,
        gauteng: professionals.filter(p => p.province === 'Gauteng' || p.location === 'johannesburg').length,
        johannesburg: professionals.filter(p => p.location === 'johannesburg').length,
    };
  }, [professionals]);

  const gapAnalysis = useMemo(() => {
    const opportunities: any[] = [];
    
    PRIORITY_SERVICES.forEach(serviceSlug => {
        const serviceLabel = allServices.find(s => s.value === serviceSlug)?.label || serviceSlug;
        
        PRIORITY_JHB_SUBURBS.forEach(suburbSlug => {
            const suburbLabel = allLocations.find(l => l.value === suburbSlug)?.label || suburbSlug;
            
            const localLeads = (leads || []).filter(l => 
                l.category?.toLowerCase() === serviceLabel.toLowerCase() && 
                (l.locationSlug === suburbSlug || l.location?.toLowerCase().includes(suburbSlug))
            ).length;

            const localPros = (professionals || []).filter(p => {
                const isCatMatch = (p.serviceCategory === serviceLabel || (p.tags || []).includes(serviceLabel));
                const proCity = p.location?.toLowerCase();
                const isLocMatch = p.suburb?.toLowerCase() === suburbSlug || 
                                 (p.serviceAreas || []).includes(suburbSlug) ||
                                 (proCity === 'johannesburg' && cityExpansionMap['johannesburg']?.includes(suburbSlug));
                return isCatMatch && isLocMatch;
            }).length;

            let type = 'COVERED';
            let priority = 'LOW';

            if (localPros === 0) {
                if (localLeads > 0) {
                    type = 'DEMAND';
                    priority = 'CRITICAL';
                } else {
                    type = 'SUPPLY';
                    priority = 'MEDIUM';
                }
            } else if (localPros === 1 && localLeads > 5) {
                priority = 'HIGH';
            }

            opportunities.push({
                service: serviceLabel,
                suburb: suburbLabel,
                leads: localLeads,
                pros: localPros,
                type,
                priority
            });
        });
    });

    return opportunities.sort((a, b) => {
        const score = (p: string) => ({ 'CRITICAL': 3, 'HIGH': 2, 'MEDIUM': 1, 'LOW': 0 }[p] || 0);
        if (score(b.priority) !== score(a.priority)) return score(b.priority) - score(a.priority);
        return b.leads - a.leads;
    });
  }, [professionals, leads]);

  if (loadingPros || loadingLeads) {
      return (
          <div className="min-h-screen flex flex-col items-center justify-center bg-secondary/30">
              <Loader2 className="h-10 w-10 animate-spin text-primary mb-4" />
              <p className="text-muted-foreground font-medium">Analyzing Marketplace Dynamics...</p>
          </div>
      );
  }

  return (
    <div className="py-12 md:py-16 bg-secondary/30 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-1">
                <Target className="h-4 w-4" />
                Joburg Growth Intelligence
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Marketplace Health</h1>
            <p className="text-muted-foreground mt-2">Identifying critical supply-demand gaps across priority suburbs.</p>
          </div>
          <Button variant="outline" className="bg-white" asChild>
              <Link href="/pro/admin/pros">Manage All Pros</Link>
          </Button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="border-l-4 border-l-primary">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <Users className="h-5 w-5 text-primary" />
                <Badge variant="secondary">Supply</Badge>
              </div>
              <p className="text-4xl font-black">{analytics.total}</p>
              <p className="text-xs text-muted-foreground uppercase font-bold mt-1">Active Professionals</p>
            </CardContent>
          </Card>
          <Card className="bg-primary text-primary-foreground border-0">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <MapPin className="h-5 w-5 opacity-80" />
                <Badge variant="outline" className="text-white border-white/30">Target</Badge>
              </div>
              <p className="text-4xl font-black">{analytics.johannesburg}</p>
              <p className="text-xs uppercase font-bold opacity-70 mt-1">JHB Pros</p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-teal-500">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <Briefcase className="h-5 w-5 text-teal-600" />
                <Badge variant="outline" className="bg-teal-50 text-teal-700 border-teal-200">Demand</Badge>
              </div>
              <p className="text-4xl font-black">{leads?.length || 0}</p>
              <p className="text-xs text-muted-foreground uppercase font-bold mt-1">Customer Leads</p>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-xl mb-12 border-0">
          <CardHeader className="border-b bg-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2">
                <CircleAlert className="h-5 w-5 text-red-600" />
                Recruitment Intelligence: Demand & Supply Gaps
            </CardTitle>
            <CardDescription>
                Prioritizing recruitment based on live customer demand vs current professional coverage.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-secondary/20">
                <TableRow>
                  <TableHead>Category / Suburb</TableHead>
                  <TableHead>Customer Demand</TableHead>
                  <TableHead>Pro Supply</TableHead>
                  <TableHead>Health Status</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {gapAnalysis.slice(0, 20).map((gap, i) => (
                    <TableRow key={i} className={gap.type === 'DEMAND' ? "bg-red-50/30" : ""}>
                      <TableCell>
                        <p className="font-bold text-sm">{gap.service}</p>
                        <p className="text-xs text-muted-foreground capitalize">{gap.suburb}</p>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1.5 font-bold">
                            <span className={gap.leads > 0 ? "text-blue-600" : "text-muted-foreground opacity-50"}>
                                {gap.leads} Leads
                            </span>
                        </div>
                      </TableCell>
                      <TableCell>
                         <Badge variant="outline" className={cn(gap.pros > 0 ? "bg-green-50 text-green-700 border-green-200" : "opacity-40")}>
                            {gap.pros} Pros
                         </Badge>
                      </TableCell>
                      <TableCell>
                        {gap.type === 'DEMAND' ? (
                            <Badge className="bg-red-600 text-white border-0 animate-pulse">
                                <CircleAlert className="h-3 w-3 mr-1" /> DEMAND GAP
                            </Badge>
                        ) : gap.type === 'SUPPLY' ? (
                            <Badge variant="secondary" className="bg-orange-100 text-orange-800 border-orange-200">
                                <HelpCircle className="h-3 w-3 mr-1" /> SUPPLY GAP
                            </Badge>
                        ) : (
                            <Badge variant="outline" className="bg-green-100 text-green-700 border-green-200">
                                <CheckCircle2 className="h-3 w-3 mr-1" /> COVERED
                            </Badge>
                        )}
                        <span className={cn(
                            "ml-2 text-[10px] font-black uppercase tracking-widest",
                            gap.priority === 'CRITICAL' ? "text-red-600" : gap.priority === 'HIGH' ? "text-orange-600" : "text-muted-foreground"
                        )}>
                            {gap.priority}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button size="sm" variant={gap.type === 'DEMAND' ? "default" : "outline"} className="gap-2 font-bold" asChild>
                            <Link href="/pro/partnership">
                                Recruit <ChevronRight className="h-3 w-3" />
                            </Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
