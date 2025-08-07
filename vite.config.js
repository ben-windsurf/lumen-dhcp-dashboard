import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.[jt]sx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@dhcp/styles': resolve(__dirname, '../component-library')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@dhcp/styles/chi-components";`
      }
    }
  },
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'build'
  }
})
