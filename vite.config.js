import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true
  },
  build: {
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('questionBank') || id.includes('ddlDmlQuestions')) {
            return 'data-questions';
          }
          if (id.includes('node_modules')) {
            if (id.includes('@monaco-editor')) {
              return 'vendor-monaco';
            }
            if (id.includes('@supabase')) {
              return 'vendor-supabase';
            }
            if (id.includes('sql-formatter')) {
              return 'vendor-sql-formatter';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-lucide';
            }
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
          }
        }
      }
    }
  }
});

