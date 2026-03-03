import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) {
            return undefined
          }

          if (id.includes('react-router') || id.includes('react-dom') || id.includes('/react/')) {
            return 'framework'
          }

          if (id.includes('motion') || id.includes('lucide-react')) {
            return 'animation'
          }

          if (id.includes('react-slick') || id.includes('slick-carousel')) {
            return 'carousel'
          }

          if (id.includes('recharts')) {
            return 'charts'
          }

          if (id.includes('@radix-ui')) {
            return 'radix'
          }

          return undefined
        },
      },
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
