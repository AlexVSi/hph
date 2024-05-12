import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // alias: {
    //     app: '/src/app',
    //     entities: '/src/entities',
    //     features: '/src/features',
    //     pages: '/src/pages',
    //     shared: '/src/shared',
    //     widgets: '/src/widgets',
    //   },
    // alias: {
    //   '@': fileURLToPath(new URL('./src', import.meta.url))
    //   },
    alias: {
      '@app': path.resolve('src/app'),
      '@entities': path.resolve('src/entities'),
      '@features': path.resolve('src/features'),
      '@pages': path.resolve('src/pages'),
      '@shared': path.resolve('src/shared'),
      '@widgets': path.resolve('src/widgets'),
      },
    // resolve: {
    //   alias: [{ find: "@/", replacement: path.resolve(__dirname, "./src") }]
    // }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "./src/app/styles/base/nullstyle.scss";
            @import "./src/app/styles/base/mixin.scss";
            @import "./src/app/styles/base/vars.scss";
            @import "./src/app/styles/base/base.scss";
          `,
        },
      },
    },
})
