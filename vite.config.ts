// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Specify base path if your app is served from a subdirectory in production
  // base: '/subdirectory/',

  plugins: [react()],

  build: {
    // Options for building the app
    outDir: 'dist', // Output directory for build files
    minify: 'terser', // Use 'terser' for minification

    // Control how static assets are handled
    assetsDir: 'assets', // Directory under `outDir` for assets
    assetsInlineLimit: 4096, // Byte limit to inline files as base64 data URLs

    // You can also configure rollup options, sourcemap, and more.
  },

  // Uncomment if using server-side rendering (SSR)
  // ssr: {
  //   // SSR-specific configurations
  // },

  // Other configurations...
  // Example: customizing the dev server for CORS, proxy, etc.
  // server: {
  //   cors: true,
  //   proxy: {
  //     // Proxy configurations if you need to resolve CORS issues during development
  //   },
  // },
});
