import { defineConfig } from 'vite';

import ssl from '@vitejs/plugin-basic-ssl';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ssl()],
  server: {
    https: true,
  },
});
