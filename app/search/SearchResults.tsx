"use client";

import { IconChevronDown, IconFlash } from "./components/Icons";
import { SearchSummaryBar } from "./components/SearchSummaryBar";
import { SearchSidebar } from "./components/SearchSidebar";
import { FlashDealCard } from "./components/FlashDealCard";
import { HotelCard } from "./components/HotelCard";

import { 
  imgUluwatuLuxuryVilla, 
  imgUbudJungleRetreat, 
  imgSeminyakBeachClubResort, 
  imgTheAzureSerenityResort, 
  imgLuminaBeachVillas, 
  imgThePalmsSanctuary 
} from "./components/assets";

export default function SearchResults() {
  const flashDeals = [
    {
      image: imgUluwatuLuxuryVilla,
      discount: "60% OFF",
      name: "Mandala Sky Luxury Villas",
      location: "Uluwatu, Bali • Cliff-top view",
      originalPrice: "$1,200",
      price: "$480",
      stars: 5,
    },
    {
      image: imgUbudJungleRetreat,
      discount: "45% OFF",
      name: "Emerald Jungle Retreat",
      location: "Ubud, Bali • Private Sanctuary",
      originalPrice: "$450",
      price: "$247",
      stars: 4,
    },
    {
      image: imgSeminyakBeachClubResort,
      discount: "35% OFF",
      name: "Seminyak Beach Club Resort",
      location: "Seminyak, Bali • Beachfront",
      originalPrice: "$680",
      price: "$442",
      stars: 5,
    },
  ];

  const hotels = [
    {
      image: imgTheAzureSerenityResort,
      name: "The Azure Serenity Resort",
      location: "Nusa Dua, Bali • Beachfront",
      features: ["Free Wi-Fi", "Swimming Pool", "Spa", "Free Breakfast"],
      rating: 9.2,
      ratingLabel: "Superb",
      reviews: "2,847 reviews",
      originalPrice: "$520",
      price: "$389",
      stars: 5,
      badge: "Member Deal",
    },
    {
      image: imgLuminaBeachVillas,
      name: "Lumina Beach Villas",
      location: "Sanur, Bali • Beachfront",
      features: ["Free Wi-Fi", "Private Pool", "Fitness Center"],
      rating: 8.7,
      ratingLabel: "Very Good",
      reviews: "1,203 reviews",
      price: "$295",
      stars: 4,
    },
    {
      image: imgThePalmsSanctuary,
      name: "The Palms Sanctuary",
      location: "Ubud, Bali • Jungle View",
      features: ["Free Wi-Fi", "Infinity Pool", "Spa", "Yoga Studio"],
      rating: 9.5,
      ratingLabel: "Exceptional",
      reviews: "985 reviews",
      originalPrice: "$410",
      price: "$328",
      stars: 5,
    },
  ];

  return (
    <div className="flex flex-col items-start w-full bg-[#F8F9FA]">
      <SearchSummaryBar />

      {/* Content Grid */}
      <div className="flex flex-col lg:flex-row gap-6 items-start max-w-[1280px] mx-auto px-4 sm:px-6 py-6 lg:py-8 w-full">
        <SearchSidebar />

        {/* Results List */}
        <div className="flex flex-col gap-4 lg:gap-6 items-start w-full lg:flex-1 min-w-0">
          
          {/* Header: result count + sort */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-3 sm:gap-0">
            <span className="font-semibold text-slate-900 text-lg sm:text-xl">245 properties in Bali</span>
            <div className="flex gap-2 items-center self-end sm:self-auto">
              <span className="font-medium text-slate-500 text-sm">Sort by:</span>
              <div className="relative flex items-center pl-3 pr-10 py-2 cursor-pointer hover:bg-slate-100 rounded-lg transition-colors">
                <span className="font-medium text-[#005CBD] text-sm sm:text-base">Recommended</span>
                <div className="absolute right-2 top-1/2 -translate-y-1/2 text-[#005CBD]">
                  <IconChevronDown />
                </div>
              </div>
            </div>
          </div>

          {/* Flash Deals Section */}
          <div
            className="border border-blue-900/20 flex flex-col overflow-hidden p-1 sm:p-1.5 rounded-2xl shadow-xl w-full"
            style={{ backgroundImage: "linear-gradient(134.97deg, rgb(0, 92, 189) 0%, rgb(0, 69, 145) 100%)" }}
          >
            <div className="bg-white rounded-xl w-full overflow-hidden">
              {/* Flash Deals Header */}
              <div className="bg-rose-50 flex items-center justify-between px-4 sm:px-6 py-3 w-full border-b border-rose-100">
                <div className="flex gap-2 sm:gap-3 items-center">
                  <div className="w-4 flex items-center justify-center">
                    <IconFlash />
                  </div>
                  <span className="font-semibold text-[#B61B4A] text-sm sm:text-lg">Flash Deals for You</span>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="font-medium text-slate-500 text-[10px] sm:text-xs hidden sm:block">Ends in:</span>
                  <div className="bg-[#B61B4A] flex gap-1 items-center px-2 py-1 rounded-md">
                    <span className="font-bold text-white text-xs sm:text-sm font-mono">08</span>
                    <span className="font-bold text-white text-xs sm:text-sm font-mono">:</span>
                    <span className="font-bold text-white text-xs sm:text-sm font-mono">45</span>
                    <span className="font-bold text-white text-xs sm:text-sm font-mono">:</span>
                    <span className="font-bold text-white text-xs sm:text-sm font-mono">12</span>
                  </div>
                </div>
              </div>

              {/* Deals list */}
              <div className="flex flex-col divide-y divide-slate-100">
                {flashDeals.map((deal, i) => (
                  <FlashDealCard key={i} {...deal} />
                ))}
              </div>
            </div>
          </div>

          {/* Regular Hotel Cards */}
          <div className="flex flex-col gap-4 w-full">
            {hotels.map((hotel, i) => (
              <HotelCard key={i} {...hotel} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
