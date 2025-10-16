// import { useState } from "react";

// interface Service {
//   id: string;
//   number: string;
//   title: string;
//   description: string;
//   icon: string;
// }

// const services: Service[] = [
//   {
//     id: "01",
//     number: "/01",
//     title: "CRM CONSULTANT",
//     description: "Great for businesses needing optimal guidance.",
//     icon: "🏎️",
//   },
//   {
//     id: "02",
//     number: "/02",
//     title: "CRM OPTIMIZER",
//     description: "Perfect for streamlining your operations.",
//     icon: "⚡",
//   },
//   {
//     id: "03",
//     number: "/03",
//     title: "CRM LEADER",
//     description: "Ideal for taking your business to the next level.",
//     icon: "🏆",
//   },
// ];

// export function OurServices() {
//   const [hoveredId, setHoveredId] = useState<string | null>(null);

//   return (
//     <div className="min-h-screen bg-white py-16 px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="mb-12">
//           <h2 className="text-sm font-medium text-black">/ Our Services</h2>
//           <p className="text-right text-sm text-black -mt-5">
//             We are experts in revenue operations.
//           </p>
//         </div>

//         <div className="space-y-0">
//           {services.map((service, index) => (
//             <div
//               key={service.id}
//               className="relative border-t border-gray-300 last:border-b transition-all duration-500"
//               onMouseEnter={() => setHoveredId(service.id)}
//               onMouseLeave={() => setHoveredId(null)}
//             >
//               <div className="flex items-center justify-between py-12 relative">
//                 <span className="text-sm font-medium text-gray-800 w-12">
//                   {service.number}
//                 </span>

//                 <div className="flex-1 flex items-center justify-center relative">
//                   <div
//                     className={`transition-all duration-500 ${
//                       hoveredId === service.id
//                         ? "opacity-100 scale-100"
//                         : "opacity-0 scale-95 absolute"
//                     }`}
//                   >
//                     {hoveredId === service.id && (
//                       <div className="flex items-center gap-4">
//                         <span className="text-8xl font-black text-black tracking-tight">
//                           {service.title.split(" ")[0]}
//                         </span>
//                         <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center text-5xl shadow-lg">
//                           {service.icon}
//                         </div>
//                         <span className="text-8xl font-black text-black tracking-tight">
//                           {service.title.split(" ")[1]}
//                         </span>
//                       </div>
//                     )}
//                   </div>

//                   <div
//                     className={`transition-all duration-500 ${
//                       hoveredId === service.id
//                         ? "opacity-0 scale-95 absolute"
//                         : "opacity-100 scale-100"
//                     }`}
//                   >
//                     <h3 className="text-7xl font-black tracking-tight text-center">
//                       {service.title}
//                     </h3>
//                   </div>
//                 </div>

//                 <span className="text-sm font-medium text-gray-800 w-24 text-right">
//                   / See more
//                 </span>
//               </div>

//               <div
//                 className={`overflow-hidden transition-all duration-500 ${
//                   hoveredId === service.id
//                     ? "max-h-48 opacity-100"
//                     : "max-h-0 opacity-0"
//                 }`}
//               >
//                 <div className="pb-12 px-16 flex flex-col items-center">
//                   <p className="text-center text-lg text-gray-700 mb-6">
//                     {service.description}
//                   </p>
//                   <button className="px-8 py-3 bg-gradient-to-r from-purple-400 to-purple-600 text-black rounded-full font-medium hover:shadow-lg transition-shadow">
//                     Explore
//                   </button>
//                 </div>
//               </div>

//               {hoveredId === service.id && (
//                 <>
//                   <div className="absolute left-8 top-1/2 -translate-y-1/2 text-[200px] font-black text-purple-200  pointer-events-none">
//                     [
//                   </div>
//                   <div className="absolute right-8 top-1/2 -translate-y-1/2 text-[200px] font-black text-purple-200  pointer-events-none">
//                     ]
//                   </div>
//                 </>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useRef, useEffect } from 'react';
// import { gsap } from 'gsap';

// interface Service {
//   id: string;
//   number: string;
//   title: string;
//   description: string;
//   icon: string;
// }

// const services: Service[] = [
//   {
//     id: '01',
//     number: '/01',
//     title: 'CRM CONSULTANT',
//     description: 'Great for businesses needing optimal guidance.',
//     icon: '🏎️'
//   },
//   {
//     id: '02',
//     number: '/02',
//     title: 'CRM OPTIMIZER',
//     description: 'Perfect for streamlining your operations.',
//     icon: '⚡'
//   },
//   {
//     id: '03',
//     number: '/03',
//     title: 'CRM LEADER',
//     description: 'Ideal for taking your business to the next level.',
//     icon: '🏆'
//   }
// ];

// function ServiceItem({ service }: { service: Service }) {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const titleRef = useRef<HTMLHeadingElement>(null);
//   const iconContainerRef = useRef<HTMLDivElement>(null);
//   const bgRef = useRef<HTMLDivElement>(null);
//   const leftBracketRef = useRef<HTMLDivElement>(null);
//   const rightBracketRef = useRef<HTMLDivElement>(null);
//   const descriptionRef = useRef<HTMLDivElement>(null);
//   const exploreButtonRef = useRef<HTMLButtonElement>(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     const title = titleRef.current;
//     const iconContainer = iconContainerRef.current;
//     const leftBracket = leftBracketRef.current;
//     const rightBracket = rightBracketRef.current;
//     const description = descriptionRef.current;
//     const exploreButton = exploreButtonRef.current;

//   if (!container || !title || !iconContainer || !leftBracket || !rightBracket || !description || !exploreButton) return;

//     const handleMouseEnter = () => {
//       const tl = gsap.timeline();

//       // bg comes from behind: scale up + fade in
//       tl.fromTo(bgRef, { scale: 0.6, opacity: 0, y: 30, rotation: -6 }, { scale: 1, opacity: 1, y: 0, rotation: 0, duration: 0.7, ease: 'power2.out' }, 0);

//       tl.to(title, {
//         opacity: 0,
//         scale: 0.95,
//         duration: 0.4,
//         ease: 'power2.out'
//       }, 0);

//       tl.fromTo(iconContainer,
//         {
//           opacity: 0,
//           scale: 0.8,
//           y: 20
//         },
//         {
//           opacity: 1,
//           scale: 1,
//           y: 0,
//           duration: 0.5,
//           ease: 'power2.out'
//         }, 0.1);

//       tl.fromTo(leftBracket,
//         {
//           opacity: 0,
//           x: 50
//         },
//         {
//           opacity: 1,
//           x: 0,
//           duration: 0.6,
//           ease: 'power2.out'
//         }, 0.15);

//       tl.fromTo(rightBracket,
//         {
//           opacity: 0,
//           x: -50
//         },
//         {
//           opacity: 1,
//           x: 0,
//           duration: 0.6,
//           ease: 'power2.out'
//         }, 0.15);

//       tl.fromTo(description,
//         {
//           opacity: 0,
//           y: -20
//         },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.5,
//           ease: 'power2.out'
//         }, 0.3);

//       tl.fromTo(exploreButton,
//         {
//           opacity: 0,
//           scale: 0.9,
//           y: -10
//         },
//         {
//           opacity: 1,
//           scale: 1,
//           y: 0,
//           duration: 0.4,
//           ease: 'back.out(1.2)'
//         }, 0.5);
//     };

//     const handleMouseLeave = () => {
//       const tl = gsap.timeline();

//       // hide bg smoothly
//       tl.to(bgRef, { scale: 0.8, opacity: 0, y: -10, duration: 0.45, ease: 'power2.in' }, 0);

//       tl.to([description, exploreButton], {
//         opacity: 0,
//         y: -20,
//         duration: 0.3,
//         ease: 'power2.in'
//       }, 0);

//       tl.to(leftBracket, { opacity: 0, x: 50, duration: 0.3, ease: 'power2.in' }, 0);
//       tl.to(rightBracket, { opacity: 0, x: -50, duration: 0.3, ease: 'power2.in' }, 0);

//       tl.to(iconContainer, {
//         opacity: 0,
//         scale: 0.8,
//         y: 20,
//         duration: 0.3,
//         ease: 'power2.in'
//       }, 0.1);

//       tl.to(title, {
//         opacity: 1,
//         scale: 1,
//         duration: 0.4,
//         ease: 'power2.out'
//       }, 0.2);
//     };

//     container.addEventListener('mouseenter', handleMouseEnter);
//     container.addEventListener('mouseleave', handleMouseLeave);

//     return () => {
//       container.removeEventListener('mouseenter', handleMouseEnter);
//       container.removeEventListener('mouseleave', handleMouseLeave);
//     };
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="relative border border-t border-gray-300 last:border-b overflow-hidden"
//     >
//       <div className="flex items-center justify-between py-12 relative">
//         <span className="text-sm font-medium text-black w-12">
//           {service.number}
//         </span>

//         <div className="flex-1 flex items-center justify-center relative min-h-[120px]">
//           {/* background element that animates from behind */}
//           <div ref={bgRef} className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none opacity-0">
//             <div className="w-[520px] h-[160px] rounded-2xl bg-gradient-to-r from-purple-300 to-purple-500 shadow-xl" />
//           </div>
//           <h3
//             ref={titleRef}
//             className="text-7xl font-black tracking-tight text-center text-black absolute z-10"
//           >
//             {service.title}
//           </h3>

//           <div
//             ref={iconContainerRef}
//             className="flex items-center gap-6 opacity-0 absolute z-20"
//           >
//             {/* show full title with icon inline (e.g. "CRM [icon] CONSULTANT") */}
//             <span className="text-8xl font-black tracking-tight text-black">
//               {service.title.split(' ')[0]}
//             </span>
//             <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center text-5xl shadow-lg">
//               {service.icon}
//             </div>
//             <span className="text-6xl font-black tracking-tight text-black">
//               {service.title.split(' ').slice(1).join(' ')}
//             </span>
//           </div>
//         </div>

//         <span className="text-sm font-medium text-black w-24 text-right">
//           / See more
//         </span>
//       </div>

//       <div className="pb-12 px-16 flex flex-col items-center">
//         <p
//           ref={descriptionRef}
//           className="text-center text-lg text-black mb-6 opacity-0"
//         >
//           {service.description}
//         </p>
//         <button
//           ref={exploreButtonRef}
//           className="px-8 py-3 bg-gradient-to-r from-purple-400 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transition-shadow opacity-0"
//         >
//           Explore
//         </button>
//       </div>

//       <div
//         ref={leftBracketRef}
//         className="absolute left-8 top-1/2 -translate-y-1/2 text-[200px] font-black text-purple-200 opacity-0 pointer-events-none"
//       >
//         [
//       </div>
//       <div
//         ref={rightBracketRef}
//         className="absolute right-8 top-1/2 -translate-y-1/2 text-[200px] font-black text-purple-200 opacity-0 pointer-events-none"
//       >
//         ]
//       </div>
//     </div>
//   );
// }

// export function OurServices() {
//   return (
//     <div className="min-h-screen bg-[#e8e8e8] py-16 px-8 font-[Duck-cry]">
//       <div className="max-w-7xl mx-auto">
//         <div className="mb-12">
//           <h2 className="text-sm font-medium text-black">/ Our Services</h2>
//           <p className="text-right text-sm text-black -mt-5">
//             We are experts in revenue operations.
//           </p>
//         </div>

//         <div className="space-y-0">
//           {services.map((service) => (
//             <ServiceItem key={service.id} service={service} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import { ArrowUpRight } from "lucide-react";
import { useRef, useEffect } from "react";
import gsap from "gsap";

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
    number: "/01",
    title: "CRM CONSULTANT",
    description: "Great for businesses needing optimal guidance.",
    img: "https://43675023.fs1.hubspotusercontent-na1.net/hubfs/43675023/hero-girl-1.jpeg",
  },
  {
    id: "02",
    number: "/02",
    title: "CRM OPTIMIZER",
    description: "Ideal for companies that require continuous project support.",
    img: "https://43675023.fs1.hubspotusercontent-na1.net/hubfs/43675023/rocket%20(1).jpeg",
  },
  {
    id: "03",
    number: "/03",
    title: "CRM LEADER",
    description: "Ideal for companies requiring ownership of HubSpot CRM.",
    img: "https://43675023.fs1.hubspotusercontent-na1.net/hubfs/43675023/car%20(1).jpeg",
  },
  {
    id: "04",
    number: "/04",
    title: "Bespoke Marketing",
    description: "Ideal for companies requiring ownership of HubSpot CRM.",
    img: "https://43675023.fs1.hubspotusercontent-na1.net/hubfs/43675023/ship%20(1).jpeg",
  }
];

function Bracket({
  side = "left",
  className = "",
}: {
  side?: "left" | "right";
  className?: string;
}) {
  const transform = side === "right" ? "scaleX(-1)" : undefined;
  return (
    <svg
      viewBox="0 0 100 300"
      className={className}
      style={{ transform }}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      aria-hidden
    >
      <path
        d="M18 10 L72 10 L72 40 L48 40 L48 260 L72 260 L72 290 L18 290"
        stroke="#00e676"
        strokeWidth="18"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ServiceItem({ service }: { service: Service }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const iconRef = useRef<HTMLDivElement | null>(null);
  const placeholderRef = useRef<HTMLDivElement | null>(null);
  const leftBracketRef = useRef<HTMLDivElement | null>(null);
  const rightBracketRef = useRef<HTMLDivElement | null>(null);
  const descRef = useRef<HTMLDivElement | null>(null);
  const exploreRef = useRef<HTMLButtonElement | null>(null);
  const CrmRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    const title = titleRef.current;
    const icon = iconRef.current;
    const leftB = leftBracketRef.current;
    const rightB = rightBracketRef.current;
    const desc = descRef.current;
    const explore = exploreRef.current;
    if (!el || !title || !icon || !leftB || !rightB || !desc || !explore)
      return;

    // initial state: hide interactive pieces
    gsap.set([leftB, rightB, desc, explore], { opacity: 0, y: 10 });
    // placeholder width starts at 0 so words sit together; icon removed from flow
    const placeholder = placeholderRef.current;
    gsap.set(placeholder, { width: 0, display: "inline-block" });
    gsap.set(icon, {
      opacity: 0,
      y: 10,
      scale: 0.8,
      display: "none",
      zIndex: 20,
    });

    // compute collapsed height (only header area visible) and set container to that maxHeight/minHeight
    const headerEl = headerRef.current;
    if (headerEl) {
      const style = window.getComputedStyle(el);
      const padTop = parseFloat(style.paddingTop || "0");
      const padBottom = parseFloat(style.paddingBottom || "0");
      const collapsedHeight = Math.round(
        headerEl.getBoundingClientRect().height + padTop + padBottom
      );
      // ensure overflow hidden and set initial maxHeight and minHeight so collapsed view fits the header
      gsap.set(el, { Height: "400px", minHeight: "10px", overflow: "hidden" });
    }

    const onEnter = () => {
      const tl = gsap.timeline();
      tl.to(
        [leftB, rightB],
        { x: 0, opacity: 1, y: 0, duration: 0.45, ease: "power2.out" },
        0
      );
      // make icon visible then measure it, animate placeholder to that measured width
      gsap.set(icon, { display: "flex" });
      const measured = icon.getBoundingClientRect?.().width || 140;
      tl.to(
        placeholder,
        { width: measured, duration: 0.45, ease: "power2.out" },
        0
      );
      // animate icon from behind
      tl.to(
        icon,
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(1.1)" },
        0.05
      );
      // dim main title a touch
      tl.to(title, { duration: 0.35, ease: "power2.out" }, 0.15);
      // reveal description and button
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

      // expand container to fit full content and raise visible minHeight to 300px (user requested)
      try {
        const full = el.scrollHeight;
        tl.to(
          el,
          { maxHeight: "400px", duration: 0.45, ease: "power2.out" },
          0
        );
        // make sure the visible minimum increases so hidden content becomes visible at least 300px tall
        tl.to(
          el,
          { minHeight: "300px", duration: 0.35, ease: "power2.out" },
          0
        );
      } catch (e) {
        // ignore measurement errors
      }
    };

    const onLeave = () => {
      const tl = gsap.timeline({
        onComplete: () => {
          // After hide animation completes remove the icon from layout
          gsap.set(icon, { display: "none" });
        },
      });

      tl.to(
        [leftB, rightB, desc, explore],
        { opacity: 0, y: 10, duration: 0.35, ease: "power2.in" },
        0
      );
  // animate icon out visually (fade out) so placeholder can collapse cleanly
  tl.to(icon, { opacity: 0, scale: 0.8, y: 10, duration: 0.35, ease: "power2.in" }, 0);
      // collapse the placeholder width back to 0 to bring words together smoothly
      tl.to(placeholder, { width: 0, duration: 0.35, ease: "power2.in" }, 0.05);
      tl.to(title, { opacity: 1, duration: 0.35, ease: "power2.out" }, 0);

      // collapse container back to the original collapsed height (restore minHeight too)
      const headerEl2 = headerRef.current;
      if (headerEl2) {
        const style = window.getComputedStyle(el);
        const padTop = parseFloat(style.paddingTop || "0");
        const padBottom = parseFloat(style.paddingBottom || "0");
        const collapsedHeight2 = Math.round(
          headerEl2.getBoundingClientRect().height + padTop + padBottom
        );
        tl.to(
          el,
          {
            maxHeight: "200px",
            minHeight: "10px",
            duration: 0.35,
            ease: "power2.in",
          },
          0
        );
      }
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    // return () => {
    //   el.removeEventListener("mouseenter", onEnter);
    //   el.removeEventListener("mouseleave", onLeave);
    // };
  }, []);

  const [leftWord, ...rest] = service.title.split(" ");
  const rightWords = rest.join(" ");

  return (
    <div
      ref={containerRef}
      className="relative border-t h-[200px] last:border-b overflow-hidden py-14 px-4"
    >
      <div ref={headerRef} className="flex justify-between">
        <span className="font-poppins text-sm font-medium text-gray-800 w-12 ">
          {service.number}
        </span>

        <div className="flex-1 flex justify-center relative min-h-[140px] px-4">
          <div
            ref={leftBracketRef}
            className="absolute left-8 top-1/2 -translate-y-1/2 text-[160px] font-black text-purple-200 pointer-events-none"
           >
            <Bracket side="right" className="w-full h-[200px]" />
          </div>

          <div
            ref={rightBracketRef}
            className="absolute right-8 top-1/2 -translate-y-1/2 text-[160px] font-black text-purple-200 pointer-events-none"
           >
            <Bracket side="left" className="w-full h-[200px]" />
          </div>

          <div ref={titleRef} className="text-center w-full z-10">
            <div
              ref={CrmRef}
              className="flex items-center -top-14 justify-center gap-4 relative"
            >
              <span className="text-[120px] lg:text-[120px] text-[#1F1F1F] font-[500]">
                {leftWord}
              </span>

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
              </div>

              <span className="text-[120px] lg:text-[120px] text-[#1F1F1F] font-[500]">
                {rightWords}
              </span>
            </div>
          </div>
        </div>

        <span className="font-poppins text-sm font-medium text-gray-800 w-24 text-right">
          / See more
        </span>
      </div>

      <div className=" text-center absolute flex-col w-[100%] bottom-6 flex justify-center items-center px-4 font-poppins">
        <div ref={descRef} className="text-base text-[#1F1F1F]">
          {service.description}
        </div>
        <div className="mt-4">
          <button
            ref={exploreRef}
            className="inline-flex items-center px-6 py-2 bg-purple-200 text-purple-800 rounded-full font-medium"
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}

export function OurServices() {
  return (
    <section id="service" className="py-40 bg-[#F5F5F5] font-[Duck-cry]">
      <div className="max-w-[100%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="font-poppins flex justify-between w-[80%]">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-poppins">/ Our Services</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>
          <h2
            className="experts-h2 font-poppins lg:text-[1.2rem]"
            data-testid="services-title"
          >
            We are experts in revenue operations.
          </h2>
        </div>

        <div className="space-y-2 flex flex-col justify-center ">
          {services.map((s) => (
            <ServiceItem key={s.id} service={s} />
          ))}
        </div>

        <div className="mt-16 text-center bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-3xl p-12">
          <h3
            className="text-3xl font-bold text-foreground mb-4"
            data-testid="services-cta-title"
          >
            Unsure which service suits you?
          </h3>
          <p
            className="text-muted-foreground mb-8 max-w-2xl mx-auto"
            data-testid="services-cta-description"
          >
            Book a quick call with our team, and we'll guide you to the perfect
            solution for your business needs.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-opacity"
            data-testid="button-schedule-call"
          >
            Schedule a call
            <ArrowUpRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

