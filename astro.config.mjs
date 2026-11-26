import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static', // pages prerendered; API routes opt out with `prerender = false`
  adapter: node({ mode: 'standalone' }),
  server: { host: true },
  vite: { plugins: [tailwindcss()] },
});
