import { IconMapPin, StarsRow } from "./Icons";

export function FlashDealCard({
  image,
  discount,
  name,
  location,
  originalPrice,
  price,
  stars,
}: {
  image: string;
  discount: string;
  name: string;
  location: string;
  originalPrice: string;
  price: string;
  stars: number;
}) {
  return (
    <div className="flex flex-col sm:flex-row min-h-[192px] items-stretch sm:items-start w-full">
      {/* Image side */}
      <a className="cursor-pointer relative shrink-0 w-full sm:w-[256px] h-[180px] sm:h-[192px] overflow-hidden flex flex-col items-start justify-center z-[2]">
        <div className="relative flex-1 w-full h-full">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt={name} className="absolute h-full w-full object-cover" src={image} />
          </div>
        </div>
        {/* Discount badge */}
        <div className="absolute top-3 left-3 bg-[#B61B4A] px-3 py-1 rounded-lg shadow-md">
          <span className="font-extrabold text-[12px] text-white leading-4">{discount}</span>
        </div>
      </a>
      
      {/* Info side */}
      <div className="flex-1 w-full p-4 sm:p-5 flex flex-col justify-center z-[1]">
        <div className="flex flex-col sm:flex-row items-start justify-between w-full h-full gap-4 sm:gap-0">
          <div className="flex flex-col gap-2 shrink-0">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="font-normal text-[#191C22] text-lg leading-7">{name}</span>
              <StarsRow count={stars} total={5} size={10} />
            </div>
            <div className="flex gap-1 items-center">
              <IconMapPin />
              <span className="text-[#424753] text-xs leading-4">{location}</span>
            </div>
          </div>
          
          <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-end shrink-0 w-full sm:w-auto">
            <div className="flex flex-col items-start sm:items-end w-full sm:w-auto">
              <span className="text-[#424753] text-[10px] line-through leading-[10px]">{originalPrice}</span>
              <div className="flex items-baseline gap-1 pb-2">
                <span className="font-semibold text-[#B61B4A] text-2xl leading-[31.2px]">{price}</span>
                <span className="text-[#424753] text-[10px] leading-[15px]">/night</span>
              </div>
            </div>
            <a className="bg-[#B61B4A] cursor-pointer drop-shadow-sm flex items-center justify-center px-6 py-2 sm:px-4 sm:py-1.5 rounded-lg w-full sm:w-auto mt-auto sm:mt-0">
              <span className="font-bold text-sm sm:text-xs text-white leading-5 sm:leading-4">Claim</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
