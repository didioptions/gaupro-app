
'use client';

import Link from "next/link";
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import { usePathname } from "next/navigation";
import Image from 'next/image';

const footerSections = [
  {
    title: 'For Professionals',
    links: [
      { text: 'Browse Quotes', href: '/browse-quotes' },
      { text: 'Join as a Pro', href: '/pro/signup' },
      { text: 'How it Works for Pros', href: '/how-it-works-for-pros' },
      { text: 'Pro Success Stories', href: '/pro-success-stories' },
      { text: 'Pro Centre', href: '/pro-centre' },
    ],
  },
  {
    title: '🏆 About Gaupro',
    links: [
      { text: 'About Us', href: '/about' },
      { text: 'Our Mission', href: '/our-mission' },
      { text: 'Blog', href: '/blog' },
      { text: "Careers (We're Hiring!)", href: '/careers' },
      { text: 'Contact Us', href: '/contact' },
    ],
  },
  {
    title: 'For Customers',
    links: [
      { text: 'How It Works', href: '/how-it-works' },
      { text: 'Trust & Safety', href: '/trust-and-safety' },
      { text: 'Request Quote', href: '/post-request' },
      { text: 'FAQ', href: '/faq' },
    ],
  },
];

const locationsData = [
    { type: 'province', name: 'Gauteng' },
    { type: 'city', name: 'Alberton' },
    { type: 'city', name: 'Benoni' },
    { type: 'city', name: 'Boksburg' },
    { type: 'city', name: 'Brakpan' },
    { type: 'city', name: 'Centurion' },
    { type: 'city', name: 'Edenvale' },
    { type: 'city', name: 'Germiston' },
    { type: 'city', name: 'Johannesburg' },
    { type: 'city', name: 'Kempton Park' },
    { type: 'city', name: 'Krugersdorp' },
    { type: 'city', name: 'Midrand' },
    { type: 'city', name: 'Pretoria' },
    { type: 'city', name: 'Randburg' },
    { type: 'city', name: 'Roodepoort' },
    { type: 'city', name: 'Sandton' },
    { type: 'city', name: 'Soweto' },
    { type: 'city', name: 'Springs' },
    { type: 'city', name: 'Vanderbijlpark' },
    { type: 'city', name: 'Vereeniging' },
    { type: 'province', name: 'KwaZulu-Natal' },
    { type: 'city', name: 'Amanzimtoti' },
    { type: 'city', name: 'Ballito' },
    { type: 'city', name: 'Chatsworth' },
    { type: 'city', name: 'Durban' },
    { type: 'city', name: 'Hillcrest' },
    { type: 'city', name: 'Howick' },
    { type: 'city', name: 'Kloof' },
    { type: 'city', name: 'Ladysmith' },
    { type: 'city', name: 'Newcastle' },
    { type: 'city', name: 'Phoenix' },
    { type: 'city', name: 'Pietermaritzburg' },
    { type: 'city', name: 'Pinetown' },
    { type: 'city', name: 'Port Shepstone' },
    { type: 'city', name: 'Richards Bay' },
    { type: 'city', name: 'Stanger' },
    { type: 'city', name: 'Umhlanga' },
    { type: 'province', name: 'Western Cape' },
    { type: 'city', name: 'Brackenfell' },
    { type: 'city', name: 'Cape Town' },
    { type: 'city', name: 'George' },
    { type: 'city', name: 'Goodwood' },
    { type: 'city', name: 'Kraaifontein' },
    { type: 'city', name: 'Kuils River' },
    { type: 'city', name: 'Mossel Bay' },
    { type: 'city', name: 'Paarl' },
    { type: 'city', name: 'Plettenberg Bay' },
    { type: 'city', name: 'Somerset West' },
    { type: 'city', name: 'Stellenbosch' },
    { type: 'city', name: 'Table View' },
    { type: 'province', name: 'North West' },
    { type: 'city', name: 'Klerksdorp' },
    { type: 'city', name: 'Potchefstroom' },
    { type: 'city', name: 'Rustenburg' },
    { type: 'province', name: 'Mpumalanga' },
    { type: 'city', name: 'Nelspruit' },
    { type: 'city', name: 'Witbank' },
    { type: 'province', name: 'Free State' },
    { type: 'city', name: 'Bloemfontein' },
    { type: 'province', name: 'Eastern Cape' },
    { type: 'city', name: 'East London' },
    { type: 'city', name: 'Port Elizabeth' },
    { type: 'province', name: 'Limpopo' },
    { type: 'city', name: 'Polokwane' },
];

const Logo = () => (
  <span className="flex items-center space-x-2">
    <Image
      src="https://firebasestorage.googleapis.com/v0/b/studio-5618869838-18486.firebasestorage.app/o/LOGO-1.jpg?alt=media&token=4feae3fa-00ef-43a5-8fb2-bad34615f0a4"
      alt="Gaupro Logo"
      width={32}
      height={32}
      className="h-8 w-8"
    />
    <span className="font-semibold text-2xl tracking-tighter text-primary">
      aupro
    </span>
  </span>
);

export default function Footer() {
  const pathname = usePathname();
  const showLocations = pathname === '/';

  return (
    <footer className="bg-background text-foreground border-t">
        {showLocations && (
          <div className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-xl font-bold text-center md:text-left mb-8">Browse Top Service Professionals in South Africa</h2>
               <div className="columns-2 md:columns-4 lg:columns-6 gap-x-8 text-sm">
                  {locationsData.map((loc, index) => {
                      const slug = loc.name.toLowerCase().replace(/\s+/g, '-');
                      const href = `/services/in/${slug}`;
                      return (
                          <div
                              key={index}
                              className={loc.type === 'province' ? 'font-bold text-foreground pt-4' : 'text-foreground'}
                          >
                              <Link href={href} className="hover:text-primary block py-1">
                                  {loc.name}
                              </Link>
                          </div>
                      );
                  })}
                  <div className="text-red-600">
                      <Link href="#" className="hover:text-red-700 block py-1">
                          More...
                      </Link>
                  </div>
              </div>
          </div>
        </div>
        )}
      <div className="bg-secondary/50">
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              {footerSections.map((section) => (
                <div key={section.title}>
                  <h3 className="font-semibold mb-4 text-foreground">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.text}>
                        <Link href={link.href} className="text-sm text-foreground hover:text-primary">
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div>
                <h3 className="font-semibold mb-4 text-foreground">Download Apps</h3>
                <div className="flex flex-col space-y-4 mt-6">
                    <Link href="#" className="inline-block">
                        <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" className="h-12"/>
                    </Link>
                    <Link href="#" className="inline-block">
                        <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" className="h-12"/>
                    </Link>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="border-t pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-lg font-bold text-foreground">
                <Logo />
              <span className="text-sm font-normal text-foreground ml-2">© 2025</span>
            </div>
            <nav className="flex gap-4 sm:gap-6 text-sm">
              <Link href="/terms" className="hover:text-primary text-foreground">Terms</Link>
              <Link href="/privacy" className="hover:text-primary text-foreground">Privacy</Link>
              <Link href="/cookie-policy" className="hover:text-primary text-foreground">Cookie Policy</Link>
            </nav>
            <div className="flex gap-4">
              <Link href="#" className="text-foreground hover:text-primary"><Facebook className="h-5 w-5"/></Link>
              <Link href="#" className="text-foreground hover:text-primary"><Twitter className="h-5 w-5"/></Link>
              <Link href="#" className="text-foreground hover:text-primary"><Linkedin className="h-5 w-5"/></Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center sm:text-left text-xs text-foreground space-y-2">
            <p>
                By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners.
            </p>
            <p>
                2012-2025 © Gaupro Pty Ltd. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
}
