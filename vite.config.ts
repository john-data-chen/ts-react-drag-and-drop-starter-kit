import removeAttribute from '@castlenine/vite-remove-attribute'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { compression } from 'vite-plugin-compression2'

// https://vite.dev/config/
export default defineConfig({
  base: '/ts-react-drag-and-drop-starter-kit/',
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-react-compiler']
      }
    }),
    compression({
      threshold: 50000,
      algorithm: 'gzip'
    }),
    removeAttribute({
      extensions: ['ts', 'tsx'],
      attributes: ['data-testid'],
      ignoreFolders: ['./__tests__']
    })
  ]
})
