import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
          <img src="/art/projecthub-logo.svg" alt="" width="34" height="34" />
          <span>
            Project<span className="brand-accent">Hub</span>
          </span>
        </Link>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`} aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-link-active" : ""}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/projects" className="btn btn-primary btn-sm nav-cta">
            Browse Projects
          </Link>
        </nav>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`menu-icon ${menuOpen ? "open" : ""}`} aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
