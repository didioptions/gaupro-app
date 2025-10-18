'use client';

import { AlertCircle, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

export default function ProProfilePage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          Business Profiles
        </h1>

        <div className="space-y-8">
          <Alert variant="destructive" className="bg-red-100 border-red-500 text-red-800">
            <AlertCircle className="h-4 w-4 !text-red-800" />
            <AlertTitle className="font-bold">Action Required</AlertTitle>
            <div className="flex justify-between items-center">
                <AlertDescription className="text-red-700">
                    Your account has limited access. Before we activate your account, we need you to verify your profile to maintain a trusted workplace. We need your ID and utility bill.
                </AlertDescription>
                 <Button className="bg-white text-red-800 hover:bg-white/90 border border-red-500 flex-shrink-0 ml-4">
                  Verify your ID
                </Button>
            </div>
          </Alert>

          <Card>
            <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                        <div className="flex gap-4">
                            <div className="w-24 h-24 bg-gray-100 rounded-md flex items-center justify-center text-sm text-muted-foreground border">
                                No Logo
                            </div>
                            <div>
                                <h2 className="text-xl font-bold">
                                    bravo projects <span className="text-red-500 text-sm font-medium">(Inactive)</span>
                                </h2>
                                <p className="text-muted-foreground">Randburg</p>
                                <div className="flex items-center gap-1 mt-1">
                                    <Star className="w-4 h-4 text-gray-300 fill-gray-300" />
                                    <Star className="w-4 h-4 text-gray-300 fill-gray-300" />
                                    <Star className="w-4 h-4 text-gray-300 fill-gray-300" />
                                    <Star className="w-4 h-4 text-gray-300 fill-gray-300" />
                                    <Star className="w-4 h-4 text-gray-300 fill-gray-300" />
                                    <span className="text-xs ml-1 text-muted-foreground">0 reviews</span>
                                </div>
                                <Link href="#" className="text-primary text-sm font-medium hover:underline mt-2 inline-block">
                                    Get Customer Reviews
                                </Link>
                            </div>
                        </div>
                         <div className="mt-4 flex gap-2">
                            <Button variant="outline">Get Verified</Button>
                            <Button variant="outline" asChild>
                                <Link href="/pro/profile/edit">Edit Profile</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="border-t md:border-t-0 md:border-l md:pl-6 pt-6 md:pt-0">
                        <h3 className="font-semibold">Profile Strength</h3>
                        <div className="flex items-center gap-2 mt-2">
                            <Progress value={10} className="h-2" />
                            <span className="text-sm font-semibold">10%</span>
                        </div>
                        <div className="mt-4">
                            <h4 className="font-semibold text-sm">Tips</h4>
                            <ul className="text-sm text-muted-foreground list-inside mt-1 space-y-1">
                                <li>Upload 5+ photos of your work</li>
                                <li>Get 5+ reviews</li>
                            </ul>
                            <Link href="/pro/profile/edit" className="text-primary text-sm font-medium hover:underline mt-2 inline-block">
                                Improve your business profile
                            </Link>
                        </div>
                    </div>
                </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8 flex flex-col items-center justify-center text-center">
                <Users className="h-10 w-10 text-muted-foreground mb-4"/>
                <p className="text-lg font-medium mb-4">I want to add another business to my profile</p>
                <Button variant="destructive" className="bg-red-600 hover:bg-red-700">Add a new Business</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
