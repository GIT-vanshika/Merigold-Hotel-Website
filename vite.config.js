
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    target: 'esnext',
    outDir: 'dist',
    minify: 'esbuild',
    rollupOptions: {
      input: {
        main: './index.html'
      },
      external: [
        'react',
        'react-dom',
        'react-router-dom',
        '@google/genai'
      ],
      output: {
        format: 'esm'
      }
    }
  },
  optimizeDeps: {
    exclude: ['react', 'react-dom', 'react-router-dom', '@google/genai']
  }
});
