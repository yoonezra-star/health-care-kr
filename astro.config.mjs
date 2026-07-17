import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://www.wellbeep.com",
  output: "static",
  trailingSlash: "never",
  build: {
    format: "file"
  }
});
