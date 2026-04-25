import SimpleHeading from "@/components/common/SimpleHeading";

const Testimonials = () => {
   const testimonials = [
  {
    text: "Eminence Global handled our BIS FMCS certification with exceptional professionalism. Their audit coordination and documentation support made the entire approval process seamless for our overseas manufacturing unit.",
    name: "David Kim",
    role: "Compliance Director, Korea Electronics",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
  },
  {
    text: "We were struggling with CRS registration timelines until Eminence Global stepped in. Their technical understanding and BIS liaison support helped us secure approval much faster than expected.",
    name: "Rohan Malhotra",
    role: "Managing Partner, SmartTech India",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
  },
  {
    text: "From product testing coordination to factory audit preparation, the team delivered a highly structured compliance strategy. Their BIS consultancy gave our company complete confidence entering the Indian market.",
    name: "Jason Müller",
    role: "International Trade Head, Germany Auto Systems",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60"
  },
  {
    text: "Eminence Global’s expertise in ISI certification and technical file preparation saved us months of back-and-forth documentation issues. Their consultants understand every regulatory detail thoroughly.",
    name: "Alex Chen",
    role: "Operations Manager, Taiwan Components",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60"
  },
  {
    text: "The professionalism of their BIS approval team is outstanding. They maintained complete transparency throughout the process and ensured our foreign manufacturing facility met all compliance expectations.",
    name: "Sofia Rahman",
    role: "Export Compliance Lead, UAE Industrial Group",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop"
  },
  {
    text: "Working with Eminence Global significantly reduced our certification delays. Their government liaison expertise, documentation review, and testing guidance helped us achieve market readiness smoothly.",
    name: "Daniel Nguyen",
    role: "Director, Vietnam Manufacturing Co.",
    image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png"
  }
];

    const rows = [
        { start: 0, end: 3, className: "animate-scroll" },
        { start: 3, end: 6, className: "animate-scroll-reverse" }
    ];

    const StarIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="text-neutral-400" aria-hidden="true">
            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
        </svg>
    );

    const renderCard = (testimonial: any, index: any) => (
        <div
            key={index}
            className="testimonial-card bg-white rounded-2xl p-6 shrink-0 w-[320px] sm:w-[360px] flex flex-col justify-between gap-5"
        >
            {/* Stars */}
            <div className="flex items-center gap-0.5">
                {Array(5).fill(0).map((_, i) => <StarIcon key={i} />)}
            </div>

            {/* Quote */}
            <p className="text-[0.875rem] leading-[1.7] text-neutral-500 tracking-[0.01em] flex-1">
                {testimonial.text}
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-1 border-t border-neutral-100">
                <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-9 h-9 rounded-full object-cover ring-1 ring-neutral-200"
                />
                <div className="flex flex-col">
                    <p className="text-[0.8125rem] font-semibold text-neutral-800 leading-tight tracking-tight">
                        {testimonial.name}
                    </p>
                    <p className="text-[0.75rem] text-neutral-400 leading-tight mt-0.5 tracking-wide uppercase font-medium">
                        {testimonial.role}
                    </p>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&display=swap');

                * { font-family: "Geist", sans-serif; }

                .testimonial-card {
                    border: 1px solid #ebebeb;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.03);
                    transition: box-shadow 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
                }
                .testimonial-card:hover {
                    box-shadow: 0 8px 28px rgba(0,0,0,0.07);
                    border-color: #d8d8d8;
                    transform: translateY(-2px);
                }

                @keyframes scroll {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes scrollReverse {
                    0%   { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                .animate-scroll         { animation: scroll 22s linear infinite; }
                .animate-scroll-reverse { animation: scrollReverse 22s linear infinite; }

                .fade-left  {
                    background: linear-gradient(to right, #F8F8F8 0%, transparent 100%);
                }
                .fade-right {
                    background: linear-gradient(to left,  #F8F8F8 0%, transparent 100%);
                }

                @media (max-width: 640px) {
                    .animate-scroll         { animation-duration: 18s; }
                    .animate-scroll-reverse { animation-duration: 18s; }
                }
            `}</style>

            <section className="bg-[#F8F8F8] py-20 sm:py-28 overflow-hidden">
                <div className="max-w-6xl mx-auto px-5 sm:px-8 mb-14 sm:mb-16">
                    <SimpleHeading
                        badgeText="Testimonials"
                        title="What Our Clients Say"
                        align="center"
                    />
                </div>

                <div className="space-y-5">
                    {rows.map((row, rowIndex) => (
                        <div key={rowIndex} className="relative overflow-hidden">
                            {/* Fade overlays */}
                            <div className="fade-left  absolute left-0 top-0 bottom-0 w-20 sm:w-32 z-10 pointer-events-none" />
                            <div className="fade-right absolute right-0 top-0 bottom-0 w-20 sm:w-32 z-10 pointer-events-none" />

                            <div className={`flex gap-4 sm:gap-5 ${row.className}`}>
                                {[
                                    ...testimonials.slice(row.start, row.end),
                                    ...testimonials.slice(row.start, row.end)
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