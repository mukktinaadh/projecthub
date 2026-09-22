import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <div className="empty-state not-found">
          <p className="not-found-code" aria-hidden="true">
            404
          </p>
          <h1>Page Not Found</h1>
          <p>
            We couldn&apos;t find the page you were looking for. It may have
            been moved, or the address might be mistyped.
          </p>
          <div className="not-found-actions">
            <Link to="/" className="btn btn-primary">
              Back to Home
            </Link>
            <Link to="/projects" className="btn btn-secondary">
              Browse Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
