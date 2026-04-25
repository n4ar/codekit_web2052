import {
  IconChevronRight,
  IconStarFilled,
  IconMapPin,
  IconShare,
  IconHeart,
} from "./Icons";

export function HotelHeader() {
  return (
    <>
      {/* Breadcrumb */}
      <nav className="flex gap-2 items-center">
        <a href="/" className="text-[#424753] text-[16px] leading-6 cursor-pointer hover:text-[#191c22]">Home</a>
        <IconChevronRight />
        <a href="#" className="text-[#424753] text-[16px] leading-6 cursor-pointer hover:text-[#191c22]">Greece</a>
        <IconChevronRight />
        <a href="#" className="text-[#424753] text-[16px] leading-6 cursor-pointer hover:text-[#191c22]">Crete Hotels</a>
        <IconChevronRight />
        <span className="text-[#191c22] text-[16px] font-semibold leading-6">Grand Azure Resort &amp; Spa</span>
      </nav>

      {/* Hotel title row */}
      <div className="flex items-end justify-between w-full">
        {/* Left: rating + name + location */}
        <div className="flex flex-col gap-2">
          {/* Stars + badge */}
          <div className="flex gap-2 items-center">
            <div className="flex items-center">
              <IconStarFilled /><IconStarFilled /><IconStarFilled /><IconStarFilled /><IconStarFilled />
            </div>
            <div className="bg-[#005cbd] px-2 py-0.5 rounded-[4px]">
              <span className="text-white text-[16px] leading-6">RESORT</span>
            </div>
          </div>

          {/* Hotel name */}
          <div className="text-[#191c22] text-[16px] leading-6">
            Grand Azure Resort &amp; Spa, Elounda
          </div>

          {/* Location */}
          <div className="flex gap-2 items-center">
            <IconMapPin />
            <span className="text-[#424753] text-[16px] leading-6">Elounda Bay, Crete, 72053, Greece</span>
            <div className="pl-2">
              <span className="text-[#005cbd] font-semibold text-[16px] leading-6 cursor-pointer">Show on map</span>
            </div>
          </div>
        </div>

        {/* Right: action buttons */}
        <div className="flex gap-4 items-center">
          <button className="border border-[#c2c6d5] flex gap-2 items-center px-[17px] py-[9px] rounded-lg cursor-pointer bg-white hover:bg-slate-50 transition-colors">
            <IconShare />
            <span className="text-[#191c22] text-[16px] leading-6">Share</span>
          </button>
          <button className="border border-[#c2c6d5] flex gap-2 items-center px-[17px] py-[9px] rounded-lg cursor-pointer bg-white hover:bg-slate-50 transition-colors">
            <IconHeart />
            <span className="text-[#191c22] text-[16px] leading-6">Save</span>
          </button>
          <button className="bg-[#b61b4a] flex items-center justify-center px-8 py-3 rounded-lg shadow-md cursor-pointer hover:bg-rose-800 transition-colors">
            <span className="text-white text-[16px] leading-6">Book Now</span>
          </button>
        </div>
      </div>
    </>
  );
}
