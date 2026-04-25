import { IconMapPin, StarsRow } from "./Icons";

export function HotelCard({
  image,
  name,
  location,
  features,
  rating,
  ratingLabel,
  reviews,
  originalPrice,
  price,
  stars,
  badge,
}: {
  image: string;
  name: string;
  location: string;
  features: string[];
  rating: number;
  ratingLabel: string;
  reviews: string;
  originalPrice?: string;
  price: string;
  stars: number;
  badge?: string;
}) {
  return (
    <div className="bg-white border border-slate-200 overflow-hidden flex flex-col md:flex-row md:h-[256px] rounded-xl shadow-sm hover:shadow-md transition-shadow w-full">
      {/* Image */}
      <a className="cursor-pointer relative shrink-0 w-full md:w-[320px] h-[200px] md:h-full z-[2]">
        <div className="relative flex-1 w-full h-full">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt={name} className="absolute w-full h-full object-cover" src={image} />
          </div>
          {badge && (
            <div className="absolute top-3 left-3 bg-[#005CBD] px-3 py-1 rounded-lg">
              <span className="font-bold text-[11px] text-white">{badge}</span>
            </div>
          )}
        </div>
      </a>
      
      {/* Content */}
      <div className="flex-1 w-full flex flex-col justify-between p-4 md:p-6 z-[1]">
        {/* Top info */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-4 sm:gap-0">
            <div className="flex flex-col gap-1">
              <div className="flex flex-wrap gap-2 items-center">
                <span className="font-medium text-[#191C22] text-lg sm:text-[20px] leading-snug sm:leading-7">{name}</span>
                <StarsRow count={stars} total={5} size={12} />
              </div>
              <div className="flex gap-1 items-center">
                <IconMapPin />
                <span className="text-[#424753] text-[12px] leading-4">{location}</span>
              </div>
            </div>
            
            {/* Rating badge */}
            <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2 sm:gap-1 w-full sm:w-auto shrink-0">
              <div className="flex gap-2 items-center">
                <span className="text-[#424753] text-[12px] leading-4 text-right hidden sm:block">{ratingLabel}</span>
                <div className="bg-[#005CBD] w-9 h-9 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-white text-[14px]">{rating}</span>
                </div>
              </div>
              <span className="text-[#424753] text-[12px] leading-4 font-medium sm:font-normal">{reviews}</span>
            </div>
          </div>
          
          {/* Feature tags */}
          <div className="flex flex-wrap gap-2">
            {features.map((f) => (
              <span key={f} className="bg-[#F0F4FF] text-[#005CBD] font-medium text-[12px] px-3 py-1 rounded-full whitespace-nowrap">
                {f}
              </span>
            ))}
          </div>
        </div>
        
        {/* Bottom: price + book */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 sm:gap-0 mt-4 sm:mt-0">
          <span className="text-[#424753] text-[12px] font-medium sm:font-normal">Free cancellation available</span>
          
          <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-1">
            <div className="flex flex-col items-start sm:items-end">
              {originalPrice && (
                <span className="text-[#424753] text-[12px] line-through">{originalPrice}</span>
              )}
              <div className="flex items-baseline gap-1">
                <span className="font-semibold text-[#191C22] text-xl sm:text-[24px] leading-tight sm:leading-[31.2px]">{price}</span>
                <span className="text-[#424753] text-[12px]">/night</span>
              </div>
            </div>
            <a className="bg-[#B61B4A] hover:bg-rose-800 transition-colors cursor-pointer flex items-center justify-center px-6 py-2 rounded-lg">
              <span className="font-normal text-white text-[16px] leading-6">Book Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
