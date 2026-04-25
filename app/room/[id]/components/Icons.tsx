export function IconChevronRight({ size = 5 }: { size?: number }) {
  return (
    <svg width={size} height={8} viewBox="0 0 5 8" fill="none">
      <path d="M1 1l3 3-3 3" stroke="#424753" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconStarFilled() {
  return (
    <svg width="20" height="19" viewBox="0 0 20 19" fill="none">
      <path d="M10 0L12.245 6.91H19.51L13.633 11.18L15.878 18.09L10 13.82L4.122 18.09L6.367 11.18L0.49 6.91H7.755L10 0Z" fill="#F59E0B" />
    </svg>
  );
}

export function IconStarFilledSm() {
  return (
    <svg width="17" height="16" viewBox="0 0 17 16" fill="none">
      <path d="M8.5 0L10.386 5.635H16.314L11.464 9.115L13.35 14.75L8.5 11.27L3.65 14.75L5.536 9.115L0.686 5.635H6.614L8.5 0Z" fill="#F59E0B" />
    </svg>
  );
}

export function IconStarHalfSm() {
  return (
    <svg width="17" height="16" viewBox="0 0 17 16" fill="none">
      <path d="M8.5 0L10.386 5.635H16.314L11.464 9.115L13.35 14.75L8.5 11.27L3.65 14.75L5.536 9.115L0.686 5.635H6.614L8.5 0Z" fill="url(#half)" />
      <defs>
        <linearGradient id="half" x1="0" y1="0" x2="17" y2="0">
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="50%" stopColor="#E7E8F1" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function IconMapPin() {
  return (
    <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
      <path d="M8 0C4.686 0 2 2.686 2 6c0 4.5 6 12 6 12s6-7.5 6-12c0-3.314-2.686-6-6-6zm0 8.5A2.5 2.5 0 1 1 8 3.5a2.5 2.5 0 0 1 0 5z" fill="#424753" />
    </svg>
  );
}

export function IconShare() {
  return (
    <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
      <circle cx="15" cy="3" r="2.5" stroke="#191C22" strokeWidth="1.5" />
      <circle cx="3" cy="10" r="2.5" stroke="#191C22" strokeWidth="1.5" />
      <circle cx="15" cy="17" r="2.5" stroke="#191C22" strokeWidth="1.5" />
      <path d="M5.3 11.35l7.4 4.3M12.7 8.65l-7.4-4.3" stroke="#191C22" strokeWidth="1.5" />
    </svg>
  );
}

export function IconHeart() {
  return (
    <svg width="20" height="19" viewBox="0 0 20 19" fill="none">
      <path d="M10 17S1.5 11 1.5 5.5A4.5 4.5 0 0 1 10 3.2 4.5 4.5 0 0 1 18.5 5.5C18.5 11 10 17 10 17z" stroke="#191C22" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconPool() {
  return (
    <svg width="23" height="21" viewBox="0 0 24 22" fill="none">
      <path d="M1 16c2 0 2.5-1.5 4-1.5S7 16 9 16s2.5-1.5 4-1.5S15 16 17 16s2.5-1.5 4-1.5S23 16 23 16" stroke="#191C22" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M1 20c2 0 2.5-1.5 4-1.5S7 20 9 20s2.5-1.5 4-1.5 2.5 1.5 4 1.5 2.5-1.5 4-1.5" stroke="#191C22" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="17" cy="4" r="2" stroke="#191C22" strokeWidth="1.5" />
      <path d="M10 12V9l4-3.5 3.5 2.5" stroke="#191C22" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconSpa() {
  return (
    <svg width="23" height="23" viewBox="0 0 24 24" fill="none">
      <path d="M12 22C12 22 2 16 2 9a10 10 0 0 1 10-10 10 10 0 0 1 10 10C22 16 12 22 12 22z" stroke="#191C22" strokeWidth="1.5" />
      <path d="M12 22v-10M12 12c0 0-4-2.5-5-6M12 12c0 0 4-2.5 5-6" stroke="#191C22" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconRestaurant() {
  return (
    <svg width="17" height="23" viewBox="0 0 18 24" fill="none">
      <path d="M9 1v22M5 1v6a4 4 0 0 0 8 0V1" stroke="#191C22" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconGym() {
  return (
    <svg width="23" height="23" viewBox="0 0 24 24" fill="none">
      <rect x="1" y="9" width="3" height="6" rx="1.5" stroke="#191C22" strokeWidth="1.5" />
      <rect x="20" y="9" width="3" height="6" rx="1.5" stroke="#191C22" strokeWidth="1.5" />
      <rect x="5" y="6" width="2.5" height="12" rx="1.25" stroke="#191C22" strokeWidth="1.5" />
      <rect x="16.5" y="6" width="2.5" height="12" rx="1.25" stroke="#191C22" strokeWidth="1.5" />
      <path d="M7.5 12h9" stroke="#191C22" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconWifi() {
  return (
    <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
      <path d="M14 17.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" fill="#191C22" />
      <path d="M8.5 13.5A7.7 7.7 0 0 1 14 11.5c2.1 0 4 .8 5.5 2.1" stroke="#191C22" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3.5 8.5A13.3 13.3 0 0 1 14 4.5c3.9 0 7.4 1.7 9.9 4.4" stroke="#191C22" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M1 5A18 18 0 0 1 14 1a18 18 0 0 1 13 4.3" stroke="#191C22" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconBeach() {
  return (
    <svg width="21" height="21" viewBox="0 0 22 22" fill="none">
      <path d="M1 18c3-4 7-4 10 0s7 4 10 0" stroke="#191C22" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11 16V8" stroke="#191C22" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11 8c0 0-5-2-7-6" stroke="#191C22" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11 8c0 0 5-2 7-6" stroke="#191C22" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconChevronRightBlue() {
  return (
    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
      <path d="M1 1l5 3.7L11 1" stroke="#005CBD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconRoomLink() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M1 11L11 1M11 1H4M11 1v7" stroke="#005CBD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconPerson() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="4" r="3" stroke="#424753" strokeWidth="1.2" />
      <path d="M2 14c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="#424753" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function IconPersonSmall() {
  return (
    <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="3.5" r="2" stroke="#424753" strokeWidth="1.2" />
      <path d="M3.5 14c0-2.485 2.015-4.5 4.5-4.5s4.5 2.015 4.5 4.5" stroke="#424753" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function IconCheck() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <circle cx="7.5" cy="7.5" r="7" fill="#16a34a" />
      <path d="M4 7.5l2.5 2.5 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
