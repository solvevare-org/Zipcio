import { ArrowUpRight, ChevronDown, ArrowDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import property_1 from "../assets/property_2.jpg";
import ClientTestimonial from "./ClientTestimonial";

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

      if (!isDesktop) {
        try {
          gsap.set([layer1.current, layer2.current, layer3.current], {
            clearProps: "all",
            opacity: 1,
            display: "block",
            x: 0,
            rotation: 0,
          });
          gsap.set(cardRef.current, { clearProps: "all", x: 0, y: 0 });
          gsap.set(stackRef.current, {
            clearProps: "all",
            x: 0,
            y: 0,
            scale: 1,
          });
          gsap.set(innerRef.current, { clearProps: "all", x: 0 });
          gsap.set(heroContentRef.current, {
            clearProps: "all",
            y: 0,
            opacity: 1,
          });
        } catch (e) {}

        return;
      }

      if (isDesktop) {
        gsap.set(layer1.current, { x: 0, rotation: 4 });
        gsap.set(layer2.current, { x: 0, rotation: -2 });
        gsap.set(layer3.current, { x: 0, rotation: 2 });
        gsap.set(cardRef.current, { x: 0, y: 0 });
        gsap.set(stackRef.current, { x: 0, scale: 1, y: 0 });

        const cardSpacing = 290;
        const horizontalDistance = window.innerWidth;

        const totalScrollHeight = window.innerHeight * 8;

        const master = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: () => "+=" + totalScrollHeight,
            scrub: 1,
            pin: true,
          },
        });

        if (headlineRef.current) {
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

        master.set(stackRef.current, { y: 0 }, 0);

        master.to(
          heroContentRef.current,
          {
            y: -600,
            transitionTimingFunction: "power1.out",
            ease: "power1.out",
          },
          0
        );

        const cardDelay = 0.5;
        master.to(
          stackRef.current,
          { y: 450, scale: 0.9, ease: "power1.out" },
          0
        );

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

        master.to(cardRef.current, { ease: "power1.out" }, cardDelay);

        master.to(
          innerRef.current,
          {
            x: -horizontalDistance,
            ease: "power1.inOut",
          },
          cardDelay + 0.9
        );
      }

      if (isTablet) {
        gsap.set([layer1.current, layer2.current, layer3.current], {
          opacity: 0,
        });

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
      }
      if (isMobile) {
        gsap.set([layer1.current, layer2.current, layer3.current], {
          opacity: 0,
          display: "none",
        });

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
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={containerRef}
      className="min-h-[100vh] overflow-x-hidden lg:overflow-hidden"
    >
      <div ref={innerRef} className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-screen lg:h-screen flex-shrink-0">
          <div className="min-h-screen bg-[#f5f5f5]">
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
                  <button className="mt-4 px-6 py-3  bg-[#BCBF4F] hover:bg-[#00d066] text-black font-medium rounded-full transition-colors">
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
                      <div className="flex-1 leading-[180px]">
                        <h1 className="text-[80px] flex justify-center font-[Duck-cry] xl:text-[200px] font-black tracking-[8px] text-[#1F1F1F] mb-2 xl:mb-4">
                          The DNA of Every
                        </h1>

                        <div className="flex items-start justify-between xl:gap-8">
                          <h2 className="text-[80px] xl:text-[200px] font-[Duck-cry] text-[#1F1F1F] tracking-[8px] font-black">
                            Deal
                          </h2>

                          <div className="relative flex" ref={stackRef}>
                            <div
                              ref={layer1}
                              className="absolute w-[200px] h-[240px] left-[10px] xl:w-[280px] xl:h-[280px] rounded-[28px] bg-[#B8A3F8] transform rotate-[4deg] shadow-2xl hidden lg:block z-0"
                            >
                              <h2 className="absolute  inset-0 flex justify-center text-center font-[Duck-cry] tracking-[1px] leading-[1.5] xl:text-[2.5rem]">
                                AI in our DNA
                              </h2>
                              <p className="absolute font-light bottom-4 left-4 font-[poppins] right-4 text-sm xl:text-base ">
                                NuHelixX RE is AI-first — built with
                                intelligence at its core. Automation drives
                                every step: real-time lead scoring, smart
                                follow-ups, and behavior-based property
                                matching. Smarter insights. Stronger
                                connections.
                              </p>
                            </div>
                            <div
                              ref={layer2}
                              className="absolute w-[200px] h-[240px] -left-[13px] xl:w-[280px] xl:h-[280px] rounded-[24px]  bg-[#BCBF4F] transform rotate-[-4deg] shadow-lg hidden lg:block z-0"
                            >
                              <h2 className="absolute  inset-0 flex justify-center text-center font-[Duck-cry] tracking-[1px] leading-[1.5] xl:text-[2.5rem]">
                                Smart Automation
                              </h2>
                              <p className="absolute font-light bottom-11 left-4 font-[poppins] right-4 text-sm xl:text-base  ">
                                NuHelixX RE automates the busywork — from
                                tagging leads to scheduling follow-ups. Its AI
                                learns your habits, prioritizes tasks, and keeps
                                your pipeline on track. Less admin. More sales.
                              </p>
                            </div>
                            <div
                              ref={layer3}
                              className="absolute w-[200px] h-[240px] xl:w-[280px] xl:h-[280px] rounded-[28px] bg-[#00bfa5] transform hidden lg:block"
                            >
                              <h2 className="absolute inset-0 flex justify-center text-center font-[Duck-cry] tracking-[1px] leading-[1.5] xl:text-[2.5rem]">
                                Seamless Transactions
                              </h2>
                              <p className="absolute bottom-5 left-4 font-[poppins] font-light right-4 text-sm xl:text-base ">
                                Manage offers, inspections, and closings in one
                                dashboard. Stay on top of deadlines, documents,
                                and deals — effortlessly. NuHelixX RE gives you
                                clarity, confidence, and a smoother client
                                experience.
                              </p>
                            </div>

                            <div
                              ref={cardRef}
                              className="w-[200px] h-[200px] xl:w-[280px] xl:h-[280px] rounded-3xl overflow-hidden relative p-1 z-10"
                            >
                              <div className="w-full h-full rounded-3xl overflow-hidden relative">
                                <img
                                  src={property_1}
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
                            in Action
                          </h2>
                        </div>
                      </div>
                    </div>

                    <div className="lg:hidden">
                      <div className="flex text-center items-start gap-2 mb-4">
                        <h1 className="text-[40px] sm:text-[50px] md:text-[70px] font-black leading-none tracking-tighter flex-1">
                          The DNA of Every <br />
                          Deal in Action
                        </h1>
                      </div>

                      <div className="flex items-start gap-2 mb-6">
                        <h2 className="text-[40px] sm:text-[50px] md:text-[70px] font-black leading-none tracking-tighter"></h2>
                      </div>
                      <div className="flex items-start gap-2">
                        <h2 className="text-[40px] sm:text-[50px] md:text-[70px] font-black leading-none tracking-tighter flex-1"></h2>
                      </div>

                      <div className="mb-6 flex justify-center">
                        <div className="relative">
                          {/* Desktop layers - hidden on mobile/tablet */}
                          <div className="absolute w-[200px] h-[240px] left-[10px] xl:w-[280px] xl:h-[280px] rounded-[28px] bg-[#B8A3F8] transform rotate-[4deg] shadow-2xl hidden lg:block z-0" />
                          <div className="absolute w-[200px]  h-[240px] left-[10px] xl:w-[280px] xl:h-[280px] rounded-[28px] bg-[#B8A3F8] transform rotate-[4deg] shadow-2xl hidden lg:block z-0" />
                          <div className="absolute w-[200px] h-[240px] left-[10px] xl:w-[280px] xl:h-[280px] rounded-[28px] bg-[#B8A3F8] transform rotate-[4deg] shadow-2xl hidden lg:block z-0" />

                          <div className="w-[220px] h-[250px] sm:w-[260px] sm:h-[290px] md:w-[300px] md:h-[330px] rounded-3xl overflow-hidden relative bg-gradient-to-br from-[#00e676] via-[#00e676] to-purple-400 p-1 z-10">
                            <div className="w-full h-full rounded-3xl overflow-hidden relative">
                              <img
                                src={property_1}
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
                    </div>

                    <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mt-8 md:mt-12  gap-8">
                      <div className="flex items-center xl:relative xl:-top-[220px] gap-3">
                        <ArrowDown
                          size={20}
                          className="text-gray-800 md:w-6 md:h-6"
                        />
                        <span className="text-base font-[600] md:text-lg text-gray-800">
                          Scroll for more
                        </span>
                      </div>
                      <div className="max-w-md xl:relative xl:-top-[120px]">
                        <p className="text-lg font-[600] md:text-xl text-gray-800 mb-6 md:mb-8 leading-relaxed">
                          NuHelixX RE unifies the entire real estate journey on
                          one platform—giving brokerages full visibility,
                          reducing agent admin work, and delivering clients a
                          seamless, transparent experience from first meeting to
                          final signature.
                        </p>

                        <div className="flex items-center gap-3">
                          <button onClick={() => (window.location.href = "http://nuhelixxre.com/login")} className="px-6 md:px-8 py-3 md:py-4  bg-[#BCBF4F] hover:bg-[#bbbf4fc8] text-black font-medium rounded-full transition-colors text-sm md:text-base">
                            Get started
                          </button>
                          <button className="w-12 h-12 md:w-14 md:h-14  bg-[#BCBF4F] hover:bg-[#bbbf4fc8] rounded-full flex items-center justify-center transition-colors">
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
                    <span id="analytics" className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] font-[Duck-cry] leading-none font-[600]">
                      YOUR <br />
                      CRM <br />
                      <div className="flex gap-2 sm:gap-4 items-center leading-none">
                        <p >ON</p> <br />
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
          <ClientTestimonial />
        </section>
      </div>
    </main>
  );
}

export default HeroSection;
