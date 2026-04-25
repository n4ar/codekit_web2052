import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import SearchResults from "./SearchResults";

function Pagination() {
  const pages = [1, 2, 3, "...", 12];
  return (
    <div className="flex items-center justify-center gap-2 py-8">
      <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 hover:bg-slate-50">
        <svg width="7" height="12" viewBox="0 0 7 12" fill="none"><path d="M6 1L1 6l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      {pages.map((p, i) =>
        p === "..." ? (
          <span key={i} className="w-9 h-9 flex items-center justify-center text-slate-400 text-sm">...</span>
        ) : (
          <button
            key={i}
            className={`w-9 h-9 flex items-center justify-center rounded-lg border text-sm font-medium transition-colors ${
              p === 1
                ? "bg-[#005CBD] border-[#005CBD] text-white"
                : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
            }`}
          >
            {p}
          </button>
        )
      )}
      <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 hover:bg-slate-50">
        <svg width="7" height="12" viewBox="0 0 7 12" fill="none"><path d="M1 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
    </div>
  );
}

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col">
      <Navbar />
      <div className="flex-1">
        <SearchResults />
      </div>
      <Pagination />
      <Footer />
    </div>
  );
}
