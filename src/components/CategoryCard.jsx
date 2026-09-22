import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
  return (
    <Link
      to={`/projects?category=${encodeURIComponent(category.name)}`}
      className="category-card"
    >
      <span className="category-name">{category.name}</span>
      <p className="category-blurb">{category.blurb}</p>
      <span className="category-cta">
        Explore <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}
