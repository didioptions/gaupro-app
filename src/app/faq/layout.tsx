import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Gaupro Help Centre',
  description: 'Find answers to common questions about using the Gaupro platform as a customer or professional.',
  alternates: {
    canonical: 'https://www.gaupro.co.za/faq',
  },
};

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
