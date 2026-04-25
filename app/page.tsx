/* ─── Asset URLs from Figma ─── */
const imgHeroBg = "https://www.figma.com/api/mcp/asset/4a44d599-8df1-478c-84ad-1404cb6cad6e";
const imgBangkok = "https://www.figma.com/api/mcp/asset/e8280fcf-e136-4d1c-b105-fc1608b2b0e0";
const imgTokyo   = "https://www.figma.com/api/mcp/asset/cebac7bc-c11e-48ad-87ea-45b5b4288374";
const imgParis   = "https://www.figma.com/api/mcp/asset/7d3ffefb-1595-462e-a9dc-1173d6387d8c";
const imgLondon  = "https://www.figma.com/api/mcp/asset/b30d02ed-5c78-40f6-9bad-0d5faeb231a1";
const imgSummer  = "https://www.figma.com/api/mcp/asset/f3802388-fccb-46c0-ae93-439234f99de4";
const imgGlobe   = "https://www.figma.com/api/mcp/asset/0e9bf368-3160-4064-8c14-b04be9a2804b";
const imgMail    = "https://www.figma.com/api/mcp/asset/41f10905-fc47-4d2a-a05e-4002b6c0f923";
const imgIconLocation = "https://www.figma.com/api/mcp/asset/ed5503df-877d-4c48-b243-2d5f476ffe61";
const imgIconCalendar = "https://www.figma.com/api/mcp/asset/5063c826-6bc4-4aa4-8d94-39702c72cdd2";
const imgIconSearch   = "https://www.figma.com/api/mcp/asset/5923d268-a03a-4c65-b2e1-31ef94b57c3e";
const imgIconShield   = "https://www.figma.com/api/mcp/asset/f7f47013-7740-4510-bd37-9b20046c7878";
const imgIconPhone    = "https://www.figma.com/api/mcp/asset/16e28629-ac26-4a01-acaf-4d308937db4f";
const imgIconCalFlex  = "https://www.figma.com/api/mcp/asset/af867eae-9fbd-43a3-8cad-92d4b50939d1";

/* ─── Navbar ─── */

function Navbar() {
  return (
    <nav
      className="w-full sticky top-0 z-50"
      style={{
        background: "rgba(255,255,255,0.8)",
        borderBottom: "1px solid #E2E8F0",
        boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        height: 65,
      }}
    >
      <div
        className="max-w-[1280px] mx-auto flex items-center justify-between"
        style={{ padding: "0 24px", height: 64 }}
      >
        {/* Left: logo + nav */}
        <div className="flex items-center" style={{ gap: 32 }}>
          <div
            style={{
              fontFamily: "var(--font-plus-jakarta-sans)",
              fontWeight: 800,
              fontSize: 24,
              lineHeight: "32px",
              letterSpacing: "-1.2px",
              color: "#2563EB",
              display: "flex",
              alignItems: "center",
            }}
          >
            T-Goda
          </div>
          <nav className="flex items-center" style={{ gap: 24 }}>
            <a
              href="#"
              style={{
                fontWeight: 600,
                fontSize: 14,
                lineHeight: "20px",
                letterSpacing: "-0.35px",
                color: "#2563EB",
                borderBottom: "2px solid #2563EB",
                paddingBottom: 6,
                textDecoration: "none",
              }}
            >
              Hotels
            </a>
            {["Flights", "Bundles", "Activities"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontWeight: 600,
                  fontSize: 14,
                  lineHeight: "20px",
                  letterSpacing: "-0.35px",
                  color: "#475569",
                  textDecoration: "none",
                }}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Right: buttons */}
        <div className="flex items-center" style={{ gap: 16 }}>
          <button
            style={{
              padding: "8px 16px",
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 14,
              lineHeight: "20px",
              color: "#475569",
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            Sign In
          </button>
          <button
            style={{
              padding: "8px 16px",
              background: "#005CBD",
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 14,
              lineHeight: "20px",
              color: "#FFFFFF",
              border: "none",
              cursor: "pointer",
            }}
          >
            Create Account
          </button>
        </div>
      </div>
    </nav>
  );
}

/* ─── Hero ─── */

function Hero() {
  return (
    <div
      className="max-w-[1280px] mx-auto"
      style={{ paddingLeft: 40, paddingRight: 40, paddingTop: 40 }}
    >
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          minHeight: 520,
          borderRadius: 16,
          isolation: "isolate",
          paddingTop: 114,
          paddingBottom: 114,
          paddingLeft: 16,
          paddingRight: 16,
        }}
      >
        {/* Background image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            alt=""
            src={imgHeroBg}
            className="absolute w-full max-w-none"
            style={{ height: "230.77%", top: "-65.38%", left: 0 }}
          />
        </div>
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.4) 100%)",
          }}
        />

        {/* Content */}
        <div
          className="relative z-10 flex flex-col items-center"
          style={{ maxWidth: 800, gap: 24 }}
        >
          {/* Title */}
          <h1
            style={{
              fontWeight: 800,
              fontSize: 60,
              lineHeight: "60px",
              letterSpacing: "-1.5px",
              color: "#FFFFFF",
              textAlign: "center",
              width: 750,
              maxWidth: "100%",
              margin: 0,
            }}
          >
            Escape to Your Perfect Paradise
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontWeight: 500,
              fontSize: 20,
              lineHeight: "28px",
              color: "rgba(255,255,255,0.9)",
              textAlign: "center",
              width: 672,
              maxWidth: "100%",
              margin: 0,
            }}
          >
            Unlock exclusive prices on over 2 million properties and flights across the globe.
          </p>

          {/* Search Bar */}
          <div
            className="relative flex items-center"
            style={{
              width: 768,
              maxWidth: "100%",
              background: "#FFFFFF",
              borderRadius: 12,
              padding: 8,
              gap: 8,
              boxShadow: "0px 25px 50px -12px rgba(0,0,0,0.25)",
            }}
          >
            {/* Field 1: Location */}
            <div
              className="flex items-center"
              style={{
                flex: 1,
                minWidth: 0,
                background: "#E9E9E9",
                border: "1px solid #6B7FC6",
                borderRadius: 8,
                padding: "1px 13px",
                alignSelf: "stretch",
              }}
            >
              <img
                alt=""
                src={imgIconLocation}
                style={{ width: 20.5, height: 20, flexShrink: 0, display: "block" }}
              />
              <div style={{ flex: 1, padding: "13px 8px 14px" }}>
                <span
                  style={{
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: "normal",
                    color: "#6B7280",
                    display: "block",
                  }}
                >
                  Where to next?
                </span>
              </div>
            </div>

            {/* Field 2: Date */}
            <div
              className="flex items-center"
              style={{
                flex: 1,
                minWidth: 0,
                background: "#E9E9E9",
                border: "1px solid #6B7FC6",
                borderRadius: 8,
                padding: "1px 13px",
                alignSelf: "stretch",
              }}
            >
              <img
                alt=""
                src={imgIconCalendar}
                style={{ width: 18, height: 20, flexShrink: 0, display: "block" }}
              />
              <div style={{ flex: 1, padding: "12px 8px" }}>
                <span
                  style={{
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: "24px",
                    color: "#191C22",
                    display: "block",
                  }}
                >
                  Oct 12 - Oct 18
                </span>
              </div>
            </div>

            {/* Search Button */}
            <button
              className="flex items-center justify-center"
              style={{
                flexShrink: 0,
                background: "#005CBD",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                padding: "12px 32px",
                gap: 8,
              }}
            >
              <img alt="" src={imgIconSearch} style={{ width: 18, height: 18, display: "block" }} />
              <span
                style={{
                  fontWeight: 700,
                  fontSize: 18,
                  lineHeight: "28px",
                  color: "#FFFFFF",
                }}
              >
                Search
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─── Why Choose Us ─── */

function WhyChooseUs() {
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

  return (
    <div
      className="max-w-[1280px] mx-auto"
      style={{ paddingLeft: 40, paddingRight: 40, paddingTop: 40 }}
    >
      <div className="grid grid-cols-3" style={{ gap: 32 }}>
        {features.map((f) => (
          <div
            key={f.title}
            className="flex flex-col items-center text-center"
            style={{
              background: "#E9E9E9",
              borderRadius: 12,
              padding: 24,
              gap: 12,
            }}
          >
            <div
              className="flex items-center justify-center"
              style={{
                width: 48,
                height: 48,
                background: f.iconBg,
                borderRadius: 9999,
                flexShrink: 0,
              }}
            >
              <img
                alt=""
                src={f.icon}
                style={{ width: f.iconW, height: f.iconH, display: "block" }}
              />
            </div>
            <div style={{ paddingTop: 4 }}>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 20,
                  lineHeight: "28px",
                  color: "#191C22",
                  textAlign: "center",
                }}
              >
                {f.title}
              </div>
            </div>
            <div
              style={{
                fontWeight: 400,
                fontSize: 14,
                lineHeight: "20px",
                color: "#424753",
                textAlign: "center",
              }}
            >
              {f.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Trending Destinations ─── */

const DESTINATIONS = [
  {
    city: "Bangkok", country: "Thailand",
    badge: "TOP RATED",
    price: "$120",
    image: imgBangkok,
  },
  {
    city: "Tokyo", country: "Japan",
    badge: null,
    price: "$250",
    image: imgTokyo,
  },
  {
    city: "Paris", country: "France",
    badge: null,
    price: "$180",
    image: imgParis,
  },
  {
    city: "London", country: "UK",
    badge: null,
    price: "$210",
    image: imgLondon,
  },
];

function TrendingDestinations() {
  return (
    <section
      className="max-w-[1280px] mx-auto"
      style={{ padding: "48px 40px" }}
    >
      {/* Header row */}
      <div className="flex items-end justify-between" style={{ marginBottom: 32 }}>
        <div>
          <h2
            style={{
              fontWeight: 700,
              fontSize: 30,
              lineHeight: "36px",
              color: "#191C22",
              margin: 0,
            }}
          >
            Trending Destinations
          </h2>
          <p
            style={{
              fontWeight: 400,
              fontSize: 16,
              lineHeight: "24px",
              color: "#424753",
              margin: 0,
            }}
          >
            Handpicked favorites for your next adventure
          </p>
        </div>
        <a
          href="#"
          style={{
            fontWeight: 700,
            fontSize: 16,
            lineHeight: "24px",
            color: "#005CBD",
            textDecoration: "none",
          }}
        >
          View all
        </a>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-4" style={{ gap: 24 }}>
        {DESTINATIONS.map((d) => (
          <div key={d.city} style={{ height: 436 }}>
            {/* Image */}
            <div
              className="relative overflow-hidden"
              style={{
                height: 376,
                borderRadius: 16,
              }}
            >
              <img
                alt={d.city}
                src={d.image}
                className="absolute max-w-none"
                style={{
                  height: "100%",
                  left: "-16.67%",
                  top: 0,
                  width: "133.33%",
                }}
              />
              {d.badge && (
                <div
                  className="absolute"
                  style={{
                    left: 16,
                    bottom: 13,
                    background: "rgba(255,255,255,0.9)",
                    borderRadius: 9999,
                    padding: "3.5px 12px",
                  }}
                >
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: 12,
                      lineHeight: "16px",
                      letterSpacing: "0.6px",
                      textTransform: "uppercase",
                      color: "#191C22",
                    }}
                  >
                    {d.badge}
                  </span>
                </div>
              )}
            </div>

            {/* Info */}
            <div style={{ paddingTop: 12 }}>
              <p
                style={{
                  fontWeight: 700,
                  fontSize: 20,
                  lineHeight: "28px",
                  color: "#191C22",
                  margin: 0,
                }}
              >
                {d.city}, {d.country}
              </p>
              <p
                style={{
                  fontWeight: 400,
                  fontSize: 14,
                  lineHeight: "20px",
                  color: "#424753",
                  margin: 0,
                }}
              >
                Starting from{" "}
                <span
                  style={{
                    fontWeight: 700,
                    color: "#005CBD",
                  }}
                >
                  {d.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Promotional Banner ─── */

function PromoBanner() {
  return (
    <div
      className="max-w-[1280px] mx-auto"
      style={{ paddingLeft: 40, paddingRight: 40 }}
    >
      <div
        className="relative overflow-hidden flex items-center justify-between"
        style={{
          background: "#B61B4A",
          borderRadius: 24,
          paddingTop: 39.85,
          paddingBottom: 39.841,
          paddingLeft: 48,
          paddingRight: 39.849,
          isolation: "isolate",
        }}
      >
        {/* Decorative bg globe icon */}
        <div
          className="absolute flex flex-col items-start"
          style={{
            left: "50%",
            top: 0,
            bottom: 0,
            opacity: 0.2,
          }}
        >
          <img
            alt=""
            src={imgGlobe}
            style={{ width: 249.688, height: 250, display: "block" }}
          />
        </div>

        {/* Left content */}
        <div
          className="flex flex-col relative"
          style={{ maxWidth: 576, gap: 16 }}
        >
          <h2
            style={{
              fontWeight: 800,
              fontSize: 48,
              lineHeight: "48px",
              color: "#FFFFFF",
              margin: 0,
              width: 486.44,
              maxWidth: "100%",
            }}
          >
            Summer Sales: Up to 40% Off!
          </h2>
          <p
            style={{
              fontWeight: 400,
              fontSize: 18,
              lineHeight: "28px",
              color: "rgba(255,255,255,0.8)",
              margin: 0,
              width: 537.72,
              maxWidth: "100%",
            }}
          >
            Exclusive member deals on flights and luxury hotels for your next summer getaway. Valid until Oct 31st.
          </p>
          <div className="flex items-center" style={{ paddingTop: 16, gap: 16 }}>
            <button
              className="flex items-center justify-center"
              style={{
                background: "#FFFFFF",
                borderRadius: 12,
                border: "none",
                cursor: "pointer",
                paddingTop: 13.5,
                paddingBottom: 14.5,
                paddingLeft: 32,
                paddingRight: 32,
              }}
            >
              <span
                style={{
                  fontWeight: 700,
                  fontSize: 18,
                  lineHeight: "28px",
                  color: "#B61B4A",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                }}
              >
                Explore Deals
              </span>
            </button>
            <button
              className="flex items-center justify-center"
              style={{
                background: "transparent",
                border: "2px solid #FFFFFF",
                borderRadius: 12,
                cursor: "pointer",
                paddingTop: 14,
                paddingBottom: 14,
                paddingLeft: 34,
                paddingRight: 34,
              }}
            >
              <span
                style={{
                  fontWeight: 700,
                  fontSize: 18,
                  lineHeight: "28px",
                  color: "#FFFFFF",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                }}
              >
                Join Club T-Goda
              </span>
            </button>
          </div>
        </div>

        {/* Right image */}
        <div
          className="relative flex items-center justify-center flex-shrink-0"
          style={{ width: 336.309, height: 336.309 }}
        >
          <div style={{ transform: "rotate(3deg)" }}>
            <div
              className="overflow-hidden"
              style={{
                width: 320,
                height: 320,
                borderRadius: 16,
                boxShadow: "0px 25px 50px -12px rgba(0,0,0,0.25)",
              }}
            >
              <img
                alt="Summer sale"
                src={imgSummer}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Newsletter ─── */

function Newsletter() {
  return (
    <div
      className="max-w-[1280px] mx-auto"
      style={{ paddingLeft: 40, paddingRight: 40, paddingTop: 48 }}
    >
      <section
        className="flex flex-col items-center"
        style={{
          background: "#E7E8F1",
          borderRadius: 24,
          paddingTop: 64,
          paddingBottom: 64,
          paddingLeft: 264,
          paddingRight: 264,
        }}
      >
        <div
          className="flex flex-col items-center"
          style={{ maxWidth: 672, width: "100%", gap: 16 }}
        >
          {/* Mail icon */}
          <img
            alt=""
            src={imgMail}
            style={{ width: 40, height: 32, display: "block", flexShrink: 0 }}
          />

          {/* Heading */}
          <h2
            style={{
              fontWeight: 700,
              fontSize: 30,
              lineHeight: "36px",
              color: "#191C22",
              textAlign: "center",
              margin: 0,
            }}
          >
            Get Travel Deals Directly
          </h2>

          {/* Description */}
          <p
            style={{
              fontWeight: 400,
              fontSize: 18,
              lineHeight: "28px",
              color: "#424753",
              textAlign: "center",
              margin: 0,
              width: 661.67,
              maxWidth: "100%",
            }}
          >
            Subscribe to our newsletter and get early access to hidden gems and seasonal discounts. No spam, only adventure.
          </p>

          {/* Form */}
          <div
            className="flex items-stretch"
            style={{ width: "100%", gap: 12 }}
          >
            <div
              className="flex items-center"
              style={{
                flex: 1,
                background: "#FFFFFF",
                border: "1px solid #6B7FC6",
                borderRadius: 12,
                paddingTop: 18,
                paddingBottom: 19,
                paddingLeft: 25,
                paddingRight: 25,
                overflow: "hidden",
              }}
            >
              <span
                style={{
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: "normal",
                  color: "#6B7280",
                }}
              >
                Your email address
              </span>
            </div>
            <button
              className="flex items-center justify-center flex-shrink-0"
              style={{
                background: "#005CBD",
                borderRadius: 12,
                border: "none",
                cursor: "pointer",
                paddingTop: 16.5,
                paddingBottom: 17.5,
                paddingLeft: 32,
                paddingRight: 32,
              }}
            >
              <span
                style={{
                  fontWeight: 700,
                  fontSize: 16,
                  lineHeight: "24px",
                  color: "#FFFFFF",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                }}
              >
                Subscribe Now
              </span>
            </button>
          </div>

          {/* Fine print */}
          <p
            style={{
              fontWeight: 400,
              fontSize: 12,
              lineHeight: "16px",
              color: "#424753",
              textAlign: "center",
              margin: 0,
              width: 381.8,
              maxWidth: "100%",
            }}
          >
            By subscribing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </section>
    </div>
  );
}

/* ─── Footer ─── */

function Footer() {
  return (
    <footer
      className="w-full"
      style={{
        background: "#F8FAFC",
        borderTop: "1px solid #E2E8F0",
      }}
    >
      <div
        className="max-w-[1280px] mx-auto grid"
        style={{
          gridTemplateColumns: "1fr 1fr",
          gap: 32,
          padding: "48px 24px",
          minHeight: 259,
        }}
      >
        {/* Left brand column */}
        <div className="flex flex-col items-start" style={{ gap: 16 }}>
          <div
            style={{
              fontWeight: 700,
              fontSize: 20,
              lineHeight: "28px",
              color: "#0F172A",
            }}
          >
            T-Goda
          </div>
          <div style={{ maxWidth: 384 }}>
            <p
              style={{
                fontWeight: 400,
                fontSize: 14,
                lineHeight: "20px",
                color: "#64748B",
                margin: 0,
                width: 376.2,
                maxWidth: "100%",
              }}
            >
              Making world travel accessible, affordable, and delightful for everyone since 2024. Your journey starts here.
            </p>
          </div>
          <div style={{ paddingTop: 8 }}>
            <span
              style={{
                fontWeight: 400,
                fontSize: 14,
                lineHeight: "20px",
                color: "#64748B",
              }}
            >
              © 2024 T-Goda Booking. All rights reserved.
            </span>
          </div>
          {/* Social icons */}
          <div className="flex items-center" style={{ paddingTop: 8, gap: 13 }}>
            <a href="#" style={{ display: "flex", alignItems: "center" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#D1D5DB">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#" style={{ display: "flex", alignItems: "center" }}>
              <svg width="21" height="21" viewBox="0 0 21 21" fill="#D1D5DB">
                <path d="M10.5 2.163c2.804 0 3.135.012 4.235.061 1.02.047 1.573.218 1.942.36a3.24 3.24 0 011.198.779 3.24 3.24 0 01.78 1.198c.143.368.313.922.36 1.942.05 1.1.061 1.431.061 4.235s-.012 3.135-.062 4.235c-.046 1.02-.216 1.573-.36 1.942a3.24 3.24 0 01-.779 1.198 3.24 3.24 0 01-1.198.78c-.368.143-.921.313-1.942.36-1.1.05-1.43.061-4.235.061s-3.135-.012-4.235-.062c-1.02-.046-1.573-.216-1.942-.36a3.24 3.24 0 01-1.198-.779 3.24 3.24 0 01-.779-1.198c-.143-.368-.313-.921-.36-1.942C2.174 13.635 2.163 13.305 2.163 10.5s.012-3.135.061-4.235c.047-1.02.218-1.573.36-1.942A3.24 3.24 0 013.363 3.125a3.24 3.24 0 011.198-.779c.368-.143.922-.313 1.942-.36C7.365 2.174 7.695 2.163 10.5 2.163zm0-2.163C7.645 0 7.332.012 6.22.073 5.11.134 4.352.31 3.692.56A5.4 5.4 0 001.737 1.737 5.4 5.4 0 00.56 3.692C.31 4.352.133 5.11.073 6.22.012 7.332 0 7.645 0 10.5s.012 3.168.073 4.28c.06 1.11.237 1.868.487 2.528a5.4 5.4 0 001.177 1.955 5.4 5.4 0 001.955 1.177c.66.25 1.418.428 2.528.487C7.332 20.988 7.645 21 10.5 21s3.168-.012 4.28-.073c1.11-.06 1.868-.237 2.528-.487a5.4 5.4 0 001.955-1.177 5.4 5.4 0 001.177-1.955c.25-.66.428-1.418.487-2.528C20.988 13.668 21 13.355 21 10.5s-.012-3.168-.073-4.28c-.06-1.11-.237-1.868-.487-2.528a5.4 5.4 0 00-1.177-1.955A5.4 5.4 0 0017.308.56C16.648.31 15.89.133 14.78.073 13.668.012 13.355 0 10.5 0zm0 5.108a5.392 5.392 0 100 10.784 5.392 5.392 0 000-10.784zm0 8.892a3.5 3.5 0 110-7 3.5 3.5 0 010 7zm5.608-10.25a1.26 1.26 0 10-.001 2.519 1.26 1.26 0 000-2.52z" />
              </svg>
            </a>
            <a href="#" style={{ display: "flex", alignItems: "center" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#D1D5DB">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right columns */}
        <div
          className="grid"
          style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
        >
          {[
            { heading: "Company", links: ["About Us", "Careers"] },
            { heading: "Support", links: ["Support", "Mobile App"] },
            { heading: "Legal", links: ["Privacy Policy", "Terms of Service"] },
          ].map((col) => (
            <div
              key={col.heading}
              className="flex flex-col items-start"
              style={{ gap: 12 }}
            >
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 14,
                  lineHeight: "20px",
                  color: "#0F172A",
                }}
              >
                {col.heading}
              </div>
              {col.links.map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    fontWeight: 400,
                    fontSize: 14,
                    lineHeight: "20px",
                    color: "#64748B",
                    textDecoration: "none",
                  }}
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ─── */

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(90deg, #F8F9FA 0%, #F8F9FA 100%)",
        fontFamily: "var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif",
      }}
    >
      <Navbar />
      <main style={{ paddingBottom: 48 }}>
        <Hero />
        <WhyChooseUs />
        <TrendingDestinations />
        <PromoBanner />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
