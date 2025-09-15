import { defineConfig } from "vite";

// Create vite configuration file to bundle project
export default defineConfig({
    root: "./public",
    build: {
        outDir: "../dist/public",
        emptyOutDir: true,
    }
});