import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import RoomDetail from "./RoomDetail";

export default function RoomDetailPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col">
      <Navbar />
      <div className="flex-1 flex justify-center">
        <RoomDetail />
      </div>
      <Footer />
    </div>
  );
}
