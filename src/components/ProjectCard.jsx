import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card card">
      <Link to={`/projects/${project.id}`} className="card-image-link">
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          className="card-image"
        />
      </Link>

      <div className="card-body">
        <div className="card-meta">
          <span className="badge badge-category">{project.category}</span>
          <span className="badge badge-level">{project.level}</span>
        </div>

        <h3 className="card-title">
          <Link to={`/projects/${project.id}`}>{project.title}</Link>
        </h3>

        <p className="card-text">{project.shortDescription}</p>

        <ul className="tech-list" aria-label="Technologies">
          {project.technology.map((tech) => (
            <li key={tech} className="tech-item">
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="card-footer">
        <Link to={`/projects/${project.id}`} className="btn btn-secondary btn-sm">
          View Details
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
