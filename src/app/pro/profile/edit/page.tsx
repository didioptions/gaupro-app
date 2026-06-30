
'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { allServices } from '@/lib/service-questions';
import { Textarea } from '@/components/ui/textarea';
import { Autocomplete } from '@/components/ui/autocomplete';
import { Badge } from '@/components/ui/badge';
import { X, Loader2 } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { allLocations } from '@/lib/locations';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RequestReviewDialog } from '@/components/pro/request-review-dialog';
import { FileUpload } from '@/components/ui/file-upload';
import { useUser, useFirestore } from '@/firebase';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, query, where, getDocs, doc, updateDoc } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '@/components/ui/skeleton';
import { cityExpansionMap } from '@/lib/location-data';
import Image from 'next/image';

interface ProfileData {
  name?: string;
  location?: string;
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

export default function EditProfilePage() {
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();
  const { toast } = useToast();

  const [profileId, setProfileId] = useState<string | null>(null);
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
            const q = query(collection(firestore, "professionalProfiles"), where("userId", "==", user.uid));
            const querySnapshot = await getDocs(q);
            if (!querySnapshot.empty) {
                const profileDoc = querySnapshot.docs[0];
                setProfileId(profileDoc.id);
                const data = profileDoc.data() as ProfileData;
                if (!data.serviceAreas || !Array.isArray(data.serviceAreas)) {
                    data.serviceAreas = data.location ? [data.location] : [];
                }
                setFormData(data);
            } else {
                toast({ variant: 'destructive', title: 'Error', description: 'No professional profile found for your user account.' });
            }
        } catch (error) {
            console.error("Error fetching profile:", error);
            toast({ variant: 'destructive', title: 'Error', description: 'Failed to fetch your profile data.' });
        } finally {
            setIsLoading(false);
        }
    };

    fetchProfile();
  }, [user, isUserLoading, firestore, toast]);

  useEffect(() => {
    const primaryCitySlug = formData.location;
    if (!primaryCitySlug) return;
    
    const currentAreas = new Set(formData.serviceAreas || []);

    if (!currentAreas.has(primaryCitySlug)) {
        const metro = Object.keys(cityExpansionMap).find((key: string) => 
          cityExpansionMap[key].includes(primaryCitySlug!)
        );
        const suggestions = metro ? cityExpansionMap[metro] : [primaryCitySlug];
        const newServiceAreas = new Set([...(formData.serviceAreas || []), ...suggestions]);
        
        setFormData((prev) => ({ ...prev, serviceAreas: Array.from(newServiceAreas) }));
    }
  }, [formData.location]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAutocompleteChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }
  
  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  const handleKeywordSelect = (value: string) => {
    const service = allServices.find((s) => s.value === value);
    if (service && !(formData.tags || []).includes(service.label) && (formData.tags || []).length < 30) {
      setFormData((prev) => ({ ...prev, tags: [...(prev.tags || []), service.label] }));
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
    if (!profileId || !firestore) {
        toast({ variant: 'destructive', title: 'Error', description: 'Profile not loaded. Cannot save.' });
        return;
    }
    setIsSaving(true);
    try {
        const docRef = doc(firestore, 'professionalProfiles', profileId);
        // We omit creditBalance and leadCount from direct updates to avoid security rule conflicts
        const { creditBalance, leadCount, ...restOfData } = formData as any;
        await updateDoc(docRef, restOfData);
        setShowSuccessAlert(true);
        setTimeout(() => setShowSuccessAlert(false), 5000);
        toast({ title: 'Profile Updated', description: 'Your changes have been saved successfully.' });
    } catch (error: any) {
        console.error("Error saving data:", error);
        toast({ variant: 'destructive', title: 'Save Failed', description: error.message || 'Could not update your profile.' });
    } finally {
        setIsSaving(false);
    }
  };
  
  const handleSaveMedia = async () => {
    if (!user || !profileId) {
        toast({ variant: 'destructive', title: 'Error', description: 'You must be logged in and have a profile to upload files.' });
        return;
    }
    if (logoFile.length === 0 && photoFiles.length === 0) {
        toast({ variant: 'destructive', title: 'No files selected', description: 'Please select a logo or photos to upload.' });
        return;
    }

    setIsSaving(true);
    const storage = getStorage();
    let updatedData: Partial<ProfileData> = {};

    try {
        if (logoFile.length > 0) {
            const file = logoFile[0];
            const storageRef = ref(storage, `profiles/${profileId}/logo/${Date.now()}-${file.name}`);
            await uploadBytes(storageRef, file);
            const downloadURL = await getDownloadURL(storageRef);
            updatedData.avatarSeed = downloadURL;
        }

        if (photoFiles.length > 0) {
            const photoURLs = [...(formData.photos || [])];
            for (const file of photoFiles) {
                const storageRef = ref(storage, `profiles/${profileId}/photos/${Date.now()}-${file.name}`);
                await uploadBytes(storageRef, file);
                const downloadURL = await getDownloadURL(storageRef);
                photoURLs.push(downloadURL);
            }
            updatedData.photos = photoURLs;
        }

        if (firestore) {
            const docRef = doc(firestore, 'professionalProfiles', profileId);
            await updateDoc(docRef, updatedData as any);
            setFormData((prev) => ({ ...prev, ...updatedData }));
        }

        toast({ title: 'Success!', description: 'Your media has been uploaded and saved.' });
        setLogoFile([]);
        setPhotoFiles([]);
        setShowSuccessAlert(true);
        setTimeout(() => setShowSuccessAlert(false), 5000);

    } catch (error: any) {
        console.error('Upload failed:', error);
        toast({ variant: 'destructive', title: 'Upload Failed', description: error.message || 'There was an error uploading your files.' });
    } finally {
        setIsSaving(false);
    }
  };

  if (isLoading) {
      return (
          <div className="py-12 md:py-16">
              <div className="container mx-auto px-4 max-w-5xl space-y-4">
                  <Skeleton className="h-10 w-1/2" />
                  <Skeleton className="h-10 w-1/4 mb-4" />
                  <div className="border-b" />
                  <Card><CardContent className="p-8"><Skeleton className="h-64 w-full" /></CardContent></Card>
              </div>
          </div>
      )
  }

  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-4">
          <p className="text-muted-foreground">Edit Business Profile for</p>
          <h1 className="text-2xl md:text-3xl font-normal">
            {formData.name || 'Your Business'} <span className="font-normal text-muted-foreground">{formData.location ? (allLocations.find(l => l.value === formData.location)?.label || formData.location) : 'Your Location'}</span>
          </h1>
        </div>

        {showSuccessAlert && (
          <Alert className="bg-green-100 border-green-300 text-green-800 my-4">
            <AlertDescription className="flex justify-between items-center">
              Updated successfully
              <button onClick={() => setShowSuccessAlert(false)} className="opacity-70 hover:opacity-100">
                <X className="h-4 w-4" />
              </button>
            </AlertDescription>
          </Alert>
        )}

        <Tabs defaultValue="info">
          <div className="flex justify-between items-center border-b">
            <TabsList className="bg-transparent p-0 h-auto">
              <TabsTrigger value="info" className="data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">Info</TabsTrigger>
              <TabsTrigger value="services" className="data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">Services</TabsTrigger>
              <TabsTrigger value="media" className="data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">Media</TabsTrigger>
              <TabsTrigger value="location" className="data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">Location</TabsTrigger>
              <TabsTrigger value="reviews" className="data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">Reviews</TabsTrigger>
              <TabsTrigger value="qa" className="data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">Q & A</TabsTrigger>
            </TabsList>
            <Button className="bg-red-500 hover:bg-red-600" onClick={handleSave} disabled={isSaving}>
                {isSaving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                {isSaving ? 'Saving...' : 'Save'}
            </Button>
          </div>

          <TabsContent value="info" className="mt-6">
            <Card>
              <CardContent className="p-8 space-y-8">
                <div>
                  <h2 className="text-xl font-normal mb-6">Contact Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" name="firstName" value={formData.firstName || ''} onChange={handleInputChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" name="lastName" value={formData.lastName || ''} onChange={handleInputChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="businessPhone">Business Phone Number</Label>
                      <Input id="businessPhone" name="businessPhone" value={formData.businessPhone || ''} onChange={handleInputChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cellphone">Cellphone Number</Label>
                      <Input id="cellphone" name="phone" value={formData.phone || ''} onChange={handleInputChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" value={formData.email || ''} onChange={handleInputChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website">Website</Label>
                      <Input id="website" name="website" value={formData.website || ''} onChange={handleInputChange} />
                    </div>
                  </div>
                </div>

                <Separator />
                
                <div>
                  <h2 className="text-xl font-normal mb-6">General</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="yearsInBusiness">Year business started</Label>
                      <Input id="yearsInBusiness" name="yearsInBusiness" value={formData.yearsInBusiness || ''} onChange={handleInputChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="employees">No of Employees</Label>
                      <Input id="employees" name="employees" value={formData.employees || ''} onChange={handleInputChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="vatNumber">VAT Number</Label>
                      <Input id="vatNumber" name="vatNumber" value={formData.vatNumber || ''} onChange={handleInputChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="regId">Registration or ID Number</Label>
                      <Input id="regId" name="regId" value={formData.regId || ''} onChange={handleInputChange} />
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h2 className="text-xl font-normal mb-4">Business Hours</h2>
                  <RadioGroup value={formData.businessHours || 'no_hours'} onValueChange={(value: string) => handleRadioChange('businessHours', value)} className="flex flex-col md:flex-row gap-4 md:gap-8">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="has_hours" id="has_hours" />
                      <Label htmlFor="has_hours" className="font-normal">Has business hours</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="open_24_7" id="open_24_7" />
                      <Label htmlFor="open_24_7" className="font-normal">Open 24 x 7</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no_hours" id="no_hours" />
                      <Label htmlFor="no_hours" className="font-normal">No business hours</Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="services" className="mt-6">
            <Card>
                <CardContent className="p-8 space-y-8">
                    <div>
                        <h2 className="text-xl font-normal">Keywords</h2>
                        <p className="text-sm text-muted-foreground mt-1">Add keywords that relate specifically to your business. Customer requests are matched to your keywords and sent to you.</p>
                        <div className="mt-4">
                            <Autocomplete
                                options={allServices}
                                value={''} 
                                onValueChange={handleKeywordSelect}
                                placeholder="Type in the first 3 letters of the keyword and select one that appears from the list."
                            />
                             <div className="mt-4 flex flex-wrap gap-2">
                              {(formData.tags || []).map((kw: string) => (
                                <Badge key={kw} variant="secondary" className="pl-3 pr-1 py-1 text-sm">
                                  {kw}
                                  <button
                                    className="h-5 w-5 ml-1 flex items-center justify-center hover:bg-muted rounded-full"
                                    onClick={() => removeKeyword(kw)}
                                  >
                                    <X className="h-3 w-3" />
                                  </button>
                                </Badge>
                              ))}
                            </div>
                            <p className="text-xs text-muted-foreground mt-2 text-right">{(formData.tags || []).length} Service Keywords (Limit of 30)</p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-normal">Tag Line</h2>
                        <p className="text-sm text-muted-foreground mt-1">Enter a short catchy phrase that best describes your business and services (maximum of 200 characters)</p>
                        <div className="mt-4">
                            <Input name="tagline" value={formData.tagline || ''} onChange={handleInputChange} placeholder="" />
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-normal">About Us</h2>
                        <p className="text-sm text-muted-foreground mt-1">Enter a detailed description of what your business does and its experience</p>
                        <div className="mt-4">
                            <Textarea name="description" value={formData.description || ''} onChange={handleInputChange} rows={8} />
                        </div>
                    </div>

                </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="media" className="mt-6">
            <Card>
              <CardContent className="p-8 space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-xl font-normal mb-4">Logo</h2>
                        <p className="text-sm text-muted-foreground mb-4">Upload a square image that represents your business (e.g., your company logo).</p>
                        {formData.avatarSeed && (
                            <div className="relative w-24 h-24 mb-4 rounded-md border overflow-hidden">
                                <Image src={formData.avatarSeed} alt="Logo Preview" fill className="object-cover" unoptimized />
                            </div>
                        )}
                        <FileUpload onFilesChange={setLogoFile} />
                    </div>
                    
                    <div>
                        <h2 className="text-xl font-normal mb-4">Portfolio Photos</h2>
                        <p className="text-sm text-muted-foreground mb-4">Upload high-quality photos of your work to show potential customers what you can do.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {(formData.photos || []).map((photo, i) => (
                                <div key={i} className="relative w-16 h-16 rounded border overflow-hidden group">
                                    <Image src={photo} alt={`Portfolio ${i}`} fill className="object-cover" unoptimized />
                                    <button 
                                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white"
                                        onClick={() => {
                                            const newPhotos = formData.photos?.filter((_, idx) => idx !== i);
                                            setFormData(prev => ({ ...prev, photos: newPhotos }));
                                        }}
                                    >
                                        <X className="h-4 w-4" />
                                    </button>
                                </div>
                            ))}
                        </div>
                        <FileUpload multiple onFilesChange={setPhotoFiles} />
                    </div>
                </div>
                <div className="flex justify-end pt-4 border-t">
                  <Button className="bg-red-500 hover:bg-red-600" onClick={handleSaveMedia} disabled={isSaving}>
                    {isSaving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                    {isSaving ? 'Uploading Media...' : 'Save & Upload Media'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
           <TabsContent value="location" className="mt-6">
            <Card>
              <CardContent className="p-8 space-y-8">
                <div>
                  <h2 className="text-xl font-normal mb-6">Address</h2>
                  <div className="space-y-2 mb-6">
                    <Label htmlFor="area">Primary City / Area</Label>
                    <Autocomplete
                        options={allLocations}
                        value={formData.location || ''}
                        onValueChange={(value: string) => handleAutocompleteChange('location', value)}
                        placeholder="Type to select your primary city..."
                    />
                    <p className="text-xs text-muted-foreground">This is the main city your business is based in.</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="building">Building</Label>
                        <Input id="building" name="building" value={formData.building || ''} onChange={handleInputChange} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="streetAddress">Street Address</Label>
                        <Input id="streetAddress" name="address" value={formData.address || ''} onChange={handleInputChange} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="postalCode">Postal Code</Label>
                        <Input id="postalCode" name="postalCode" value={formData.postalCode || ''} onChange={handleInputChange} />
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                    <h2 className="text-xl font-normal">Service Coverage Areas</h2>
                    <p className="text-sm text-muted-foreground mt-1 mb-4">Suggested based on proximity to primary city. Add or remove locations you serve.</p>
                    <div className="p-4 border rounded-lg bg-secondary/30 min-h-[80px]">
                        <div className="flex flex-wrap gap-2">
                          {(formData.serviceAreas || []).map((area: string) => {
                              const locationLabel = allLocations.find(l => l.value === area)?.label || area;
                              return (
                                  <Badge key={area} variant="secondary" className="pl-3 pr-1 py-1 text-sm bg-blue-100 text-blue-800 border-blue-300">
                                    {locationLabel}
                                    <button
                                      className="h-5 w-5 ml-1 flex items-center justify-center hover:bg-blue-200 rounded-full"
                                      onClick={() => handleServiceAreaRemove(area)}
                                    >
                                      <X className="h-3 w-3" />
                                    </button>
                                  </Badge>
                              )
                          })}
                        </div>
                    </div>
                    <div className="mt-4">
                        <Label htmlFor="add-coverage-area">Add another service area</Label>
                        <Autocomplete
                            options={allLocations.filter(l => !(formData.serviceAreas || []).includes(l.value))}
                            value={''}
                            onValueChange={(value: string) => {
                                if (value) {
                                    handleServiceAreaAdd(value);
                                }
                            }}
                            placeholder="Type to add a city or suburb..."
                        />
                    </div>
                </div>

                <Separator />

                <div>
                    <h2 className="text-xl font-normal mb-4">Radius for Service Area</h2>
                     <p className="text-sm text-muted-foreground mb-4">Set the radius from your City which covers your service area, we'll only send you customer requests within this coverage.</p>
                     <div className="flex items-center gap-4">
                        <Select value={formData.radius || '50'} onValueChange={(value: string) => handleSelectChange('radius', value)}>
                            <SelectTrigger className="w-[120px]">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="10">10 KM</SelectItem>
                                <SelectItem value="20">20 KM</SelectItem>
                                <SelectItem value="30">30 KM</SelectItem>
                                <SelectItem value="50">50 KM</SelectItem>
                                <SelectItem value="100">100 KM</SelectItem>
                                <SelectItem value="200">200+ KM</SelectItem>
                            </SelectContent>
                        </Select>
                        <Input value={allLocations.find(l => l.value === formData.location)?.label || formData.location || ''} readOnly className="w-[200px] bg-secondary" />
                     </div>
                </div>

              </CardContent>
            </Card>
           </TabsContent>
           <TabsContent value="reviews" className="mt-6">
            <div className="space-y-6">
                <RequestReviewDialog
                    businessName={formData.name || 'your business'}
                    userName={formData.firstName || 'your name'}
                >
                    <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                        <CardContent className="p-8 text-center space-y-4">
                        <p className="text-muted-foreground">Getting customer reviews make you twice as likely to be hired on Gaupro.</p>
                        <Button asChild className="bg-red-500 hover:bg-red-600">
                            <span>Get Customer Reviews</span>
                        </Button>
                        </CardContent>
                    </Card>
                </RequestReviewDialog>
            </div>
          </TabsContent>
          <TabsContent value="qa" className="mt-6">
             <p className="text-muted-foreground text-center p-8">Q & A management coming soon.</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
