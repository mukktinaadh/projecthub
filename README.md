# ProjectHub

A frontend-only React app for an academic project-services business. Students browse
project ideas by course and technology, open a project to read its details, and submit
an enquiry.

Built with React 19, React Router 7 and Vite. No backend, no database, no auth — all
content comes from local mock data.

> ProjectHub is an original demo. The reference site it is modelled on was used only to
> understand the business shape (course categories, a project catalog, enquiry flow).
> All projects, names and contact details here are fictional.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
```

| Script            | What it does                        |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Vite dev server with HMR            |
| `npm run build`   | Production build into `dist/`       |
| `npm run lint`    | Oxlint                              |
| `npm run preview` | Serve the production build locally  |

## Routes

| Route           | Page            | Purpose                                                     |
| --------------- | --------------- | ----------------------------------------------------------- |
| `/`             | `Home`          | Hero, course categories, featured projects, value props, CTA |
| `/projects`     | `Projects`      | Catalog with live search and course filter                   |
| `/projects/:id` | `ProjectDetails`| One project by URL id, or a "Project Not Found" state        |
| `/contact`      | `Contact`       | Contact details and a validated enquiry form                 |
| `*`             | `NotFound`      | Dedicated 404 page for any unmatched URL                     |

## Project structure

```
src/
├── components/          Reusable, presentational
│   ├── Navbar.jsx       Header + responsive menu + primary nav
│   ├── Footer.jsx       Brand, nav links, contact, copyright
│   ├── ProjectCard.jsx  One project via `project` prop
│   ├── CategoryCard.jsx One course category via `category` prop
│   └── SearchBar.jsx    Controlled search input via `value`/`onChange`
├── pages/               Compose components, own page concerns
│   ├── Home.jsx
│   ├── Projects.jsx
│   ├── ProjectDetails.jsx
│   ├── Contact.jsx
│   └── NotFound.jsx     404 for unmatched routes
├── data/
│   └── projects.js      All project + category data
├── App.jsx              Router, layout, scroll restoration
├── main.jsx             React entry point
└── index.css            Design system + all styling
```

## How data flows

`src/data/projects.js` is the single source of truth. Pages import it, filter or look up
what they need, and hand one record at a time to components through props. Components
never import the data file, so they stay reusable and easy to test by eye.

`ProjectCard` and `CategoryCard` are the only places that know how a record is rendered.
Change the shape of a project and you update the data file plus that one card.

## Search, filtering and sorting

Controls live in the URL as `?q=`, `?category=` and `?sort=`, read with
`useSearchParams`. That means a filtered view is shareable and survives a refresh, and
the state is derived from the URL rather than duplicated in `useState`.

Filtering is a plain `projects.filter(...)` over title, category and technology, then
`projects.sort(...)` applies the chosen order. `featured` returns `0` from every
comparison, which keeps the original data-file order. An unrecognised `?sort=` value
falls back to `featured` instead of being trusted as a lookup key.

Every control clears through a single `setSearchParams({}, { replace: true })`, so
resetting can never leave one filter behind.

## Form handling

`Contact.jsx` is a controlled form: every field's value lives in `useState`, and
`validate()` returns an error object on submit. Invalid submits render inline messages
and keep the user's input; a valid submit swaps the form for a success panel and resets
the fields. Nothing is sent over the network.

## Design system

`src/index.css` is organised as tokens → base → layout → components → pages → responsive.
Colors, spacing, radii and shadows are CSS custom properties on `:root`, so the whole
site restyles from one block. Breakpoints are at 1024px, 900px, 768px and 560px; the
navbar collapses to a toggle menu at 768px.

## Accessibility

- Landmarks throughout: `header`, `main`, `footer`, `nav` with labels
- A skip link to `#main-content`
- Every image has `alt`; decorative logos use `alt=""`
- Real `<button>` and `<Link>` elements, never clickable `<div>`s
- Labels bound to all form fields; errors are text, not color alone
- Visible `:focus-visible` outlines and `prefers-reduced-motion` support
- Text meets WCAG AA (4.5:1); glyphs and UI borders meet 3:1. The success green is
  `#047857` rather than a lighter emerald specifically so it passes against both white
  text and light backgrounds.

## Assets

Illustrations in `public/art/` are hand-written SVGs using the site's palette. They are
local, so there are no external image requests and nothing to break offline.
