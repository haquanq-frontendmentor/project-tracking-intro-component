import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
    root: "src/",
    build: { outDir: "../dist/", emptyOutDir: true },
    base: "/project-tracking-intro-component/",
});
