
import { notFound } from 'next/navigation';
import { getProfessionalById, allProfessionals } from '@/lib/professionals-data';
import ProfileDisplay from '@/components/pro/profile-display';
import type { Professional } from '@/components/pro/profile-display';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export async function generateStaticParams() {
  const paths = Object.values(allProfessionals).flat().map(pro => ({
    profileId: pro.id,
  }));
  return paths;
}

interface PageProps {
  params: { profileId: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function ProfessionalProfilePage({ params, searchParams }: PageProps) {
  const profileId = params.profileId;
  const professionalData = getProfessionalById(profileId);

  if (!professionalData) {
    notFound();
  }

  const serviceQuery = typeof searchParams.service === 'string' ? searchParams.service : 'general services';
  const singularOrPluralLowercase = serviceQuery.endsWith('s') ? serviceQuery.toLowerCase() : `${serviceQuery.toLowerCase()}s`;
  
  const processedProfessional: Professional = {
    ...professionalData,
    description: professionalData.description.replace('{service}', singularOrPluralLowercase),
    tags: professionalData.tags ? professionalData.tags : [singularOrPluralLowercase],
  };

  return (
    <>
      <Header />
      <main className="bg-secondary/50">
        <ProfileDisplay professional={processedProfessional} />
      </main>
      <Footer />
    </>
  );
}
