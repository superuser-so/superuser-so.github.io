import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    outDir: '_site',
    emptyOutDir: false,
    rollupOptions: {
      input: 'src/css/main.css',
      output: {
        assetFileNames: 'css/[name].css'
      }
    }
  }
});
