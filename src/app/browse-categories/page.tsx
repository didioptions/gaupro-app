
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { allServices } from '@/lib/service-questions';
import Link from 'next/link';

const allCategories = [
  { category: 'Home, Building & Gardening', services: ['Air Conditioning', 'Aluminium Doors And Windows', 'Awnings', 'Balustrades', 'Bathroom Renovations', 'Blinds', 'Builders', 'Burglar Bars', 'Carpenters', 'Carpeting', 'Carpet Cleaning', 'Carports', 'Ceiling Installers', 'Cleaning Services', 'Concrete Slabs', 'Curtains', 'Doors', 'Drywalls', 'Electricians', 'Electric Fencing', 'Fencing', 'Flooring', 'Garage Doors', 'Garage Door Motors', 'Gardeners', 'Gas Installers', 'Gates', 'Gate Motors', 'Glass Works', 'Guttering', 'Handymen', 'High Pressure Cleaning', 'Home Improvements', 'Interior Designing', 'Kitchen Renovations', 'Laminate Flooring', 'Landscaping', 'Laundry Services', 'Locksmiths', 'Office Cleaning', 'Painters', 'Palisade Fencing', 'Paving', 'Pest Control', 'Plastering', 'Plumbers', 'Pool Cleaning', 'Precast Fencing', 'Prepaid Electricity Meters', 'Roofing', 'Security Gates', 'Shadeports', 'Shower Doors', 'Solar Geysers', 'Solar Systems', 'Swimming Pool Builders', 'Tar Surfacing', 'Thatched Roofing', 'Tiling', 'Tree Felling', 'Upholsterers', 'Upholstery Cleaning', 'Waterproofing', 'Welders', 'Wendy Houses', 'Window Cleaning', 'Window Tinting', 'Wire Mesh Fencing', 'Wooden Decking'] },
  { category: 'Weddings, Events & Entertainment', services: ['Djs', 'Event Decorations', 'Event Planners', 'Florists', 'Party Planners', 'Photographers', 'Tent Hire', 'Toilet Hire', 'Videographers', 'Wedding Photographers'] },
  { category: 'Business & Finance', services: ['Accounting', 'Auditors', 'Business Consultants', 'Company Registrations', 'Debt Collection', 'Debt Counsellors', 'Financial Advisors', 'Insurance', 'Loans', 'Medical Aid', 'Recruitment Agencies'] },
  { category: 'Digital Design, Media & Marketing', services: ['Graphic Designers', 'Logo Design', 'Printing', 'Signs', 'Website Designers'] },
  { category: 'Health, Wellness & Beauty', services: ['Beauty Salons', 'Chiropractors', 'Counsellors', 'Dentists', 'Dermatologists', 'Dieticians', 'Gynaecologists', 'Hair Stylists', 'Laser Clinics', 'Make Up Artists', 'Marriage Counsellors', 'Massage Therapists', 'Personal Trainers', 'Physiotherapists', 'Plastic Surgeons', 'Psychologists'] },
  { category: 'Alarms & Security', services: ['Access Control', 'Alarm Systems', 'Armed Response', 'Car Alarms', 'Car Tracking', 'CCTV', 'Fire Safety', 'Private Investigators', 'Security', 'Tracing'] },
  { category: 'Cars & Automotive', services: ['Auto Electricians', 'Auto Glass', 'Batteries', 'Brakes and Clutches', 'Car Aircon Regassing', 'Car Window Tinting', 'Engine Overhauls', 'Fuels', 'Gearboxes', 'Mechanics', 'Panel Beaters', 'Towing', 'Tow Bars'] },
  { category: 'Lessons & Training', services: ['Computer Courses', 'Driving Schools', 'Firearm Training', 'First Aid', 'Forklift Training', 'Life Coaches', 'Security Training', 'Swimming Lessons', 'Team Building'] },
  { category: 'Accommodation & Venues', services: ['Holiday Accommodation', 'Venues', 'Wedding Venues'] },
  { category: 'Home Appliances & Equipment', services: ['Appliance Repairs', 'DSTV Installers', 'Fridge Repairs', 'Tv Installers', 'Tv Repairs'] },
  { category: 'Property & Legal', services: ['Conveyancers', 'Divorce Lawyers', 'Estate Agents', 'Labour Lawyers', 'Lawyers'] },
  { category: 'Transportation & Logistics', services: ['Couriers', 'Movers', 'Rubble Removals', 'School Transport', 'Shuttle Services', 'Taxis', 'Transportation'] },
  { category: 'Computers & Telecommunications', services: ['Cellphone Repairs', 'Computer Repairs', 'Internet Solutions', 'Laptop Repairs', 'Networking', 'Office Equipment'] },
  { category: 'Heavy Equipment & Machinery', services: ['Generators', 'Plant Hire', 'Skip Hire', 'Tlb Hire'] },
  { category: 'Manufacturers & Suppliers', services: ['Building Materials', 'Gas Suppliers', 'Marble and Granite Suppliers', 'Personal Protection Equipment', 'Stationery', 'Swimming Pool Supplies'] },
  { category: 'Agricultural', services: ['Agricultural Equipment', 'Agricultural Services', 'Irrigation'] },
  { category: 'Architecture & Engineering', services: ['Architects', 'Borehole Drillers', 'Town Planners'] },
  { category: 'Family Care', services: ['Baby Sitters', 'Creches', 'Day Care Centres', 'Pre-Schools'] },
  { category: 'Fashion, Tailors & Outfitters', services: ['Dressmakers', 'Embroidery'] },
  { category: 'Food & Beverage', services: ['Cake Shops', 'Caterers'] },
  { category: 'Pets', services: ['Groomers', 'Pet Sitters'] },
  { category: 'Tourism & Outdoor Activities', services: ['Tour Operators', 'Travel Agents'] },
];

export default function AllCategoriesPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-background">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <header className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-normal tracking-tight">All Service Categories</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Find trusted professionals for any service you need in South Africa.
            </p>
          </header>
          <div className="max-w-5xl mx-auto space-y-12">
            {allCategories.map((group) => (
              <div key={group.category}>
                <h2 className="text-2xl font-normal mb-4 border-b pb-2">{group.category}</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-3">
                  {group.services.map((serviceName) => {
                    const service = allServices.find(s => s.label === serviceName);
                    const href = service ? `/services/${service.value}` : `/post-request?service=${serviceName.toLowerCase().replace(/\s+/g, '-')}`;
                    return (
                      <Link key={serviceName} href={href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {serviceName}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
