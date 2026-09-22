import { useSearchParams } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import SearchBar from "../components/SearchBar";

const categoryFilters = ["All", "B.Tech", "BCA", "MCA", "MBA", "BBA", "Other"];

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "title", label: "Title (A–Z)" },
  { value: "course", label: "Course (A–Z)" },
];

// "featured" keeps the order the projects appear in the data file.
const sorters = {
  featured: () => 0,
  title: (a, b) => a.title.localeCompare(b.title),
  course: (a, b) =>
    a.category.localeCompare(b.category) || a.title.localeCompare(b.title),
};

export default function Projects() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("q") ?? "";
  const category = searchParams.get("category") ?? "All";

  // Ignore an unrecognised ?sort= value rather than trusting it.
  const requestedSort = searchParams.get("sort") ?? "featured";
  const sort = sortOptions.some((option) => option.value === requestedSort)
    ? requestedSort
    : "featured";

  const query = search.trim().toLowerCase();
  const visibleProjects = projects
    .filter((project) => {
      const matchesCategory =
        category === "All" || project.category === category;
      const matchesSearch =
        query === "" ||
        project.title.toLowerCase().includes(query) ||
        project.category.toLowerCase().includes(query) ||
        project.technology.join(" ").toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    })
    .sort(sorters[sort]);

  const setSearch = (value) => {
    const next = new URLSearchParams(searchParams);
    if (value) {
      next.set("q", value);
    } else {
      next.delete("q");
    }
    setSearchParams(next, { replace: true });
  };

  const setCategory = (value) => {
    const next = new URLSearchParams(searchParams);
    if (value === "All") {
      next.delete("category");
    } else {
      next.set("category", value);
    }
    setSearchParams(next, { replace: true });
  };

  const setSort = (value) => {
    const next = new URLSearchParams(searchParams);
    if (value === "featured") {
      next.delete("sort");
    } else {
      next.set("sort", value);
    }
    setSearchParams(next, { replace: true });
  };

  // Clear every control in a single navigation so none is left behind.
  const resetFilters = () => setSearchParams({}, { replace: true });

  return (
    <>
      <section className="page-head">
        <div className="container">
          <h1>Explore Projects</h1>
          <p>
            {projects.length} guided projects across courses and technology
            domains. Search by title, course or technology.
          </p>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <div className="catalog-controls">
            <div className="catalog-toolbar">
              <SearchBar
                value={search}
                onChange={setSearch}
                placeholder="Search by title, course or technology…"
              />
              <div className="form-field sort-control">
                <label htmlFor="sort">Sort by</label>
                <select
                  id="sort"
                  name="sort"
                  className="form-input sort-select"
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div
              className="filter-chips"
              role="group"
              aria-label="Filter by course"
            >
              {categoryFilters.map((name) => (
                <button
                  key={name}
                  type="button"
                  className={`chip ${category === name ? "chip-active" : ""}`}
                  aria-pressed={category === name}
                  onClick={() => setCategory(name)}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>

          {visibleProjects.length > 0 ? (
            <>
              <p className="results-count" role="status">
                Showing {visibleProjects.length} of {projects.length} projects
              </p>
              <div className="project-grid">
                {visibleProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </>
          ) : (
            <div className="empty-state">
              <span className="empty-icon" aria-hidden="true">
                🔍
              </span>
              <h2>No projects found</h2>
              <p>Try another search or clear the course filter.</p>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={resetFilters}
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
