export function Navbar() {
  return (
    <nav
      className="w-full sticky top-0 z-50 bg-white/80 border-b border-slate-200 shadow-sm backdrop-blur-md"
      style={{
        height: 65,
      }}
    >
      <div
        className="max-w-[1280px] mx-auto flex items-center justify-between px-4 md:px-6 h-full"
      >
        {/* Left: logo + nav */}
        <div className="flex items-center gap-4 md:gap-8">
          <div
            className="text-blue-600 font-extrabold text-xl md:text-2xl tracking-tighter flex items-center"
            style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
          >
            T-Goda
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#"
              className="text-blue-600 font-semibold text-sm border-b-2 border-blue-600 pb-1.5 no-underline"
            >
              Hotels
            </a>
            {["Flights", "Bundles", "Activities"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-slate-600 font-semibold text-sm no-underline hover:text-blue-600 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Right: buttons */}
        <div className="flex items-center gap-2 md:gap-4">
          <button
            className="px-3 md:px-4 py-2 rounded-lg font-semibold text-sm text-slate-600 bg-transparent border-none cursor-pointer hover:bg-slate-100 transition-colors hidden sm:block"
          >
            Sign In
          </button>
          <button
            className="px-4 py-2 bg-[#005CBD] hover:bg-blue-800 transition-colors rounded-lg font-semibold text-sm text-white border-none cursor-pointer"
          >
            Create Account
          </button>
          {/* Mobile menu toggle (optional feature) */}
          <button className="md:hidden p-2 text-slate-600 rounded-lg hover:bg-slate-100 border-none bg-transparent">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
