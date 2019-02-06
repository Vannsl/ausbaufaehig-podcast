export default {
  mode: "spa",
  head: {
    htmlAttrs: { lang: "de" },
    title: "Ausbaufähig - der Wein-Podcast",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Vannsl.io, Vanessa Böhner" },
      {
        name: "description",
        content:
          "Der Wein-Podcast von Ben und Vanessa. Wir haben beruflich nichts mit Wein zu tun, wir trinken einfach nur gerne und reden dann darüber! Alle Weine wurden privat gekauft und sind für uns meistens auch neu."
      },
      {
        name: "keywords",
        content:
          "podcast, wine, wein, weinverkostung, winetasting, rotwein, weisswein, ausbaufähig, ausbaufaehig"
      },
      {
        name: "og:title",
        content: "Ausbaufähig - der Wein-Podcast"
      },
      {
        name: "og:image",
        content:
          "https://res.cloudinary.com/vannsl-io/image/upload/c_crop,h_800,w_1500/v1542718345/ausbaufaehig_cover_art.jpg"
      },
      {
        name: "og:url",
        content: "https://www.ausbaufaehig-podcast.de"
      },
      {
        name: "og:type",
        content: "website"
      },
      {
        name: "og:audio",
        content: "https://vannsl.io/ausbaufaehig/ausbaufaehig_episode_0.mp3"
      },
      {
        name: "og:audio:type",
        content: "audio/mpeg"
      },
      {
        name: "og:audio",
        content: "https://vannsl.io/ausbaufaehig/ausbaufaehig_episode_1.mp3"
      },
      {
        name: "og:audio:type",
        content: "audio/mpeg"
      }
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
  modules: ["nuxt-purgecss", "nuxt-cache"],
  purgeCSS: {
    mode: "postcss"
  },
  build: {
    extend(config, { isDev, isClient }) {
      module: {
        loaders: [
          { test: /\.xml$/, loader: "xml-loader" } // will load all .xml files with xml-loader by default
        ];
      }
    },
    postcss: {
      plugins: {
        tailwindcss: "./tailwind.js",
        autoprefixer: {}
      }
    }
  }
};
