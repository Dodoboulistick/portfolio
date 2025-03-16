import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    vue(),
    VueI18nPlugin({
      /* options */
    }),
  ],
  server: {
    allowedHosts: ["55a8-88-125-232-107.ngrok-free.app"],
  },
});
