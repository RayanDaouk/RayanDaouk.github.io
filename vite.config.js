import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  // 👇 Pour un User Page, base doit rester /
  base: '/',

  // Dossier source
  root: '.',
  publicDir: 'public',

  build: {
    // Dossier de sortie
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      },
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    },
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
        additionalData: ``
      }
    },
    devSourcemap: true
  },

  optimizeDeps: {}
})
