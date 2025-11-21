import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    middlewareMode: false,
    port: 5173,
  },
  preview: {
    port: 5173,
  },
});
