const api = "https://example.com";

export default defineNuxtConfig({
  modules: ["~/modules/sitemap", "@nuxt/image", "nuxt-swiper", "nuxt-gtag", "nuxt-aos"],
  css: ["~/assets/css/main.css"],
  gtag: { id: "G-3Z8X25GBW1" },
  postcss: {
    plugins: {
      "tailwindcss/nesting": {},
      autoprefixer: {},
      tailwindcss: {},
    },
  },
  routeRules: {
    "/": { prerender: true, cors: true },
    "/**": { cors: true },
    "/*": { cors: true },
  },
  runtimeConfig: {
    public: { api },
  },
  build: {
    transpile: ['gsap'],
  },
});
