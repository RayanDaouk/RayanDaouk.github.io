import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: '',
    rollupOptions: {
      output: {
        entryFileNames: `index-[hash].js`,
        chunkFileNames: `chunk-[hash].js`,
        assetFileNames: ({ name }) => {
          if (name && name.endsWith('.css')) {
            return 'index-[hash][extname]';
          }
          return '[name]-[hash][extname]';
        }
      }
    },
    sourcemap: false,
    minify: 'esbuild'
  },
  server: {
    port: 3000,
    open: true
  }
});
