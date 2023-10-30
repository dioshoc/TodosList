import path from 'path';

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import EnvironmentPlugin from 'vite-plugin-environment';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
  },
  plugins: [react(), EnvironmentPlugin(['REACT_APP_TEXT'])],
  publicDir: 'public',
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components'),
      },
      {
        find: '@ui',
        replacement: path.resolve(__dirname, 'src/components/ui'),
      },
      { find: '@store', replacement: path.resolve(__dirname, 'src/store') },
      { find: '@utils', replacement: path.resolve(__dirname, 'src/utils') },
      { find: '@type', replacement: path.resolve(__dirname, 'src/types') },
    ],
  },
  server: {
    host: true,
    port: 3000,
  },
});
