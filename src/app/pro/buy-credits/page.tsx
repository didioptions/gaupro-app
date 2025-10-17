'use client';

import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const creditPacks = [
  { id: '10', credits: 10, price: 300, pricePerCredit: 30, discount: null, save: null },
  { id: '25', credits: 25, price: 650, pricePerCredit: 26, discount: '13% less', save: 'Save R 100' },
  { id: '50', credits: 50, price: 1200, pricePerCredit: 24, discount: '20% less', save: 'Save R 300' },
];

const addOn = {
  id: 'hero-leads',
  name: 'Snupit Hero Leads',
  price: 200,
  pricePerLead: 6,
};

export default function BuyCreditsPage() {
  const [selectedPack, setSelectedPack] = useState<string | null>(null);
  const [includeAddon, setIncludeAddon] = useState(false);

  const transactionTotal = useMemo(() => {
    const packPrice = creditPacks.find(p => p.id === selectedPack)?.price || 0;
    const addonPrice = includeAddon ? addOn.price : 0;
    return packPrice + addonPrice;
  }, [selectedPack, includeAddon]);

  return (
      <div className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold">Buy Credits</h1>
            <p className="text-xl text-muted-foreground mt-2">
              Your current balance is <span className="font-bold text-red-600">0</span> Credits
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
                            <span className="font-semibold">{pack.credits} Credits</span>
                            {pack.discount && <span className="text-sm text-green-600">({pack.discount})</span>}
                            <span className="text-sm text-primary">R{pack.pricePerCredit}/credit</span>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-lg">R {pack.price}</p>
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
                <CardTitle>Snupit Add-on</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-4 rounded-lg border flex items-center">
                    <Checkbox id="addon-checkbox" checked={includeAddon} onCheckedChange={(checked) => setIncludeAddon(!!checked)} />
                     <Label htmlFor="addon-checkbox" className="flex-grow flex items-center justify-between ml-4 cursor-pointer">
                        <span className="font-semibold">Snupit Hero Leads <span className="text-sm text-primary">R{addOn.pricePerLead}/lead</span></span>
                        <span className="font-bold text-lg">R {addOn.price}</span>
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
                        Add-on pack functionality only available on the Snupit website and not mobile applications. Snupit add-on available when purchasing a credit pack, using credit card or EFT/Card with Payfast, and valid for 30 days from date of purchase.
                    </p>
                </div>
              </CardContent>
            </Card>

             <Card>
                <CardContent className="p-6 flex items-center justify-between">
                    <h3 className="text-xl font-bold">Transaction Total</h3>
                    <p className="text-2xl font-extrabold text-primary">R {transactionTotal.toFixed(2)}</p>
                </CardContent>
             </Card>
             
             <div className="flex justify-end">
                <Button size="lg" className="px-10" disabled={!selectedPack}>
                    Proceed to Checkout
                </Button>
             </div>
          </div>
        </div>
      </div>
  );
}
