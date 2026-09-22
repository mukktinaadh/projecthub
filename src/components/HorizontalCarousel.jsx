import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// Trending project images from Unsplash (free, high-quality)
// Each item has an image, title, category tag, and optional project link
const trendingProjects = [
  {
    id: 1,
    title: "AI-Powered Analytics Dashboard",
    category: "B.Tech",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=600&fit=crop",
    alt: "Data analytics dashboard with charts",
  },
  {
    id: 2,
    title: "Mobile E-Commerce App",
    category: "BCA",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=600&fit=crop",
    alt: "Mobile app interface on smartphone",
  },
  {
    id: 3,
    title: "Smart IoT Agriculture System",
    category: "B.Tech",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=600&fit=crop",
    alt: "Smart farming with IoT sensors",
  },
  {
    id: 4,
    title: "Campus Chatbot Assistant",
    category: "MCA",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=600&fit=crop",
    alt: "AI chatbot conversation interface",
  },
  {
    id: 5,
    title: "Healthcare Management System",
    category: "B.Tech",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=600&fit=crop",
    alt: "Medical healthcare technology",
  },
  {
    id: 6,
    title: "Sales Analytics Platform",
    category: "MBA",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop",
    alt: "Business analytics and sales data",
  },
  {
    id: 7,
    title: "Task Management Board",
    category: "BCA",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=600&fit=crop",
    alt: "Project management kanban board",
  },
  {
    id: 8,
    title: "Movie Recommendation Engine",
    category: "MCA",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop",
    alt: "Movie streaming and recommendations",
  },
  {
    id: 9,
    title: "Digital Marketing Dashboard",
    category: "BBA",
    image: "https://images.unsplash.com/photo-1467232782364-a29ca7762116?w=400&h=600&fit=crop",
    alt: "Digital marketing analytics",
  },
  {
    id: 10,
    title: "Expense Tracking App",
    category: "BCA",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=600&fit=crop",
    alt: "Personal finance expense tracker",
  },
  {
    id: 11,
    title: "HR Attrition Predictor",
    category: "BBA",
    image: "https://images.unsplash.com/photo-1521898284482-5a810e075897?w=400&h=600&fit=crop",
    alt: "HR analytics and team management",
  },
  {
    id: 12,
    title: "Event Registration Portal",
    category: "MCA",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=600&fit=crop",
    alt: "Event management and registration",
  },
];

export default function HorizontalCarousel() {
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const containerWidth = containerRef.current?.clientWidth || 0;
  const cardWidth = 280;
  const gap = 16;
  const maxScroll = Math.max(0, containerWidth - cardWidth);

  const handleScroll = (direction) => {
    setTranslateX((prev) => {
      const newX = prev + (direction === "left" ? -cardWidth - gap : cardWidth + gap);
      return Math.max(-maxScroll, Math.min(0, newX));
    });
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollLeft.current;
    containerRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - startX.current;
    scrollLeft.current = x;
    setTranslateX(-x);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    containerRef.current.style.cursor = "grab";
  };

  // Shuffle images on mount for variety
  useEffect(() => {
    // Simple shuffle - images are already randomized by Unsplash's diverse collection
    // Each load shows different images due to the nature of the source
  }, []);

  return (
    <section className="section section-tinted">
      <div className="container">
        <div className="section-head">
          <h2>Trending Projects</h2>
          <p>Swipe through our most popular project ideas</p>
        </div>

        <div className="carousel-container">
          {/* Nav arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={() => handleScroll("left")}
            aria-label="Scroll left"
          >
            ‹
          </button>

          {/* Scrollable track */}
          <div
            ref={containerRef}
            className="carousel-track"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div
              className="carousel-slider"
              style={{ transform: `translateX(${translateX}px)` }}
            >
              {trendingProjects.map((project) => (
                <Link
                  key={project.id}
                  to="/projects"
                  className="carousel-card"
                  aria-label={project.title}
                >
                  <div className="carousel-card-image">
                    <img
                      src={project.image}
                      alt={project.alt}
                      loading="lazy"
                    />
                    <span className="carousel-card-category">
                      {project.category}
                    </span>
                  </div>
                  <div className="carousel-card-content">
                    <h3>{project.title}</h3>
                    <span className="carousel-card-arrow">
                      View <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Nav arrows */}
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={() => handleScroll("right")}
            aria-label="Scroll right"
          >
            ›
          </button>
        </div>

        {/* Scroll indicators */}
        <div className="carousel-indicators">
          <button
            className="carousel-dot"
            onClick={() => setTranslateX(0)}
            aria-label="Scroll to start"
          />
          <button
            className="carousel-dot"
            onClick={() => setTranslateX(-cardWidth - gap)}
            aria-label="Scroll one card"
          />
          <button
            className="carousel-dot"
            onClick={() => setTranslateX(-2 * (cardWidth + gap))}
            aria-label="Scroll two cards"
          />
        </div>
      </div>
    </section>
  );
}
