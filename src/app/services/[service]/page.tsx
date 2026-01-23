
import { allServices } from '@/lib/service-questions';
import ServicePageClient from '@/components/services/service-page-client';

export async function generateStaticParams() {
  return allServices.map((service) => ({
    service: service.value,
  }));
}

interface PageProps {
  params: { service: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

// This is now a Server Component. It passes data to the Client Component.
export default function ServicePage({ params, searchParams }: PageProps) {
  return <ServicePageClient params={params} searchParams={searchParams} />;
}
