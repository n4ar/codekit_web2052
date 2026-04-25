import { imgIconShield, imgIconPhone, imgIconCalFlex } from "./assets";

const features = [
  {
    iconBg: "rgba(83,146,249,0.2)",
    icon: imgIconShield,
    iconW: 24.969,
    iconH: 25,
    title: "Best Price Guarantee",
    desc: "Find a lower price? We'll match it and give you a voucher for your next trip.",
  },
  {
    iconBg: "rgba(255,86,125,0.2)",
    icon: imgIconPhone,
    iconW: 25,
    iconH: 22.5,
    title: "24/7 Global Support",
    desc: "Our world-class support team is here to help you anywhere, anytime in 40+ languages.",
  },
  {
    iconBg: "rgba(212,127,0,0.2)",
    icon: imgIconCalFlex,
    iconW: 23.75,
    iconH: 25,
    title: "Flexible Booking",
    desc: "Life happens. Most of our properties offer free cancellation for peace of mind.",
  },
];

export function WhyChooseUs() {
  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-10 pt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {features.map((f) => (
          <div
            key={f.title}
            className="flex flex-col items-center sm:items-start md:items-center text-center sm:text-left md:text-center bg-[#E9E9E9] rounded-xl p-6 gap-3"
          >
            <div
              className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full"
              style={{ background: f.iconBg }}
            >
              <img
                alt={f.title}
                src={f.icon}
                style={{ width: f.iconW, height: f.iconH, display: "block" }}
              />
            </div>
            <div className="pt-1 w-full">
              <h3 className="font-bold text-xl leading-7 text-[#191C22] m-0">
                {f.title}
              </h3>
            </div>
            <p className="font-normal text-sm leading-5 text-[#424753] m-0">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
