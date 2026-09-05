# Sumit Kumar Godwan — Portfolio

Personal portfolio site for a backend engineer working on high-throughput,
low-latency fintech systems. Built with React 19, Vite and Tailwind CSS,
with page transitions by Framer Motion.

## Getting started

```bash
npm install
npm run dev      # local dev server with HMR
```

## Scripts

| Command           | What it does                          |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Start the Vite dev server             |
| `npm run build`   | Production build into `dist/`         |
| `npm run preview` | Serve the production build locally    |
| `npm run lint`    | Run ESLint across the project         |

## Structure

```
src/
  components/   Hero, About, Experience, Projects, Skills, Certificates, Contact
  assets/       Images used by the sections
  App.jsx       Section composition
  index.css     Tailwind entry + global styles
```

## Notes

- The contact form opens the visitor's mail client via a `mailto:` link — no
  backend required. (EmailJS keys live in `.env`, which is not committed, for
  if the form is switched to a hosted sender later.)
- Deployed to GitHub Pages from `main` by `.github/workflows/deploy.yml`.
