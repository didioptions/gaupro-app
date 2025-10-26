
import Link from "next/link";

const locationsData = {
    Gauteng: ["Alberton", "Benoni", "Boksburg", "Brakpan", "Centurion", "Edenvale", "Germiston", "Johannesburg", "Kempton Park", "Krugersdorp", "Midrand", "Pretoria", "Randburg", "Roodepoort", "Sandton", "Soweto", "Springs", "Vanderbijlpark", "Vereeniging"],
    "KwaZulu-Natal": ["Amanzimtoti", "Ballito", "Chatsworth", "Durban", "Hillcrest", "Howick", "Kloof", "Ladysmith", "Newcastle", "Phoenix", "Pietermaritzburg", "Pinetown", "Port Shepstone", "Richards Bay", "Stanger", "Umhlanga"],
    "Western Cape": ["Brackenfell", "Cape Town", "George", "Goodwood", "Kraaifontein", "Kuils River", "Mossel Bay", "Paarl", "Plettenberg Bay", "Somerset West", "Stellenbosch", "Table View"],
    "North West": ["Klerksdorp", "Potchefstroom", "Rustenburg"],
    Mpumalanga: ["Nelspruit", "Witbank"],
    "Free State": ["Bloemfontein"],
    "Eastern Cape": ["East London", "Port Elizabeth"],
    Limpopo: ["Polokwane"],
};

export default function Locations() {
  return (
    <div className="bg-background py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-normal text-center md:text-left mb-8">Browse Top Service Professionals in South Africa</h2>
        <div className="columns-2 md:columns-4 lg:columns-6 gap-8">
          {Object.entries(locationsData).map(([province, cities]) => (
            <div key={province} className="break-inside-avoid-column mb-6">
              <h3 className="font-bold mb-2">
                <Link href="#" className="text-foreground hover:text-primary">
                  {province}
                </Link>
              </h3>
              <ul className="space-y-1">
                {cities.map((city) => (
                  <li key={city}>
                    <Link href="#" className="text-sm text-foreground hover:text-primary">
                      {city}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
           <div className="break-inside-avoid-column mb-6">
              <h3 className="font-bold mb-2 text-red-600">
                <Link href="#" className="hover:text-red-700">
                  More...
                </Link>
              </h3>
            </div>
        </div>
      </div>
    </div>
  );
}
