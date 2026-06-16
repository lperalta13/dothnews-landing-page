import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: isSsrBuild ? {} : {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
  server: {
    port: 5299,
    host: '127.0.0.1',
    watch: {
      usePolling: true,
    },
    proxy: {
      '/api': 'http://127.0.0.1:3000',
    },
  },
}))
