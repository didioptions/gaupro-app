'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { allServices } from '@/lib/services-list';
import { Textarea } from '@/components/ui/textarea';
import { Autocomplete } from '@/components/ui/autocomplete';
import { Badge } from '@/components/ui/badge';
import { X, Loader2, ShieldAlert, MapPin, Building2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { allLocations } from '@/lib/locations';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RequestReviewDialog } from '@/components/pro/request-review-dialog';
import { FileUpload } from '@/components/ui/file-upload';
import { useUser, useFirestore } from '@/firebase';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { doc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '@/components/ui/skeleton';
import { cityExpansionMap } from '@/lib/location-data';
import Image from 'next/image';
import Link from 'next/link';

interface ProfileData {
  name?: string;
  location?: string;
  province?: string;
  suburb?: string;
  firstName?: string;
  lastName?: string;
  businessPhone?: string;
  phone?: string;
  email?: string;
  website?: string;
  yearsInBusiness?: string;
  employees?: string;
  vatNumber?: string;
  regId?: string;
  businessHours?: string;
  tags?: string[];
  tagline?: string;
  description?: string;
  building?: string;
  address?: string;
  postalCode?: string;
  serviceAreas?: string[];
  radius?: string;
  avatarSeed?: string;
  photos?: string[];
}

const provinces = [
    "Gauteng",
    "Western Cape",
    "KwaZulu-Natal",
    "Eastern Cape",
    "Free State",
    "Limpopo",
    "Mpumalanga",
    "North West",
    "Northern Cape"
];

export default function EditProfilePage() {
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();
  const { toast } = useToast();

  const [formData, setFormData] = useState<ProfileData>({});
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  
  const [logoFile, setLogoFile] = useState<File[]>([]);
  const [photoFiles, setPhotoFiles] = useState<File[]>([]);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  useEffect(() => {
    if (isUserLoading) return;
    if (!user || !firestore) {
        setIsLoading(false);
        return;
    }

    const fetchProfile = async () => {
        try {
            const docRef = doc(firestore, "professionalProfiles", user.uid);
            const docSnap = await getDoc(docRef);
            
            if (docSnap.exists()) {
                const data = docSnap.data() as ProfileData;
                setFormData(data);
            } else {
                setFormData({
                    email: user.email || '',
                    name: user.displayName || '',
                });
            }
        } catch (error: any) {
            console.error("Error loading profile:", error);
        } finally {
            setIsLoading(false);
        }
    };

    fetchProfile();
  }, [user, isUserLoading, firestore]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  const handleAutocompleteChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  const handleKeywordSelect = (value: string) => {
    const service = allServices.find((s) => s.value === value);
    if (service && !(formData.tags || []).includes(service.label)) {
      setFormData((prev) => ({ ...prev, tags: [...(prev.tags || []), service.label].slice(0, 30) }));
    }
  };

  const removeKeyword = (keywordToRemove: string) => {
    setFormData((prev) => ({ ...prev, tags: prev.tags?.filter((k: string) => k !== keywordToRemove) || [] }));
  };

  const handleServiceAreaAdd = (citySlug: string) => {
    if (citySlug && !(formData.serviceAreas || []).includes(citySlug)) {
        setFormData((prev) => ({ ...prev, serviceAreas: [...(prev.serviceAreas || []), citySlug] }));
    }
  };

  const handleServiceAreaRemove = (cityToRemove: string) => {
    setFormData((prev) => ({ ...prev, serviceAreas: prev.serviceAreas?.filter((city: string) => city !== cityToRemove) || [] }));
  };

  const handleSave = async () => {
    if (!user || !firestore) return;

    setIsSaving(true);
    try {
        const docRef = doc(firestore, 'professionalProfiles', user.uid);
        
        // Strip system-managed fields before update
        const { creditBalance, leadCount, rating, reviews, totalReviews, isProVerified, ...updateableData } = formData as any;
        
        await updateDoc(docRef, {
            ...updateableData,
            updatedAt: serverTimestamp()
        });
        
        setShowSuccessAlert(true);
        setTimeout(() => setShowSuccessAlert(false), 5000);
        toast({ title: 'Profile Updated', description: 'Changes saved successfully.' });
    } catch (error: any) {
        toast({ variant: 'destructive', title: 'Save Failed', description: error.message });
    } finally {
        setIsSaving(false);
    }
  };
  
  const handleSaveMedia = async () => {
    if (!user || !firestore) return;

    setIsSaving(true);
    const storage = getStorage();
    let updatedData: Partial<ProfileData> = {};

    try {
        if (logoFile.length > 0) {
            const file = logoFile[0];
            const storageRef = ref(storage, `profiles/${user.uid}/logo/business-logo`);
            await uploadBytes(storageRef, file);
            const downloadURL = await getDownloadURL(storageRef);
            updatedData.avatarSeed = downloadURL;
        }

        if (photoFiles.length > 0) {
            const photoURLs = [...(formData.photos || [])];
            for (const file of photoFiles) {
                const storageRef = ref(storage, `profiles/${user.uid}/photos/${Date.now()}-${file.name}`);
                await uploadBytes(storageRef, file);
                const downloadURL = await getDownloadURL(storageRef);
                photoURLs.push(downloadURL);
            }
            updatedData.photos = photoURLs;
        }

        const docRef = doc(firestore, 'professionalProfiles', user.uid);
        await updateDoc(docRef, { ...updatedData, updatedAt: serverTimestamp() });
        setFormData((prev) => ({ ...prev, ...updatedData }));

        toast({ title: 'Media Uploaded', description: 'Your business visuals have been updated.' });
        setLogoFile([]);
        setPhotoFiles([]);
    } catch (error: any) {
        toast({ variant: 'destructive', title: 'Upload Failed', description: error.message });
    } finally {
        setIsSaving(false);
    }
  };

  if (isLoading) return <div className="container mx-auto px-4 py-20"><Skeleton className="h-64 w-full" /></div>;

  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-4">
          <p className="text-muted-foreground text-sm font-bold uppercase tracking-wider">Edit Professional Profile</p>
          <h1 className="text-3xl font-normal">
            {formData.name || 'Your Business Name'}
          </h1>
        </div>

        {showSuccessAlert && (
          <Alert className="bg-green-100 border-green-300 text-green-800 my-4">
            <AlertDescription className="flex justify-between items-center">
              Profile updated successfully.
              <button onClick={() => setShowSuccessAlert(false)} className="opacity-70 hover:opacity-100">
                <X className="h-4 w-4" />
              </button>
            </AlertDescription>
          </Alert>
        )}

        <Tabs defaultValue="info">
          <div className="flex justify-between items-center border-b">
            <TabsList className="bg-transparent p-0 h-auto">
              <TabsTrigger value="info" className="data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">Business Info</TabsTrigger>
              <TabsTrigger value="services" className="data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">Services</TabsTrigger>
              <TabsTrigger value="location" className="data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">Location</TabsTrigger>
              <TabsTrigger value="media" className="data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">Media</TabsTrigger>
            </TabsList>
            <Button className="bg-red-500 hover:bg-red-600" onClick={handleSave} disabled={isSaving}>
                {isSaving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                {isSaving ? 'Saving...' : 'Save Changes'}
            </Button>
          </div>

          <TabsContent value="info" className="mt-6">
            <Card>
              <CardContent className="p-8 space-y-8">
                <div>
                  <h2 className="text-xl font-normal mb-6">Contact & Business Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Business / Trading Name</Label>
                      <Input id="name" name="name" value={formData.name || ''} onChange={handleInputChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website">Website</Label>
                      <Input id="website" name="website" value={formData.website || ''} onChange={handleInputChange} placeholder="https://..." />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Contact First Name</Label>
                      <Input id="firstName" name="firstName" value={formData.firstName || ''} onChange={handleInputChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Contact Last Name</Label>
                      <Input id="lastName" name="lastName" value={formData.lastName || ''} onChange={handleInputChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="businessPhone">Business Phone Number</Label>
                      <Input id="businessPhone" name="businessPhone" value={formData.businessPhone || ''} onChange={handleInputChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cellphone">Contact Cellphone</Label>
                      <Input id="cellphone" name="phone" value={formData.phone || ''} onChange={handleInputChange} />
                    </div>
                  </div>
                </div>
                <Separator />
                <div>
                  <h2 className="text-xl font-normal mb-6">Physical Address (Not Publicly Visible)</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="address">Street Address</Label>
                      <Input id="address" name="address" value={formData.address || ''} onChange={handleInputChange} placeholder="123 Example Street" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="postalCode">Postal Code</Label>
                      <Input id="postalCode" name="postalCode" value={formData.postalCode || ''} onChange={handleInputChange} />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="services" className="mt-6">
            <Card>
                <CardContent className="p-8 space-y-8">
                    <div>
                        <h2 className="text-xl font-normal">Service Keywords</h2>
                        <p className="text-sm text-muted-foreground mt-1">Select keywords that trigger lead notifications for your business.</p>
                        <div className="mt-4">
                            <Autocomplete
                                options={allServices}
                                value={''} 
                                onValueChange={handleKeywordSelect}
                                placeholder="Search for services (e.g. Plumbing, Electrical)..."
                            />
                             <div className="mt-4 flex flex-wrap gap-2">
                              {(formData.tags || []).map((kw: string) => (
                                <Badge key={kw} variant="secondary" className="pl-3 pr-1 py-1 text-sm bg-primary/10 text-primary border-primary/20">
                                  {kw}
                                  <button className="h-5 w-5 ml-1 hover:bg-primary/20 rounded-full flex items-center justify-center" onClick={() => removeKeyword(kw)}><X className="h-3 w-3" /></button>
                                </Badge>
                              ))}
                            </div>
                        </div>
                    </div>
                    <Separator />
                    <div>
                        <h2 className="text-xl font-normal">Business Description</h2>
                        <p className="text-sm text-muted-foreground mt-1">Tell customers why they should hire you. Include your experience and unique selling points.</p>
                        <div className="mt-4">
                            <Textarea name="description" value={formData.description || ''} onChange={handleInputChange} rows={8} placeholder="We have over 10 years experience in..." />
                        </div>
                    </div>
                </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="location" className="mt-6">
            <Card>
              <CardContent className="p-8 space-y-8">
                <div>
                  <h2 className="text-xl font-normal mb-6">Service Area & Territory</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label>Province</Label>
                            <Select value={formData.province || ''} onValueChange={(v) => handleSelectChange('province', v)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Province" />
                                </SelectTrigger>
                                <SelectContent>
                                    {provinces.map(p => <SelectItem key={p} value={p}>{p}</SelectItem>)}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label>Primary City / Metro</Label>
                            <Autocomplete
                                options={allLocations}
                                value={formData.location || ''}
                                onValueChange={(v) => handleAutocompleteChange('location', v)}
                                placeholder="Select Primary City"
                            />
                        </div>
                         <div className="space-y-2">
                            <Label>Operating Suburb</Label>
                            <Input name="suburb" value={formData.suburb || ''} onChange={handleInputChange} placeholder="e.g. Sandton" />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label>Service Radius</Label>
                            <Select value={formData.radius || '50'} onValueChange={(v) => handleSelectChange('radius', v)}>
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="10">10 KM</SelectItem>
                                    <SelectItem value="20">20 KM</SelectItem>
                                    <SelectItem value="50">50 KM</SelectItem>
                                    <SelectItem value="100">100 KM</SelectItem>
                                    <SelectItem value="200">200+ KM</SelectItem>
                                </SelectContent>
                            </Select>
                            <p className="text-[10px] text-muted-foreground uppercase font-bold">Leads outside this radius will be ignored.</p>
                        </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                    <h2 className="text-xl font-normal">Specific Coverage Areas (Suburbs)</h2>
                    <p className="text-sm text-muted-foreground mt-1 mb-4">Add the specific neighborhoods you want to receive leads for.</p>
                    <div className="space-y-4">
                        <Autocomplete
                            options={allLocations.filter(l => !(formData.serviceAreas || []).includes(l.value))}
                            value={''}
                            onValueChange={handleServiceAreaAdd}
                            placeholder="Type to add suburbs (e.g. Soweto, Randburg)..."
                        />
                        <div className="p-4 border rounded-lg bg-secondary/20 min-h-[100px] flex flex-wrap gap-2">
                          {(formData.serviceAreas || []).map((area: string) => (
                              <Badge key={area} variant="secondary" className="pl-3 pr-1 py-1 text-sm bg-blue-100 text-blue-800 border-blue-200">
                                {allLocations.find(l => l.value === area)?.label || area}
                                <button className="ml-2 hover:text-red-500" onClick={() => handleServiceAreaRemove(area)}><X className="h-3 w-3" /></button>
                              </Badge>
                          ))}
                        </div>
                    </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="media" className="mt-6">
            <Card>
              <CardContent className="p-8 space-y-8">
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-xl font-normal mb-2">Business Logo</h2>
                        <p className="text-xs text-muted-foreground mb-4 uppercase font-bold">Square image recommended (Max 2MB)</p>
                        {formData.avatarSeed && (
                            <div className="relative w-24 h-24 mb-4 rounded-xl border-2 border-white shadow-lg overflow-hidden bg-white">
                                <Image src={formData.avatarSeed} alt="Business Logo" fill className="object-cover" unoptimized />
                            </div>
                        )}
                        <FileUpload onFilesChange={setLogoFile} />
                    </div>
                    
                    <div>
                        <h2 className="text-xl font-normal mb-2">Work Portfolio</h2>
                        <p className="text-xs text-muted-foreground mb-4 uppercase font-bold">Showcase your completed projects</p>
                        <div className="flex flex-wrap gap-3 mb-6">
                            {(formData.photos || []).map((photo, i) => (
                                <div key={i} className="relative w-20 h-20 rounded-lg border shadow-sm overflow-hidden group">
                                    <Image src={photo} alt={`Work ${i}`} fill className="object-cover" unoptimized />
                                    <button className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity" onClick={() => setFormData(prev => ({...prev, photos: prev.photos?.filter((_, idx) => idx !== i)}))}>
                                        <X className="h-5 w-5" />
                                    </button>
                                </div>
                            ))}
                        </div>
                        <FileUpload multiple onFilesChange={setPhotoFiles} />
                    </div>
                </div>
                <div className="flex justify-end pt-6 border-t">
                  <Button className="bg-primary hover:bg-primary/90 font-bold" onClick={handleSaveMedia} disabled={isSaving}>
                    {isSaving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                    Upload & Save Media
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
