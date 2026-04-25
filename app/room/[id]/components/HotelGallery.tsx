const imgMain = "https://www.figma.com/api/mcp/asset/bbd3bc1b-05ef-4d3a-a956-bd13ed1f581c";
const imgGallery1 = "https://www.figma.com/api/mcp/asset/e08ef384-220c-4a9c-80c4-0c37f9bca4e2";
const imgGallery2 = "https://www.figma.com/api/mcp/asset/3d7ee6e7-483d-4a61-909a-2d67d1f1e097";
const imgGallery3 = "https://www.figma.com/api/mcp/asset/2d8874e5-6d2c-4201-a533-9d8276d1d023";
const imgGallery4 = "https://www.figma.com/api/mcp/asset/b13cab74-c4ff-4bc7-bdf8-6f1d58f008da";

export function HotelGallery() {
  return (
    <div
      className="gap-4 grid h-[508px] pt-2 w-full"
      style={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gridTemplateRows: "repeat(2, minmax(0, 1fr))" }}
    >
      {/* Main large image — spans 2 cols + 2 rows */}
      <div
        className="overflow-hidden relative rounded-xl"
        style={{ gridColumn: "1 / span 2", gridRow: "1 / span 2" }}
      >
        <img alt="Grand Azure Resort main" className="absolute inset-0 w-full h-full object-cover" src={imgMain} />
      </div>

      {/* Top right 1 */}
      <div className="overflow-hidden relative rounded-xl" style={{ gridColumn: 3, gridRow: 1 }}>
        <img alt="Hotel room" className="absolute inset-0 w-full h-full object-cover" src={imgGallery1} />
      </div>

      {/* Top right 2 */}
      <div className="overflow-hidden relative rounded-xl" style={{ gridColumn: 4, gridRow: 1 }}>
        <img alt="Hotel facilities" className="absolute inset-0 w-full h-full object-cover" src={imgGallery2} />
      </div>

      {/* Bottom right 3 */}
      <div className="overflow-hidden relative rounded-xl" style={{ gridColumn: 3, gridRow: 2 }}>
        <img alt="Hotel pool" className="absolute inset-0 w-full h-full object-cover" src={imgGallery3} />
      </div>

      {/* Bottom right 4 — with overlay */}
      <div className="overflow-hidden relative rounded-xl" style={{ gridColumn: 4, gridRow: 2 }}>
        <img alt="Hotel beach" className="absolute inset-0 w-full h-full object-cover" src={imgGallery4} />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <span className="text-white text-[16px] leading-6">+124 photos</span>
        </div>
      </div>
    </div>
  );
}
