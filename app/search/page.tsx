import { Navbar } from "../components/Navbar";
import SearchResults from "./SearchResults";

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Navbar />
      <SearchResults />
    </div>
  );
}
