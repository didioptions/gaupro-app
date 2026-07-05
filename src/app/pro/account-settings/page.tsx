'use client';

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
import { useUser } from '@/firebase';
import { Skeleton } from '@/components/ui/skeleton';

export default function AccountSettingsPage() {
  const { user, profile, isUserLoading } = useUser();

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
          Edit Account Profile
        </h1>

        <Tabs defaultValue="user-profile">
          <div className="flex justify-center border-b">
            <TabsList className="bg-transparent p-0 h-auto">
              <TabsTrigger
                value="user-profile"
                className="data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none text-base text-foreground"
              >
                User Profile
              </TabsTrigger>
              <TabsTrigger
                value="notifications"
                className="data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none text-base text-foreground"
              >
                Notifications
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
                      <span className="text-primary text-sm block hover:underline cursor-pointer">
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
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue={user?.email || ''}
                      disabled
                      className="bg-secondary"
                    />
                  </div>
                </div>

                <div>
                  <h2 className="text-lg font-semibold mb-4 text-foreground">
                    Update your email preferences
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-2">
                      <Checkbox id="marketing" />
                      <Label
                        htmlFor="marketing"
                        className="font-normal text-foreground"
                      >
                        I want to receive marketing and promotional offers
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox id="no-communication" />
                      <div className="grid gap-1.5 leading-none">
                        <Label
                          htmlFor="no-communication"
                          className="font-normal text-foreground"
                        >
                          I don't want any form of communication from Gaupro.
                        </Label>
                        <p className="text-sm text-foreground">
                          Remove me from all mailing lists
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end gap-2 pt-4">
                  <Button variant="outline">Cancel</Button>
                  <Button className="bg-red-500 hover:bg-red-600">Update</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="notifications" className="mt-8">
            <Card className="max-w-2xl mx-auto bg-transparent border-0 shadow-none">
              <CardContent className="p-0 md:p-8 space-y-8">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-lg font-semibold text-foreground">
                      Email Notifications
                    </h2>
                    <p className="text-muted-foreground text-sm">
                      Choose the emails you want to receive from Gaupro.
                    </p>
                  </div>
                  <div className="space-y-4 ml-2">
                    <div className="flex items-center justify-between">
                      <Label
                        htmlFor="new-requests"
                        className="font-normal text-foreground"
                      >
                        New Customer Requests email notifications
                      </Label>
                      <Checkbox id="new-requests" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label
                        htmlFor="request-reminders"
                        className="font-normal text-foreground"
                      >
                        Request Reminders
                      </Label>
                      <Checkbox id="request-reminders" defaultChecked />
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h2 className="text-lg font-semibold text-foreground">
                      Mobile App Notifications
                    </h2>
                  </div>
                  <div className="space-y-4 ml-2">
                    <div className="flex items-center justify-between">
                      <Label
                        htmlFor="push-notifications"
                        className="font-normal text-foreground"
                      >
                        Customer Request Push Notifications
                      </Label>
                      <Checkbox id="push-notifications" defaultChecked />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-4">
                  <Button variant="outline">Cancel</Button>
                  <Button className="bg-red-500 hover:bg-red-600">Update</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
