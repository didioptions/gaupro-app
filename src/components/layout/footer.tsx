
import Link from "next/link";
import { Facebook, Twitter, Linkedin } from 'lucide-react';

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
    ],
  },
  {
    title: 'For Customers',
    links: [
      { text: 'How It Works', href: '/how-it-works' },
      { text: 'Trust & Safety', href: '/trust-and-safety' },
      { text: 'Request Quote', href: '/post-request' },
      { text: 'Contact Us', href: '#' },
    ],
  },
];

const AppButton = ({ platform, icon }: { platform: string, icon: React.ReactNode }) => (
    <button className="flex items-center justify-center w-36 h-12 bg-background border border-gray-300 rounded-md text-foreground hover:bg-gray-100 transition-colors">
        {icon}
        <div className="text-left ml-2">
            <p className="text-xs leading-none">GET IT ON</p>
            <p className="text-sm font-semibold leading-tight">{platform}</p>
        </div>
    </button>
);


export default function Footer() {
  return (
    <footer className="bg-background text-foreground border-t">
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
        
        <div className="border-t pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-lg font-bold text-foreground">
                <span className="font-extrabold text-2xl tracking-tighter">GAU<span className="text-primary">PRO</span></span>
              <span className="text-sm font-normal text-muted-foreground ml-2">© 2025</span>
            </div>
            <nav className="flex gap-4 sm:gap-6 text-sm">
              <Link href="/terms" className="hover:text-primary text-foreground">Terms</Link>
              <Link href="#" className="hover:text-primary text-foreground">Privacy</Link>
              <Link href="#" className="hover:text-primary text-foreground">Cookie Policy</Link>
            </nav>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook className="h-5 w-5"/></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter className="h-5 w-5"/></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin className="h-5 w-5"/></Link>
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
