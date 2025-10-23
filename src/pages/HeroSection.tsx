import { ArrowUpRight, ChevronDown, ArrowDown, Menu } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section2 from "./Section2";

export function Bracket({
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

function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const stackRef = useRef<HTMLDivElement | null>(null);
  const layer1 = useRef<HTMLDivElement | null>(null);
  const layer2 = useRef<HTMLDivElement | null>(null);
  const layer3 = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const heroContentRef = useRef<HTMLDivElement | null>(null); // New ref for content to move up
  const headlineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const isDesktop = window.innerWidth >= 1024;
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
      const isMobile = window.innerWidth < 768;

      // Desktop animations (1024px+)
      if (isDesktop) {
        gsap.set(layer1.current, { x: 0, rotation: 4 });
        gsap.set(layer2.current, { x: 0, rotation: -2 });
        gsap.set(layer3.current, { x: 0, rotation: 2 });
        gsap.set(cardRef.current, { x: 0, y: 0 });
        gsap.set(stackRef.current, { x: 0, scale: 1, y: 0 });

        const cardSpacing = 300;
        const horizontalDistance = window.innerWidth;

        // Increase scroll height so the sequence can play fully (hero down, then card slide, then horizontal)
        const totalScrollHeight = window.innerHeight * 10;

        const master = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: () => "+=" + totalScrollHeight, // Use the new, higher scroll height
            scrub: 1, // longer scrub for smoother, eased mapping from scroll to timeline
            pin: true,
          },
        });

      // headline: animate from below into view when it enters
      if (headlineRef.current) {
        // create a ScrollTrigger that starts a fresh tween on each enter so a delay runs every time
        let headlineTween: gsap.core.Tween | null = null;

        ScrollTrigger.create({
          trigger: headlineRef.current,
          start: "top 80%",
          onEnter: () => {
            if (headlineTween) headlineTween.kill();
            headlineTween = gsap.fromTo(
              headlineRef.current,
              { y: 60, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
                delay: 1.2,
              }
            );
          },
        });
      }

      // === Phase 1: Vertical Movement (move whole hero down) ===
      // Move card stack down distance used for both hero content and cards
      // const verticalMove = window.innerHeight * 1.5; // distance to move content off-screen

      // counter-shift the stack up so it visually stays while hero content moves down
      master.set(stackRef.current, { y: 0 }, 0);

      // Move the main hero content down (including the large text) first
      master.to(
        heroContentRef.current,
        { y: -600, transitionTimingFunction: "power1.out", ease: "power1.out" },
        0
      );

      // delay the stack/card vertical movement by 2 seconds so it waits before sliding
      const cardDelay = 0.5; // seconds
      // animate the whole stack group down (this moves card + layers together)
      master.to(
        stackRef.current,
        { y: 450, scale: 0.9, ease: "power1.out" },
        0
      );

      // spread layers horizontally at the same time (no vertical y here)
      master.to(
        layer1.current,
        { x: cardSpacing * 1, rotation: 0, left: 0, ease: "power1.out" },
        cardDelay
      );
      master.to(
        layer2.current,
        { x: cardSpacing * 2, rotation: 0, left: 0, ease: "power1.out" },
        cardDelay
      );
      master.to(
        layer3.current,
        { x: cardSpacing * 3, rotation: 0, zIndex: 0, ease: "power1.out" },
        cardDelay
      );

      // subtle fade while sliding
      master.to(cardRef.current, { ease: "power1.out" }, cardDelay);

      // === Phase 2: Horizontal Scroll ===

      // Start the horizontal movement after a fraction of the total scroll (e.g., at 50% of the total scroll)
      // The horizontal scroll will now push the first W-screen out and reveal the second W-screen.
      // start horizontal translation after the card has moved (give it 1.5s buffer)
        master.to(
          innerRef.current,
          {
            x: -horizontalDistance,
            ease: "power1.inOut",
          },
          cardDelay + 0.9
        );
      }

      // Tablet animations (768px - 1023px) - optimized for tablet experience
      if (isTablet) {
        // Disable complex desktop animations but keep some visual effects
        gsap.set([layer1.current, layer2.current, layer3.current], { opacity: 0 });
        
        // Simple tablet headline animation
        if (headlineRef.current) {
          ScrollTrigger.create({
            trigger: headlineRef.current,
            start: "top 75%",
            onEnter: () => {
              gsap.fromTo(
                headlineRef.current,
                { y: 40, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.7,
                  ease: "power2.out",
                }
              );
            },
          });
        }

        // Tablet card animation - simpler than desktop but more than mobile
        if (stackRef.current) {
          ScrollTrigger.create({
            trigger: stackRef.current,
            start: "top 60%",
            onEnter: () => {
              gsap.fromTo(
                stackRef.current,
                { y: 60, opacity: 0.7, scale: 0.95 },
                {
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  duration: 0.9,
                  ease: "power2.out",
                }
              );
            },
          });
        }

        // Tablet: keep visual entrance animations only. We intentionally
        // DO NOT animate innerRef.x on tablet so scrolling remains vertical.
      }

      // Mobile animations (under 768px) - simplest and most performant
      if (isMobile) {
        // Hide desktop layers completely on mobile
        gsap.set([layer1.current, layer2.current, layer3.current], { opacity: 0, display: "none" });
        
        // Simple fade-in animation for mobile headline
        if (headlineRef.current) {
          ScrollTrigger.create({
            trigger: headlineRef.current,
            start: "top 80%",
            onEnter: () => {
              gsap.fromTo(
                headlineRef.current,
                { y: 30, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.6,
                  ease: "power2.out",
                }
              );
            },
          });
        }

        // Simple scroll-triggered animation for mobile cards
        if (stackRef.current) {
          ScrollTrigger.create({
            trigger: stackRef.current,
            start: "top 70%",
            onEnter: () => {
              gsap.fromTo(
                stackRef.current,
                { y: 50, opacity: 0.8 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.8,
                  ease: "power2.out",
                }
              );
            },
          });
        }

        // No horizontal scroll on mobile - just normal scrolling
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  //    useEffect(() => {

  //     if (typeof window === "undefined") return;
  //     if (window.innerWidth < 1024) return;

  //     gsap.registerPlugin(ScrollTrigger);

  //     const ctx = gsap.context(() => {
  //       gsap.set(layer1.current, { x: 0, rotation: 4 });
  //       gsap.set(layer2.current, { x: 0, rotation: -2 });
  //       gsap.set(layer3.current, { x: 0, rotation: 2 });
  //       gsap.set(cardRef.current, { x: 0, y: 0 });
  //
  //       const cardSpacing = 320;
  //       const horizontalDistance = window.innerWidth;
  //
  //       // Increased scroll height to allow for vertical movement AND horizontal movement
  //       const totalScrollHeight = window.innerHeight * 2;

  //       const master = gsap.timeline({
  //         scrollTrigger: {
  //           trigger: containerRef.current,
  //           start: "top top",
  //           end: () => "+=" + totalScrollHeight, // Use the new, higher scroll height
  //           scrub: 2,
  //           pin: true,
  //         },
  //       });

  //       // === Phase 1: Vertical Movement (Card Zoom-out) ===
  //
  //       // Move the main hero content up (including the large text)
  //       master.to(heroContentRef.current, { y: -window.innerHeight, ease: "power1.out" }, 0);
  //
  //       // Move card stack up and animate its spread (it will move off-screen)
  //       const verticalMove = window.innerHeight * 1.5; // Ensure it leaves the screen quickly

  //       master.to(stackRef.current, { y: -700,  ease: "power1.out" }, 0.2);
  //       master.to(layer1.current, { x: cardSpacing * 1, rotation: 0 , left: 0, y: verticalMove, ease: "power1.out"}, 0);
  //       master.to(layer2.current, { x: cardSpacing * 2, rotation: 0, left: 0, y: verticalMove, ease: "power1.out" }, 0);
  //       master.to(layer3.current, { x: cardSpacing * 3, rotation: 0, zIndex: 0, y: verticalMove, ease: "power1.out" }, 0);
  //       master.to(cardRef.current, { x: 0, y: verticalMove, ease: "power1.out" }, 0);

  //       // <<<<<<<<<<<<<<<< Nayi Line Yahan Shamil Ki Hai >>>>>>>>>>>>>>>>
  //       // cardRef ke andar maujood <img> tag ko target karo aur 0.2 second delay se opacity kam karo
  //       // (Isme apka JSX change nahi hoga)
  //       master.to(cardRef.current.querySelector('img'), { opacity: 0, ease: "power1.out" }, 0.2);
  //       // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< >>>>>>>>>>>>>>>>>>>>>>>>>>>

  //       // === Phase 2: Horizontal Scroll ===
  //
  //       // Start the horizontal movement after a fraction of the total scroll (e.g., at 50% of the total scroll)
  //       // The horizontal scroll will now push the first W-screen out and reveal the second W-screen.
  //       master.to(innerRef.current, {
  //         x: -horizontalDistance,
  //         ease: "power1.inOut"
  //       }, 0.5); // Start at 50% progress of the master timeline

  //     }, containerRef);

  //     return () => ctx.revert();
  //   }, []);

  return (
    <main ref={containerRef} className="min-h-[100vh] overflow-x-hidden lg:overflow-hidden">
      {/* On lg+ screens we use a horizontal 2-screen layout (200vw).
          On smaller screens we stack the sections vertically (flex-col, full width). */}
  <div ref={innerRef} className="flex flex-col lg:flex-row">
        {/* First Screen */}
        <div className="w-full lg:w-screen lg:h-screen flex-shrink-0">
          <div className="min-h-screen bg-[#f5f5f5]">
            <header className="flex items-start justify-between px-4 md:px-8 md:py-6">
              <div className="text-2xl md:text-3xl font-bold tracking-tight">
                ZIPGIO
              </div>

              <nav className="hidden lg:flex items-center gap-2">
                <button className="px-6 xl:px-8 py-3 xl:py-4 rounded-full text-gray-800 hover:bg-gray-200 transition-colors text-sm xl:text-base">
                  About
                </button>
                <button className="px-6 xl:px-8 py-3 xl:py-4 rounded-full text-gray-800 hover:bg-gray-200 transition-colors flex items-center gap-2 text-sm xl:text-base">
                  Services
                  <ChevronDown size={20} />
                </button>
                <button className="px-6 xl:px-8 py-3 xl:py-4 rounded-full text-gray-800 hover:bg-gray-200 transition-colors text-sm xl:text-base">
                  Resources
                </button>
                <button className="px-6 xl:px-8 py-3 xl:py-4 rounded-full text-gray-800 hover:bg-gray-200 transition-colors text-sm xl:text-base">
                  Packages
                </button>
              </nav>

              <div className="hidden md:flex items-center gap-3">
                <button className="px-4 md:px-6 xl:px-8 py-3 xl:py-4 bg-[#00e676] hover:bg-[#00d066] text-black font-medium rounded-full transition-colors text-sm xl:text-base">
                  Book a call
                </button>
                <button className="w-12 h-12 xl:w-14 xl:h-14 bg-[#00e676] hover:bg-[#00d066] rounded-full flex items-center justify-center transition-colors">
                  <ArrowUpRight
                    size={20}
                    className="text-black xl:w-6 xl:h-6"
                  />
                </button>
              </div>

              <button
                className="lg:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu size={24} className="text-gray-800" />
              </button>
            </header>

            {mobileMenuOpen && (
              <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-4">
                <nav className="flex flex-col gap-2">
                  <button className="px-6 py-3 rounded-full text-gray-800 hover:bg-gray-100 transition-colors text-left">
                    About
                  </button>
                  <button className="px-6 py-3 rounded-full text-gray-800 hover:bg-gray-100 transition-colors flex items-center justify-between">
                    Services
                    <ChevronDown size={20} />
                  </button>
                  <button className="px-6 py-3 rounded-full text-gray-800 hover:bg-gray-100 transition-colors text-left">
                    Resources
                  </button>
                  <button className="px-6 py-3 rounded-full text-gray-800 hover:bg-gray-100 transition-colors text-left">
                    Packages
                  </button>
                  <button className="mt-4 px-6 py-3 bg-[#00e676] hover:bg-[#00d066] text-black font-medium rounded-full transition-colors">
                    Book a call
                  </button>
                </nav>
              </div>
            )}

            {/* The content that needs to move up and off-screen */}
            <div ref={heroContentRef}>
              <main className="px-4 md:px-8 lg:px-16 py-12 md:py-16">
                <div className="max-w-7xl flex justify-center mx-auto">
                  <div className="relative">
                    <div className="hidden lg:flex items-start gap-4 xl:gap-8">
                      <div className="w-[70px] xl:w-[110px] pt-4">
                        <Bracket side="right" className="w-full h-auto" />
                      </div>

                      <div className="flex-1 leading-[180px]">
                        <h1 className="text-[80px] flex justify-center font-[Duck-cry] xl:text-[200px] font-black tracking-[8px] text-[#1F1F1F] mb-2 xl:mb-4">
                          TURBOCHARGE
                        </h1>

                        <div className="flex items-start justify-between xl:gap-8">
                          <h2 className="text-[80px] xl:text-[200px] font-[Duck-cry] text-[#1F1F1F] tracking-[8px] font-black">
                            YOUR
                          </h2>

                          <div className="relative flex" ref={stackRef}>
                            <div
                              ref={layer1}
                              className="absolute w-[200px] h-[240px] left-[10px] xl:w-[280px] xl:h-[280px] rounded-[28px] bg-[#B8A3F8] transform rotate-[4deg] shadow-2xl hidden lg:block z-0"
                            />
                            <div
                              ref={layer2}
                              className="absolute w-[200px] h-[240px] -left-[13px] xl:w-[280px] xl:h-[280px] rounded-[24px] bg-[#00e676] transform rotate-[-4deg] shadow-lg hidden lg:block z-0"
                            />
                            <div
                              ref={layer3}
                              className="absolute w-[200px] h-[240px] xl:w-[280px] xl:h-[280px] rounded-[28px] bg-[#00bfa5] transform hidden lg:block"
                            />

                            <div
                              ref={cardRef}
                              className="w-[200px] h-[200px] xl:w-[280px] xl:h-[280px] rounded-3xl overflow-hidden relative p-1 z-10"
                            >
                              <div className="w-full h-full rounded-3xl overflow-hidden relative">
                                <img
                                  src="https://43675023.fs1.hubspotusercontent-na1.net/hubfs/43675023/hero-girl-1.jpeg"
                                  alt="Woman smiling"
                                  className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-4 xl:bottom-8 left-4 xl:left-6 text-white">
                                  <div className="text-3xl xl:text-5xl font-bold mb-1">
                                    +40%
                                  </div>
                                  <div className="text-sm xl:text-lg font-medium">
                                    Lead-to-customer
                                  </div>
                                  <div className="text-sm xl:text-lg font-medium">
                                    conversions
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <h2 className="text-[80px] xl:text-[200px] font-black text-[#1F1F1F] tracking-[8px] font-[Duck-cry]">
                            GROWTH
                          </h2>
                        </div>
                      </div>
                      <div className="w-[70px] xl:w-[110px] pt-4">
                        <Bracket side="left" className="w-full h-auto" />
                      </div>
                    </div>

                    <div className="lg:hidden">
                      <div className="flex items-start gap-2 mb-4">
                        <div className="w-[30px] sm:w-[40px] md:w-[50px]">
                          <Bracket className="w-full h-auto" />
                        </div>
                        <h1 className="text-[40px] sm:text-[50px] md:text-[70px] font-black leading-none tracking-tighter flex-1">
                          TURBO-CHARGE
                        </h1>
                      </div>

                      <div className="flex items-start gap-2 mb-6">
                        <h2 className="text-[40px] sm:text-[50px] md:text-[70px] font-black leading-none tracking-tighter">
                          YOUR
                        </h2>
                        <div className="w-[30px] sm:w-[40px] md:w-[50px]">
                          <Bracket side="right" className="w-full h-auto" />
                        </div>
                      </div>

                      <div className="mb-6 flex justify-center">
                        <div className="relative">
                          {/* Desktop layers - hidden on mobile/tablet */}
                          <div className="absolute -left-4 -top-4 w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[280px] md:h-[280px] rounded-[20px] bg-[#00e676] transform rotate-3 shadow-lg lg:hidden z-0" />
                          <div className="absolute -left-1 -top-1 w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] rounded-[18px] bg-[#00bfa5] transform rotate-1 shadow-md lg:hidden z-0" />
                          <div className="absolute right-[-20px] top-8 w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[300px] md:h-[300px] rounded-[20px] bg-[#e6d3ff] transform rotate-6 shadow-lg lg:hidden z-0" />

                          <div className="w-[220px] h-[250px] sm:w-[260px] sm:h-[290px] md:w-[300px] md:h-[330px] rounded-3xl overflow-hidden relative bg-gradient-to-br from-[#00e676] via-[#00e676] to-purple-400 p-1 z-10">
                            <div className="w-full h-full rounded-3xl overflow-hidden relative">
                              <img
                                src="https://43675023.fs1.hubspotusercontent-na1.net/hubfs/43675023/hero-girl-1.jpeg"
                                alt="Woman smiling"
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute bottom-4 left-4 text-white">
                                <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1">
                                  +40%
                                </div>
                                <div className="text-sm sm:text-base md:text-lg font-medium">
                                  Lead-to-customer
                                </div>
                                <div className="text-sm sm:text-base md:text-lg font-medium">
                                  conversions
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <div className="text-[40px] sm:text-[50px] md:text-[60px] font-bold text-[#00e676] leading-none">
                          [
                        </div>
                        <h2 className="text-[40px] sm:text-[50px] md:text-[70px] font-black leading-none tracking-tighter flex-1">
                          GROWTH
                        </h2>
                        <div className="text-[40px] sm:text-[50px] md:text-[60px] font-bold text-[#00e676] leading-none">
                          ]
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mt-8 md:mt-12 lg:ml-[140px] xl:ml-[200px] gap-8">
                      <div className="flex items-center xl:relative xl:-top-[220px] gap-3">
                        <ArrowDown
                          size={20}
                          className="text-gray-800 md:w-6 md:h-6"
                        />
                        <span className="text-base font-[600] md:text-lg text-gray-800">
                          Scroll for more
                        </span>
                      </div>
                      <div className="max-w-md xl:relative xl:-top-[150px] xl:right-[100px]">
                        <p className="text-lg font-[600] md:text-xl text-gray-800 mb-6 md:mb-8 leading-relaxed">
                          Unlock your CRM's full potential with our
                          HubSpot-powered solutions - build for speed, designed
                          for growth.
                        </p>

                        <div className="flex items-center gap-3">
                          <button className="px-6 md:px-8 py-3 md:py-4 bg-[#00e676] hover:bg-[#00d066] text-black font-medium rounded-full transition-colors text-sm md:text-base">
                            Get started
                          </button>
                          <button className="w-12 h-12 md:w-14 md:h-14 bg-[#00e676] hover:bg-[#00d066] rounded-full flex items-center justify-center transition-colors">
                            <ArrowUpRight
                              size={20}
                              className="text-black md:w-6 md:h-6"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div ref={headlineRef} className="transform-gpu opacity-[0]">
                  <p>
                    <span className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] font-[Duck-cry] leading-none font-[600]">
                      YOUR <br />
                      CRM <br />
                      <div className="flex gap-2 sm:gap-4 items-center leading-none">
                        <p>ON</p> <br />
                        <img
                          src="https://43675023.fs1.hubspotusercontent-na1.net/hubfs/43675023/raw_assets/public/ZipcioTheme/img/rocket.svg"
                          alt="Steroids"
                          className="h-[30px] sm:h-[40px] md:h-[50px] lg:h-[60px]"
                        />
                      </div>
                      STEROIDS
                    </span>
                  </p>
                </div>
              </main>
            </div>
          </div>
        </div>
        {/* Second Screen */}
        <section className="w-full lg:w-screen bg-[#F5F5F5] min-h-[100vh] flex flex-col flex-shrink-0">
          <Section2 />
        </section>
      </div>
    </main>
  );
}

export default HeroSection;
