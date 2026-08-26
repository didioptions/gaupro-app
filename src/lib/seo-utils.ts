import { allServices } from './service-questions';
import { allLocations } from './locations';

/**
 * SEO Utility to generate unique, high-quality content for South African service pages.
 * This version includes "Hardened" content for the Top Priority Johannesburg Lead Machine Services.
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
  return `Looking for ${s.toLowerCase()} services near ${l}? Gaupro connects thousands of customers with trusted ${s.toLowerCase()} professionals every month. Our network extends beyond the city center, covering a wide radius of residential estates, business hubs, and suburban neighborhoods to ensure you get a rapid response no matter where you are located. Below are some of the nearby areas where our verified ${s.toLowerCase()} teams are currently active and ready to quote.`;
}

export function generatePopularServicesIntro(location: string) {
  const l = getLocationLabel(location);
  return `Homeowners and business managers in ${l} often require a combination of services to maintain their properties. Whether you are moving into a new office in the CBD or renovating a home in the suburbs, these are the most frequently requested professional services in ${l}. Gaupro makes it simple to manage multiple projects by connecting you with top-rated local experts across all these essential categories.`;
}

export function generateRelatedServicesIntro(service: string) {
  const s = getServiceLabel(service);
  return `Depending on the specific requirements of your ${s.toLowerCase()} project, you may also need assistance from specialists in complementary fields. We find that customers booking ${s.toLowerCase()} often look for these related services to ensure a comprehensive solution. By hiring verified pros from these categories, you can streamline your workflow and ensure consistent quality across every aspect of your home or business improvement task.`;
}

/**
 * HARDENED CONTENT FOR TOP SERVICES (Johannesburg Lead Machine)
 */
const hardenedAboutContent: Record<string, (location: string) => string> = {
  "plumber": (l) => `
    <div class="space-y-6">
      <section>
        <h2 class="text-3xl font-bold mb-4">Professional Plumbing Solutions in ${l}</h2>
        <p>When a pipe bursts or a geyser fails, you don't just need a plumber; you need a verified expert who understands the unique plumbing infrastructure of ${l}. From the aging pipes in established suburbs to the high-pressure requirements of modern developments, Gaupro connects you with PIRB-registered professionals who guarantee their workmanship.</p>
        <p class="mt-4">Plumbing issues in South Africa are often exacerbated by water pressure fluctuations and hard water conditions. A professional plumber in ${l} doesn't just fix the leak; they evaluate the integrity of your entire system, providing long-term relief from recurring problems.</p>
      </section>

      <section class="bg-primary/5 p-6 rounded-xl border-l-4 border-l-primary">
        <h3 class="text-xl font-bold mb-3">Expert Insight: The PIRB and CoC in ${l}</h3>
        <p class="text-foreground/90 italic leading-relaxed">By law, any significant plumbing work in ${l}—especially geyser installations—must be performed by a PIRB (Plumbing Industry Registration Board) registered plumber. This allows them to issue a Certificate of Compliance (CoC), which is essential for insurance claims and property sales. Always ask your Gaupro pro for their PIRB registration number before work begins.</p>
      </section>

      <section>
        <h3 class="text-xl font-semibold mb-3">Realistic Plumbing Costs in ${l} (2025 Benchmarks)</h3>
        <p>Budgeting for plumbing requires an understanding of standard call-out fees and task-specific pricing. In ${l}, expect the following benchmarks:</p>
        <ul class="list-disc list-inside mt-4 space-y-2">
          <li><strong>Standard Call-out:</strong> R450 – R850 (covers first hour or assessment).</li>
          <li><strong>Geyser Replacement (150L):</strong> R8,500 – R15,000 (depending on brand and installation complexity).</li>
          <li><strong>Leak Detection:</strong> R1,200 – R2,500 (using acoustic or gas detection technology).</li>
          <li><strong>Unblocking Drains:</strong> R650 – R1,500 (standard mechanical unblocking).</li>
        </ul>
      </section>
    </div>
  `,
  "rubble-removal": (l) => `
    <div class="space-y-6">
      <section>
        <h2 class="text-3xl font-bold mb-4">Professional Rubble Removal in ${l}</h2>
        <p>Tidying up after a renovation or construction project is a massive task. In ${l}, illegal dumping has become a major environmental concern, and property owners are legally liable for the waste generated on their sites. Gaupro connects you with verified rubble removal companies in ${l} who guarantee legal and safe disposal at municipal weighbridges.</p>
        <p class="mt-4">Our rubble removal specialists in ${l} provide the trucks, the labor, and the peace of mind that your site will be left spotless. Whether it is building rubble, garden refuse, or general household waste, we have teams near you ready to quote.</p>
      </section>

      <section class="bg-primary/5 p-6 rounded-xl border-l-4 border-l-primary">
        <h3 class="text-xl font-bold mb-3">Johannesburg Waste Bylaws</h3>
        <p class="text-foreground/90 italic leading-relaxed">Most suburbs in ${l} require waste to be removed within 24–48 hours to avoid fines. Professional removers use 4-ton or 6-ton trucks and must provide proof of tipping at authorized landfills. By hiring through Gaupro, you are choosing a partner who respects the local community and municipal regulations.</p>
      </section>

      <section>
        <h3 class="text-xl font-semibold mb-3">Rubble Removal Pricing in ${l}</h3>
        <ul class="list-disc list-inside mt-4 space-y-2">
          <li><strong>Small Load (Bakkie):</strong> R450 – R750.</li>
          <li><strong>4-Ton Truck:</strong> R950 – R1,400.</li>
          <li><strong>6-Ton Truck:</strong> R1,500 – R2,200.</li>
          <li><strong>Bulk Site Clearing:</strong> Customized quote based on site survey.</li>
        </ul>
      </section>
    </div>
  `,
  "tlb-hire": (l) => `
    <div class="space-y-6">
      <section>
        <h2 class="text-3xl font-bold mb-4">Reliable TLB Hire in ${l} with Operators</h2>
        <p>For construction, earthmoving, and site preparation in ${l}, the TLB (Tractor-Loader-Backhoe) is the ultimate multi-purpose tool. Gaupro connects you with plant hire specialists who offer well-maintained machinery paired with certified, experienced operators who understand the local terrain conditions of ${l}.</p>
        <p class="mt-4">Whether you are digging foundations for a new home in Sandton or trenching for services in Midrand, our TLB hire partners provide flexible hourly and daily rates to suit your project scope.</p>
      </section>

      <section class="bg-primary/5 p-6 rounded-xl border-l-4 border-l-primary">
        <h3 class="text-xl font-bold mb-3">Wet Hire vs. Dry Hire in JHB</h3>
        <p class="text-foreground/90 italic leading-relaxed">In ${l}, "Wet Hire" (including fuel and a certified operator) is the industry standard for short-term projects. It ensures safety and efficiency as the operator is responsible for the machine's maintenance and performance. "Dry Hire" is typically reserved for longer-term commercial contracts where the client provides their own licensed operator.</p>
      </section>

      <section>
        <h3 class="text-xl font-semibold mb-3">TLB Hire Rate Guide (${l})</h3>
        <ul class="list-disc list-inside mt-4 space-y-2">
          <li><strong>Daily Rate (8-hour shift):</strong> R3,500 – R5,500 (Wet Hire).</li>
          <li><strong>Hourly Rate:</strong> R450 – R750 (Minimum shifts usually apply).</li>
          <li><strong>Establishment Fee (Transport):</strong> R1,200 – R3,000 depending on distance.</li>
        </ul>
      </section>
    </div>
  `,
  "swimming-pool-demolition": (l) => `
    <div class="space-y-6">
      <section>
        <h2 class="text-3xl font-bold mb-4">Expert Swimming Pool Removal in ${l}</h2>
        <p>An unused, leaking, or high-maintenance swimming pool can be a liability. Pool demolition and backfilling is a specialized engineering task that requires proper drainage planning and soil compaction. Gaupro connects you with demolition experts in ${l} who transform unwanted pools back into usable garden space or building areas.</p>
        <p class="mt-4">In ${l}, where properties are increasingly focused on low-maintenance living, removing an old pool can significantly increase the appeal of your home. Our pros handle the concrete breaking, fiberglass removal, and certified backfilling.</p>
      </section>

      <section class="bg-primary/5 p-6 rounded-xl border-l-4 border-l-primary">
        <h3 class="text-xl font-bold mb-3">The Importance of Proper Backfilling</h3>
        <p class="text-foreground/90 italic leading-relaxed">The biggest risk in pool removal is ground subsidence. If the pool isn't drained properly and the soil isn't compacted in layers (using a G5 or similar material), the area will sink over time. Gaupro professionals in ${l} follow strict compaction protocols to ensure your new lawn or patio remains level for years to come.</p>
      </section>

      <section>
        <h3 class="text-xl font-semibold mb-3">Cost to Remove a Pool in ${l}</h3>
        <ul class="list-disc list-inside mt-4 space-y-2">
          <li><strong>Partial Demo & Fill:</strong> R15,000 – R25,000.</li>
          <li><strong>Full Concrete Removal & Backfill:</strong> R35,000 – R65,000.</li>
          <li><strong>Fiberglass Shell Removal:</strong> R12,000 – R22,000.</li>
        </ul>
      </section>
    </div>
  `,
  "demolition": (l) => `
    <div class="space-y-6">
      <section>
        <h2 class="text-3xl font-bold mb-4">Safe & Controlled Demolition Contractors in ${l}</h2>
        <p>Demolition is the first step toward a new vision. Whether you need to remove an internal wall for an open-plan kitchen or demolish an entire double-story structure in ${l}, safety and structural awareness are paramount. Gaupro connects you with demolition contractors who use specialized equipment to ensure the job is done without damaging adjacent structures.</p>
        <p class="mt-4">From urban Johannesburg suburbs to large industrial sites, our pros provide site clearing, hazardous material handling, and structural dismantling services that comply with the Occupational Health and Safety Act.</p>
      </section>

      <section class="bg-primary/5 p-6 rounded-xl border-l-4 border-l-primary">
        <h3 class="text-xl font-bold mb-3">Permits and Regulations</h3>
        <p class="text-foreground/90 italic leading-relaxed">Most structural demolition in ${l} requires a municipal permit and an engineer's sign-off if load-bearing elements are involved. A professional contractor through Gaupro will guide you through the regulatory requirements to ensure your project remains legal and safe.</p>
      </section>

      <section>
        <h3 class="text-xl font-semibold mb-3">Typical Demolition Costs in ${l}</h3>
        <ul class="list-disc list-inside mt-4 space-y-2">
          <li><strong>Single Internal Wall:</strong> R8,000 – R15,000 (including structural support if needed).</li>
          <li><strong>Double Garage:</strong> R12,000 – R22,000.</li>
          <li><strong>Small House (Standard 3-Bed):</strong> R60,000 – R120,000.</li>
        </ul>
      </section>
    </div>
  `,
  "site-clearance": (l) => `
    <div class="space-y-6">
      <section>
        <h2 class="text-3xl font-bold mb-4">Complete Site Clearance & Land Leveling in ${l}</h2>
        <p>A clean, level site is the foundation of every successful construction project. Site clearance in ${l} involves the removal of thick vegetation, existing rubble, and unwanted debris to prepare for building or landscaping. Gaupro connects you with heavy-duty clearance teams who use Bobcats, TLBs, and tippers to prepare your plot efficiently.</p>
        <p class="mt-4">Whether it is a small residential plot in Randburg or a multi-hectare commercial site in Midrand, our pros in ${l} ensure that your ground is prepared according to the required levels and specifications.</p>
      </section>

      <section class="bg-primary/5 p-6 rounded-xl border-l-4 border-l-primary">
        <h3 class="text-xl font-bold mb-3">Beyond Rubble: Vegetation & Leveling</h3>
        <p class="text-foreground/90 italic leading-relaxed">In many parts of ${l}, site clearance requires the removal of invasive alien species and heavy earthmoving to correct slopes. Professional clearance teams provide a "blank canvas" for your builders, saving you time and potentially thousands in hidden foundation costs later in the project.</p>
      </section>

      <section>
        <h3 class="text-xl font-semibold mb-3">Site Clearance Benchmarks (${l})</h3>
        <ul class="list-disc list-inside mt-4 space-y-2">
          <li><strong>Small Residential Plot (< 500m²):</strong> R3,500 – R8,000.</li>
          <li><strong>Medium Plot (1000m²):</strong> R12,000 – R25,000.</li>
          <li><strong>Industrial Site Clearing:</strong> Quoted per day or per m³.</li>
        </ul>
      </section>
    </div>
  `,
};

const hardenedFAQs: Record<string, (location: string) => { q: string, a: string }[]> = {
  "plumber": (l) => [
    { q: `What is the cost of a plumber call-out in ${l}?`, a: `In ${l}, standard call-out fees typically range from R450 to R850. This fee usually covers the travel and the first 30-60 minutes of assessment. Always confirm if the call-out fee is deductible from the final repair cost.` },
    { q: `Do I need a PIRB Certificate of Compliance in ${l}?`, a: `Yes, for any new geyser installation or major alteration in ${l}, a PIRB (Plumbing Industry Registration Board) CoC is mandatory. It ensures the work meets SANS 10252 standards and is required for insurance claims.` }
  ],
  "rubble-removal": (l) => [
    { q: `How much does rubble removal cost per load in ${l}?`, a: `In ${l}, prices start from around R950 for a 4-ton truck and can go up to R2,200 for a 6-ton heavy rubble load. Prices usually include labor for loading.` },
    { q: `Will you dump my rubble legally?`, a: `Absolutely. All Gaupro pros in ${l} are required to use authorized municipal weighbridges. This prevents illegal dumping fines which can be issued to the property owner.` }
  ],
  "tlb-hire": (l) => [
    { q: `Does TLB hire in ${l} include the operator?`, a: `Yes, most TLB hire services on Gaupro are "Wet Hire," meaning they include a certified operator and fuel. This is the safest and most productive option for residential and commercial sites.` },
    { q: `What is the minimum hire period?`, a: `Most plant hire companies in ${l} have a minimum hire period of one full 8-hour shift, although some may offer a 4-hour "half-day" rate for small local jobs.` }
  ],
  "swimming-pool-demolition": (l) => [
    { q: `Can I build a house where my pool used to be?`, a: `Only if the pool was fully demolished (concrete removed) and backfilled with engineered soil compaction. A standard "fill-in" is only suitable for gardens or light patios. Our ${l} specialists can advise on the correct method for your future plans.` },
    { q: `How long does it take to remove a pool?`, a: `A standard swimming pool removal in ${l} typically takes 3 to 5 working days, including the heavy breaking and the layering of backfill material.` }
  ],
  "demolition": (l) => [
    { q: `Do I need a permit to demolish a building in ${l}?`, a: `Yes. Any structural demolition requires a permit from the ${l} city council. Professional contractors can assist with the application process to ensure your project is compliant.` },
    { q: `Is asbestos removal handled during demolition?`, a: `Asbestos is a hazardous material and requires a specialized certified team. If your ${l} property was built before 1980, our pros will assess for asbestos and provide a safe removal plan.` }
  ],
  "site-clearance": (l) => [
    { q: `Do you level the ground during site clearance?`, a: `Yes, most site clearance projects in ${l} include basic leveling to prepare for construction. If precise engineering levels are required, please specify this in your request.` },
    { q: `What happens to the green waste?`, a: `Green waste is chipped or transported to authorized compost facilities in ${l}, while building rubble is sent to crushing plants or landfills.` }
  ]
};

export function getServiceKnowledge(service: string, location: string): string {
  if (hardenedAboutContent[service]) {
    return hardenedAboutContent[service](location);
  }
  
  // Fallback for non-hardened categories
  const s = getServiceLabel(service);
  const l = getLocationLabel(location);
  return `
    <div class="space-y-6">
      <section>
        <h2 class="text-2xl font-bold mb-4">${s} Services in ${l}</h2>
        <p>Finding reliable ${s.toLowerCase()} in ${l} is essential for ensuring that your home or business projects are handled with the care and expertise they deserve. Whether you are dealing with an urgent repair, planning a major renovation, or simply looking for routine maintenance, Gaupro connects you with the most trusted professionals in the ${l} area.</p>
      </section>
      <section>
        <h3 class="text-xl font-semibold mb-3">Why South Africans Choose Gaupro for ${s}</h3>
        <p>Gaupro has become the preferred platform for finding ${s.toLowerCase()} experts in ${l} because we prioritize trust and efficiency. Instead of cold-calling dozens of companies, you can post your request once and receive multiple competitive estimates from pros who are actually available and interested in your job.</p>
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

  // Fallback FAQs
  return [
    {
      q: `How much does ${getServiceLabel(service).toLowerCase()} cost in ${l}?`,
      a: `The cost varies significantly based on the complexity of the task and the materials required. We highly recommend requesting at least 3 quotes through Gaupro to compare current market rates in your specific suburb of ${l}.`
    },
    {
      q: `How quickly can I get help in ${l}?`,
      a: `Most users receive their first response within 20 to 60 minutes. Our system prioritizes local pros closest to your address to ensure the fastest response time possible.`
    }
  ];
}
