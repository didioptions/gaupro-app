import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marketplace Dashboard | Gaupro Professional',
  description: 'View the latest high-intent service leads and customer requests across South Africa.',
  alternates: {
    canonical: 'https://www.gaupro.co.za/browse-quotes',
  },
};

export default function BrowseQuotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
