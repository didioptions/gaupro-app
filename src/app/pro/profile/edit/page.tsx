'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function EditProfilePage() {
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
          <TabsContent value="services">
             <p className="text-muted-foreground text-center p-8">Services editing coming soon.</p>
          </TabsContent>
          {/* Other tab content would go here */}
        </Tabs>
      </div>
    </div>
  );
}