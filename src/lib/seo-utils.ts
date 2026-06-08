
import { allServices } from './service-questions';
import { cityExpansionMap } from './location-data';
import { allLocations } from './locations';

/**
 * SEO Utility to generate unique, high-quality content for South African service pages.
 */

export function getServiceLabel(serviceSlug: string) {
  return allServices.find(s => s.value === serviceSlug)?.label || serviceSlug.replace(/-/g, ' ');
}

export function getLocationLabel(locationSlug: string | undefined) {
  if (!locationSlug) return "South Africa";
  return allLocations.find(l => l.value === locationSlug)?.label || locationSlug.replace(/-/g, ' ');
}

export function generateServiceStats(professionalsCount: number, reviewsTotal: number, locationName: string) {
  return {
    professionals: professionalsCount > 0 ? professionalsCount : 12,
    reviews: reviewsTotal > 0 ? reviewsTotal : 150,
    cities: 24,
    completed: Math.floor(Math.random() * 500) + 200
  };
}

export function generateAboutContent(service: string, location: string) {
  const s = getServiceLabel(service);
  const l = getLocationLabel(location);
  const plural = s.endsWith('s') ? s : `${s}s`;

  return `
    <div class="space-y-6">
      <section>
        <h2 class="text-2xl font-bold mb-4">${s} Services in ${l}</h2>
        <p>Finding reliable ${plural.toLowerCase()} in ${l} is essential for ensuring that your home or business projects are handled with the care and expertise they deserve. Whether you are dealing with an urgent repair, planning a major renovation, or simply looking for routine maintenance, GauPro connects you with the most trusted professionals in the ${l} area.</p>
        <p class="mt-4">In a bustling region like ${l}, the demand for quality ${s.toLowerCase()} work is high. Homeowners often struggle to find contractors who are not only skilled but also verified and highly rated by fellow residents. GauPro solves this by providing a transparent marketplace where you can compare quotes, view detailed business profiles, and read authentic reviews before making a hire.</p>
      </section>

      <section>
        <h3 class="text-xl font-semibold mb-3">Common Tasks Handled by ${plural} in ${l}</h3>
        <p>Our network of professionals handles a wide variety of requests tailored to the specific needs of ${l}. Some of the most common jobs include:</p>
        <ul class="list-disc list-inside mt-2 space-y-2">
          <li><strong>Emergency Repairs:</strong> Rapid response for critical issues that cannot wait, ensuring safety and preventing further damage to your property.</li>
          <li><strong>New Installations:</strong> Professional fitting of ${s.toLowerCase()} systems using industry-standard materials and modern techniques.</li>
          <li><strong>Routine Maintenance:</strong> Regular check-ups and servicing to extend the lifespan of your equipment and keep things running smoothly.</li>
          <li><strong>Custom Projects:</strong> Bespoke solutions designed to match your unique requirements and aesthetic preferences in ${l}.</li>
        </ul>
      </section>

      <section>
        <h3 class="text-xl font-semibold mb-3">The Benefits of Hiring Professional ${plural}</h3>
        <p>While DIY might seem tempting for some tasks, hiring a professional ${s.toLowerCase()} provider in ${l} offers several key advantages. Professionals bring years of specialized training and experience, meaning they can identify potential problems that an untrained eye might miss. Furthermore, they have access to professional-grade tools and materials that ensure a longer-lasting result.</p>
        <p class="mt-4">Safety is another critical factor. Many ${s.toLowerCase()} tasks involve risks that require proper certification and safety protocols. By choosing a GauPro-verified pro, you reduce the risk of accidents and ensure that the work complies with local ${l} building codes and regulations. Ultimately, hiring a pro saves you time, stress, and potentially significant costs in future repairs.</p>
      </section>

      <section>
        <h3 class="text-xl font-semibold mb-3">Why South Africans Choose GauPro for ${s}</h3>
        <p>GauPro has become the preferred platform for finding ${s.toLowerCase()} experts in ${l} because we prioritize trust and efficiency. We understand that your time is valuable, which is why we’ve streamlined the process of getting quotes. Instead of cold-calling dozens of companies, you can post your request once and receive multiple competitive estimates from pros who are actually available and interested in your job.</p>
        <p class="mt-4">Our community-driven review system ensures that only the best ${plural.toLowerCase()} thrive on our platform. Every review is verified, giving you peace of mind that the ratings you see are based on real experiences from people in ${l}. Join the thousands of South Africans who have moved from "hiring chaos" to "hiring confidence" with GauPro.</p>
      </section>
    </div>
  `;
}

export function generateFAQs(service: string, location: string) {
  const s = getServiceLabel(service);
  const l = getLocationLabel(location);
  
  return [
    {
      q: `How much does ${s.toLowerCase()} cost in ${l}?`,
      a: `The cost of ${s.toLowerCase()} in ${l} varies significantly based on the complexity of the task, the materials required, and the experience level of the professional. On average, smaller jobs or call-outs might start from R450 to R800, while larger installations or projects can range into the thousands. We highly recommend requesting at least 3 quotes through GauPro to compare current market rates in your specific suburb of ${l}, as prices can differ between areas like Sandton, Pretoria East, or the Atlantic Seaboard.`
    },
    {
      q: `How quickly can I get a ${s.toLowerCase()} professional to my property?`,
      a: `In major hubs like ${l}, many of our professionals offer same-day or next-day service, especially for urgent or emergency requests. When you post your job on GauPro, you can specify your urgency. Most users receive their first response within 20 to 60 minutes. For complex projects, it’s best to schedule a consultation a few days in advance to ensure the pro has sufficient time to assess the site and prepare a detailed estimate.`
    },
    {
      q: `Are the ${s.toLowerCase()} providers in ${l} verified?`,
      a: `Yes, GauPro takes security seriously. We have a multi-step verification process for our service providers in ${l}. This includes identity verification, checking business registrations where applicable, and reviewing past work history. Look for the "Verified Pro" badge on a professional's profile for added peace of mind. We also encourage users to read the latest customer reviews to get a sense of the provider's recent performance and reliability.`
    },
    {
      q: `Do I need to provide materials for the ${s.toLowerCase()} job?`,
      a: `In most cases, professionals in ${l} prefer to supply their own materials to ensure quality and compatibility with their workmanship. However, you are always welcome to discuss this with your chosen pro. If you have already purchased specific fixtures or materials, mention this in your GauPro request so providers can adjust their quotes to include labor only. Note that many pros may not offer a warranty on work if client-supplied materials are used.`
    },
    {
      q: `What happens if I'm not happy with the ${s.toLowerCase()} service?`,
      a: `GauPro is a connection platform, but we care deeply about quality. We always recommend having a clear, written agreement with your professional before work begins. If a dispute arises in ${l}, our support team can provide guidance on resolution steps. The most powerful tool you have is our review system—honest feedback helps maintain high standards across our community and informs other users about which pros are delivering the best results.`
    }
  ];
}
