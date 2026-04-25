function RatingBar({ label, score }: { label: string; score: number }) {
  const pct = Math.round((score / 10) * 100);
  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="flex items-center justify-between w-full">
        <span className="text-[#191c22] text-[16px] leading-6">{label}</span>
        <span className="text-[#191c22] text-[16px] leading-6">{score}</span>
      </div>
      <div className="bg-[#e7e8f1] h-2 overflow-hidden relative rounded-full w-full">
        <div className="absolute bg-[#005cbd] inset-0 right-auto" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

export function RatingCard() {
  return (
    <div className="bg-white border border-[rgba(194,198,213,0.3)] rounded-2xl shadow-[0px_4px_6px_rgba(0,0,0,0.05)] flex flex-col gap-4 p-[25px] w-full">
      {/* Score header */}
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col gap-0.5">
          <span className="text-[#191c22] text-[16px] font-normal leading-6">Excellent</span>
          <span className="text-[#424753] text-[16px] leading-6">1,248 verified reviews</span>
        </div>
        <div className="bg-[#005cbd] flex items-center justify-center rounded-xl size-14">
          <span className="text-white font-bold text-[24px] leading-8">9.2</span>
        </div>
      </div>

      {/* Rating bars */}
      <div className="flex flex-col gap-4 w-full">
        <RatingBar label="Cleanliness" score={9.5} />
        <RatingBar label="Service" score={9.2} />
        <RatingBar label="Location" score={8.9} />
      </div>
    </div>
  );
}
