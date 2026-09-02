'use client';

import React, { useMemo, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useDoc, useFirestore, useUser } from '@/firebase';
import { doc, updateDoc, serverTimestamp, collection, addDoc } from 'firebase/firestore';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    ArrowLeft, 
    Building2, 
    MapPin, 
    Briefcase, 
    User, 
    ShieldCheck, 
    ShieldAlert,
    Wallet,
    TrendingUp,
    Star,
    Mail,
    Phone,
    Globe,
    Clock,
    CheckCircle2,
    XCircle,
    Loader2
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';

export default function AdminProDetailPage() {
  const params = useParams();
  const router = useRouter();
  const firestore = useFirestore();
  const { user: adminUser } = useUser();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const proId = typeof params.proId === 'string' ? params.proId : '';

  const proRef = useMemo(() => {
    if (!firestore || !proId) return null;
    return doc(firestore, 'professionalProfiles', proId);
  }, [firestore, proId]);

  const { data: pro, isLoading } = useDoc<any>(proRef);

  const toggleVerification = async () => {
    if (!pro || !proRef || !adminUser) return;
    setIsProcessing(true);
    const newStatus = !pro.isProVerified;
    
    try {
        await updateDoc(proRef, {
            isProVerified: newStatus,
            updatedAt: serverTimestamp()
        });

        await addDoc(collection(firestore!, 'marketplace_audit_logs'), {
            adminUid: adminUser.uid,
            action: newStatus ? 'VERIFY_PRO' : 'UNVERIFY_PRO',
            targetId: pro.id,
            targetType: 'professional',
            timestamp: serverTimestamp()
        });

        toast({ title: 'Success', description: `Professional ${newStatus ? 'verified' : 'unverified'}.` });
    } catch (e: any) {
        toast({ variant: 'destructive', title: 'Error', description: e.message });
    } finally {
        setIsProcessing(false);
    }
  };

  if (isLoading) {
    return (
        <div className="container mx-auto px-4 py-20 space-y-6">
            <Skeleton className="h-10 w-1/4" />
            <Skeleton className="h-64 w-full" />
        </div>
    );
  }

  if (!pro) return <div className="text-center py-20">Pro not found.</div>;

  return (
    <div className="py-12 md:py-16 bg-secondary/30 min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        <Button variant="ghost" onClick={() => router.back()} className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Directory
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
                {/* 1. Business Info */}
                <Card>
                    <CardHeader className="border-b bg-secondary/10">
                        <div className="flex justify-between items-start">
                            <div>
                                <CardTitle className="text-2xl font-bold flex items-center gap-2">
                                    <Building2 className="h-6 w-6 text-primary" />
                                    {pro.name || 'Business Name Missing'}
                                </CardTitle>
                                <CardDescription className="mt-1">ID: {pro.id}</CardDescription>
                            </div>
                            <Badge variant={pro.isProVerified ? 'default' : 'outline'} className={pro.isProVerified ? 'bg-green-100 text-green-800' : ''}>
                                {pro.isProVerified ? 'Verified Pro' : 'Verification Pending'}
                            </Badge>
                        </div>
                    </CardHeader>
                    <CardContent className="p-8 space-y-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                                    <User className="h-3 w-3" /> Contact Person
                                </h3>
                                <p className="font-medium">{pro.firstName} {pro.lastName || '(Not provided)'}</p>
                                
                                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                                    <Mail className="h-3 w-3" /> Email Address
                                </h3>
                                <p className="font-medium">{pro.email}</p>
                                
                                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                                    <Phone className="h-3 w-3" /> Phone
                                </h3>
                                <p className="font-medium">{pro.phone || pro.businessPhone || 'N/A'}</p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                                    <Globe className="h-3 w-3" /> Website
                                </h3>
                                <a href={pro.website} target="_blank" className="text-primary hover:underline font-medium block truncate">
                                    {pro.website || 'No website'}
                                </a>
                                
                                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                                    <MapPin className="h-3 w-3" /> Address
                                </h3>
                                <p className="text-sm leading-relaxed">
                                    {pro.building ? `${pro.building}, ` : ''}
                                    {pro.address || 'No address provided'}<br />
                                    {pro.postalCode}
                                </p>
                            </div>
                        </div>
                        <Separator />
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">About the Business</h3>
                            <p className="text-sm leading-relaxed text-foreground/80">{pro.description || 'No description provided.'}</p>
                        </div>
                    </CardContent>
                </Card>

                {/* 2. Services & Location */}
                <div className="grid md:grid-cols-2 gap-8">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                                <Briefcase className="h-5 w-5 text-primary" />
                                Services
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <p className="text-xs font-bold text-muted-foreground uppercase mb-2">Main Category</p>
                                <Badge className="bg-primary/10 text-primary border-primary/20">{pro.serviceCategory || 'General'}</Badge>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-muted-foreground uppercase mb-2">Keywords/Tags</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {pro.tags?.map((tag: string) => (
                                        <Badge key={tag} variant="secondary" className="text-[10px] font-normal">{tag}</Badge>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                                <MapPin className="h-5 w-5 text-primary" />
                                Coverage
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <p className="text-xs font-bold text-muted-foreground uppercase mb-2">Primary City</p>
                                <span className="font-medium capitalize">{pro.location || 'Unknown'}</span>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-muted-foreground uppercase mb-2">Service Radius</p>
                                <Badge variant="outline">{pro.radius || '50'} KM</Badge>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-muted-foreground uppercase mb-2">Areas Served</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {pro.serviceAreas?.map((area: string) => (
                                        <Badge key={area} variant="secondary" className="text-[10px] font-normal capitalize">{area}</Badge>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <aside className="space-y-8">
                {/* Account Actions */}
                <Card className="border-primary/20 bg-primary/5">
                    <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                            <ShieldCheck className="h-5 w-5 text-primary" />
                            Admin Controls
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <Button 
                            className="w-full justify-start font-bold" 
                            variant={pro.isProVerified ? "destructive" : "default"}
                            onClick={toggleVerification}
                            disabled={isProcessing}
                        >
                            {isProcessing ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : (pro.isProVerified ? <ShieldAlert className="h-4 w-4 mr-2" /> : <ShieldCheck className="h-4 w-4 mr-2" />)}
                            {pro.isProVerified ? 'Unverify Professional' : 'Verify Professional'}
                        </Button>
                        <Button variant="outline" className="w-full justify-start font-bold" asChild>
                            <Link href={`/pro/${pro.id}`} target="_blank">
                                <ExternalLink className="h-4 w-4 mr-2" /> View Public Listing
                            </Link>
                        </Button>
                    </CardContent>
                </Card>

                {/* Financials */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                            <Wallet className="h-5 w-5 text-primary" />
                            Wallet & Billing
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex justify-between items-end border-b pb-4">
                            <div>
                                <p className="text-[10px] uppercase font-bold text-muted-foreground">Current Balance</p>
                                <p className="text-3xl font-black text-primary">{pro.creditBalance || 0}</p>
                            </div>
                            <Badge variant="outline" className="mb-1">Credits</Badge>
                        </div>
                        <div className="space-y-3">
                             <div className="flex justify-between text-xs">
                                <span className="text-muted-foreground">Lead Intake Price:</span>
                                <span className="font-bold">R{pro.creditsPerLead || 3} / CR</span>
                             </div>
                             <div className="flex justify-between text-xs">
                                <span className="text-muted-foreground">Total Leads Unlocked:</span>
                                <span className="font-bold">{pro.leadCount || 0}</span>
                             </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Marketplace Performance */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                            <TrendingUp className="h-5 w-5 text-primary" />
                            Marketplace Activity
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                         <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                            <div className="flex items-center gap-2">
                                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                                <span className="text-sm font-bold">Rating</span>
                            </div>
                            <span className="text-lg font-black">{pro.rating?.toFixed(1) || '0.0'}</span>
                         </div>
                         <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-blue-500" />
                                <span className="text-sm font-bold">Member Since</span>
                            </div>
                            <span className="text-xs font-bold">{pro.createdAt?.seconds ? new Date(pro.createdAt.seconds * 1000).toLocaleDateString() : 'N/A'}</span>
                         </div>
                    </CardContent>
                </Card>
            </aside>
        </div>
      </div>
    </div>
  );
}
