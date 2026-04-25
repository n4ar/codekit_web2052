import { useState } from "react";
import { IconFilter, Checkbox, StarsRow, IconMapPinBlue, IconChevronDown } from "./Icons";
import { imgMapBg } from "./assets";

const propertyTypes = ["Hotels", "Resorts", "Apartments", "Villas"];
const facilities = ["Free Wi-Fi", "Swimming Pool", "Fitness Center", "Spa", "Parking", "Pet Friendly"];
const reviewScores = ["Superb 9+", "Very Good 8+", "Good 7+"];
const neighborhoods = ["Patong", "Karon", "Kata", "Kamala"];
const bedTypes = ["Single", "Double", "King"];

export function SearchSidebar() {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <aside className="flex flex-col gap-4 lg:gap-8 shrink-0 w-full lg:w-[256px]">
      
      {/* Mobile Toggle Button */}
      <button 
        className="lg:hidden flex items-center justify-between bg-white border border-slate-300 hover:bg-slate-50 active:bg-slate-100 rounded-xl p-4 shadow-sm w-full font-semibold text-slate-900 cursor-pointer outline-none transition-colors"
        onClick={() => setShowFilters(!showFilters)}
      >
        <div className="flex items-center gap-2">
           <IconFilter />
           <span>{showFilters ? "Hide Filters" : "Show Filters"}</span>
        </div>
        <div className={`transform transition-transform duration-300 ${showFilters ? 'rotate-180' : ''}`}>
           <IconChevronDown />
        </div>
      </button>

      {/* Filters panel */}
      <div className={`bg-white border border-slate-200 shadow-sm flex-col gap-4 p-4 lg:pb-8 lg:pt-4 rounded-xl w-full transition-all duration-300 ${showFilters ? 'flex' : 'hidden lg:flex'}`}>
        
        {/* Heading (Desktop only) */}
        <div className="hidden lg:flex gap-2 items-center w-full">
          <div className="w-[18px] h-[12px] flex items-center justify-center">
            <IconFilter />
          </div>
          <span className="font-semibold text-slate-900 text-lg">Filters</span>
        </div>

        {/* Filters Grid for Tablet/Mobile, Stacked for Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 mt-2 lg:mt-0">
          {/* Price Range */}
          <div className="flex flex-col gap-3 w-full">
            <span className="font-semibold text-slate-900 text-sm">Price Range</span>
            <div className="flex flex-col gap-4 px-1">
              <div className="flex items-center justify-between">
                <span className="font-medium text-slate-500 text-xs">$0</span>
                <span className="font-medium text-slate-500 text-xs">$1000+</span>
              </div>
              <div className="bg-slate-200 h-1.5 rounded-lg w-full relative">
                <div className="absolute left-0 h-full w-2/3 bg-[#005CBD] rounded-lg" />
                <div className="absolute left-[66%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#005CBD] rounded-full shadow" />
              </div>
            </div>
          </div>

          {/* Property Type */}
          <div className="flex flex-col gap-3 w-full">
            <span className="font-semibold text-slate-900 text-sm">Property Type</span>
            <div className="flex flex-col gap-2">
              {propertyTypes.map((type) => (
                <label key={type} className="flex gap-3 items-center cursor-pointer group">
                  <Checkbox />
                  <span className="font-normal text-slate-900 text-sm group-hover:text-[#005CBD]">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Star Rating */}
          <div className="flex flex-col gap-3 w-full">
            <span className="font-semibold text-slate-900 text-sm">Star Rating</span>
            <div className="flex flex-col gap-2">
              <label className="flex gap-3 items-center cursor-pointer">
                <Checkbox />
                <StarsRow count={5} total={5} size={14} />
              </label>
              <label className="flex gap-3 items-center cursor-pointer">
                <Checkbox />
                <StarsRow count={4} total={5} size={14} />
              </label>
            </div>
          </div>

          {/* Facilities */}
          <div className="flex flex-col gap-3 w-full">
            <span className="font-semibold text-slate-900 text-sm">Facilities</span>
            <div className="flex flex-col gap-2">
              {facilities.map((f) => (
                <label key={f} className="flex gap-3 items-center cursor-pointer group">
                  <Checkbox />
                  <span className="font-normal text-slate-900 text-sm group-hover:text-[#005CBD]">{f}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Review Score */}
          <div className="flex flex-col gap-3 w-full">
            <span className="font-semibold text-slate-900 text-sm">Review Score</span>
            <div className="flex flex-col gap-2">
              {reviewScores.map((r) => (
                <label key={r} className="flex gap-3 items-center cursor-pointer group">
                  <Checkbox />
                  <span className="font-normal text-slate-900 text-sm group-hover:text-[#005CBD]">{r}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Neighborhood */}
          <div className="flex flex-col gap-3 w-full">
            <span className="font-semibold text-slate-900 text-sm">Neighborhood</span>
            <div className="flex flex-col gap-2">
              {neighborhoods.map((n) => (
                <label key={n} className="flex gap-3 items-center cursor-pointer group">
                  <Checkbox />
                  <span className="font-normal text-slate-900 text-sm group-hover:text-[#005CBD]">{n}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Bed Type */}
          <div className="flex flex-col gap-3 w-full hidden sm:flex lg:flex">
            <span className="font-semibold text-slate-900 text-sm">Bed Type</span>
            <div className="flex flex-col gap-2">
              {bedTypes.map((b) => (
                <label key={b} className="flex gap-3 items-center cursor-pointer group">
                  <Checkbox />
                  <span className="font-normal text-slate-900 text-sm group-hover:text-[#005CBD]">{b}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Map CTA - Hidden on Mobile naturally or just shown at bottom */}
      <div className="relative bg-slate-100 h-[160px] overflow-hidden rounded-xl shadow-sm w-full hidden lg:block">
        <div className="absolute inset-0 pointer-events-none">
          <img alt="Map Background" className="w-full h-full object-cover opacity-80" src={imgMapBg} />
        </div>
        <div className="absolute inset-0 bg-blue-900/10 backdrop-blur-[1px] flex items-center justify-center">
          <button className="relative bg-white hover:bg-slate-50 transition-colors flex gap-2 items-center px-4 py-2 rounded-full shadow-md border-none cursor-pointer">
            <IconMapPinBlue />
            <span className="font-medium text-[#005CBD] text-sm">View on Map</span>
          </button>
        </div>
      </div>
      
    </aside>
  );
}
