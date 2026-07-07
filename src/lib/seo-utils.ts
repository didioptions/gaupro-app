import { allServices } from './service-questions';
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
    // Base value to avoid hydration mismatch; random part added on client
    completedBase: 200
  };
}

export function generateNearbyAreasIntro(service: string, location: string) {
  const s = getServiceLabel(service);
  const l = getLocationLabel(location);
  return `Looking for ${s.toLowerCase()} services near ${l}? GauPro connects thousands of customers with trusted ${s.toLowerCase()} professionals every month. Our network extends beyond the city center, covering a wide radius of residential estates, business hubs, and suburban neighborhoods to ensure you get a rapid response no matter where you are located. Below are some of the nearby areas where our verified ${s.toLowerCase()} teams are currently active and ready to quote.`;
}

export function generatePopularServicesIntro(location: string) {
  const l = getLocationLabel(location);
  return `Homeowners and business managers in ${l} often require a combination of services to maintain their properties. Whether you are moving into a new office in the CBD or renovating a home in the suburbs, these are the most frequently requested professional services in ${l}. GauPro makes it simple to manage multiple projects by connecting you with top-rated local experts across all these essential categories.`;
}

export function generateRelatedServicesIntro(service: string) {
  const s = getServiceLabel(service);
  return `Depending on the specific requirements of your ${s.toLowerCase()} project, you may also need assistance from specialists in complementary fields. We find that customers booking ${s.toLowerCase()} often look for these related services to ensure a comprehensive solution. By hiring verified pros from these categories, you can streamline your workflow and ensure consistent quality across every aspect of your home or business improvement task.`;
}

/**
 * Category-specific expert insights to boost Google E-E-A-T scores.
 */
const categoryKnowledge: Record<string, string> = {
  "plumber": "In South Africa, plumbing work is regulated to ensure water safety and infrastructure integrity. When hiring a plumber in {location}, check if they are registered with PIRB (Plumbing Industry Registration Board). This is particularly important for geyser installations and major renovations, where a Certificate of Compliance (CoC) is often required for insurance purposes.",
  "electrician": "Electrical safety is paramount. Every electrician in {location} must be a registered person with the Department of Labour. For any new wiring, solar integration, or significant repairs, ensure your professional can issue a valid Electrical Certificate of Compliance (CoC). This document is essential for property sales and insurance claims in Gauteng.",
  "builders": "Construction projects in {location} must adhere to the National Building Regulations. If you are building a new home or a significant extension, verify that your builder is registered with the NHBRC (National Home Builders Registration Council). This provides you with a structural warranty and ensures the project meets South African quality standards.",
  "rubble-removal": "Waste management in {location} is subject to municipal bylaws. Professional rubble removal services ensure that your building waste, garden refuse, or household junk is disposed of at legally designated landfill sites. This prevents illegal dumping fines and contributes to a cleaner environment in your suburb.",
  "tree-felling": "Tree removal in urban areas like {location} requires specialized equipment and safety protocols. Professional tree fellers should have public liability insurance to protect your property in case of accidental damage. For large or protected species, ensure the professional understands the local environmental regulations regarding tree removal permits.",
  "cleaning-service": "Whether you need a deep clean for a new tenancy or regular office maintenance in {location}, professional cleaning companies use industrial-grade chemicals and equipment that standard domestic tools can't match. Look for services that offer supervised teams for high-end residential or commercial projects.",
  "painters": "The South African climate, with its high UV levels and summer thunderstorms, can be harsh on exterior paint. Professional painters in {location} understand the importance of proper surface preparation—such as high-pressure cleaning and crack filling—and the use of premium weather-resistant coatings to ensure a long-lasting finish.",
  "demolition": "Controlled demolition in {location} requires precise planning to manage dust, noise, and structural risks. Professional demolition contractors handle the removal of everything from internal walls to entire outbuildings, ensuring that all reusable materials are salvaged and the site is left level and ready for new construction.",
  "plant-hire": "For DIY builders and small contractors in {location}, hiring specialized plant machinery like TLBs, excavators, or bobcats is more cost-effective than ownership. Ensure your hire contract includes a qualified operator and that the equipment is well-maintained to avoid costly downtime on your site.",
  "gardeners": "Maintaining a garden in {location} requires knowledge of local soil types and water-wise planting. From seasonal pruning to lawn fertilization and irrigation setup, local garden services help you maintain a vibrant outdoor space that adds significant value to your property."
};

export function generateAboutContent(service: string, location: string) {
  const s = getServiceLabel(service);
  const l = getLocationLabel(location);
  const plural = s.endsWith('s') ? s : `${s}s`;
  const expertInsight = categoryKnowledge[service]?.replace(/{location}/g, l) || "";

  return `
    <div class="space-y-6">
      <section>
        <h2 class="text-2xl font-bold mb-4">${s} Services in ${l}</h2>
        <p>Finding reliable ${plural.toLowerCase()} in ${l} is essential for ensuring that your home or business projects are handled with the care and expertise they deserve. Whether you are dealing with an urgent repair, planning a major renovation, or simply looking for routine maintenance, GauPro connects you with the most trusted professionals in the ${l} area.</p>
        <p class="mt-4">In a bustling region like ${l}, the demand for quality ${s.toLowerCase()} work is high. Homeowners often struggle to find contractors who are not only skilled but also verified and highly rated by fellow residents. GauPro solves this by providing a transparent marketplace where you can compare quotes, view detailed business profiles, and read authentic reviews before making a hire.</p>
      </section>

      ${expertInsight ? `
      <section class="bg-primary/5 p-6 rounded-xl border-l-4 border-l-primary">
        <h3 class="text-xl font-bold mb-3">Expert Insight: Hiring in ${l}</h3>
        <p class="text-foreground/90 italic leading-relaxed">${expertInsight}</p>
      </section>
      ` : ''}

      <section>
        <h3 class="text-xl font-semibold mb-3">Average Cost of ${s} in ${l}</h3>
        <p>When budgeting for ${s.toLowerCase()} in ${l}, it's important to understand the local market rates. While small call-outs and minor repairs might range between R450 and R900, complex installations or large-scale projects are quoted on a per-job basis. Factors such as material costs, travel distance within ${l}, and the urgency of the work all play a role in the final price. We recommend requesting at least three quotes through our platform to ensure you are receiving a fair and competitive market rate from verified local experts.</p>
      </section>

      <section>
        <h3 class="text-xl font-semibold mb-3">Common Tasks Handled by ${plural} in ${l}</h3>
        <p>Our network of professionals handles a wide variety of requests tailored to the specific needs of ${l}. Some of the most common jobs include:</p>
        <ul class="list-disc list-inside mt-2 space-y-2">
          <li><strong>Emergency Repairs:</strong> Rapid response for critical issues that cannot wait, ensuring safety and preventing further damage to your property.</li>
          <li><strong>New Installations:</strong> Professional fitting of ${s.toLowerCase()} systems using industry-standard materials and modern techniques.</li>
          <li><strong>Routine Maintenance:</strong> Regular check-ups and servicing to extend the lifespan of your equipment and keep things running smoothly.</li>
          <li><strong>Consultations & Quotes:</strong> Expert assessment of your ${l} property to provide accurate, transparent project estimates.</li>
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
      a: `The cost of ${s.toLowerCase()} in ${l} varies significantly based on the complexity of the task, the materials required, and the experience level of the professional. On average, smaller jobs or call-outs might start from R450 to R850, while larger installations or projects can range into the thousands. We highly recommend requesting at least 3 quotes through GauPro to compare current market rates in your specific suburb of ${l}, as prices can differ between areas like Sandton, Pretoria East, or the Atlantic Seaboard. Always ensure your quote includes VAT and a breakdown of parts and labor.`
    },
    {
      q: `How quickly can I get a ${s.toLowerCase()} professional to my property in ${l}?`,
      a: `In major hubs like ${l}, many of our professionals offer same-day or next-day service, especially for urgent or emergency requests. When you post your job on GauPro, you can specify your urgency. Most users receive their first response within 20 to 60 minutes. For complex projects, it’s best to schedule a consultation a few days in advance to ensure the pro has sufficient time to assess the site and prepare a detailed estimate. Our system prioritizes local pros closest to your address to ensure the fastest response time possible.`
    },
    {
      q: `Are the ${s.toLowerCase()} providers in ${l} verified and insured?`,
      a: `Yes, GauPro takes security seriously. We have a multi-step verification process for our service providers in ${l}. This includes identity verification, checking business registrations where applicable, and reviewing past work history. Look for the "Verified Pro" badge on a professional's profile for added peace of mind. While we verify credentials, we also recommend asking your chosen pro about their specific public liability insurance coverage for your particular project before work commences.`
    },
    {
      q: `Do I need to provide materials for the ${s.toLowerCase()} job?`,
      a: `In most cases, professionals in ${l} prefer to supply their own materials to ensure quality and compatibility with their workmanship. This also usually allows the professional to offer a warranty on both the parts and the labor. However, you are always welcome to discuss this with your chosen pro. If you have already purchased specific fixtures or materials, mention this in your GauPro request so providers can adjust their quotes to include labor only. Note that many pros may not offer a guarantee if client-supplied materials are used.`
    },
    {
      q: `What should I look for when comparing ${s.toLowerCase()} quotes in ${l}?`,
      a: `When you receive multiple quotes on GauPro, look beyond just the final price. Compare the professional's rating, read their recent reviews from other ${l} residents, and look at their portfolio of completed work. A detailed quote should include a clear scope of work, estimated timelines, and payment terms. Choosing a pro with specific experience in your type of project often leads to a better long-term result, even if their initial quote is not the lowest.`
    },
    {
      q: `Can I get emergency ${s.toLowerCase()} help after hours in ${l}?`,
      a: `Many of the service providers in our ${l} network offer 24/7 emergency support for critical trades like plumbing, electrical, and security. When posting your request, select the 'ASAP' urgency. Pros who offer after-hours service will be notified immediately. Keep in mind that emergency call-out fees in ${l} are typically higher than standard daytime rates, but they provide the essential peace of mind that a professional is on the way to resolve your crisis.`
    },
    {
      q: `What happens if I'm not happy with the ${s.toLowerCase()} service provided?`,
      a: `GauPro is a connection platform, but we care deeply about quality. We always recommend having a clear, written agreement with your professional before work begins. If a dispute arises in ${l}, our support team can provide guidance on resolution steps. The most powerful tool you have is our review system—honest feedback helps maintain high standards across our community and informs other users about which pros are delivering the best results in your city.`
    }
  ];
}
