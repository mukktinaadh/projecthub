import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function ProjectDetails() {
  const { id } = useParams();
  const projectId = Number(id);
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return (
      <section className="section">
        <div className="container">
          <div className="empty-state">
            <span className="empty-icon" aria-hidden="true">
              🧭
            </span>
            <h1>Project Not Found</h1>
            <p>
              We couldn&apos;t find a project with ID{" "}
              <strong>{id}</strong>. It may have been removed or the link is
              incorrect.
            </p>
            <Link to="/projects" className="btn btn-primary">
              Back to Projects
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const relatedProjects = projects
    .filter(
      (item) => item.category === project.category && item.id !== project.id
    )
    .slice(0, 3);

  return (
    <>
      <section className="page-head page-head-detail">
        <div className="container">
          <Link to="/projects" className="back-link">
            <span aria-hidden="true">←</span> Back to Projects
          </Link>
          <div className="detail-head">
            <div className="card-meta">
              <span className="badge badge-category">{project.category}</span>
              <span className="badge badge-level">{project.level}</span>
            </div>
            <h1>{project.title}</h1>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container detail-layout">
          <article className="detail-main">
            <img
              className="detail-image"
              src={project.image}
              alt={project.imageAlt}
              width="800"
              height="500"
            />

            <h2>About this project</h2>
            <p className="detail-description">{project.description}</p>

            <h2>What you&apos;ll build</h2>
            <ul className="feature-list">
              {project.features.map((feature) => (
                <li key={feature}>
                  <span className="feature-check" aria-hidden="true">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </article>

          <aside className="detail-sidebar">
            <div className="card detail-info-card">
              <h2>Project Snapshot</h2>
              <dl className="snapshot-list">
                <div>
                  <dt>Category</dt>
                  <dd>{project.category}</dd>
                </div>
                <div>
                  <dt>Level</dt>
                  <dd>{project.level}</dd>
                </div>
                <div>
                  <dt>Project type</dt>
                  <dd>Individual or small team</dd>
                </div>
                <div>
                  <dt>Technology</dt>
                  <dd>
                    <ul className="tech-list">
                      {project.technology.map((tech) => (
                        <li key={tech} className="tech-item">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
              <Link
                to={`/contact?project=${encodeURIComponent(project.title)}`}
                className="btn btn-primary btn-block"
              >
                Enquire About This Project
              </Link>
              <Link to="/projects" className="btn btn-ghost btn-block">
                Browse More Projects
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="section section-tinted">
          <div className="container">
            <div className="section-head">
              <h2>Related {project.category} projects</h2>
            </div>
            <div className="project-grid">
              {relatedProjects.map((item) => (
                <ProjectCard key={item.id} project={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
