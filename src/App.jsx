import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "92%", label: "of visitors notice a clear first impression" },
  { value: "3.4×", label: "more memorable when design feels effortless" },
  { value: "48ms", label: "is all it takes to start making an impression" }
];

function CarIllustration() {
  return (
    <div className="car-wrap" aria-label="Illustration of a modern sports car" role="img">
      <div className="car-shadow" />
      <div className="car">
        <div className="car-spoiler" />
        <div className="car-roof" />
        <div className="car-window car-window-front" />
        <div className="car-window car-window-back" />
        <div className="car-body">
          <div className="car-door-line" />
          <div className="car-door-handle" />
          <div className="car-light car-light-front" />
          <div className="car-light car-light-back" />
          <div className="car-intake" />
        </div>
        <div className="wheel wheel-back"><span /></div>
        <div className="wheel wheel-front"><span /></div>
      </div>
    </div>
  );
}

export default function App() {
  const pageRef = useRef(null);
  const headlineRef = useRef(null);
  const statRefs = useRef([]);
  const carRef = useRef(null);
  const roadRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const letters = headlineRef.current?.querySelectorAll(".headline-letter");

      gsap.fromTo(
        letters,
        { y: 32, opacity: 0, rotateX: -35 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.035,
          ease: "power3.out",
          delay: 0.15
        }
      );

      gsap.fromTo(
        ".intro-copy",
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.5, ease: "power2.out" }
      );

      gsap.fromTo(
        statRefs.current,
        { y: 22, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.16,
          delay: 0.65,
          ease: "power2.out"
        }
      );

      gsap.to(carRef.current, {
        x: () => Math.min(window.innerWidth * 0.34, 430),
        y: -18,
        rotate: -2,
        ease: "none",
        scrollTrigger: {
          trigger: ".drive-section",
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1.1,
          invalidateOnRefresh: true
        }
      });

      gsap.fromTo(
        roadRef.current,
        { scaleX: 0.65, opacity: 0.35 },
        {
          scaleX: 1,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".drive-section",
            start: "top bottom",
            end: "bottom bottom",
            scrub: 1
          }
        }
      );

      gsap.fromTo(
        ".drive-note",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".drive-section",
            start: "top 70%",
            end: "top 40%",
            scrub: 0.7
          }
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const headline = "WELCOME ITZFIZZ";

  return (
    <main ref={pageRef}>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="ItzFizz home">
          <span className="brand-mark">i.</span>
          <span>itzfizz<span className="brand-dot">®</span></span>
        </a>
        <a className="header-link" href="#experience">
          THE EXPERIENCE <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-topline">
          <span className="eyebrow"><span className="status-dot" /> DIGITAL, WITH DIRECTION</span>
          <span className="hero-index">01 / 03</span>
        </div>

        <div className="hero-main">
          <p className="kicker">GOOD IDEAS SHOULD MOVE YOU.</p>
          <h1 className="headline" ref={headlineRef} aria-label={headline}>
            {headline.split("").map((letter, index) => (
              <span
                className={`headline-letter ${letter === " " ? "letter-space" : ""}`}
                key={`${letter}-${index}`}
                aria-hidden="true"
              >
                {letter === " " ? "\u00a0" : letter}
              </span>
            ))}
          </h1>
          <div className="intro-copy">
            <p className="hero-description">
              We turn thoughtful ideas into digital experiences that feel as good
              as they work. Clear thinking. Confident design. Real momentum.
            </p>
            <a className="round-link" href="#experience" aria-label="Explore the experience">
              <span>↓</span>
            </a>
          </div>
        </div>

        <div className="stats-grid" aria-label="Impact statistics">
          {stats.map((stat, index) => (
            <article className="stat-card" ref={(node) => (statRefs.current[index] = node)} key={stat.value}>
              <div className="stat-top"><span>0{index + 1}</span><span>IMPACT</span></div>
              <p className="stat-value">{stat.value}</p>
              <p className="stat-label">{stat.label}</p>
            </article>
          ))}
        </div>

        <div className="hero-footer">
          <span>INDEPENDENT THINKING. INTENTIONAL MAKING.</span>
          <span>SCROLL TO MOVE <span className="footer-arrow">↓</span></span>
        </div>
      </section>

      <section className="drive-section" id="experience">
        <div className="drive-heading">
          <p className="eyebrow">02 — MADE TO MOVE</p>
          <h2>Good work has<br /><span>its own momentum.</span></h2>
          <p className="drive-note">
            Keep scrolling. The journey is yours to control.
          </p>
        </div>

        <div className="road-scene">
          <div className="road-label road-label-left">IDEA</div>
          <div className="road-label road-label-right">IMPACT</div>
          <div className="road-line" ref={roadRef}>
            <span /><span /><span /><span /><span /><span /><span />
          </div>
          <div className="car-motion" ref={carRef}>
            <CarIllustration />
          </div>
          <div className="road-caption">A LITTLE PROGRESS, EVERY SCROLL.</div>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <span className="brand-mark footer-mark">i.</span>
          <p>Make it meaningful.<br />Make it move.</p>
        </div>
        <div className="footer-right">
          <span>ITZFIZZ DIGITAL</span>
          <span>DESIGNED WITH INTENTION · 2026</span>
        </div>
      </footer>
    </main>
  );
}
