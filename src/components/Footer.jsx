import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand">
            <img src="/art/projecthub-logo.svg" alt="" width="30" height="30" />
            <span>
              Project<span className="brand-accent">Hub</span>
            </span>
          </div>
          <p className="footer-tagline">
            Academic project ideas, guidance and documentation support for
            college students.
          </p>
        </div>

        <nav aria-label="Footer">
          <h3 className="footer-heading">Explore</h3>
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div>
          <h3 className="footer-heading">Contact</h3>
          <ul className="footer-links">
            <li>
              <a href="mailto:hello@projecthub.example">hello@projecthub.example</a>
            </li>
            <li>
              <a href="tel:+911800000000">+91 1800 000 000</a>
            </li>
            <li>Pune, Maharashtra, India</li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} ProjectHub. All rights reserved.</p>
        <p className="footer-disclaimer">
          Demo project for learning purposes. All projects and contact details
          are fictional.
        </p>
      </div>
    </footer>
  );
}
