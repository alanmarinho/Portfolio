import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { geralInfo } from './ambientVariables';

export default defineConfig({
  plugins: [react()],
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      '@src': path.resolve(__dirname, '/src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@contexts': path.resolve(__dirname, 'src/contexts'),
      '@screens': path.resolve(__dirname, 'src/screens'),
    },
  },
});
