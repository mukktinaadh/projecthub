import { Link } from "react-router-dom";
import { projects, categories } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import CategoryCard from "../components/CategoryCard";

const featuredProjects = [1, 2, 8].map((id) =>
  projects.find((project) => project.id === id)
);

const valueProps = [
  {
    icon: "🧭",
    title: "Structured Project Guidance",
    text: "Each project ships with a clear scope, feature list and build order, so you always know what to do next.",
  },
  {
    icon: "🧩",
    title: "Multiple Technology Domains",
    text: "Web, mobile, machine learning, IoT and data analytics — pick the stack that matches your syllabus and goals.",
  },
  {
    icon: "📄",
    title: "Documentation Support",
    text: "Abstracts, SRS outlines and report-ready diagrams accompany every project, sized to your college's format.",
  },
  {
    icon: "🎓",
    title: "Student-Focused Assistance",
    text: "Ask questions while you build. We explain concepts in plain language so you can defend your own work in viva.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <span className="eyebrow">Academic project services</span>
            <h1>
              Build Your College Project{" "}
              <span className="hero-highlight">With Confidence</span>
            </h1>
            <p className="hero-sub">
              ProjectHub gives you vetted project ideas across B.Tech, BCA, MCA,
              MBA and BBA — with implementation guidance, documentation and
              presentation support at every step.
            </p>
            <div className="hero-actions">
              <Link to="/projects" className="btn btn-primary">
                Explore Projects
              </Link>
              <Link to="/contact" className="btn btn-ghost">
                Contact Us
              </Link>
            </div>
            <ul className="hero-stats" aria-label="Highlights">
              <li>
                <strong>5</strong> course categories
              </li>
              <li>
                <strong>8+</strong> technology stacks
              </li>
              <li>
                <strong>4</strong> support areas
              </li>
            </ul>
          </div>

          <div className="hero-art">
            <img
              src="/art/hero.svg"
              alt="Illustration of a project dashboard with charts and code"
              width="800"
              height="600"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Shop by course</h2>
            <p>
              Pick your course to see projects that match your syllabus and
              evaluation format.
            </p>
          </div>
          <div className="category-grid">
            {categories.map((category) => (
              <CategoryCard key={category.name} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="section section-tinted">
        <div className="container">
          <div className="section-head">
            <h2>Featured projects</h2>
            <p>A few favorites from the full catalog.</p>
          </div>
          <div className="project-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="section-foot">
            <Link to="/projects" className="btn btn-secondary">
              View All Projects
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why ProjectHub */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Why ProjectHub</h2>
            <p>What you can expect from every project engagement.</p>
          </div>
          <div className="value-grid">
            {valueProps.map((item) => (
              <div key={item.title} className="value-card">
                <span className="value-icon" aria-hidden="true">
                  {item.icon}
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-tight">
        <div className="container">
          <div className="cta-panel">
            <div>
              <h2>Ready to start your project?</h2>
              <p>
                Browse the catalog to find your build, or tell us your
                requirement and we&apos;ll suggest options.
              </p>
            </div>
            <div className="cta-panel-actions">
              <Link to="/projects" className="btn btn-inverse">
                Browse Projects
              </Link>
              <Link to="/contact" className="btn btn-outline-inverse">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
