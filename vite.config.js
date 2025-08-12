import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  base: '/tailwindcss-demo/',
  plugins: [
    vue(),
    tailwindcss(),
    visualizer({
      emitFile: true,
      filename: "stats.html",
    }),
  ],
  server: {
    port: 5174,
  },
   build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // 自定义拆包逻辑（可选）
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
});
