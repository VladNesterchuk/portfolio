# Portfolio

A production-ready portfolio website built with React, Vite, TypeScript, and TailwindCSS.

## Setup

```bash
npm install
npm run dev
```

- **Development:** `npm run dev` — starts the Vite dev server (default: http://localhost:5173)
- **Build:** `npm run build` — outputs to `dist/`
- **Preview:** `npm run preview` — serves the production build locally

## How to add a project

1. Open `src/data/projects.ts`.
2. Add a new object to the `projects` array with:

   - **Required:** `slug`, `title`, `type`, `role`, `description`, `tech`, `cover`, `gallery`
   - **Optional:** `githubUrl`, `figmaUrl`

Example:

```ts
{
  slug: "my-project",
  title: "My Project",
  type: "Web Application",
  role: "Front-end Developer",
  githubUrl: "https://github.com/username/repo",  // optional
  figmaUrl: "https://www.figma.com/file/...",    // optional — only if you have a design link
  description: ["Overview.", "Features."],
  tech: ["React", "TypeScript"],
  cover: "/images/projects/my-project/cover.jpg",
  gallery: [
    { src: "/images/projects/my-project/1.jpg", alt: "Screenshot", kind: "normal" },
    { src: "/images/projects/my-project/long.jpg", alt: "Full page", kind: "long" }
  ]
}
```

- `slug` must be unique and is used in the URL: `/project/my-project`.
- `gallery[].kind`: `"normal"` for standard images, `"long"` for tall/full-page screenshots (scrollable in the lightbox).

## How to add images

1. Create a folder: `public/images/projects/{slug}/`
   - Use the same `slug` as in `projects.ts`.
2. Add files, e.g.:
   - `cover.jpg` — used on the project card and as the main preview.
   - `1.jpg`, `2.jpg`, `long-1.jpg`, etc. — referenced in `gallery[].src`.
3. In `projects.ts`, set `cover` and each `gallery[].src` to paths like:
   - `"/images/projects/my-project/cover.jpg"`
   - `"/images/projects/my-project/1.jpg"`

If an image is missing, a “No image” / “Image not found” placeholder is shown.

## How to add GitHub / Figma links

- **GitHub:** Set `githubUrl` to the repository URL. A “View repository” link appears in the project info panel.
- **Figma:** Set `figmaUrl` to the Figma file URL. A “View Figma Design” button appears in the project info panel.

If `figmaUrl` is not set, the Figma button is not rendered and the layout stays clean.

## Project structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── ProjectCard.tsx
│   ├── GalleryCarousel.tsx
│   └── ProjectInfoPanel.tsx
├── pages/
│   ├── Home.tsx
│   ├── ProjectDetails.tsx
│   └── NotFound.tsx
├── data/
│   └── projects.ts
├── App.tsx
└── main.tsx
```

## Tech stack

- React 18, TypeScript, Vite
- react-router-dom
- TailwindCSS
