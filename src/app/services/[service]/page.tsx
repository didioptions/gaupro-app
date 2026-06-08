
import { allServices } from '@/lib/service-questions';
import ServicePageClient from '@/components/services/service-page-client';
import { getServiceLabel, getLocationLabel, generateFAQs } from '@/lib/seo-utils';
import { Metadata } from 'next';

interface PageProps {
  params: { service: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateStaticParams() {
  return allServices.map((service) => ({
    service: service.value,
  }));
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const s = getServiceLabel(params.service);
  const l = getLocationLabel(searchParams?.location as string);
  const title = `${s} ${l} | Compare Trusted Pros | GauPro`;
  const description = `Compare top-rated ${s.toLowerCase()} companies in ${l}. Get free quotes from verified local professionals, read reviews, and hire with confidence on GauPro.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://gaupro.co.za/services/${params.service}${searchParams?.location ? `?location=${searchParams.location}` : ''}`,
    },
    openGraph: {
      title,
      description,
      url: `https://gaupro.co.za/services/${params.service}`,
      siteName: 'GauPro',
      locale: 'en_ZA',
      type: 'website',
    },
  };
}

export default function ServicePage({ params, searchParams }: PageProps) {
  const s = getServiceLabel(params.service);
  const l = getLocationLabel(searchParams?.location as string);
  const faqs = generateFAQs(params.service, searchParams?.location as string);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${s} in ${l}`,
    "description": `Professional ${s.toLowerCase()} services for home and business in ${l}.`,
    "provider": {
      "@type": "Organization",
      "name": "GauPro",
      "url": "https://gaupro.co.za"
    },
    "areaServed": {
      "@type": "City",
      "name": l
    }
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <ServicePageClient params={params} searchParams={searchParams} />
    </>
  );
}
