// frontend/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  resolve: {
    alias: {
      // Force Vite to bundle the buffer shim
      buffer: 'buffer/'
    }
  },
  optimizeDeps: {
    include: ['buffer']
  },
  plugins: [react()]
});
