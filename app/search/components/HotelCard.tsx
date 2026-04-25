import { IconMapPin, StarsRow, IconTopChoice, FeatureIcon } from "./Icons";

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
  note,
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
  note?: string;
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
            <div className="absolute top-4 left-4 backdrop-blur-[2px] bg-[rgba(255,255,255,0.9)] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-1 items-center px-3 py-[3px] rounded-full">
              <IconTopChoice />
              <span className="font-bold text-[#005CBD] text-[12px] leading-[16.8px]">{badge}</span>
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
            <div className="bg-[rgba(0,92,189,0.1)] px-3 py-[6px] rounded-[8px] flex flex-col items-end shrink-0">
              <span className="font-bold text-[#005CBD] text-[14px] leading-[20px] text-right whitespace-nowrap">{rating} {ratingLabel}</span>
              <span className="text-[#424753] text-[10px] leading-[15px] text-right whitespace-nowrap">{reviews}</span>
            </div>
          </div>
          
          {/* Feature tags */}
          <div className="flex flex-wrap gap-2">
            {features.map((f) => (
              <div key={f} className="bg-[#ecedf6] flex items-center gap-[6px] pl-2 pr-[10px] py-[4px] rounded-[4px]">
                <FeatureIcon name={f} />
                <span className="text-[#191c22] text-[11px] leading-[16.5px] whitespace-nowrap">{f}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom: price + book */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 sm:gap-0 mt-4 sm:mt-0">
          <span className="text-[#424753] text-[12px] font-medium sm:font-normal">{note ?? "Free cancellation available"}</span>
          
          <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-1">
            <div className="flex flex-col items-start sm:items-end">
              {originalPrice && (
                <span className="text-[#424753] text-[12px] line-through">{originalPrice}</span>
              )}
              <div className="flex items-baseline gap-1">
                <span className="font-semibold text-[#B61B4A] text-xl sm:text-[24px] leading-tight sm:leading-[31.2px]">{price}</span>
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
