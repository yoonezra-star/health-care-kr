import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://health-care-kr.pages.dev",
  output: "static",
  trailingSlash: "never",
  build: {
    format: "file"
  }
});
