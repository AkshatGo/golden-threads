import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";  // ← NEW

export default defineConfig({
  tanstackStart: { server: { entry: "server" } },
  vite: {
    plugins: [
      nitro({ preset: "vercel" }),  // ← NEW
    ],
  },
});
