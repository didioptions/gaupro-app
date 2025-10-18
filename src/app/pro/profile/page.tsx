
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ProProfilePage() {
    return (
        <div className="py-12 md:py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold">Your Profile</h1>
                    <p className="text-xl text-muted-foreground mt-2">
                        Manage your company and service information.
                    </p>
                </div>

                <div className="space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Company Details</CardTitle>
                            <CardDescription>Update your public-facing company information.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="companyName">Company Name</Label>
                                <Input id="companyName" placeholder="e.g., Bravo Projects" />
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="phone">Phone Number</Label>
                                <Input id="phone" type="tel" placeholder="e.g., 082 123 4567" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="location">Location</Label>
                                <Input id="location" placeholder="e.g., Randburg, Johannesburg" />
                            </div>
                        </CardContent>
                    </Card>

                     <Card>
                        <CardHeader>
                            <CardTitle>Services & Bio</CardTitle>
                            <CardDescription>Tell customers what you do best.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="services">Services Offered</Label>
                                <Input id="services" placeholder="e.g., Plumbing, Electrical, Painting" />
                                <p className="text-xs text-muted-foreground">Separate services with a comma.</p>
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="bio">About Your Company</Label>
                                <Textarea id="bio" placeholder="Describe your experience, team, and what makes your company great." className="min-h-[120px]"/>
                            </div>
                        </CardContent>
                    </Card>
                    
                    <div className="flex justify-end">
                        <Button size="lg">Save Changes</Button>
                    </div>
                </div>

            </div>
        </div>
    );
}
