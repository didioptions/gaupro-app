
'use client';

import Link from "next/link";
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import { usePathname } from "next/navigation";

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
    <svg
      width="32"
      height="32"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
    >
      <path
        d="M0 26.6667L40 0L80 26.6667V80H0V26.6667Z"
        fill="hsl(var(--destructive))"
      />
      <path
        d="M45.72 56.88V48.16C45.72 44.4 44.48 41.52 41.84 39.52C39.24 37.52 35.84 36.52 31.64 36.52C27.8 36.52 24.68 37.32 22.28 38.92V27.4H53.4V20.2H14.84V60H30.8C31.76 60 32.5333 59.8533 33.12 59.56C33.7067 59.2667 34.12 58.8 34.36 58.16L35.8 54.4C36.92 56.4 38.4667 57.8933 40.44 58.88C42.4133 59.8667 44.44 60.36 46.52 60.36C49.96 60.36 52.6667 59.32 54.64 57.24C56.6133 55.16 57.6 52.2667 57.6 48.56C57.6 44.44 56.4667 41.1333 54.2 38.64C51.9333 36.1467 48.88 34.9 45.04 34.9H41.64V43.72H45.04C46.8533 43.72 48.12 44.2933 48.84 45.44C49.56 46.5867 49.92 47.92 49.92 49.44C49.92 51.16 49.3867 52.5467 48.32 53.6C47.2533 54.6533 45.8 55.28 43.96 55.48L45.72 56.88Z"
        fill="white"
      />
    </svg>
    <span className="font-extrabold text-2xl tracking-tighter">
      <span className="text-primary">aupro</span>
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
