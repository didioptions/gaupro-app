import { allServices } from './service-questions';
import { allLocations } from './locations';

/**
 * SEO Utility to generate unique, high-quality content for South African service pages.
 * This version includes "Hardened" content for the Top 10 Priority Services.
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
 * HARDENED CONTENT FOR TOP 10 SERVICES
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

      <section>
        <h3 class="text-xl font-semibold mb-3">Why Trust Gaupro Plumbers?</h3>
        <p>Our plumbers in ${l} are more than just contractors; they are vetted partners. We verify their identity and check for active industry registrations so you don't have to. With our transparent review system, you can see exactly how they've handled burst pipes and bathroom remodels for your neighbors in ${l}.</p>
      </section>
    </div>
  `,
  "electrician": (l) => `
    <div class="space-y-6">
      <section>
        <h2 class="text-3xl font-bold mb-4">Certified Electricians in ${l}: Powering Your Safety</h2>
        <p>Electrical faults are one of the leading causes of household fires in South Africa. In ${l}, where load-shedding and power surges are a daily reality, having a certified electrician is not a luxury—it is a safety requirement. Gaupro connects you with electricians who specialize in surge protection, DB board upgrades, and solar integration.</p>
        <p class="mt-4">Whether you are dealing with a tripping breaker in your home or need a complete rewiring for a commercial office in ${l}, our pros come equipped with the latest diagnostic tools to find and fix faults before they become dangerous.</p>
      </section>

      <section class="bg-primary/5 p-6 rounded-xl border-l-4 border-l-primary">
        <h3 class="text-xl font-bold mb-3">Compliance is Non-Negotiable</h3>
        <p class="text-foreground/90 italic leading-relaxed">In ${l}, all electrical work must comply with SANS 10142-1. Only a registered "Registered Person" with the Department of Labour can issue an Electrical Certificate of Compliance (CoC). This document confirms that your installation is safe and is required by law when selling your property or claiming from insurance after a fire or surge damage.</p>
      </section>

      <section>
        <h3 class="text-xl font-semibold mb-3">Electrician Service Pricing in ${l}</h3>
        <p>Transparent pricing helps you plan your electrical maintenance. Current rates in ${l} typically follow these ranges:</p>
        <ul class="list-disc list-inside mt-4 space-y-2">
          <li><strong>CoC Inspection:</strong> R1,200 – R2,500 (excluding any necessary repairs).</li>
          <li><strong>DB Board Rewire:</strong> R3,500 – R7,500 (depending on size and complexity).</li>
          <li><strong>Fault Finding:</strong> R500 – R900 per hour.</li>
          <li><strong>Surge Protection Installation:</strong> R1,800 – R3,500.</li>
        </ul>
      </section>

      <section>
        <h3 class="text-xl font-semibold mb-3">Modern Energy Solutions</h3>
        <p>With the rise of renewable energy, our electricians in ${l} are increasingly specialized in inverter and battery backup systems. They can help you transition to a hybrid solar solution that keeps your lights on during load-shedding while ensuring your property remains fully compliant with South African safety standards.</p>
      </section>
    </div>
  `,
  "builders": (l) => `
    <div class="space-y-6">
      <section>
        <h2 class="text-3xl font-bold mb-4">Trusted Building & Construction in ${l}</h2>
        <p>From luxury residential builds to essential home extensions, the construction landscape in ${l} requires a builder who understands local soil conditions, municipal bylaws, and the National Building Regulations. Gaupro connects you with contractors who have a proven track record of delivering quality structures on time and within budget.</p>
        <p class="mt-4">Building in South Africa is a complex undertaking involving various stakeholders. A professional builder in ${l} acts as your project manager, coordinating bricklayers, plasterers, and specialized trades to ensure every brick is laid according to plan.</p>
      </section>

      <section class="bg-primary/5 p-6 rounded-xl border-l-4 border-l-primary">
        <h3 class="text-xl font-bold mb-3">NHBRC: Your Structural Shield</h3>
        <p class="text-foreground/90 italic leading-relaxed">Any contractor building a new home in ${l} must be registered with the NHBRC (National Home Builders Registration Council). This registration provides you with a five-year structural warranty, protecting your investment against major defects. Always verify the NHBRC status of your builder through Gaupro before signing a contract.</p>
      </section>

      <section>
        <h3 class="text-xl font-semibold mb-3">Estimating Your Build in ${l}</h3>
        <p>Construction costs are generally calculated per square meter (m²), though extensions and renovations are often quoted as a lump sum. In ${l}:</p>
        <ul class="list-disc list-inside mt-4 space-y-2">
          <li><strong>Standard Residential Build:</strong> R8,500 – R12,000 per m².</li>
          <li><strong>High-End Luxury Build:</strong> R15,000 – R25,000+ per m².</li>
          <li><strong>Garage Conversion:</strong> R80,000 – R150,000 (turnkey).</li>
          <li><strong>Boundary Wall (per meter):</strong> R1,200 – R2,500 (including foundation).</li>
        </ul>
      </section>

      <section>
        <h3 class="text-xl font-semibold mb-3">The Gaupro Build Advantage</h3>
        <p>We know that hiring a builder is a massive decision. Our platform allows you to see real photos of past projects in ${l}, read verified customer testimonials, and verify credentials. Whether it's a small boundary wall or a multi-story home, our pros are committed to transparency and structural integrity.</p>
      </section>
    </div>
  `,
  "rubble-removal": (l) => `
    <div class="space-y-6">
      <section>
        <h2 class="text-3xl font-bold mb-4">Efficient Rubble Removal Services in ${l}</h2>
        <p>Construction and renovation generate massive amounts of waste that standard municipal services won't handle. In ${l}, illegal dumping is a serious offense that can lead to heavy fines for property owners. Gaupro connects you with rubble removal specialists who ensure your site is cleared quickly and waste is disposed of at licensed landfill sites.</p>
        <p class="mt-4">Our rubble removal teams in ${l} handle everything from broken bricks and concrete to garden refuse and old furniture. They provide the labor and the transport, so you don't have to worry about a thing.</p>
      </section>

      <section class="bg-primary/5 p-6 rounded-xl border-l-4 border-l-primary">
        <h3 class="text-xl font-bold mb-3">Bylaws and Legal Disposal</h3>
        <p class="text-foreground/90 italic leading-relaxed">Each municipality in ${l} has specific bylaws regarding waste management. Professional removers pay "tipping fees" at authorized weighbridges. By hiring a verified Gaupro pro, you are guaranteed that your rubble isn't being dumped in a local park or vlei, protecting both the environment and your legal standing.</p>
      </section>

      <section>
        <h3 class="text-xl font-semibold mb-3">Pricing Benchmarks in ${l}</h3>
        <p>Rubble removal is typically charged by the truckload (usually 4-ton or 6-ton). In ${l}, expect these rates:</p>
        <ul class="list-disc list-inside mt-4 space-y-2">
          <li><strong>4-Ton Truck (Light Rubble):</strong> R850 – R1,200 per load.</li>
          <li><strong>6-Ton Truck (Heavy Rubble/Concrete):</strong> R1,200 – R1,800 per load.</li>
          <li><strong>Garden Refuse (Small Bakkie):</strong> R450 – R750.</li>
          <li><strong>Site Clearing (Bulk):</strong> Subject to site inspection.</li>
        </ul>
      </section>

      <section>
        <h3 class="text-xl font-semibold mb-3">Speed and Reliability</h3>
        <p>In the construction world, a cluttered site is a dangerous site. Our pros in ${l} prioritize same-day or next-day service to keep your project moving. With Gaupro, you can find a team that is not only affordable but also punctual and respectful of your property.</p>
      </section>
    </div>
  `,
  "tree-felling": (l) => `
    <div class="space-y-6">
      <section>
        <h2 class="text-3xl font-bold mb-4">Expert Tree Felling & Pruning in ${l}</h2>
        <p>Large trees add beauty and value to your property, but when they become diseased, damaged, or dangerously positioned, they require professional intervention. Tree felling in ${l} is a high-risk task that should never be attempted by an amateur. Gaupro connects you with specialists who have the technical skill and heavy-duty equipment to safely remove or trim trees without damaging your home or power lines.</p>
        <p class="mt-4">From precision felling in tight residential spaces to large-scale stump grinding, our tree fellers in ${l} provide a comprehensive service that includes site clearing and refuse removal.</p>
      </section>

      <section class="bg-primary/5 p-6 rounded-xl border-l-4 border-l-primary">
        <h3 class="text-xl font-bold mb-3">Safety and Insurance: The Non-Negotiables</h3>
        <p class="text-foreground/90 italic leading-relaxed">Tree felling involves heavy machinery and significant heights. In ${l}, a professional team should carry Public Liability Insurance. This protects you in the unlikely event that a limb falls onto a roof or a neighbor's fence. Always verify that your Gaupro pro is fully insured before they start their chainsaws.</p>
      </section>

      <section>
        <h3 class="text-xl font-semibold mb-3">Tree Service Pricing in ${l}</h3>
        <p>Cost depends on height, thickness, and location difficulty. Average rates in ${l}:</p>
        <ul class="list-disc list-inside mt-4 space-y-2">
          <li><strong>Small Tree Removal (< 5m):</strong> R850 – R1,800.</li>
          <li><strong>Large Tree Removal (> 10m):</strong> R3,500 – R8,000+.</li>
          <li><strong>Stump Grinding:</strong> R650 – R1,500 per stump.</li>
          <li><strong>Seasonal Pruning:</strong> R450 – R1,200 (per session).</li>
        </ul>
      </section>

      <section>
        <h3 class="text-xl font-semibold mb-3">Environmental Stewardship</h3>
        <p>Our pros in ${l} aren't just fellers; they are tree care experts. They can advise you on which trees are protected species in South Africa and whether a permit is required for removal. We believe in preserving the "urban forest" of ${l} through responsible pruning and only felling when absolutely necessary.</p>
      </section>
    </div>
  `,
  "cleaning-service": (l) => `
    <div class="space-y-6">
      <section>
        <h2 class="text-3xl font-bold mb-4">Professional Cleaning Services in ${l}</h2>
        <p>A clean environment is essential for health, productivity, and peace of mind. Whether you need a deep clean for a new house move, a regular office maintenance schedule, or a specialized post-renovation cleanup, Gaupro connects you with cleaning professionals in ${l} who use industrial-grade equipment and eco-friendly chemicals to achieve superior results.</p>
        <p class="mt-4">Our cleaning teams in ${l} go beyond the surface, tackling hidden allergens, dust mites, and deep-seated grime that standard domestic cleaning often misses.</p>
      </section>

      <section class="bg-primary/5 p-6 rounded-xl border-l-4 border-l-primary">
        <h3 class="text-xl font-bold mb-3">Deep Clean vs. Regular Clean</h3>
        <p class="text-foreground/90 italic leading-relaxed">In ${l}, a "Deep Clean" is highly recommended twice a year. This involves steam-cleaning carpets, degreasing ovens, scrubbing tile grout, and sanitizing high-touch surfaces. It's a comprehensive process that requires specialized machinery like high-pressure steam cleaners and industrial vacuums.</p>
      </section>

      <section>
        <h3 class="text-xl font-semibold mb-3">Cleaning Rates in ${l} (2025)</h3>
        <p>Pricing is typically based on room count or square footage. Benchmarks in ${l}:</p>
        <ul class="list-disc list-inside mt-4 space-y-2">
          <li><strong>Post-Occupation Deep Clean (3-Bed Home):</strong> R1,800 – R3,500.</li>
          <li><strong>Regular Weekly Cleaning (Team of 2):</strong> R450 – R750 per visit.</li>
          <li><strong>Office Cleaning (per m²):</strong> R5 – R15.</li>
          <li><strong>Window Cleaning (External):</strong> R450 – R1,200.</li>
        </ul>
      </section>

      <section>
        <h3 class="text-xl font-semibold mb-3">Trust and Supervison</h3>
        <p>Inviting someone into your private space requires trust. Every Gaupro cleaning pro in ${l} is background-checked and vetted. We prioritize teams that provide on-site supervision, ensuring that your property is respected and the cleaning standards are met to the highest degree.</p>
      </section>
    </div>
  `,
  "painter": (l) => `
    <div class="space-y-6">
      <section>
        <h2 class="text-3xl font-bold mb-4">Expert Painting & Decorating in ${l}</h2>
        <p>A fresh coat of paint is the most cost-effective way to transform your property, but the longevity of the finish depends entirely on the quality of the preparation. In ${l}, where the harsh sun and heavy summer rains can peel poor-quality paint within months, you need a professional who understands the science of coatings. Gaupro matches you with painters who prioritize surface prep and use premium South African brands like Dulux and Plascon.</p>
        <p class="mt-4">Our painters in ${l} handle everything from intricate interior trim and feature walls to large-scale exterior boundary walls and multi-story buildings.</p>
      </section>

      <section class="bg-primary/5 p-6 rounded-xl border-l-4 border-l-primary">
        <h3 class="text-xl font-bold mb-3">The Secret is in the Prep</h3>
        <p class="text-foreground/90 italic leading-relaxed">Professional painting in ${l} starts with high-pressure cleaning to remove oxidation, followed by crack filling and the application of specialized primers. For coastal or high-moisture areas in ${l}, we ensure the use of anti-fungal and UV-resistant paints to prevent premature fading and peeling.</p>
      </section>

      <section>
        <h3 class="text-xl font-semibold mb-3">Painting Cost Estimates in ${l}</h3>
        <p>Most painters quote per square meter or per room. In ${l}, expect these ranges:</p>
        <ul class="list-disc list-inside mt-4 space-y-2">
          <li><strong>Interior Room (Walls Only):</strong> R1,500 – R2,800.</li>
          <li><strong>Exterior House Painting (3-Bed):</strong> R15,000 – R45,000 (depending on prep work).</li>
          <li><strong>Roof Painting (Standard Tiled):</strong> R8,000 – R18,000.</li>
          <li><strong>Boundary Wall (per m²):</strong> R45 – R85.</li>
        </ul>
      </section>

      <section>
        <h3 class="text-xl font-semibold mb-3">Gaupro Quality Assurance</h3>
        <p>Don't risk a messy job with paint splatters on your floors. Our pros in ${l} use high-quality drop sheets and masking tape to protect your assets. With Gaupro, you can view real photos of their cutting-in skills and past projects, ensuring you hire a decorator with an eye for detail.</p>
      </section>
    </div>
  `,
  "gardeners": (l) => `
    <div class="space-y-6">
      <section>
        <h2 class="text-3xl font-bold mb-4">Professional Garden Maintenance in ${l}</h2>
        <p>Your garden is an extension of your home and a significant factor in your property's curb appeal. In ${l}, maintaining a lush, green space requires an understanding of South Africa's distinct seasons and water-wise principles. Gaupro connects you with garden services that provide more than just lawn mowing; they offer expert pruning, fertilization, and general horticultural care.</p>
        <p class="mt-4">Whether you need a once-off massive jungle cleanup or a reliable weekly maintenance schedule, our garden teams in ${l} keep your outdoor space vibrant and healthy year-round.</p>
      </section>

      <section class="bg-primary/5 p-6 rounded-xl border-l-4 border-l-primary">
        <h3 class="text-xl font-bold mb-3">Water-Wise Landscaping in ${l}</h3>
        <p class="text-foreground/90 italic leading-relaxed">With water restrictions becoming more common, our garden pros in ${l} can advise on succulent-heavy landscapes and indigenous plants that thrive in local soil. They can also assist with automated irrigation setups and grey-water integration to keep your garden green without wasting a drop.</p>
      </section>

      <section>
        <h3 class="text-xl font-semibold mb-3">Garden Service Rates in ${l}</h3>
        <p>Costs are typically based on the size of the garden and the frequency of visits. In ${l}:</p>
        <ul class="list-disc list-inside mt-4 space-y-2">
          <li><strong>Weekly Maintenance (Small Garden):</strong> R450 – R750 per month.</li>
          <li><strong>Bi-Weekly Maintenance (Large Garden):</strong> R850 – R1,500 per month.</li>
          <li><strong>Full Garden Clean-up:</strong> R1,200 – R3,500 (once-off).</li>
          <li><strong>Irrigation Repair:</strong> R450 – R1,200.</li>
        </ul>
      </section>

      <section>
        <h3 class="text-xl font-semibold mb-3">The Gaupro Green Thumb</h3>
        <p>Hiring a gardener via Gaupro means peace of mind. Every pro is vetted and reviewed by the local community. You can find a team that is not only skilled with a trimmer but also punctual and respectful of your privacy. Let us help you find the perfect partner for your ${l} garden.</p>
      </section>
    </div>
  `,
  "demolition": (l) => `
    <div class="space-y-6">
      <section>
        <h2 class="text-3xl font-bold mb-4">Safe & Controlled Demolition in ${l}</h2>
        <p>Before you can build something new, you often need to remove the old. Demolition in ${l} is a highly regulated and dangerous activity that requires specialized machinery and strict safety compliance. Gaupro connects you with demolition contractors who specialize in everything from internal wall removal to the complete dismantling of multi-story structures.</p>
        <p class="mt-4">Our pros in ${l} use a combination of mechanical dismantling and manual labor to ensure that your site is cleared safely, with minimal impact on neighboring properties and the surrounding environment.</p>
      </section>

      <section class="bg-primary/5 p-6 rounded-xl border-l-4 border-l-primary">
        <h3 class="text-xl font-bold mb-3">Permits and Site Safety</h3>
        <p class="text-foreground/90 italic leading-relaxed">Demolishing any structure larger than 40m² in ${l} requires a municipal permit. Furthermore, contractors must manage dust control, noise levels, and the safe removal of hazardous materials like asbestos. By hiring a verified Gaupro pro, you ensure that your project remains compliant with local building codes and safety regulations.</p>
      </section>

      <section class="bg-primary/5 p-6 rounded-xl border-l-4 border-l-primary">
        <h3 class="text-xl font-semibold mb-3">Demolition Cost Guidelines in ${l}</h3>
        <p>Pricing is usually project-specific, but common benchmarks in ${l} include:</p>
        <ul class="list-disc list-inside mt-4 space-y-2">
          <li><strong>Internal Wall Removal (per linear meter):</strong> R650 – R1,200.</li>
          <li><strong>Swimming Pool Demolition & Backfill:</strong> R15,000 – R35,000.</li>
          <li><strong>Single Garage Removal:</strong> R8,000 – R15,000.</li>
          <li><strong>Site Clearance (per 6-ton load):</strong> R1,500 – R2,500.</li>
        </ul>
      </section>

      <section>
        <h3 class="text-xl font-semibold mb-3">Sustainable Site Clearance</h3>
        <p>Our demolition teams in ${l} are committed to a "Circular Economy." Whenever possible, they salvage bricks, timber, and scrap metal for recycling, reducing the amount of waste sent to landfills. With Gaupro, you get a clean, level site ready for your next phase of construction.</p>
      </section>
    </div>
  `,
  "plant-hire": (l) => `
    <div class="space-y-6">
      <section>
        <h2 class="text-3xl font-bold mb-4">Heavy Equipment & Plant Hire in ${l}</h2>
        <p>For DIY builders, landscaping contractors, and small-scale developers in ${l}, owning heavy machinery is rarely cost-effective. Plant hire allows you to access specialized equipment like TLBs, Bobcats, excavators, and compactors for exactly as long as you need them. Gaupro connects you with plant hire companies in ${l} that offer well-maintained machinery and certified operators.</p>
        <p class="mt-4">From foundation digging and pool excavations to site leveling and trenching, our plant hire pros in ${l} ensure that your project has the mechanical muscle it needs to stay on schedule.</p>
      </section>

      <section class="bg-primary/5 p-6 rounded-xl border-l-4 border-l-primary">
        <h3 class="text-xl font-bold mb-3">Wet Hire vs. Dry Hire in ${l}</h3>
        <p class="text-foreground/90 italic leading-relaxed">In South Africa, "Wet Hire" (equipment including a certified operator and fuel) is the standard for heavy plant. This is safer and more efficient, as the operator is responsible for the machine's performance. Always ensure your hire contract in ${l} clearly states the hourly rate and any minimum daily charges.</p>
      </section>

      <section>
        <h3 class="text-xl font-semibold mb-3">Standard Plant Hire Rates in ${l}</h3>
        <p>Daily or hourly rates for popular machines in ${l}:</p>
        <ul class="list-disc list-inside mt-4 space-y-2">
          <li><strong>TLB (Tractor-Loader-Backhoe) Wet Hire:</strong> R3,500 – R5,500 per day.</li>
          <li><strong>Bobcat / Skid Steer Wet Hire:</strong> R2,800 – R4,500 per day.</li>
          <li><strong>5-Ton Excavator:</strong> R4,500 – R7,500 per day.</li>
          <li><strong>Walk-Behind Roller/Compactor:</strong> R450 – R850 per day (Dry Hire).</li>
        </ul>
      </section>

      <section>
        <h3 class="text-xl font-semibold mb-3">Reliable Machinery for ${l} Projects</h3>
        <p>Mechanical failure can stop your project in its tracks. Our pros in ${l} maintain their fleets to the highest standards, ensuring minimal downtime. With Gaupro, you can compare quotes from multiple hire yards to find the best equipment and the most experienced operators for your specific site conditions.</p>
      </section>
    </div>
  `,
};

const hardenedFAQs: Record<string, (location: string) => { q: string, a: string }[]> = {
  "plumber": (l) => [
    { q: `What is the cost of a plumber call-out in ${l}?`, a: `In ${l}, standard call-out fees typically range from R450 to R850. This fee usually covers the travel and the first 30-60 minutes of assessment. Always confirm if the call-out fee is deductible from the final repair cost.` },
    { q: `Do I need a PIRB Certificate of Compliance in ${l}?`, a: `Yes, for any new geyser installation or major alteration in ${l}, a PIRB (Plumbing Industry Registration Board) CoC is mandatory. It ensures the work meets SANS 10252 standards and is required for insurance claims.` },
    { q: `Can a plumber in ${l} help with leak detection?`, a: `Yes, Gaupro pros in ${l} use acoustic sensors and thermal imaging for non-invasive leak detection. This is the most cost-effective way to find hidden leaks behind walls or underground.` }
  ],
  "electrician": (l) => [
    { q: `How much does an Electrical CoC cost in ${l}?`, a: `A Certificate of Compliance (CoC) inspection in ${l} generally costs between R1,200 and R2,500 for a standard residential property. This fee covers the inspection; any repairs needed to pass will be quoted separately.` },
    { q: `Can an electrician help with solar and battery backup in ${l}?`, a: `Absolutely. Many Gaupro electricians in ${l} are specialists in PV solar systems and hybrid inverters. They ensure your backup system is safely integrated and doesn't feed power back into the grid during load-shedding.` },
    { q: `Is it expensive to fix a tripping DB board in ${l}?`, a: `Fault finding typically costs R500 – R900 per hour. If a simple breaker replacement is needed, it's affordable. If the board requires a full rewire, it can range from R3,500 to R7,500.` }
  ],
  "builders": (l) => [
    { q: `Is it mandatory for my builder in ${l} to be NHBRC registered?`, a: `Yes, if they are building a new residential home. The NHBRC provides a 5-year structural warranty. For small renovations or boundary walls, registration is not legally required but still recommended as a sign of quality.` },
    { q: `What is the current building cost per m² in ${l}?`, a: `For 2025, residential building costs in ${l} range from R8,500/m² for basic finishes to over R20,000/m² for high-end architectural homes. Always request a detailed Bill of Quantities (BoQ).` },
    { q: `How do I know if I need building plans in ${l}?`, a: `Any structural change, including extensions or internal wall removals, requires plan approval from the ${l} municipality. A professional builder or architect can assist with this process.` }
  ],
  "rubble-removal": (l) => [
    { q: `What is the cost of rubble removal in ${l}?`, a: `Prices in ${l} are based on truck size. A 4-ton truckload typically costs R850 – R1,200, while a 6-ton heavy rubble load costs R1,200 – R1,800. These fees include the labor to load the truck.` },
    { q: `Does the price in ${l} include the dumping fees?`, a: `Yes, professional rubble removers in ${l} include the landfill tipping fees in their quotes. Always verify this to ensure your waste isn't being dumped illegally.` },
    { q: `Can you remove garden refuse and building rubble together in ${l}?`, a: `Most teams in ${l} can, but some landfill sites require separation. It's best to specify the waste mix in your Gaupro request for an accurate quote.` }
  ],
  "tree-felling": (l) => [
    { q: `How much does tree felling cost in ${l}?`, a: `Small trees (under 5m) cost R850 – R1,800. Large, dangerous trees requiring specialized rigging can cost R3,500 to R8,000+. Factors include height, proximity to buildings, and if stump removal is needed.` },
    { q: `Is your tree felling service in ${l} insured?`, a: `Gaupro encourages all tree fellers to carry Public Liability Insurance. We recommend asking for proof of insurance for any high-risk jobs in ${l} to protect your property.` },
    { q: `Do I need a permit to cut down a tree in ${l}?`, a: `Some indigenous or heritage trees are protected in South Africa. Our pros in ${l} can advise if a municipal permit is required before felling.` }
  ],
  "cleaning-service": (l) => [
    { q: `What is included in a house deep clean in ${l}?`, a: `A deep clean in ${l} includes sanitizing all surfaces, inside cupboards, oven cleaning, window washing, and steam cleaning of carpets or upholstery. It’s significantly more thorough than a standard daily clean.` },
    { q: `How much does a commercial office clean cost in ${l}?`, a: `Office cleaning is often charged per m², ranging from R5 to R15 depending on frequency and scope. Once-off corporate cleanups are quoted based on team size and duration.` },
    { q: `Are the cleaning chemicals used in ${l} safe?`, a: `Our Gaupro cleaning pros prioritize eco-friendly and non-toxic chemicals that are safe for pets and children. Specify any sensitivities in your request.` }
  ],
  "painter": (l) => [
    { q: `What is the cost per m² for painting in ${l}?`, a: `Labor-only rates in ${l} range from R45 – R85 per square meter. Full-service quotes including premium paint (like Dulux or Plascon) typically start from R120 per m².` },
    { q: `How many coats of paint are standard for homes in ${l}?`, a: `For the best results in the ${l} climate, we recommend one coat of primer/sealer followed by two coats of premium topcoat. This ensures UV protection and longevity.` },
    { q: `Can a painter in ${l} help with damp proofing?`, a: `Yes, most professional painters in ${l} offer damp treatment as part of their surface preparation. This involves stripping the area, applying a chemical barrier, and using specialized waterproof paints.` }
  ],
  "gardeners": (l) => [
    { q: `How much does a weekly garden service cost in ${l}?`, a: `For a standard residential garden in ${l}, weekly or bi-weekly service typically costs R450 – R1,200 per month. This covers mowing, edging, weeding, and basic pruning.` },
    { q: `Do you provide garden refuse removal in ${l}?`, a: `Most garden services include bagging of refuse, but removal from the site may be an additional cost depending on the volume. Always confirm this in your quote.` },
    { q: `Can a gardener help with my irrigation system in ${l}?`, a: `Yes, many Gaupro garden pros in ${l} can repair leaking pipes, replace spray heads, and program irrigation timers to comply with local water restrictions.` }
  ],
  "demolition": (l) => [
    { q: `How much does it cost to demolish a house in ${l}?`, a: `Total structural demolition in ${l} is usually quoted per project, often ranging from R15,000 for a small outbuilding to R80,000+ for a full house, including rubble removal.` },
    { q: `Is it safe to demolish an internal wall in ${l}?`, a: `Only if the wall is non-load-bearing. Our Gaupro contractors in ${l} will assess the structure before starting. Removing a load-bearing wall requires structural steel (RSJ) and engineer approval.` },
    { q: `Does demolition in ${l} include site clearing?`, a: `Yes, a professional quote should always include the complete removal of all debris and the leveling of the site, leaving it ready for the next phase of work.` }
  ],
  "plant-hire": (l) => [
    { q: `What is the daily rate for a TLB hire in ${l}?`, a: `TLB wet hire (including an operator and fuel) in ${l} typically costs R3,500 – R5,500 per day. Rates may vary based on the duration of the hire and the site's distance from the yard.` },
    { q: `Do I need my own operator for a Bobcat hire in ${l}?`, a: `Most hire yards in ${l} provide an operator (Wet Hire) to ensure safety and prevent machine damage. "Dry Hire" is usually only available to established contractors with their own certified operators.` },
    { q: `What is the minimum hire period for earthmoving equipment in ${l}?`, a: `In ${l}, most companies have a minimum hire period of 1 full day (8 hours), though some may offer half-day rates for small local jobs.` }
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
