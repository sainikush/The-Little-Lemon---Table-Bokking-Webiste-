// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  test: {
    environment: 'jsdom',
    globals: true, // This makes 'test', 'expect' global
    setupFiles: './src/setupTests.js',
    // --- ADD THIS LINE ---
    mockReset: true // This is often helpful for cleaning mocks between tests
  },
});
