"use client"
import logo from "../../assets/logo.png";
import { useCallback, useRef, useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const headerRef = useRef<HTMLElement | null>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const scrollAnimationRef = useRef<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  // cancel any running custom scroll animation
  const cancelScrollAnimation = () => {
    if (scrollAnimationRef.current) {
      window.cancelAnimationFrame(scrollAnimationRef.current);
      scrollAnimationRef.current = null;
    }
  };

  // smooth scroll helper using requestAnimationFrame for consistent easing
  const smoothScrollTo = (targetY: number, duration = 700) => {
    cancelScrollAnimation();
    const startY = window.pageYOffset;
    const diff = targetY - startY;
    const startTime = performance.now();

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (now: number) => {
      const elapsed = Math.min(1, (now - startTime) / duration);
      const eased = easeInOutCubic(elapsed);
      const y = Math.round(startY + diff * eased);
      window.scrollTo(0, y);
      if (elapsed < 1) {
        scrollAnimationRef.current = window.requestAnimationFrame(step);
      } else {
        scrollAnimationRef.current = null;
      }
    };

    scrollAnimationRef.current = window.requestAnimationFrame(step);
  };

  useEffect(() => {
    const measure = () => {
      const h = headerRef.current ? headerRef.current.getBoundingClientRect().height : 0;
      setHeaderHeight(h);
      // if the viewport is wide enough, ensure mobile menu is closed
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => {
      window.removeEventListener('resize', measure);
      // ensure any running animation is cancelled on unmount
      cancelScrollAnimation();
    };
  }, []);

  const handleNav = useCallback((e: React.MouseEvent, id: string) => {
    e.preventDefault();

    if (id === 'home') {
      // use custom smooth animator for ultra-smooth scroll
      smoothScrollTo(0, 800);
      history.replaceState(null, '', '#home');
      return;
    }

    let target = document.getElementById(id);
    if (!target) {
      const fallbackId = id === 'analytics' ? 'analytics-anchor' : id === 'services' ? 'services-anchor' : id;
      target = document.getElementById(fallbackId);
    }
    if (!target) {
      history.replaceState(null, '', `#${id}`);
      return;
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        try {
          const ST = (window as any).gsap?.core?.ScrollTrigger || (window as any).ScrollTrigger;
          if (ST && typeof ST.refresh === "function") {
            ST.refresh();
          }
        } catch (e) {
          // ignore — refresh is best-effort
        }

        const y = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 8;

        try {
          const ST = (window as any).gsap?.core?.ScrollTrigger || (window as any).ScrollTrigger;
          if (ST && typeof ST.refresh === 'function') ST.refresh();
        } catch (e) {
        }

        smoothScrollTo(Math.max(0, y), 900);
        history.replaceState(null, '', `#${id}`);
      });
    });
  }, [headerHeight]);

  return (
    <>
      {/* Fixed header so nav sits above pinned content */}
      <header ref={headerRef} className="fixed lg:static top-0 h-[100px] left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[#f5f5f5] border-b border-gray-100">
      <div className="flex items-center gap-2">
        <div>
          <img src={logo} alt="logo" className="h-10 md:h-28 w-auto" />
        </div>
      </div>

      {/* mobile toggle */}
      <button
        className="md:hidden p-2 ml-2"
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        onClick={() => setMobileOpen((s) => !s)}
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <nav className="hidden pr-6 md:flex items-center gap-8">
        <a href="#home" onClick={(e) => handleNav(e, 'home')} className="text-gray-700 hover:text-gray-900 font-medium">
          Home
        </a>
        <a href="#analytics" onClick={(e) => handleNav(e, 'analytics')} className="text-gray-700 hover:text-gray-900 font-medium">
          Analytics
        </a>
        <a href="#services" onClick={(e) => handleNav(e, 'services')} className="text-gray-700 hover:text-gray-900 font-medium">
          Experience
        </a>
        <a href="#contact" onClick={(e) => handleNav(e, 'contact')} className="text-gray-700 hover:text-gray-900 font-medium">
          Contact Us
        </a>
      </nav>

      </header>

      {/* spacer keeps document flow undisturbed since header is fixed */}
      <div aria-hidden className="lg:hidden" style={{ height: headerHeight }} />

      {/* Mobile menu (slide-down) */}
      {mobileOpen && (
        <div className="md:hidden fixed left-0 right-0 z-40 bg-white border-b shadow-md" style={{ top: headerHeight }}>
          <nav className="flex flex-col p-4 gap-2">
            <button onClick={(e) => { setMobileOpen(false); handleNav(e as any, 'home'); }} className="text-left px-4 py-3 rounded-lg hover:bg-gray-100">Home</button>
            <button onClick={(e) => { setMobileOpen(false); handleNav(e as any, 'analytics'); }} className="text-left px-4 py-3 rounded-lg hover:bg-gray-100">Analytics</button>
            <button onClick={(e) => { setMobileOpen(false); handleNav(e as any, 'services'); }} className="text-left px-4 py-3 rounded-lg hover:bg-gray-100">Experience</button>
            <button onClick={(e) => { setMobileOpen(false); handleNav(e as any, 'contact'); }} className="text-left px-4 py-3 rounded-lg hover:bg-gray-100">Contact Us</button>
          </nav>
        </div>
      )}
    </>
  );
}
