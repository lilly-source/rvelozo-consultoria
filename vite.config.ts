// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Force-on nitro with the Vercel preset so `vite build` emits the Vercel
// Build Output API artifact at `.vercel/output`. Without this, the default
// Cloudflare Workers bundle is produced and Vercel returns 404 NOT_FOUND
// because there is no routable output for its runtime.
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: {
    preset: process.env.VERCEL ? "vercel" : "cloudflare-module",
  },
});
