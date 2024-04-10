import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/styles/base/nullstyle.scss";
          @import "./src/styles/base/mixin.scss";
          @import "./src/styles/base/vars.scss";
          @import "./src/styles/base/base.scss";
        `,
      },
    },
  },
})
