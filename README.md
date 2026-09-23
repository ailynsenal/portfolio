# ailynangeles ♡ portfolio

My personal portfolio site: who I am, the tech I work with, where I've worked and what I've built.

## Tech stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) for dev server and builds
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Motion](https://motion.dev/) for scroll animations
- ESLint (incl. `jsx-a11y`) and Prettier

## Getting started

Requires Node.js 20.19 or newer (see [`.nvmrc`](.nvmrc)).

```bash
nvm use        # optional, picks up the version from .nvmrc
npm install
npm run dev    # http://localhost:5173
```

## Scripts

| Script                 | What it does                            |
| ---------------------- | --------------------------------------- |
| `npm run dev`          | Start the dev server with hot reload    |
| `npm run build`        | Type-check and build to `dist/`         |
| `npm run preview`      | Serve the production build locally      |
| `npm run typecheck`    | Run the TypeScript compiler only        |
| `npm run lint`         | Lint with ESLint                        |
| `npm run format`       | Format all files with Prettier          |
| `npm run format:check` | Check formatting without changing files |

## Project structure

```
src/
  sections/    page sections (Home, About, Skills, Experience, Projects, Contact)
  components/  reusable UI pieces (NavBar, Menu, Skill, Work, Project)
  data/        content — edit these to update skills, jobs, projects, education
  assets/      images, SVG icon components and the downloadable CV
```

Most content updates only need a change in `src/data/`. To update the CV, replace
`src/assets/files/AILYN_ANGELES.pdf`.
