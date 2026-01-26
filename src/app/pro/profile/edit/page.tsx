
'use client';

import React, { useState, useEffect, useCallback } from 'react';
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
import { X, Image as ImageIcon } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { allLocations } from '@/lib/locations';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Link from 'next/link';
import { RequestReviewDialog } from '@/components/pro/request-review-dialog';
import { FileUpload } from '@/components/ui/file-upload';
import { useUser, useFirestore } from '@/firebase';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, query, where, getDocs, doc, updateDoc } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';

export default function EditProfilePage() {
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();
  const { toast } = useToast();

  const [profileId, setProfileId] = useState<string | null>(null);
  const [formData, setFormData] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  
  const [logoFile, setLogoFile] = useState<File[]>([]);
  const [photoFiles, setPhotoFiles] = useState<File[]>([]);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  // Fetch profile data
  useEffect(() => {
    if (isUserLoading) return;
    if (!user) {
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
                setFormData(profileDoc.data());
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleAutocompleteChange = (name: string, value: string) => {
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  }
  
  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  }

  const handleKeywordSelect = (value: string) => {
    const service = allServices.find((s) => s.value === value);
    if (service && !(formData.tags || []).includes(service.label) && (formData.tags || []).length < 30) {
      setFormData((prev: any) => ({ ...prev, tags: [...(prev.tags || []), service.label] }));
    }
  };

  const removeKeyword = (keywordToRemove: string) => {
    setFormData((prev: any) => ({ ...prev, tags: prev.tags.filter((k: string) => k !== keywordToRemove) }));
  };

  const handleSave = async () => {
    if (!profileId) {
        toast({ variant: 'destructive', title: 'Error', description: 'Profile not loaded. Cannot save.' });
        return;
    }
    setIsSaving(true);
    try {
        const docRef = doc(firestore, 'professionalProfiles', profileId);
        await updateDoc(docRef, formData);
        setShowSuccessAlert(true);
        setTimeout(() => setShowSuccessAlert(false), 5000);
    } catch (error) {
        console.error("Error saving data:", error);
        toast({ variant: 'destructive', title: 'Save Failed', description: 'Could not update your profile. Please try again.' });
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
    let updatedData: any = {};

    try {
        if (logoFile.length > 0) {
            const file = logoFile[0];
            const storageRef = ref(storage, `profiles/${profileId}/logo/${file.name}`);
            await uploadBytes(storageRef, file);
            const downloadURL = await getDownloadURL(storageRef);
            updatedData.avatarSeed = downloadURL; // Assuming avatarSeed stores the logo URL
            setFormData((prev: any) => ({ ...prev, avatarSeed: downloadURL }));
        }

        if (photoFiles.length > 0) {
            const photoURLs = [...(formData.photos || [])];
            for (const file of photoFiles) {
                const storageRef = ref(storage, `profiles/${profileId}/photos/${file.name}`);
                await uploadBytes(storageRef, file);
                const downloadURL = await getDownloadURL(storageRef);
                photoURLs.push(downloadURL);
            }
            updatedData.photos = photoURLs;
            setFormData((prev: any) => ({ ...prev, photos: photoURLs }));
        }

        const docRef = doc(firestore, 'professionalProfiles', profileId);
        await updateDoc(docRef, updatedData);

        toast({ title: 'Success!', description: 'Your media has been uploaded and saved.' });
        setLogoFile([]);
        setPhotoFiles([]);
        setShowSuccessAlert(true);
        setTimeout(() => setShowSuccessAlert(false), 5000);

    } catch (error) {
        console.error('Upload failed:', error);
        toast({ variant: 'destructive', title: 'Upload Failed', description: 'There was an error uploading your files. Please try again.' });
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
            {formData.name || 'Your Business'} <span className="font-normal text-muted-foreground">{formData.location || 'Your Location'}</span>
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
                  <RadioGroup value={formData.businessHours || 'no_hours'} onValueChange={(value) => handleRadioChange('businessHours', value)} className="flex flex-col md:flex-row gap-4 md:gap-8">
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
            <div className="flex justify-end gap-2 mt-6">
              <Button variant="outline">Cancel</Button>
              <Button className="bg-red-500 hover:bg-red-600" onClick={handleSave} disabled={isSaving}>
                {isSaving ? 'Saving...' : 'Save'}
              </Button>
            </div>
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
                                value={''} // Keep it empty to allow new selections
                                onValueChange={handleKeywordSelect}
                                placeholder="Type in the first 3 letters of the keyword and select one that appears from the list."
                            />
                             <div className="mt-4 flex flex-wrap gap-2">
                              {(formData.tags || []).map((kw: string) => (
                                <Badge key={kw} variant="secondary" className="pl-3 pr-1 py-1 text-sm">
                                  {kw}
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-5 w-5 ml-1"
                                    onClick={() => removeKeyword(kw)}
                                  >
                                    <X className="h-3 w-3" />
                                  </Button>
                                </Badge>
                              ))}
                            </div>
                            <p className="text-xs text-muted-foreground mt-2 text-right">{(formData.tags || []).length} Service Keywords (Limit of 30)</p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-normal">Categories</h2>
                        <p className="text-sm text-muted-foreground mt-1">Categories are grouped by the keywords selected. Please ensure that your categories match your business services.</p>
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
            <div className="flex justify-end gap-2 mt-6">
                <Button variant="outline">Cancel</Button>
                <Button className="bg-red-500 hover:bg-red-600" onClick={handleSave} disabled={isSaving}>
                    {isSaving ? 'Saving...' : 'Save'}
                </Button>
            </div>
          </TabsContent>
          <TabsContent value="media" className="mt-6">
            <Card>
              <CardContent className="p-8 space-y-8">
                <div>
                  <h2 className="text-xl font-normal mb-4">Logo</h2>
                  <p className="text-sm text-muted-foreground mb-4">Upload a square image that represents your business (e.g., your company logo).</p>
                  <FileUpload onFilesChange={setLogoFile} />
                </div>
                
                <Separator />
                
                <div>
                  <h2 className="text-xl font-normal mb-4">Portfolio Photos</h2>
                  <p className="text-sm text-muted-foreground mb-4">Upload up to 10 high-quality photos of your work to show potential customers what you can do.</p>
                  <FileUpload multiple onFilesChange={setPhotoFiles} />
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-end gap-2 mt-6">
              <Button variant="outline">Cancel</Button>
              <Button className="bg-red-500 hover:bg-red-600" onClick={handleSaveMedia} disabled={isSaving}>
                {isSaving ? 'Saving Media...' : 'Save Media'}
              </Button>
            </div>
          </TabsContent>
           <TabsContent value="location" className="mt-6">
            <Card>
              <CardContent className="p-8 space-y-8">
                <div>
                  <h2 className="text-xl font-normal mb-6">Address</h2>
                  <div className="space-y-2 mb-6">
                    <Label htmlFor="area">Area</Label>
                    <Autocomplete
                        options={allLocations}
                        value={formData.location || ''}
                        onValueChange={(value) => handleAutocompleteChange('location', value)}
                        placeholder="Type in the first three letters of the area..."
                    />
                    <p className="text-xs text-muted-foreground">Type in the first three letters of the area your business is located and select the correct area from the list that appears.</p>
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
                    <h2 className="text-xl font-normal mb-4">Radius for Service Area</h2>
                     <p className="text-sm text-muted-foreground mb-4">Set the radius from your City which covers your service area, we'll only send you customer requests within this coverage.</p>
                     <div className="flex items-center gap-4">
                        <Select value={formData.radius || '50'} onValueChange={(value) => handleSelectChange('radius', value)}>
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
                        <Input value={formData.location || ''} readOnly className="w-[200px] bg-secondary" />
                     </div>
                </div>

              </CardContent>
            </Card>
            <div className="flex justify-end gap-2 mt-6">
              <Button variant="outline">Cancel</Button>
              <Button className="bg-red-500 hover:bg-red-600" onClick={handleSave} disabled={isSaving}>
                {isSaving ? 'Saving...' : 'Save'}
              </Button>
            </div>
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
              <Alert className="bg-blue-50 border-blue-200 text-blue-800 text-center">
                  <AlertDescription>
                      Your business profile does not have any reviews. Getting customer reviews make you twice as likely to be hired on Gaupro.
                      <br />
                        <RequestReviewDialog
                            businessName={formData.name || 'your business'}
                            userName={formData.firstName || 'your name'}
                        >
                            <Button variant="link" className="text-blue-800 h-auto p-0 mt-2">
                                Get Customer Reviews
                            </Button>
                        </RequestReviewDialog>
                  </AlertDescription>
              </Alert>
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
