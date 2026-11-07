// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Vite 8 eleva la linea base del CSS y emite media queries de rango
      // (@media (width>=48rem)), que Safari <16.4, Chrome <104 y Firefox <102 ignoran:
      // sin esto los breakpoints desaparecen en esos navegadores y todo se ve en una columna.
      cssTarget: ['chrome87', 'edge88', 'firefox78', 'safari14'],
    },
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
