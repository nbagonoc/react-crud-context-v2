/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  test: {
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    // css: true,
  },
})
