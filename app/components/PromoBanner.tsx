import { imgSummer } from "./assets";

const HeartTagIcon = () => (
  // A custom SVG for a price tag combined with a heart cutout
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className="w-full h-full text-black opacity-10"
  >
    <path 
      fillRule="evenodd" 
      clipRule="evenodd" 
      d="M12.981 1.764a2.5 2.5 0 0 0-1.768-.732H4A2.5 2.5 0 0 0 1.5 3.532v7.213c0 .663.264 1.3.732 1.768l11.142 11.142a2.5 2.5 0 0 0 3.536 0l7.213-7.213a2.5 2.5 0 0 0 0-3.536L12.981 1.764ZM7 8.532a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM12 17.032l-3.5-3.5a2.121 2.121 0 0 1 3-3l.5.5.5-.5a2.121 2.121 0 0 1 3 3l-3.5 3.5Z" 
      fill="currentColor"
    />
  </svg>
);

export function PromoBanner() {
  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-10">
      <div
        className="relative overflow-hidden flex flex-col md:flex-row items-center justify-between rounded-3xl py-10 px-6 md:px-12 gap-10 md:gap-4 bg-[#B61B4A]"
        style={{ isolation: "isolate" }}
      >
        {/* Decorative bg globe icon replaced with Heart Tag */}
        <div className="absolute left-[45%] top-1/2 -translate-y-1/2 flex items-center justify-center opacity-70 pointer-events-none z-[-1] hidden sm:flex">
          <div className="w-[300px] h-[300px] md:w-[420px] md:h-[420px] transform rotate-[15deg]">
            <HeartTagIcon />
          </div>
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
