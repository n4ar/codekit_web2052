export function IconDestination() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2C7.24 2 5 4.24 5 7c0 3.75 5 11 5 11s5-7.25 5-11c0-2.76-2.24-5-5-5zm0 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill="#005CBD"/>
    </svg>
  );
}

export function IconCalendar() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="2" y="4" width="16" height="14" rx="2" stroke="#005CBD" strokeWidth="1.5"/>
      <path d="M2 8h16" stroke="#005CBD" strokeWidth="1.5"/>
      <path d="M6 2v3M14 2v3" stroke="#005CBD" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function IconPerson() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="6" r="3" stroke="#005CBD" strokeWidth="1.5"/>
      <path d="M3 18c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="#005CBD" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function IconFilter() {
  return (
    <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
      <line x1="0" y1="1.5" x2="18" y2="1.5" stroke="#191C22" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="0" y1="6" x2="18" y2="6" stroke="#191C22" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="0" y1="10.5" x2="18" y2="10.5" stroke="#191C22" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="5" cy="1.5" r="2" fill="white" stroke="#191C22" strokeWidth="1.5"/>
      <circle cx="13" cy="6" r="2" fill="white" stroke="#191C22" strokeWidth="1.5"/>
      <circle cx="8" cy="10.5" r="2" fill="white" stroke="#191C22" strokeWidth="1.5"/>
    </svg>
  );
}

export function IconStarFilled({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size * (14.25 / 15)} viewBox="0 0 15 14.25" fill="none">
      <path d="M7.5 0L9.18 5.18H14.63L10.22 8.39L11.9 13.57L7.5 10.37L3.1 13.57L4.78 8.39L0.37 5.18H5.82L7.5 0Z" fill="#F59E0B"/>
    </svg>
  );
}

export function IconStarEmpty({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size * (14.25 / 15)} viewBox="0 0 15 14.25" fill="none">
      <path d="M7.5 0L9.18 5.18H14.63L10.22 8.39L11.9 13.57L7.5 10.37L3.1 13.57L4.78 8.39L0.37 5.18H5.82L7.5 0Z" stroke="#C2C6D5" strokeWidth="1" fill="none"/>
    </svg>
  );
}

export function IconMapPin() {
  return (
    <svg width="9.333" height="11.667" viewBox="0 0 10 12" fill="none">
      <path d="M5 0C2.79 0 1 1.79 1 4c0 3 4 8 4 8s4-5 4-8c0-2.21-1.79-4-4-4zm0 5.5A1.5 1.5 0 1 1 5 2.5a1.5 1.5 0 0 1 0 3z" fill="#424753"/>
    </svg>
  );
}

export function IconMapPinBlue() {
  return (
    <svg width="13.5" height="13.5" viewBox="0 0 14 14" fill="none">
      <path d="M7 0C4.24 0 2 2.24 2 5c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5zm0 6.5A1.5 1.5 0 1 1 7 3.5a1.5 1.5 0 0 1 0 3z" fill="#005CBD"/>
    </svg>
  );
}

export function IconChevronDown() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M6 9l6 6 6-6" stroke="#005CBD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconFlash() {
  return (
    <svg width="16" height="19" viewBox="0 0 16 20" fill="none">
      <path d="M9 0L0 12h7l-2 8L16 8H9L9 0Z" fill="#B61B4A"/>
    </svg>
  );
}

export function Checkbox() {
  return (
    <div className="w-5 h-5 bg-white border border-[#C2C6D5] rounded-[4px] shrink-0" />
  );
}

export function StarsRow({ count, total = 5, size = 14 }: { count: number; total?: number; size?: number }) {
  return (
    <div className="flex items-center gap-0">
      {Array.from({ length: total }, (_, i) =>
        i < count ? <IconStarFilled key={i} size={size} /> : <IconStarEmpty key={i} size={size} />
      )}
    </div>
  );
}
