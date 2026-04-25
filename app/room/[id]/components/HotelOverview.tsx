import {
  IconPool,
  IconSpa,
  IconRestaurant,
  IconGym,
  IconWifi,
  IconBeach,
  IconChevronRightBlue,
} from "./Icons";

export function HotelOverview() {
  return (
    <>
      {/* Overview */}
      <div className="flex flex-col gap-4">
        <p className="text-[#191c22] text-[16px] leading-6">Overview</p>
        <p className="text-[#424753] text-[16px] leading-[26px]">
          Experience unparalleled luxury at the Grand Azure Resort &amp; Spa, nestled on the pristine shores of Elounda
          Bay. This architectural masterpiece blends traditional Cretan charm with ultra-modern design, offering
          guests breathtaking panoramic views of the Mediterranean. Whether you&apos;re seeking a romantic getaway or
          a rejuvenation retreat, our world-class amenities and personalized service ensure a stay that transcends the
          ordinary.
        </p>
      </div>

      {/* Popular Amenities */}
      <div className="flex flex-col gap-6">
        <p className="text-[#191c22] text-[16px] leading-6">Popular Amenities</p>
        <div className="grid grid-cols-3 gap-6" style={{ gridTemplateRows: "28px 28px" }}>
          <div className="flex gap-3 h-7 items-center">
            <IconPool />
            <span className="text-[#191c22] text-[16px] leading-6">3 Outdoor Pools</span>
          </div>
          <div className="flex gap-3 h-7 items-center">
            <IconSpa />
            <span className="text-[#191c22] text-[16px] leading-6">Full-service Spa</span>
          </div>
          <div className="flex gap-3 h-7 items-center">
            <IconRestaurant />
            <span className="text-[#191c22] text-[16px] leading-6">5 Restaurants</span>
          </div>
          <div className="flex gap-3 h-7 items-center">
            <IconGym />
            <span className="text-[#191c22] text-[16px] leading-6">Gym &amp; Fitness</span>
          </div>
          <div className="flex gap-3 h-7 items-center">
            <IconWifi />
            <span className="text-[#191c22] text-[16px] leading-6">Free High-speed Wi-Fi</span>
          </div>
          <div className="flex gap-3 h-7 items-center">
            <IconBeach />
            <span className="text-[#191c22] text-[16px] leading-6">Private Beach</span>
          </div>
        </div>
        <div className="flex gap-2 items-center pt-2 cursor-pointer">
          <span className="text-[#005cbd] font-semibold text-[16px] leading-6">See all 45 amenities</span>
          <IconChevronRightBlue />
        </div>
      </div>
    </>
  );
}
