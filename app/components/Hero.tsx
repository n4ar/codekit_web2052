import { imgHeroBg, imgIconLocation, imgIconCalendar, imgIconSearch } from "./assets";

export function Hero() {
  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-10 pt-6 md:pt-10">
      <section
        className="relative flex items-center justify-center overflow-hidden rounded-2xl min-h-[400px] md:min-h-[520px] py-16 md:py-[114px] px-4"
        style={{ isolation: "isolate" }}
      >
        {/* Background image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            alt="Hero Background"
            src={imgHeroBg}
            className="absolute w-full object-cover max-w-none"
            style={{ height: "230.77%", top: "-65.38%", left: 0 }}
          />
        </div>
        
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.4) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center w-full max-w-[800px] gap-6">
          {/* Title */}
          <h1 className="font-extrabold text-4xl sm:text-5xl md:text-[60px] leading-tight md:leading-[60px] tracking-tight text-white text-center w-full max-w-[750px] m-0">
            Escape to Your Perfect Paradise
          </h1>

          {/* Subtitle */}
          <p className="font-medium text-lg md:text-xl leading-relaxed text-white/90 text-center w-full max-w-[672px] m-0 px-2">
            Unlock exclusive prices on over 2 million properties and flights across the globe.
          </p>

          {/* Search Bar */}
          <div className="relative flex flex-col md:flex-row items-center w-full max-w-[768px] bg-white rounded-xl md:rounded-2xl p-2 md:p-2 gap-2 shadow-2xl">
            {/* Field 1: Location */}
            <div className="flex items-center w-full min-w-0 bg-[#E9E9E9] border border-[#6B7FC6] rounded-lg px-3 py-1">
              <img
                alt="Location"
                src={imgIconLocation}
                className="w-5 h-5 flex-shrink-0"
              />
              <div className="flex-1 px-2 py-3">
                <span className="font-normal text-base text-gray-500 block truncate">
                  Where to next?
                </span>
              </div>
            </div>

            {/* Field 2: Date */}
            <div className="flex items-center w-full md:w-auto md:min-w-[200px] bg-[#E9E9E9] border border-[#6B7FC6] rounded-lg px-3 py-1">
              <img
                alt="Calendar"
                src={imgIconCalendar}
                className="w-[18px] h-5 flex-shrink-0"
              />
              <div className="flex-1 px-2 py-3 md:py-2.5">
                <span className="font-normal text-base leading-6 text-gray-900 block whitespace-nowrap">
                  Oct 12 - Oct 18
                </span>
              </div>
            </div>

            {/* Search Button */}
            <button className="flex items-center justify-center w-full md:w-auto flex-shrink-0 bg-[#005CBD] hover:bg-blue-800 transition-colors rounded-lg border-none cursor-pointer py-3 px-8 gap-2">
              <img alt="Search" src={imgIconSearch} className="w-[18px] h-[18px]" />
              <span className="font-bold text-lg leading-7 text-white">
                Search
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
