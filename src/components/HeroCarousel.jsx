import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// Each slide is a full-bleed, full-width hero panel: centered heading,
// supporting line and a call-to-action, over a locally-hosted illustration.
const slides = [
  {
    id: 1,
    title: "Customized & High-Quality Projects",
    text: "Working projects, readymade projects, dissertations and thesis support for students of B.Tech, BCA, MCA, MBA, BBA and more…",
    cta: "Contact Us",
    ctaTo: "/contact",
    image: "/art/slide-collaboration.svg",
    imageAlt: "Illustration of a presenter explaining a project dashboard",
  },
  {
    id: 2,
    title: "Professional Project Makers",
    text: "From idea shortlisting to final report, we support every stage of your academic project journey.",
    cta: "Contact Us",
    ctaTo: "/contact",
    image: "/art/slide-analytics.svg",
    imageAlt: "Illustration of analytics dashboards on laptop and phone",
  },
  {
    id: 3,
    title: "Guidance You Can Defend in Viva",
    text: "Documentation, diagrams and plain-language explanations so you own every line of your project.",
    cta: "Explore Projects",
    ctaTo: "/projects",
    image: "/art/slide-documentation.svg",
    imageAlt: "Illustration of project documents and checklists",
  },
];

const AUTOPLAY_MS = 6000;

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);
  const slidesRef = useRef([]);

  const goTo = useCallback((index) => {
    setActiveIndex(((index % slides.length) + slides.length) % slides.length);
  }, []);

  const goToPrevious = useCallback(
    () => goTo(activeIndex - 1),
    [goTo, activeIndex]
  );
  const goToNext = useCallback(
    () => goTo(activeIndex + 1),
    [goTo, activeIndex]
  );

  // Autoplay: advance every 6s unless the user is hovering/focusing a slide,
  // the tab is hidden, or prefers-reduced-motion is set.
  useEffect(() => {
    if (isPaused) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      if (document.hidden) return;
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const onTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const onTouchEnd = (event) => {
    if (touchStartX.current === null) return;
    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(deltaX) > 48) {
      if (deltaX < 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }
    touchStartX.current = null;
  };

  const slideRef = (element, index) => {
    slidesRef.current[index] = element;
  };

  return (
    <section
      className="hero-carousel"
      aria-roledescription="carousel"
      aria-label="ProjectHub highlights"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <div className="hero-carousel-track">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            ref={(element) => slideRef(element, index)}
            className={`hero-slide${index === activeIndex ? " is-active" : ""}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${index + 1} of ${slides.length}`}
            aria-hidden={index !== activeIndex}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div className="hero-slide-art" aria-hidden="true">
              <img
                src={slide.image}
                alt=""
                width="1440"
                height="760"
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
              />
            </div>
            <div className="hero-slide-overlay" aria-hidden="true" />
            <div className="hero-slide-content container">
              <h2>{slide.title}</h2>
              <p>{slide.text}</p>
              {index === activeIndex ? (
                <Link
                  to={slide.ctaTo}
                  className="btn btn-inverse"
                  tabIndex={0}
                >
                  {slide.cta}
                </Link>
              ) : (
                <span className="btn btn-inverse" tabIndex={-1} aria-hidden="true">
                  {slide.cta}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="hero-carousel-arrow hero-carousel-arrow-left"
        onClick={goToPrevious}
        aria-label="Previous slide"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path
            d="M15 5l-7 7 7 7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        type="button"
        className="hero-carousel-arrow hero-carousel-arrow-right"
        onClick={goToNext}
        aria-label="Next slide"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path
            d="M9 5l7 7-7 7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className="hero-carousel-dots" role="tablist" aria-label="Choose slide">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            role="tab"
            className={`hero-carousel-dot${index === activeIndex ? " is-active" : ""}`}
            aria-label={`Go to slide ${index + 1}`}
            aria-selected={index === activeIndex}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </section>
  );
}
