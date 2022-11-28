import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { viteSingleFile } from "vite-plugin-singlefile"

export default defineConfig(({ mode }) => {
  switch (mode) {
    case 'single':
      return {
        plugins: [svelte(), viteSingleFile({ removeViteModuleLoader: true })],
        clearScreen: false,
        server: {
          port: 1420,
          strictPort: true,
        },
        envPrefix: ["VITE_", "TAURI_"],
        build: {
          outDir: "./dist/htmlSingle",
          target: ["es2021", "chrome100", "safari13"],
          minify: !process.env.TAURI_DEBUG ? "esbuild" : false,
          sourcemap: !!process.env.TAURI_DEBUG,
        },
      }
    default:
      return {
        plugins: [svelte()],
        clearScreen: false,
        server: {
          port: 1420,
          strictPort: true,
        },
        envPrefix: ["VITE_", "TAURI_"],
        build: {
          outDir: "./dist/htmlMulti",
          target: ["es2021", "chrome100", "safari13"],
          minify: !process.env.TAURI_DEBUG ? "esbuild" : false,
          sourcemap: !!process.env.TAURI_DEBUG,
        },
      }
  }
});
