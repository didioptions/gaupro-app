
'use client';

import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';

const creditPacks = [
  { id: '10', credits: 10, price: 300, pricePerCredit: 30, discount: null, save: null },
  { id: '25', credits: 25, price: 650, pricePerCredit: 26, discount: '13% less', save: 'Save R 100' },
  { id: '50', credits: 50, price: 1200, pricePerCredit: 24, discount: '20% less', save: 'Save R 300' },
];

const addOn = {
  id: 'hero-leads',
  name: 'Gaupro Hero Leads',
  price: 200,
  pricePerLead: 6,
};

const paymentMethods = [
    { id: 'credit-card', label: 'Credit Card' },
    { id: 'payfast', label: 'EFT/Card with Payfast' },
    { id: 'direct-deposit', label: 'Direct Deposit' },
];

export default function BuyCreditsPage() {
  const [selectedPack, setSelectedPack] = useState<string | null>(null);
  const [includeAddon, setIncludeAddon] = useState(false);
  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);

  const transactionTotal = useMemo(() => {
    const packPrice = creditPacks.find(p => p.id === selectedPack)?.price || 0;
    const addonPrice = includeAddon ? addOn.price : 0;
    return packPrice + addonPrice;
  }, [selectedPack, includeAddon]);

  const handleProceedToCheckout = () => {
    if (selectedPack) {
      setIsPaymentDialogOpen(true);
    }
  };

  const handlePayment = () => {
    // Placeholder for actual payment logic
    console.log('Processing payment with:', selectedPaymentMethod);
    alert(`Payment processing for R ${transactionTotal.toFixed(2)} via ${selectedPaymentMethod}`);
    setIsPaymentDialogOpen(false);
  };

  return (
      <div className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-normal">Buy Credits</h1>
            <p className="text-xl text-muted-foreground mt-2">
              Your current balance is <span className="font-normal text-red-600">25</span> Credits
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Select Credit Pack</CardTitle>
                <p className="text-muted-foreground">Top up your credits by selecting a credit pack below.</p>
              </CardHeader>
              <CardContent>
                <RadioGroup value={selectedPack || ''} onValueChange={setSelectedPack}>
                  <div className="space-y-4">
                    {creditPacks.map((pack) => (
                      <div key={pack.id} className="p-4 rounded-lg border flex items-center has-[:checked]:bg-blue-50 has-[:checked]:border-primary">
                        <RadioGroupItem value={pack.id} id={`pack-${pack.id}`} />
                        <Label htmlFor={`pack-${pack.id}`} className="flex-grow flex items-center justify-between ml-4 cursor-pointer">
                          <div className="flex items-baseline gap-3">
                            <span className="font-normal">{pack.credits} Credits</span>
                            {pack.discount && <span className="text-sm text-green-600">({pack.discount})</span>}
                            <span className="text-sm text-primary">R{pack.pricePerCredit}/credit</span>
                          </div>
                          <div className="text-right">
                            <p className="font-normal text-lg">R {pack.price}</p>
                            {pack.save && <p className="text-sm text-green-600">{pack.save}</p>}
                          </div>
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Gaupro Add-on</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-4 rounded-lg border flex items-center">
                    <Checkbox id="addon-checkbox" checked={includeAddon} onCheckedChange={(checked) => setIncludeAddon(!!checked)} />
                     <Label htmlFor="addon-checkbox" className="flex-grow flex items-center justify-between ml-4 cursor-pointer">
                        <span className="font-normal">Gaupro Hero Leads <span className="text-sm text-primary">R{addOn.pricePerLead}/lead</span></span>
                        <span className="font-normal text-lg">R {addOn.price}</span>
                     </Label>
                </div>
                <div className="mt-6 p-4 bg-secondary/50 rounded-lg">
                    <h4 className="font-semibold mb-2">Benefits</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        <li>Privileged access to unassisted customers</li>
                        <li>Access to 30 Hero Leads (irrespective of credit value)</li>
                        <li>Each Hero Lead can only be viewed by 3 Pros</li>
                    </ul>
                    <p className="text-xs text-muted-foreground mt-4">
                        Add-on pack functionality only available on the Gaupro website and not mobile applications. Gaupro add-on available when purchasing a credit pack, using credit card or EFT/Card with Payfast, and valid for 30 days from date of purchase.
                    </p>
                </div>
              </CardContent>
            </Card>

             <Card>
                <CardContent className="p-6 flex items-center justify-between">
                    <h3 className="text-xl font-normal">Transaction Total</h3>
                    <p className="text-2xl font-normal text-primary">R {transactionTotal.toFixed(2)}</p>
                </CardContent>
             </Card>
             
             <div className="flex justify-end">
                <Button size="lg" className="px-10" disabled={!selectedPack} onClick={handleProceedToCheckout}>
                    Proceed to Checkout
                </Button>
             </div>

            <Card className="mt-12">
              <CardHeader>
                <CardTitle className="text-2xl font-normal">What are Credits?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>You need to buy credits to respond to customers on Gaupro. The cost of a job varies from 1 to 5 credits and this depends on the size of the job and the number of pros in the area.</p>
                <p>For example, a bigger job like a bathroom remodel will cost 4 credits, while smaller jobs like swimming lessons will be 1 credit. The base cost of 1 credit is R30, but this reduces if you buy credits in bulk.</p>
              </CardContent>
            </Card>

          </div>
        </div>
        <Dialog open={isPaymentDialogOpen} onOpenChange={setIsPaymentDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Choose Payment Method</DialogTitle>
            </DialogHeader>
            <div className="py-4">
                <RadioGroup value={selectedPaymentMethod || ''} onValueChange={setSelectedPaymentMethod}>
                    <div className="space-y-3">
                        {paymentMethods.map(method => (
                            <div key={method.id} className="flex items-center p-3 border rounded-md has-[:checked]:bg-blue-50 has-[:checked]:border-primary">
                                <RadioGroupItem value={method.id} id={method.id} />
                                <Label htmlFor={method.id} className="pl-3 font-normal cursor-pointer text-base">
                                    {method.label}
                                </Label>
                            </div>
                        ))}
                    </div>
                </RadioGroup>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button onClick={handlePayment} disabled={!selectedPaymentMethod} className="bg-red-500 hover:bg-red-600">
                Proceed to Payment
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
  );
}
