import { IconStarFilledSm, IconStarHalfSm } from "./Icons";

export function GuestReviews() {
  return (
    <div className="flex flex-col gap-8 pt-14 w-full">
      <div className="flex items-center justify-between w-full">
        <span className="text-[#191c22] text-[16px] leading-6">Guest Reviews</span>
        <span className="text-[#005cbd] font-semibold text-[16px] leading-6 cursor-pointer">Read all 1,248 reviews</span>
      </div>

      <div className="grid grid-cols-3 gap-6 w-full">
        {/* Review 1 */}
        <div className="bg-white border border-[rgba(194,198,213,0.3)] flex flex-col justify-between p-[25px] rounded-2xl shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
          <div className="flex flex-col gap-4 pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <IconStarFilledSm /><IconStarFilledSm /><IconStarFilledSm /><IconStarFilledSm /><IconStarFilledSm />
              </div>
              <span className="text-[#424753] text-[16px] leading-6">May 12, 2024</span>
            </div>
            <p className="italic text-[#191c22] text-[16px] leading-6">
              &ldquo;An absolute paradise. The views from the Presidential Suite are unmatched. The service was impeccable from start to finish.&rdquo;
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <div className="bg-[#d7e2ff] flex items-center justify-center rounded-full size-10">
              <span className="text-[#001a40] font-bold text-[16px] leading-6">SM</span>
            </div>
            <div>
              <p className="text-[#191c22] text-[16px] leading-6">Sophia Martinez</p>
              <p className="text-[#424753] text-[12px] leading-[18px]">United Kingdom</p>
            </div>
          </div>
        </div>

        {/* Review 2 */}
        <div className="bg-white border border-[rgba(194,198,213,0.3)] flex flex-col justify-between p-[25px] rounded-2xl shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
          <div className="flex flex-col gap-4 pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <IconStarFilledSm /><IconStarFilledSm /><IconStarFilledSm /><IconStarFilledSm /><IconStarHalfSm />
              </div>
              <span className="text-[#424753] text-[16px] leading-6">Apr 28, 2024</span>
            </div>
            <p className="italic text-[#191c22] text-[16px] leading-6">
              &ldquo;Excellent facilities and great breakfast selection. The private beach is beautiful, though the city center is a bit of a walk.&rdquo;
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <div className="bg-[#ffd9dd] flex items-center justify-center rounded-full size-10">
              <span className="text-[#400013] font-bold text-[16px] leading-6">JW</span>
            </div>
            <div>
              <p className="text-[#191c22] text-[16px] leading-6">James Wilson</p>
              <p className="text-[#424753] text-[12px] leading-[18px]">United States</p>
            </div>
          </div>
        </div>

        {/* Review 3 */}
        <div className="bg-white border border-[rgba(194,198,213,0.3)] flex flex-col justify-between p-[25px] rounded-2xl shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
          <div className="flex flex-col gap-4 pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <IconStarFilledSm /><IconStarFilledSm /><IconStarFilledSm /><IconStarFilledSm /><IconStarFilledSm />
              </div>
              <span className="text-[#424753] text-[16px] leading-6">Apr 15, 2024</span>
            </div>
            <p className="italic text-[#191c22] text-[16px] leading-6">
              &ldquo;The spa treatments were heavenly. Truly a five-star experience. We will definitely be coming back next summer.&rdquo;
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <div className="bg-[#ffdcbd] flex items-center justify-center rounded-full size-10">
              <span className="text-[#2c1600] font-bold text-[16px] leading-6">AK</span>
            </div>
            <div>
              <p className="text-[#191c22] text-[16px] leading-6">Anna Kowalski</p>
              <p className="text-[#424753] text-[12px] leading-[18px]">Germany</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
