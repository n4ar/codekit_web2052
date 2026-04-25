import { imgBangkok, imgTokyo, imgParis, imgLondon } from "./assets";
import Link from "next/link";

const DESTINATIONS = [
  {
    city: "Bangkok",
    country: "Thailand",
    badge: "TOP RATED",
    price: "$120",
    image: imgBangkok,
  },
  {
    city: "Tokyo",
    country: "Japan",
    badge: null,
    price: "$250",
    image: imgTokyo,
  },
  {
    city: "Paris",
    country: "France",
    badge: null,
    price: "$180",
    image: imgParis,
  },
  {
    city: "London",
    country: "UK",
    badge: null,
    price: "$210",
    image: imgLondon,
  },
];

export function TrendingDestinations() {
  return (
    <section className="max-w-[1280px] mx-auto px-4 md:px-10 py-12">
      {/* Header row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4 sm:gap-0">
        <div>
          <h2 className="font-bold text-2xl md:text-[30px] leading-8 md:leading-[36px] text-[#191C22] m-0">
            Trending Destinations
          </h2>
          <p className="font-normal text-sm md:text-[16px] leading-5 md:leading-[24px] text-[#424753] m-0 mt-1 md:mt-0">
            Handpicked favorites for your next adventure
          </p>
        </div>
        <Link
          href="/search"
          className="font-bold text-sm md:text-[16px] leading-5 md:leading-[24px] text-[#005CBD] no-underline whitespace-nowrap"
        >
          View all
        </Link>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {DESTINATIONS.map((d) => (
          <Link
            key={d.city}
            href={`/search`}
            className="flex flex-col h-[436px] group no-underline transition-transform hover:-translate-y-1 duration-300"
          >
            {/* Image */}
            <div className="relative overflow-hidden h-[376px] rounded-2xl flex-shrink-0 bg-slate-100 shadow-sm group-hover:shadow-md transition-shadow">
              <img
                alt={d.city}
                src={d.image}
                className="absolute w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {d.badge && (
                <div className="absolute left-4 bottom-3 bg-white/90 rounded-full px-3 py-1 backdrop-blur-sm shadow-sm">
                  <span className="font-bold text-xs uppercase tracking-[0.6px] text-[#191C22]">
                    {d.badge}
                  </span>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="pt-3 flex-1 flex flex-col justify-end">
              <p className="font-bold text-lg md:text-xl leading-snug md:leading-7 text-[#191C22] m-0 group-hover:text-[#005CBD] transition-colors">
                {d.city}, {d.country}
              </p>
              <p className="font-normal text-sm leading-5 text-[#424753] m-0">
                Starting from{" "}
                <span className="font-bold text-[#005CBD]">{d.price}</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
