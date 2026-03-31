// vite.config.ts

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/your-repo-name/', // Change this to your GitHub Pages repo name
  plugins: [vue()] 
});