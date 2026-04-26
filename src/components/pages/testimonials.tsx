import SimpleHeading from "@/components/common/SimpleHeading";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Eminence Global handled our BIS FMCS certification with exceptional professionalism. Their audit coordination and documentation support made the entire approval process seamless for our overseas manufacturing unit.",
      name: "David Kim",
      role: "Compliance Director, Korea Electronics",
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
      country: "KR",
    },
    {
      text: "We were struggling with CRS registration timelines until Eminence Global stepped in. Their technical understanding and BIS liaison support helped us secure approval much faster than expected.",
      name: "Rohan Malhotra",
      role: "Managing Partner, SmartTech India",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
      country: "IN",
    },
    {
      text: "From product testing coordination to factory audit preparation, the team delivered a highly structured compliance strategy. Their BIS consultancy gave our company complete confidence entering the Indian market.",
      name: "Jason Müller",
      role: "International Trade Head, Germany Auto Systems",
      image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
      country: "DE",
    },
    {
      text: "Eminence Global's expertise in ISI certification and technical file preparation saved us months of back-and-forth documentation issues. Their consultants understand every regulatory detail thoroughly.",
      name: "Alex Chen",
      role: "Operations Manager, Taiwan Components",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
      country: "TW",
    },
    {
      text: "The professionalism of their BIS approval team is outstanding. They maintained complete transparency throughout the process and ensured our foreign manufacturing facility met all compliance expectations.",
      name: "Sofia Rahman",
      role: "Export Compliance Lead, UAE Industrial Group",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop",
      country: "AE",
    },
    {
      text: "Working with Eminence Global significantly reduced our certification delays. Their government liaison expertise, documentation review, and testing guidance helped us achieve market readiness smoothly.",
      name: "Daniel Nguyen",
      role: "Director, Vietnam Manufacturing Co.",
      image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png",
      country: "VN",
    },
  ];

  const rows = [
    { start: 0, end: 3, className: "animate-scroll-tl" },
    { start: 3, end: 6, className: "animate-scroll-reverse-tl" },
  ];

  const QuoteIcon = () => (
    <svg
      width="28"
      height="22"
      viewBox="0 0 28 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M0 22V13.4C0 10.8667 0.466667 8.53333 1.4 6.4C2.4 4.26667 3.73333 2.46667 5.4 1C7.06667 -0.333333 8.93333 -0.266667 11 1.2L9.4 3.4C8.46667 2.86667 7.53333 2.86667 6.6 3.4C5.66667 3.86667 4.86667 4.73333 4.2 6C3.6 7.26667 3.2 8.8 3 10.6H6.8V22H0ZM16.2 22V13.4C16.2 10.8667 16.6667 8.53333 17.6 6.4C18.6 4.26667 19.9333 2.46667 21.6 1C23.2667 -0.333333 25.1333 -0.266667 27.2 1.2L25.6 3.4C24.6667 2.86667 23.7333 2.86667 22.8 3.4C21.8667 3.86667 21.0667 4.73333 20.4 6C19.8 7.26667 19.4 8.8 19.2 10.6H23V22H16.2Z"
        fill="currentColor"
      />
    </svg>
  );

  const StarIcon = () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
    </svg>
  );

  const renderCard = (testimonial: (typeof testimonials)[0], index: number) => (
    <div key={index} className="tl-card shrink-0 w-[320px] sm:w-[380px]">
      {/* Accent bar */}
      <div className="tl-card-accent" aria-hidden="true" />

      <div className="tl-card-inner   ">
        {/* Top row: quote icon + stars */}
        <div className="flex items-start justify-between mb-5">
          <div className="tl-quote-icon">
            <QuoteIcon />
          </div>
          <div className="flex items-center gap-0.5">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <span key={i} className="tl-star">
                  <StarIcon />
                </span>
              ))}
          </div>
        </div>

        {/* Quote text */}
        <p className="tl-quote-text">{testimonial.text}</p>

        {/* Divider */}
        <div className="tl-divider" />

        {/* Author */}
        <div className="flex items-center gap-3">
          <div className="tl-avatar-wrap">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="tl-avatar"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="tl-author-name">{testimonial.name}</p>
            <p className="tl-author-role">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <style>{`
        /* ── Section base ── */
        .tl-section {
          background: #F7F8FC;
          overflow: hidden;
          position: relative;
        }

        /* Subtle grain texture overlay */
        .tl-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
        }

        /* Ambient top glow from brand blue */
        .tl-section::after {
          content: "";
          position: absolute;
          top: -80px;
          left: 50%;
          transform: translateX(-50%);
          width: 700px;
          height: 340px;
          background: radial-gradient(ellipse at center, rgba(32,56,92,0.07) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        /* ── Header area ── */
        .tl-header {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          margin-bottom: 64px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Stats strip */
        .tl-stats {
          display: flex;
          align-items: center;
          gap: 0;
          margin-top: 40px;
          border: 1px solid rgba(32,56,92,0.10);
          border-radius: 14px;
          overflow: hidden;
          background: #fff;
          box-shadow: 0 1px 3px rgba(32,56,92,0.06), 0 4px 16px rgba(32,56,92,0.04);
        }

        .tl-stat {
          flex: 1;
          padding: 18px 28px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
          position: relative;
        }

        .tl-stat + .tl-stat::before {
          content: "";
          position: absolute;
          left: 0;
          top: 18%;
          height: 64%;
          width: 1px;
          background: rgba(32,56,92,0.10);
        }

        .tl-stat-number {
          font-family: "Black", sans-serif;
          font-size: 1.5rem;
          color: #20385c;
          line-height: 1;
          letter-spacing: -0.02em;
        }

        .tl-stat-label {
          font-family: "Regular", sans-serif;
          font-size: 0.72rem;
          color: #7a8fa8;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          white-space: nowrap;
        }

        /* ── Scroll tracks ── */
        .tl-tracks {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .tl-track {
          position: relative;
          overflow: hidden;
        }

        /* Fade overlays — match section bg */
        .tl-fade-l,
        .tl-fade-r {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 160px;
          z-index: 10;
          pointer-events: none;
        }
        .tl-fade-l {
          left: 0;
          background: linear-gradient(to right, #F7F8FC 0%, transparent 100%);
        }
        .tl-fade-r {
          right: 0;
          background: linear-gradient(to left, #F7F8FC 0%, transparent 100%);
        }

        .tl-track-inner {
          display: flex;
          gap: 20px;
          width: max-content;
          padding: 8px 0 12px;
        }

        @keyframes scrollTl {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollTlReverse {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .animate-scroll-tl         { animation: scrollTl 28s linear infinite; }
        .animate-scroll-reverse-tl { animation: scrollTlReverse 28s linear infinite; }

        .tl-track:hover .animate-scroll-tl,
        .tl-track:hover .animate-scroll-reverse-tl {
          animation-play-state: paused;
        }

        /* ── Card ── */
        .tl-card {
          background: #ffffff;
          border-radius: 18px;
          border: 1px solid rgba(32,56,92,0.08);
          box-shadow: 0 2px 8px rgba(32,56,92,0.05), 0 0 0 0 transparent;
          overflow: hidden;
          position: relative;
          transition: box-shadow 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
          cursor: default;
        }

        .tl-card:hover {
          box-shadow: 0 10px 36px rgba(32,56,92,0.10), 0 2px 8px rgba(32,56,92,0.06);
          border-color: rgba(32,56,92,0.14);
          transform: translateY(-3px);
        }

        /* Accent line at the top — brand gold */
        .tl-card-accent {
          height: 3px;
          background: linear-gradient(90deg, #bc8637 0%, #e2a953 50%, #bc8637 100%);
          background-size: 200% 100%;
          animation: shiftGold 4s ease-in-out infinite;
        }

        @keyframes shiftGold {
          0%, 100% { background-position: 0% 0%; }
          50%       { background-position: 100% 0%; }
        }

        .tl-card-inner {
          padding: 22px 24px 24px;
          display: flex;
          flex-direction: column;
        }

        /* Quote icon */
        .tl-quote-icon {
          color: #bc8637;
          opacity: 0.75;
          line-height: 1;
        }

        /* Stars */
        .tl-star {
          color: #e2a953;
          display: inline-flex;
        }

        /* Quote text */
        .tl-quote-text {
          font-family: "Regular", sans-serif;
          font-size: 0.875rem;
          line-height: 1.75;
          color: #191a1c;
          flex: 1;
          margin: 0 0 18px 0;
          letter-spacing: 0.005em;
        }

        /* Divider */
        .tl-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(32,56,92,0.08) 30%, rgba(32,56,92,0.08) 70%, transparent 100%);
          margin-bottom: 18px;
        }

        /* Avatar */
        .tl-avatar-wrap {
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          padding: 2px;
          background: linear-gradient(135deg, #bc8637 0%, #e2a953 100%);
        }

        .tl-avatar {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          display: block;
          border: 2px solid #fff;
        }

        /* Author text */
        .tl-author-name {
          font-family: "Semibold", sans-serif;
          font-size: 0.8125rem;
          color: #20385c;
          line-height: 1.3;
          margin: 0;
          letter-spacing: -0.01em;
        }

        .tl-author-role {
          font-family: "Regular", sans-serif;
          font-size: 0.72rem;
          color: #8ca0b8;
          margin: 3px 0 0;
          line-height: 1.3;
          letter-spacing: 0.01em;
        }

        /* ── Responsive ── */
        @media (max-width: 640px) {
          .tl-section { padding: 72px 0 80px; }
          .tl-header   { margin-bottom: 48px; }
          .tl-stats    { gap: 0; }
          .tl-stat     { padding: 14px 16px; }
          .tl-stat-number { font-size: 1.25rem; }
          .tl-fade-l, .tl-fade-r { width: 60px; }
          .animate-scroll-tl, .animate-scroll-reverse-tl { animation-duration: 22s; }
        }

        @media (max-width: 400px) {
          .tl-stat { padding: 12px 10px; }
          .tl-stat-label { font-size: 0.65rem; letter-spacing: 0.04em; }
        }
      `}</style>



      <section className="tl-section   py-12" aria-labelledby="tl-heading">
        
 <SimpleHeading
            badgeText="Client Stories"
            title="Trusted by Compliance Leaders Worldwide"
            align="center"
          /> 
        {/* ── Scrolling tracks ── */}
        <div className="tl-tracks  px-4 md:px-16 lg:px-28" aria-label="Client testimonials">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="tl-track">
              <div className="tl-fade-l" aria-hidden="true" />
              <div className="tl-fade-r" aria-hidden="true" />
              <div className={`tl-track-inner ${row.className}`} aria-hidden={rowIndex > 0}>
                {[
                  ...testimonials.slice(row.start, row.end),
                  ...testimonials.slice(row.start, row.end),
                ].map((testimonial, index) => renderCard(testimonial, index))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Testimonials;