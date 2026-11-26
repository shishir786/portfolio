import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static', // pages prerendered; API routes opt out with `prerender = false`
  adapter: vercel(),
  server: { host: true },
  vite: { plugins: [tailwindcss()] },
});
