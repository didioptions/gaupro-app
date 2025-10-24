
'use client';

import React, { useState } from 'react';
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
import { X } from 'lucide-react';

export default function EditProfilePage() {
  const [keyword, setKeyword] = useState('');
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);

  const handleKeywordSelect = (value: string) => {
    const service = allServices.find((s) => s.value === value);
    if (service && !selectedKeywords.includes(service.label) && selectedKeywords.length < 30) {
      setSelectedKeywords([...selectedKeywords, service.label]);
    }
    setKeyword(''); // Reset input after selection
  };

  const removeKeyword = (keywordToRemove: string) => {
    setSelectedKeywords(selectedKeywords.filter((k) => k !== keywordToRemove));
  };


  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-8">
          <p className="text-muted-foreground">Edit Business Profile for</p>
          <h1 className="text-2xl md:text-3xl font-bold">
            bravo projects <span className="font-normal text-muted-foreground">Randburg Waterfront, Randburg</span>
          </h1>
        </div>

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
            <Button className="bg-red-500 hover:bg-red-600">Save</Button>
          </div>

          <TabsContent value="info" className="mt-6">
            <Card>
              <CardContent className="p-8 space-y-8">
                <div>
                  <h2 className="text-xl font-semibold mb-6">Contact Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" defaultValue="jabulani" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" defaultValue="sya" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="business-phone">Business Phone Number</Label>
                      <Input id="business-phone" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cellphone">Cellphone Number</Label>
                      <Input id="cellphone" defaultValue="0784292766" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="didioptions@gmail.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website">Website</Label>
                      <Input id="website" />
                    </div>
                  </div>
                </div>

                <Separator />
                
                <div>
                  <h2 className="text-xl font-semibold mb-6">General</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="year-started">Year business started</Label>
                      <Input id="year-started" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="employees">No of Employees</Label>
                      <Input id="employees" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="vat-number">VAT Number</Label>
                      <Input id="vat-number" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="reg-id">Registration or ID Number</Label>
                      <Input id="reg-id" />
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h2 className="text-xl font-semibold mb-4">Business Hours</h2>
                  <RadioGroup defaultValue="no_hours" className="flex flex-col md:flex-row gap-4 md:gap-8">
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
              <Button className="bg-red-500 hover:bg-red-600">Save</Button>
            </div>
          </TabsContent>
          <TabsContent value="services" className="mt-6">
            <Card>
                <CardContent className="p-8 space-y-8">
                    <div>
                        <h2 className="text-xl font-semibold">Keywords</h2>
                        <p className="text-sm text-muted-foreground mt-1">Add keywords that relate specifically to your business. Customer requests are matched to your keywords and sent to you.</p>
                        <div className="mt-4">
                            <Autocomplete
                                options={allServices}
                                value={keyword}
                                onValueChange={(value) => {
                                  if (allServices.some(s => s.value === value)) {
                                    handleKeywordSelect(value);
                                  } else {
                                    setKeyword(value);
                                  }
                                }}
                                placeholder="Type in the first 3 letters of the keyword and select one that appears from the list."
                            />
                             <div className="mt-4 flex flex-wrap gap-2">
                              {selectedKeywords.map((kw) => (
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
                            <p className="text-xs text-muted-foreground mt-2 text-right">{selectedKeywords.length} Service Keywords (Limit of 30)</p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold">Categories</h2>
                        <p className="text-sm text-muted-foreground mt-1">Categories are grouped by the keywords selected. Please ensure that your categories match your business services.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold">Tag Line</h2>
                        <p className="text-sm text-muted-foreground mt-1">Enter a short catchy phrase that best describes your business and services (maximum of 200 characters)</p>
                        <div className="mt-4">
                            <Input placeholder="" />
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold">About Us</h2>
                        <p className="text-sm text-muted-foreground mt-1">Enter a detailed description of what your business does and its experience</p>
                        <div className="mt-4">
                            <Textarea rows={8} />
                        </div>
                    </div>

                </CardContent>
            </Card>
            <div className="flex justify-end gap-2 mt-6">
                <Button variant="outline">Cancel</Button>
                <Button className="bg-red-500 hover:bg-red-600">Save</Button>
            </div>
          </TabsContent>
          <TabsContent value="media" className="mt-6">
             <p className="text-muted-foreground text-center p-8">Media editing coming soon.</p>
          </TabsContent>
           <TabsContent value="location" className="mt-6">
             <p className="text-muted-foreground text-center p-8">Location editing coming soon.</p>
          </TabsContent>
           <TabsContent value="reviews" className="mt-6">
             <p className="text-muted-foreground text-center p-8">Reviews management coming soon.</p>
          </TabsContent>
          <TabsContent value="qa" className="mt-6">
             <p className="text-muted-foreground text-center p-8">Q & A management coming soon.</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
