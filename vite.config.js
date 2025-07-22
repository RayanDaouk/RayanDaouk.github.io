import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  // Configuration pour GitHub Pages
  base: process.env.NODE_ENV === 'production' ? '/' : './',

  root: '.',
  publicDir: 'public',

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      },
      output: {
        // Garde les noms originaux pour tous les fichiers
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    },
    // Copie le CSS compilé dans le bon dossier
    cssCodeSplit: false
  },

  server: {
    port: 3000,
    open: true
  },

  resolve: {
    alias: {
      '@': resolve(__dirname, './'),
      '@js': resolve(__dirname, './js'),
      '@scss': resolve(__dirname, './scss'),
      '@css': resolve(__dirname, './css')
    }
  },

  css: {
    preprocessorOptions: {
      scss: {
        // Options pour SCSS
        additionalData: `
          // Vous pouvez ajouter des imports globaux SCSS ici si nécessaire
          // @import "@scss/variables.scss";
        `
      }
    },
    devSourcemap: true,
    postcss: {}
  },

  // Optimisation des dépendances
  optimizeDeps: {
    include: [],
    exclude: []
  }
})
