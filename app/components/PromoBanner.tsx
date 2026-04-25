import { imgGlobe, imgSummer } from "./assets";

export function PromoBanner() {
  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-10">
      <div
        className="relative overflow-hidden flex flex-col md:flex-row items-center justify-between rounded-3xl py-10 px-6 md:px-12 gap-10 md:gap-4 bg-[#B61B4A]"
        style={{ isolation: "isolate" }}
      >
        {/* Decorative bg globe icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
          <img alt="globe" src={imgGlobe} className="w-[200px] md:w-[250px] object-contain" />
        </div>

        {/* Left content */}
        <div className="flex flex-col relative z-10 w-full md:w-3/5 lg:max-w-xl gap-4 text-center md:text-left">
          <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight lg:leading-[48px] text-white m-0">
            Summer Sales: Up to 40% Off!
          </h2>
          <p className="font-normal text-base md:text-lg leading-relaxed text-white/80 m-0 max-w-full lg:max-w-[537px] mx-auto md:mx-0">
            Exclusive member deals on flights and luxury hotels for your next summer getaway. Valid until Oct 31st.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start pt-4 gap-4">
            <button className="w-full sm:w-auto bg-white hover:bg-slate-100 transition-colors rounded-xl border-none cursor-pointer py-3.5 px-8">
              <span className="font-bold text-base md:text-lg text-[#B61B4A] whitespace-nowrap">
                Explore Deals
              </span>
            </button>
            <button className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white/10 transition-colors rounded-xl cursor-pointer py-3.5 px-8">
              <span className="font-bold text-base md:text-lg text-white whitespace-nowrap">
                Join Club T-Goda
              </span>
            </button>
          </div>
        </div>

        {/* Right image */}
        <div className="relative flex items-center justify-center flex-shrink-0 w-full md:w-2/5 md:max-w-[340px] z-10">
          <div className="transform rotate-3 shadow-2xl rounded-2xl w-[280px] h-[280px] lg:w-[320px] lg:h-[320px] overflow-hidden">
            <img
              alt="Summer sale"
              src={imgSummer}
              className="w-full h-full object-cover block"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
