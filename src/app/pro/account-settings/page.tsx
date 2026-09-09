
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChangePasswordDialog } from '@/components/pro/change-password-dialog';
import { useUser, useFirestore } from '@/firebase';
import { Skeleton } from '@/components/ui/skeleton';
import { doc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Mail, Bell, ShieldCheck } from 'lucide-react';

export default function AccountSettingsPage() {
  const { user, profile, isUserLoading } = useUser();
  const firestore = useFirestore();
  const { toast } = useToast();

  const [emailNotifications, setEmailNotifications] = useState(true);
  const [marketingOffers, setMarketingOffers] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    if (profile) {
      setEmailNotifications(profile.emailNotifications !== false);
      setMarketingOffers(profile.marketingOffers || false);
    }
  }, [profile]);

  const handleUpdatePreferences = async () => {
    if (!user || !firestore) return;
    setIsUpdating(true);

    try {
      // Update both collections for redundancy in preferences
      const userRef = doc(firestore, 'users', user.uid);
      const proRef = doc(firestore, 'professionalProfiles', user.uid);

      const prefs = {
        emailNotifications,
        marketingOffers,
        updatedAt: serverTimestamp()
      };

      await updateDoc(userRef, prefs);
      await updateDoc(proRef, prefs);

      toast({
        title: 'Settings Updated',
        description: 'Your communication preferences have been saved.',
      });
    } catch (err: any) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: err.message || 'Failed to save settings.',
      });
    } finally {
      setIsUpdating(false);
    }
  };

  if (isUserLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <Skeleton className="h-12 w-1/3 mx-auto mb-8" />
        <Skeleton className="h-64 w-full max-w-2xl mx-auto" />
      </div>
    );
  }

  const names = profile?.fullName?.split(' ') || [];
  const firstName = names[0] || '';
  const lastName = names.slice(1).join(' ') || '';

  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl mb-8 text-center text-foreground font-normal">
          Account Settings
        </h1>

        <Tabs defaultValue="user-profile">
          <div className="flex justify-center border-b">
            <TabsList className="bg-transparent p-0 h-auto">
              <TabsTrigger
                value="user-profile"
                className="data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none text-base text-foreground"
              >
                Profile & Security
              </TabsTrigger>
              <TabsTrigger
                value="notifications"
                className="data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none text-base text-foreground"
              >
                Email & Alerts
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="user-profile" className="mt-8">
            <Card className="max-w-2xl mx-auto bg-transparent border-0 shadow-none">
              <CardContent className="p-0 md:p-8 space-y-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="cellphone">Cellphone Number to Login</Label>
                    <Input
                      id="cellphone"
                      defaultValue={profile?.phone || ''}
                      disabled
                      className="bg-secondary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Password</Label>
                    <ChangePasswordDialog>
                      <span className="text-primary text-sm block hover:underline cursor-pointer font-bold">
                        Click here to change password
                      </span>
                    </ChangePasswordDialog>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input
                        id="first-name"
                        defaultValue={firstName}
                        disabled
                        className="bg-secondary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input
                        id="last-name"
                        defaultValue={lastName}
                        disabled
                        className="bg-secondary"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Account Email</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue={user?.email || ''}
                      disabled
                      className="bg-secondary"
                    />
                  </div>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg flex gap-3">
                  <ShieldCheck className="h-5 w-5 text-blue-600 shrink-0" />
                  <p className="text-xs text-blue-800">For security, some profile details are managed by Gaupro Admin. To change your registered phone or email, please contact support.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="mt-8">
            <Card className="max-w-2xl mx-auto bg-transparent border-0 shadow-none">
              <CardContent className="p-0 md:p-8 space-y-10">
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-primary">
                    <Mail className="h-5 w-5" />
                    <h2 className="text-lg font-bold">Email Notifications</h2>
                  </div>
                  
                  <div className="space-y-6 ml-2">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <Label htmlFor="new-requests" className="font-bold text-base">New Customer Leads</Label>
                        <p className="text-sm text-muted-foreground">Receive an email the moment a new job matches your service areas and category.</p>
                      </div>
                      <Checkbox 
                        id="new-requests" 
                        checked={emailNotifications} 
                        onCheckedChange={(val) => setEmailNotifications(!!val)}
                      />
                    </div>

                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <Label htmlFor="marketing" className="font-bold text-base">Marketing & News</Label>
                        <p className="text-sm text-muted-foreground">Get weekly tips, success stories, and special Gaupro credit offers.</p>
                      </div>
                      <Checkbox 
                        id="marketing" 
                        checked={marketingOffers} 
                        onCheckedChange={(val) => setMarketingOffers(!!val)}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-primary">
                    <Bell className="h-5 w-5" />
                    <h2 className="text-lg font-bold">In-App Notifications</h2>
                  </div>
                  <div className="space-y-4 ml-2">
                    <div className="flex items-center justify-between">
                      <Label className="font-normal text-foreground">Lead Alerts Dashboard Badge</Label>
                      <Checkbox defaultChecked disabled />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-6 border-t">
                  <Button 
                    className="bg-red-600 hover:bg-red-700 min-w-[140px] font-bold h-12" 
                    onClick={handleUpdatePreferences}
                    disabled={isUpdating}
                  >
                    {isUpdating ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                    Save Preferences
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
