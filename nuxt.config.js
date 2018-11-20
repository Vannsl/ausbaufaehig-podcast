export default {
  mode: "spa",
  head: {
    htmlAttrs: { lang: "de" },
    title: "Ausbaufähig - der Wein-Podcast",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Vannsl.io, Vanessa Böhner" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=PT+Sans+Narrow"
      }
    ]
  },
  css: ["@/assets/reset.css", "@/assets/main.css"],
  modules: ["nuxt-purgecss"],
  purgeCSS: {
    mode: "postcss"
  },
  build: {
    postcss: {
      plugins: {
        tailwindcss: "./tailwind.js",
        autoprefixer: {}
      }
    }
  }
};
