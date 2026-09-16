import type { Metadata } from 'next';
import './globals.css';
import ClientLayout from '@/components/layout/client-layout';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.gaupro.co.za'),
  title: {
    default: 'Gaupro | Find Trusted Pros for Any Project in South Africa',
    template: '%s | Gaupro'
  },
  description:
    'Gaupro connects you with verified local service professionals across South Africa. Get free quotes for plumbing, electrical, building, and more.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://www.gaupro.co.za/',
    siteName: 'Gaupro',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@GauproSA',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-background text-foreground antialiased flex flex-col min-h-screen">
        <ClientLayout>
          <Header />
          {children}
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}
