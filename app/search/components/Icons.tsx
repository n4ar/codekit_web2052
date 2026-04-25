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

export function IconTopChoice() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M7 1l1.545 3.13 3.455.503-2.5 2.437.59 3.44L7 8.885l-3.09 1.625.59-3.44L2 4.633l3.455-.503L7 1z" fill="#005CBD"/>
    </svg>
  );
}

export function IconWifi() {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
      <path d="M7 8.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" fill="#424753"/>
      <path d="M4.05 6.55A4.15 4.15 0 0 1 7 5.5c1.14 0 2.18.46 2.95 1.21" stroke="#424753" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M1.5 4.05A6.93 6.93 0 0 1 7 1.75c2.13 0 4.04.96 5.33 2.48" stroke="#424753" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

export function IconPool() {
  return (
    <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
      <path d="M1 9c1 0 1.5-.75 2.5-.75S5 9 6 9s1.5-.75 2.5-.75S10 9 11 9s1.5-.75 2.5-.75" stroke="#424753" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M1 11.5c1 0 1.5-.75 2.5-.75S5 11.5 6 11.5s1.5-.75 2.5-.75 1.5.75 2.5.75 1.5-.75 2.5-.75" stroke="#424753" strokeWidth="1.2" strokeLinecap="round"/>
      <circle cx="9.5" cy="2.5" r="1.25" stroke="#424753" strokeWidth="1.2"/>
      <path d="M5.5 7V5l2.5-2 2 1.5" stroke="#424753" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconSpa() {
  return (
    <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
      <path d="M6 13C6 13 1 9.5 1 5.5a5 5 0 0 1 5-5 5 5 0 0 1 5 5C11 9.5 6 13 6 13z" stroke="#424753" strokeWidth="1.2"/>
      <path d="M6 13V7M6 7C6 7 3.5 5.5 3 3.5M6 7c0 0 2.5-1.5 3-3.5" stroke="#424753" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

export function IconBreakfast() {
  return (
    <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
      <path d="M2 5h8v5a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5z" stroke="#424753" strokeWidth="1.2"/>
      <path d="M10 6c.8 0 1.5.67 1.5 1.5S10.8 9 10 9" stroke="#424753" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M4 1v2M6 1v2M8 1v2" stroke="#424753" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

export function IconFitness() {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
      <rect x="0.75" y="3" width="2" height="4" rx="1" stroke="#424753" strokeWidth="1.2"/>
      <rect x="11.25" y="3" width="2" height="4" rx="1" stroke="#424753" strokeWidth="1.2"/>
      <rect x="3.25" y="1.5" width="1.5" height="7" rx="0.75" stroke="#424753" strokeWidth="1.2"/>
      <rect x="9.25" y="1.5" width="1.5" height="7" rx="0.75" stroke="#424753" strokeWidth="1.2"/>
      <line x1="4.75" y1="5" x2="9.25" y2="5" stroke="#424753" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

export function IconYoga() {
  return (
    <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
      <circle cx="6" cy="2" r="1.25" stroke="#424753" strokeWidth="1.2"/>
      <path d="M6 4v4" stroke="#424753" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M2 6l4 1 4-1" stroke="#424753" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M4 8l-1.5 4M8 8l1.5 4" stroke="#424753" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

export function IconAirportShuttle() {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
      <rect x="1" y="2" width="9" height="5.5" rx="1" stroke="#424753" strokeWidth="1.2"/>
      <path d="M10 4h2l1 2v1.5h-3V4z" stroke="#424753" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="3.5" cy="8.5" r="1" fill="#424753"/>
      <circle cx="8.5" cy="8.5" r="1" fill="#424753"/>
      <circle cx="11.5" cy="8.5" r="1" fill="#424753"/>
    </svg>
  );
}

export function IconGym() {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
      <rect x="0.75" y="3" width="2" height="4" rx="1" stroke="#424753" strokeWidth="1.2"/>
      <rect x="11.25" y="3" width="2" height="4" rx="1" stroke="#424753" strokeWidth="1.2"/>
      <rect x="3.25" y="1.5" width="1.5" height="7" rx="0.75" stroke="#424753" strokeWidth="1.2"/>
      <rect x="9.25" y="1.5" width="1.5" height="7" rx="0.75" stroke="#424753" strokeWidth="1.2"/>
      <line x1="4.75" y1="5" x2="9.25" y2="5" stroke="#424753" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

export function IconPrivateBeach() {
  return (
    <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
      <path d="M1 9.5c2-2 4-2 6 0s4 2 6 0" stroke="#424753" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M7 8V3" stroke="#424753" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M7 3c0 0-3-1-4-3" stroke="#424753" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M7 3c0 0 3-1 4-3" stroke="#424753" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

export function FeatureIcon({ name }: { name: string }) {
  const lower = name.toLowerCase();
  if (lower.includes("wi-fi") || lower.includes("wifi")) return <IconWifi />;
  if (lower.includes("pool")) return <IconPool />;
  if (lower.includes("spa")) return <IconSpa />;
  if (lower.includes("breakfast")) return <IconBreakfast />;
  if (lower.includes("fitness") || lower.includes("gym")) return <IconGym />;
  if (lower.includes("yoga")) return <IconYoga />;
  if (lower.includes("airport") || lower.includes("shuttle")) return <IconAirportShuttle />;
  if (lower.includes("beach")) return <IconPrivateBeach />;
  return null;
}
