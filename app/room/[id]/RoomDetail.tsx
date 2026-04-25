import { HotelHeader } from "./components/HotelHeader";
import { HotelGallery } from "./components/HotelGallery";
import { HotelOverview } from "./components/HotelOverview";
import { RatingCard } from "./components/RatingCard";
import { LocationCard } from "./components/LocationCard";
import { RoomTable } from "./components/RoomTable";
import { GuestReviews } from "./components/GuestReviews";

export default function RoomDetail() {
  return (
    <div className="flex flex-col gap-6 items-start max-w-[1280px] mx-auto pb-16 pt-8 px-6 w-full">
      <HotelHeader />
      <HotelGallery />

      {/* Main Content Grid — 2/3 + 1/3 */}
      <div className="grid gap-12 pt-6 w-full" style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
        {/* Left side — spans 2 cols */}
        <div className="col-span-2 flex flex-col gap-12">
          <HotelOverview />
        </div>

        {/* Right side */}
        <div className="flex flex-col gap-8">
          <RatingCard />
          <LocationCard />
        </div>
      </div>

      <RoomTable />
      <GuestReviews />
    </div>
  );
}
