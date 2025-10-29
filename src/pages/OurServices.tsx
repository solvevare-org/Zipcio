import { useRef, useEffect } from "react";
import gsap from "gsap";
import UnsureServicesSuit from "./UnsureServicesSuit";
import FAQSection from "./Faqs";
import Contact from "./Contact";
import Footer from "./Footer";
import property_1 from "../assets/property_1.jpg";
import property_2 from "../assets/property_2.jpg";
import property_3 from "../assets/property_3.jpg";

type Service = {
  id: string;
  number: string;
  title: string;
  description: string;
  img?: string;
};

const services: Service[] = [
  {
    id: "01",
    number: "01",
    title: "Agent Experience",
    description: "Great for businesses needing optimal guidance.",
    img: property_1,
  },
  {
    id: "02",
    number: "02",
    title: "Client Experience",
    description: "Ideal for companies that require continuous project support.",
    img: property_2,
  },
  {
    id: "03",
    number: "03",
    title: "Analytics & Growth",
    description: "Ideal for companies requiring ownership of HubSpot CRM.",
    img: property_3,
  },
  {
    id: "04",
    number: "04",
    title: "Technology Innovation",
    description: "Ideal for companies requiring ownership of HubSpot CRM.",
    img: property_1,
  },
];


function ServiceItem({ service }: { service: Service }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const iconRef = useRef<HTMLDivElement | null>(null);
  const placeholderRef = useRef<HTMLDivElement | null>(null);
  const leftBracketRef = useRef<HTMLDivElement | null>(null);
  const rightBracketRef = useRef<HTMLDivElement | null>(null);
  const descRef = useRef<HTMLDivElement | null>(null);
  const exploreRef = useRef<HTMLButtonElement | null>(null);
  const CrmRef = useRef<HTMLDivElement | null>(null);
  const currentTimelineRef = useRef<gsap.core.Timeline | null>(null);
  const isAnimatingRef = useRef<boolean>(false);

  useEffect(() => {
    // Only enable animations on large screens (Tailwind `lg` breakpoint: min-width: 1024px).
    // On md and smaller screens we want the component to be static (no GSAP animations).
    if (typeof window !== "undefined") {
      const mq = window.matchMedia?.("(min-width: 1024px)");
      if (mq && !mq.matches) {
        return;
      }
    }

    const el = containerRef.current;
    const title = titleRef.current;
    const icon = iconRef.current;
    const leftB = leftBracketRef.current;
    const rightB = rightBracketRef.current;
    const desc = descRef.current;
    const explore = exploreRef.current;
    const placeholder = placeholderRef.current;
    if (
      !el ||
      !title ||
      !icon ||
      !leftB ||
      !rightB ||
      !desc ||
      !explore ||
      !placeholder
    )
      return;

    // initial state: hide interactive pieces on load (desktop)
    gsap.set([leftB, rightB, desc, explore], { opacity: 0, y: 10 });
    gsap.set(placeholder, { width: 0, display: "inline-block" });
    gsap.set(icon, {
      opacity: 0,
      y: 10,
      scale: 0.8,
      display: "none",
      zIndex: 20,
    });
    // Start with default height and overflow hidden
    gsap.set(el, { height: "200px", overflow: "hidden" });

    // Helper to safely kill any running timeline
    const killCurrent = () => {
      if (currentTimelineRef.current) {
        try {
          currentTimelineRef.current.kill();
        } catch (e) {
          // ignore
        }
        currentTimelineRef.current = null;
      }
    };

    const onEnter = () => {
      // prevent overlapping animations
      killCurrent();
      isAnimatingRef.current = true;

      const tl = gsap.timeline();
      currentTimelineRef.current = tl;

      // reveal brackets and expand placeholder to measured icon width
      tl.to(
        [leftB, rightB],
        { x: 0, opacity: 1, y: 0, duration: 0.45, ease: "power2.out" },
        0
      );
      // ensure icon is in layout before measuring
      gsap.set(icon, { display: "flex" });
      const measured = icon.getBoundingClientRect?.().width || 140;
      tl.to(
        placeholder,
        { width: measured, duration: 0.45, ease: "power2.out" },
        0
      );
      tl.to(
        icon,
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(1.1)" },
        0.05
      );
      tl.to(title, { opacity: 0.9, duration: 0.35, ease: "power2.out" }, 0.15);
      tl.to(
        desc,
        { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" },
        0.25
      );
      tl.to(
        explore,
        { opacity: 1, y: 0, duration: 0.45, ease: "back.out(1.2)" },
        0.32
      );

      // Auto-height animation: First set height to auto to measure it
      gsap.set(el, { height: "auto" });
      const autoHeight = el.offsetHeight;
      // Then immediately set back to current height and animate to the measured auto height
      gsap.set(el, { height: "200px" });
      tl.to(el, { height: autoHeight, duration: 0.45, ease: "power2.out" }, 0);

      tl.eventCallback("onComplete", () => {
        currentTimelineRef.current = null;
        isAnimatingRef.current = false;
      });
    };

    const onLeave = () => {
      killCurrent();
      isAnimatingRef.current = true;

      const tl = gsap.timeline({
        onComplete: () => {
          // hide icon from layout after exit animation
          try {
            gsap.set(icon, { display: "none" });
          } catch (e) {}
          currentTimelineRef.current = null;
          isAnimatingRef.current = false;
        },
      });
      currentTimelineRef.current = tl;

      // Animate all elements and collapse height smoothly
      tl.to(
        [leftB, rightB, desc, explore],
        { opacity: 0, y: 10, duration: 0.35, ease: "power2.in" },
        0
      );
      tl.to(icon, { opacity: 0, y: 10, duration: 0.35, ease: "power2.in" }, 0);
      tl.to(placeholder, { width: 0, duration: 0.35, ease: "power2.in" }, 0.05);
      tl.to(title, { opacity: 1, duration: 0.35, ease: "power2.out" }, 0);
      tl.to(el, { height: "200px", duration: 0.35, ease: "power2.in" }, 0.3);
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      killCurrent();
    };
  }, []);

  const [leftWord, ...rest] = service.title.split(" ");
  const rightWords = rest.join(" ");

  return (
    <div
      ref={containerRef}
      className="relative border-t h-[200px] max-h-[280px] last:border-b overflow-hidden py-14 px-4"
    >
      {/* mobile layout: visible on small screens, hidden at md+ */}
      <div className="md:hidden flex items-center justify-between">
        <span className="font-poppins text-sm font-medium  w-12 ">
          {service.number}
        </span>

        <div className="flex-1 flex items-center justify-center relative min-h-[140px] px-4">
          <div
            ref={leftBracketRef}
          />
           

          <div
            ref={rightBracketRef}
         />
           

          <div ref={titleRef} className="text-center w-full  z-10">
            <div
              ref={CrmRef}
              className="flex items-center justify-center gap-4 -top-14 relative"
            >
              <span className="text-[120px] lg:text-[120px]">{leftWord}</span>

              {/* placeholder controls spacing between words; icon is centered absolutely inside it */}
              <div
                ref={placeholderRef}
                className="inline-block h-[100px] relative"
                aria-hidden
              >
                <div
                  ref={iconRef}
                  className="w-[100px] h-[100px] rounded-xl overflow-hidden bg-transparent shadow-lg flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  {service.img && (
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                {/* fallback static image for md screens (hidden on lg to avoid duplicate with animated icon) */}
                {service.img && (
                  <img
                    src={service.img}
                    alt={service.title}
                    className="hidden md:block lg:hidden w-[100px] h-[100px] rounded-xl overflow-hidden object-cover shadow-lg"
                  />
                )}
              </div>

              <span className="text-[120px] lg:text-[120px]">{rightWords}</span>
            </div>
          </div>
        </div>

        {/* <span className="font-poppins text-sm font-medium text-gray-800 w-24 text-right">
          / See more
        </span> */}
      </div>

      <div className="md:hidden mt-6 text-center px-4 font-poppins">
        <div ref={descRef} />
        <div className="mt-4">
          <button ref={exploreRef}>{/* Explore */}</button>
        </div>
      </div>














      {/* responsive  */}

        {/* md-only layout: hidden on mobile and lg, visible only on md (768px - 1023px). A compact card-style static design */}
        <div className="hidden md:flex lg:hidden items-center gap-4 bg-white/5 p-4 rounded-lg">
          <div className="w-28 flex-shrink-0">
            {service.img && (
              <img
                src={service.img}
                alt={service.title}
                className="w-28 h-20 object-cover rounded-md shadow-sm"
              />
            )}
          </div>

          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm font-medium">{service.number}</div>
                <div className="mt-1 font-poppins font-semibold text-2xl leading-tight">
                  <span className="block text-2xl">
                    {leftWord} <span className="inline-block ml-2 text-2xl">{rightWords}</span>
                  </span>
                </div>
              </div>
              {/* <div className="text-sm text-gray-400">/ See more</div> */}
            </div>

            <p className="mt-3 text-sm text-gray-600 font-poppins">{service.description}</p>
          </div>
        </div>

        {/* lg layout: hidden on mobile/md, visible from lg and up. Keeps animated icon/structure */}
        <div className="hidden lg:flex items-center justify-between">
        <span className="font-poppins text-sm font-medium text-gray-800 w-12 ">
          {service.number}
        </span>

        <div className="flex-1 flex items-center justify-center relative min-h-[140px] px-4">
          <div
            ref={leftBracketRef}
            className="absolute left-8 top-1/2 -translate-y-1/2 text-[160px] font-black text-purple-200 pointer-events-none"
          />
            {/* <Bracket side="right" className="w-full h-[200px]" />
          </div> */}

          <div
            ref={rightBracketRef}
            className="absolute right-8 top-1/2 -translate-y-1/2 text-[160px] font-black text-purple-200 pointer-events-none"
          />
            {/* <Bracket side="left" className="w-full h-[200px]" />
          </div> */}

          <div ref={titleRef} className="text-center w-full  z-10">
            <div
              ref={CrmRef}
              className="flex items-center justify-center gap-4 -top-14 relative"
            >
              <span className="text-[120px] lg:text-[120px]">{leftWord}</span>

              {/* placeholder controls spacing between words; icon is centered absolutely inside it */}
              <div
                ref={placeholderRef}
                className="inline-block h-[100px] relative"
                aria-hidden
              >
                <div
                  ref={iconRef}
                  className="w-[100px] h-[100px] rounded-xl overflow-hidden bg-transparent shadow-lg flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  {service.img && (
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                {/* fallback static image for md screens (hidden on lg to avoid duplicate with animated icon) */}
                {service.img && (
                  <img
                    src={service.img}
                    alt={service.title}
                    className="hidden md:block lg:hidden w-[100px] h-[100px] rounded-xl overflow-hidden object-cover shadow-lg"
                  />
                )}
              </div>

              <span className="text-[120px] lg:text-[120px]">{rightWords}</span>
            </div>
          </div>
        </div>

        {/* <span className="font-poppins text-sm font-medium text-gray-800 w-24 text-right">
          / See more
        </span> */}
      </div>

      <div className="hidden lg:block mt-6 text-center px-4 font-poppins">
        <div ref={descRef} />
        <div className="mt-4">
          <button ref={exploreRef}>{/* Explore */}</button>
        </div>
      </div>
    </div>
  );
}

export function OurServices() {
  return (
    <section id="services" className="pt-2 lg:pt-20 font-[Duck-cry]">
      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="font-poppins flex flex-col lg:flex-row justify-between w-full lg:w-[80%] gap-4 lg:gap-0 mx-auto">
          <div className="flex items-center gap-4 mb-6">
            {/* <span className="font-poppins">/ Our Services</span> */}
            <div className="flex-1 h-px bg-border"></div>
          </div>
          <h2
            className="experts-h2 font-poppins text-lg lg:text-[1.2rem]"
            data-testid="services-title"
          >
            We are experts in revenue operations.
          </h2>
        </div>

        <div className="space-y-2 flex flex-col justify-center">
          {services.map((s) => (
            <ServiceItem key={s.id} service={s} />
          ))}
        </div>
        <UnsureServicesSuit />
        <FAQSection />
        <Contact />
        <Footer />
      </div>
    </section>
  );
}
