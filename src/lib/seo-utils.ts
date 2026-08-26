import { allServices } from './service-questions';
import { allLocations } from './locations';

/**
 * SEO Utility to generate unique, high-quality content for South African service pages.
 * Optimized for Johannesburg Lead Machine services.
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
    professionals: Math.max(professionalsCount, 15),
    reviews: Math.max(reviewsTotal, 45),
    cities: 24,
    completedBase: 200
  };
}

export function generateNearbyAreasIntro(service: string, location: string) {
  const s = getServiceLabel(service);
  const l = getLocationLabel(location);
  return `Looking for ${s.toLowerCase()} services near ${l}? Gaupro connects thousands of customers with trusted ${s.toLowerCase()} professionals every month. Our network covers a wide radius including Sandton, Randburg, and Roodepoort to ensure a rapid response.`;
}

export function generatePopularServicesIntro(location: string) {
  const l = getLocationLabel(location);
  return `Property owners in ${l} often require multiple maintenance services. Gaupro simplifies hiring by connecting you with top-rated local experts across these essential categories.`;
}

export function generateRelatedServicesIntro(service: string) {
  const s = getServiceLabel(service);
  return `Customers booking ${s.toLowerCase()} often find these related services useful to ensure a comprehensive solution for their project.`;
}

const hardenedAboutContent: Record<string, (location: string) => string> = {
  "plumber": (l) => `
    <div class="space-y-6">
      <section>
        <h2 class="text-3xl font-bold mb-4">Professional Plumbing Solutions in ${l}</h2>
        <p>When a pipe bursts or a geyser fails, you need a verified expert who understands the unique plumbing infrastructure of ${l}. From aging pipes in established suburbs to the high-pressure needs of new developments, Gaupro connects you with PIRB-registered professionals.</p>
      </section>
      <section class="bg-primary/5 p-6 rounded-xl border-l-4 border-l-primary">
        <h3 class="text-xl font-bold mb-3">PIRB & CoC Compliance in ${l}</h3>
        <p class="text-sm">By law, major plumbing work in ${l}—specifically geyser installations—must be performed by a PIRB registered plumber. This allows them to issue a Certificate of Compliance (CoC), vital for insurance and property sales.</p>
      </section>
      <section>
        <h3 class="text-xl font-semibold mb-3">Plumbing Price Guide for ${l} (2025)</h3>
        <ul class="list-disc list-inside space-y-2">
          <li><strong>Call-out:</strong> R450 – R850.</li>
          <li><strong>Geyser Replacement (150L):</strong> R8,500 – R15,500.</li>
          <li><strong>Leak Detection:</strong> R1,200 – R2,800.</li>
        </ul>
      </section>
    </div>
  `,
  "rubble-removal": (l) => `
    <div class="space-y-6">
      <section>
        <h2 class="text-3xl font-bold mb-4">Verified Rubble Removal in ${l}</h2>
        <p>Illegal dumping is a major concern in ${l}. Gaupro connects you with rubble removal specialists who use 4-ton and 6-ton trucks to clear construction debris, garden refuse, and household waste, ensuring safe disposal at municipal weighbridges.</p>
      </section>
      <section class="bg-primary/5 p-6 rounded-xl border-l-4 border-l-primary">
        <h3 class="text-xl font-bold mb-3">Johannesburg Waste Bylaws</h3>
        <p class="text-sm">Suburbs in ${l} require waste removal within 48 hours to avoid heavy fines. Our pros guarantee legal dumping, protecting you from liability.</p>
      </section>
      <section>
        <h3 class="text-xl font-semibold mb-3">Rubble Removal Rates in ${l}</h3>
        <ul class="list-disc list-inside space-y-2">
          <li><strong>4-Ton Truck:</strong> R950 – R1,450 per load.</li>
          <li><strong>6-Ton Truck:</strong> R1,600 – R2,400 per load.</li>
          <li><strong>Mixed Garden Waste:</strong> R650 – R1,100 per load.</li>
        </ul>
      </section>
    </div>
  `,
  "tlb-hire": (l) => `
    <div class="space-y-6">
      <section>
        <h2 class="text-3xl font-bold mb-4">TLB Hire in ${l} with Certified Operators</h2>
        <p>For excavations, trenching, and site leveling in ${l}, a TLB is the most versatile machine. We offer "Wet Hire" solutions which include a well-maintained machine, fuel, and a certified operator.</p>
      </section>
      <section class="bg-primary/5 p-6 rounded-xl border-l-4 border-l-primary">
        <h3 class="text-xl font-bold mb-3">Safety & Productivity</h3>
        <p class="text-sm">In ${l}, terrain can vary from soft soil to hard rock. Our operators are experienced in handling local conditions safely and efficiently.</p>
      </section>
      <section>
        <h3 class="text-xl font-semibold mb-3">TLB Hire Cost in ${l}</h3>
        <ul class="list-disc list-inside space-y-2">
          <li><strong>Daily Rate (8h):</strong> R3,800 – R5,800 (Wet Hire).</li>
          <li><strong>Establishment Fee:</strong> R1,500 – R3,500 depending on location.</li>
        </ul>
      </section>
    </div>
  `,
  "swimming-pool-demolition": (l) => `
    <div class="space-y-6">
      <section>
        <h2 class="text-3xl font-bold mb-4">Professional Pool Removal & Backfilling in ${l}</h2>
        <p>Removing an old or leaking pool requires specialized engineering. Gaupro connects you with demolition pros in ${l} who handle concrete breaking, fiberglass shell removal, and certified soil compaction.</p>
      </section>
      <section class="bg-primary/5 p-6 rounded-xl border-l-4 border-l-primary">
        <h3 class="text-xl font-bold mb-3">Compaction is Key</h3>
        <p class="text-sm">Improper backfilling causes ground subsidence. Our ${l} teams follow strict G5 material layering and compaction protocols to ensure a level, building-ready surface.</p>
      </section>
      <section>
        <h3 class="text-xl font-semibold mb-3">Pool Removal Pricing (${l})</h3>
        <ul class="list-disc list-inside space-y-2">
          <li><strong>Standard Pool Demo:</strong> R25,000 – R45,000.</li>
          <li><strong>Large/Difficult Access:</strong> R45,000 – R75,000.</li>
        </ul>
      </section>
    </div>
  `,
  "demolition": (l) => `
    <div class="space-y-6">
      <section>
        <h2 class="text-3xl font-bold mb-4">Structural Demolition Contractors in ${l}</h2>
        <p>From internal wall removal to full house demolition, safety is paramount. Our JHB contractors provide mechanical dismantling, site clearing, and hazardous material management in line with OHS acts.</p>
      </section>
      <section>
        <h3 class="text-xl font-semibold mb-3">Demolition Costs in ${l}</h3>
        <ul class="list-disc list-inside space-y-2">
          <li><strong>Internal Wall:</strong> R8,000 – R16,000.</li>
          <li><strong>Small House (3-Bed):</strong> R65,000 – R130,000.</li>
        </ul>
      </section>
    </div>
  `,
  "site-clearance": (l) => `
    <div class="space-y-6">
      <section>
        <h2 class="text-3xl font-bold mb-4">Site Clearing & Land Leveling in ${l}</h2>
        <p>Prepare your plot for building with professional site clearance. We handle the removal of heavy vegetation, trees, and debris using Bobcats and TLBs in all ${l} suburbs.</p>
      </section>
      <section>
        <h3 class="text-xl font-semibold mb-3">Site Clearing Rates (${l})</h3>
        <ul class="list-disc list-inside space-y-2">
          <li><strong>Residential Plot (<1000m²):</strong> R4,500 – R12,000.</li>
          <li><strong>Bulk Clearing:</strong> Quoted per day or per m³.</li>
        </ul>
      </section>
    </div>
  `,
};

const hardenedFAQs: Record<string, (location: string) => { q: string, a: string }[]> = {
  "plumber": (l) => [
    { q: `What is the standard plumber call-out fee in ${l}?`, a: `In ${l}, call-out fees average R450 – R850. This covers the first hour of assessment.` },
    { q: `Can you issue a Plumbing CoC in ${l}?`, a: `Yes, all our geyser and structural plumbing partners in ${l} are PIRB registered to issue certificates of compliance.` }
  ],
  "rubble-removal": (l) => [
    { q: `Is the labor for loading included in ${l}?`, a: `Yes, standard quotes in ${l} usually include a team of 2–3 loaders for a 4-ton or 6-ton truck.` },
    { q: `Do you remove garden waste in ${l}?`, a: `Yes, our JHB teams handle building rubble, garden refuse, and general waste.` }
  ],
  "tlb-hire": (l) => [
    { q: `Is fuel included in the TLB hire rate in ${l}?`, a: `Yes, our "Wet Hire" rates in ${l} include the machine, operator, and diesel.` },
    { q: `Can I hire a TLB for just 4 hours in JHB?`, a: `Some providers in ${l} offer half-day rates, but a full 8-hour shift is standard for most plant hire companies.` }
  ],
  "swimming-pool-demolition": (l) => [
    { q: `Do I need a permit for pool removal in ${l}?`, a: `In ${l}, minor garden work often doesn't require a permit, but structural demolition and drainage changes should be verified with local council bylaws.` },
    { q: `Will my yard sink after filling the pool?`, a: `Not if it is backfilled correctly. Our JHB experts use G5 soil and vibrating compactors in layers to ensure zero subsidence.` }
  ],
  "demolition": (l) => [
    { q: `Do you handle asbestos removal during demolition in ${l}?`, a: `Asbestos requires specialized certification. Our JHB demolition partners will assess your site and bring in certified hazmat teams if needed.` }
  ],
  "site-clearance": (l) => [
    { q: `Do you remove trees during site clearance in ${l}?`, a: `Yes, our JHB site clearing teams often include tree felling specialists for complete plot preparation.` }
  ]
};

export function getServiceKnowledge(service: string, location: string): string {
  if (hardenedAboutContent[service]) {
    return hardenedAboutContent[service](location);
  }
  const s = getServiceLabel(service);
  const l = getLocationLabel(location);
  return `
    <div class="space-y-6">
      <section>
        <h2 class="text-2xl font-bold mb-4">${s} Services in ${l}</h2>
        <p>Finding reliable ${s.toLowerCase()} in ${l} is essential for your property maintenance. Gaupro connects you with the most trusted professionals in the ${l} area.</p>
      </section>
    </div>
  `;
}

export function generateAboutContent(service: string, location: string) {
  return getServiceKnowledge(service, location);
}

export function generateFAQs(service: string, location: string) {
  const l = getLocationLabel(location);
  if (hardenedFAQs[service]) {
    return hardenedFAQs[service](l);
  }
  return [
    {
      q: `How much does ${getServiceLabel(service).toLowerCase()} cost in ${l}?`,
      a: `Prices vary based on complexity. We recommend requesting at least 3 quotes through Gaupro to compare current market rates in ${l}.`
    },
    {
      q: `How quickly can I get help in ${l}?`,
      a: `Most JHB users receive their first response within 20 to 60 minutes.`
    }
  ];
}
