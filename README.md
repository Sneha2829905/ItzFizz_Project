# ItzFizz Scroll Experience

A responsive React landing page concept made for the ItzFizz scroll-driven hero assignment.

## Features
- Letter-by-letter headline reveal on page load
- Statistics animate in with a short stagger
- Scroll-linked car movement powered by GSAP ScrollTrigger
- Responsive layout for desktop and mobile
- CSS-built car illustration, so no external car image is needed

## Run locally
1. Install Node.js (LTS).
2. Open this project folder in VS Code.
3. Open the terminal in this folder and run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL Vite shows, usually `http://localhost:5173`.

## Build check
Run `npm run build`. The production files will be created in `dist/`.

## Publish
For the simplest GitHub Pages setup, use the GitHub Actions workflow for Vite projects or deploy the `dist` folder with a supported static hosting service such as Netlify or Vercel. Add the live URL and repository URL to the assignment form.

## Before submitting
- Replace the sample impact statistics with verified figures if the company provides real metrics.
- Test the page at mobile and desktop sizes.
- Make sure you can explain the React component, GSAP intro animation, and ScrollTrigger setup.
