import { imgMail } from "./assets";

export function Newsletter() {
  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-10 py-12">
      <section className="flex flex-col items-center bg-[#E7E8F1] rounded-3xl py-12 px-6 md:py-16 md:px-12 lg:px-24">
        <div className="flex flex-col items-center w-full max-w-[672px] gap-4">
          {/* Mail icon */}
          <img
            alt="Mail"
            src={imgMail}
            className="w-10 h-8 flex-shrink-0"
          />

          {/* Heading */}
          <h2 className="font-bold text-2xl md:text-3xl leading-snug lg:leading-9 text-[#191C22] text-center m-0">
            Get Travel Deals Directly
          </h2>

          {/* Description */}
          <p className="font-normal text-base md:text-lg leading-relaxed text-[#424753] text-center m-0 w-full">
            Subscribe to our newsletter and get early access to hidden gems and seasonal discounts. No spam, only adventure.
          </p>

          {/* Form */}
          <div className="flex flex-col sm:flex-row items-stretch w-full gap-3 mt-4">
            <div className="flex items-center flex-1 bg-white border border-[#6B7FC6] rounded-xl px-5 py-3.5 focus-within:ring-2 focus-within:ring-[#6B7FC6] transition-all">
              <input 
                type="email"
                placeholder="Your email address"
                className="w-full bg-transparent border-none outline-none text-[#191C22] placeholder-[#6B7280] text-base"
              />
            </div>
            <button className="flex items-center justify-center flex-shrink-0 bg-[#005CBD] hover:bg-blue-800 transition-colors rounded-xl border-none cursor-pointer py-3.5 px-8">
              <span className="font-bold text-base text-white whitespace-nowrap">
                Subscribe Now
              </span>
            </button>
          </div>

          {/* Fine print */}
          <p className="font-normal text-xs text-[#424753] text-center m-0 mt-2 max-w-[380px]">
            By subscribing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </section>
    </div>
  );
}
