import Link from "next/link";

const locationsData = {
    Gauteng: ["Akasia", "Alberton", "Alexandra", "Atteridgeville", "Benoni", "Boksburg", "Brakpan", "Bronkhorstspruit", "Carletonville", "Centurion"],
    "Western Cape": ["Albertinia", "Ashton", "Atlantis", "Beaufort West", "Belhar", "Bellville", "Bettys Bay", "Big Bay", "Blackheath", "Blouberg"],
    "KwaZulu-Natal": ["Amanzimtoti", "Anerley", "Ashburton", "Ballito", "Berea", "Bergville", "Blackburn", "Bluff", "Camperdown", "Cato Ridge"],
    "Eastern Cape": ["Aliwal North", "Bizana", "Butterworth", "Despatch", "East London", "Gonubie", "Graaff-Reinet", "Grahamstown", "Humansdorp", "Jeffreys Bay"],
    "Free State": ["Bethlehem", "Bloemfontein", "Bothaville", "Clarens", "Deneysville", "Ficksburg", "Frankfort", "Harrismith", "Heilbron", "Kroonstad"],
    Limpopo: ["Bela-Bela", "Bochum", "Burgersfort", "Giyani", "Groblersdal", "Hoedspruit", "Lephalale", "Louis Trichardt", "Malamulele", "Marble Hall"],
    Mpumalanga: ["Barberton", "Bethal", "Bushbuckridge", "Delmas", "Embalenhle", "Ermelo", "Evander", "Hazyview", "Komatipoort", "Kriel"],
    "North West": ["Brits", "Delareyville", "Hartbeespoort", "Klerksdorp", "Koster", "Lichtenburg", "Mahikeng", "Marikana", "Mmabatho", "Orkney"],
    "Northern Cape": ["Barkly West", "Colesberg", "Danielskuil", "De Aar", "Hartswater", "Jan Kempdorp", "Kakamas", "Kathu", "Keimoes", "Kimberley"],
};

export default function Locations() {
  return (
    <div className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {Object.entries(locationsData).map(([province, cities]) => (
            <div key={province}>
              <h3 className="font-bold mb-4">{province}</h3>
              <ul className="space-y-2">
                {cities.map((city) => (
                  <li key={city}>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                      {city}
                    </Link>
                  </li>
                ))}
                 <li>
                    <Link href="#" className="text-sm font-semibold text-foreground hover:text-primary">
                      More...
                    </Link>
                  </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
