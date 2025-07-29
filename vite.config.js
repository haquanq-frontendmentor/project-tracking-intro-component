import { defineConfig } from "vite";

export default defineConfig({
    root: "src/",
    build: { outDir: "../dist/", emptyOutDir: true },
    base: "/project-tracking-intro-component/",
});
