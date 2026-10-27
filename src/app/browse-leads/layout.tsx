import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Latest Customer Requests | Service Marketplace',
  description: 'Browse real-time job requests from customers looking for verified professionals in your area.',
  alternates: {
    canonical: 'https://www.gaupro.co.za/browse-leads',
  },
};

export default function BrowseLeadsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
