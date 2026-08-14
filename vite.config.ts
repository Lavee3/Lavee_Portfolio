// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
//
// The lovable config's nitro wrapper always forces output.dir/serverDir/publicDir to
// dist/, dist/server, dist/client — great for the cloudflare-module preset, but it hijacks
// the vercel preset's own output paths, which Vercel's Build Output API requires to live
// under .vercel/output. Without this override, `vercel build` "succeeds" but writes to
// dist/ instead of .vercel/output, so Vercel finds no functions/static output and serves
// a 404 for every route. Restore the vercel preset's real output layout when deploying there.
const isVercel = process.env.NITRO_PRESET === "vercel" || !!process.env.VERCEL;

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  ...(isVercel
    ? {
        nitro: {
          preset: "vercel",
          output: {
            dir: ".vercel/output",
            serverDir: "{{ output.dir }}/functions/__server.func",
            publicDir: "{{ output.dir }}/static",
          },
        },
      }
    : {}),
});