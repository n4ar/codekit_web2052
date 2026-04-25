const imgMapBg = "https://www.figma.com/api/mcp/asset/bdd983dc-12a1-4234-889c-0526154e8612";

export function LocationCard() {
  return (
    <div className="border border-[rgba(194,198,213,0.3)] overflow-hidden rounded-2xl shadow-[0px_4px_12px_0px_rgba(0,0,0,0.05)] w-full">
      <div className="h-48 relative w-full overflow-hidden">
        <img alt="Hotel location map" className="absolute inset-0 w-full h-full object-cover" src={imgMapBg} />
      </div>
      <div className="bg-white p-4">
        <p className="text-[#191c22] text-[16px] leading-6">Near Spinalonga Island</p>
        <p className="text-[#424753] text-[16px] leading-6">15 min walk to city center</p>
      </div>
    </div>
  );
}
