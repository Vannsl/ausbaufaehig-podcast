export default {
  mode: "universal",
  generate: {
    routes: [
      '/episodes/0',
      '/episodes/1',
      '/episodes/2',
      '/episodes/3',
      '/episodes/4',
      '/episodes/5',
      '/episodes/6',
      '/episodes/7',
      '/episodes/8',
      '/episodes/9',
      '/episodes/10',
      '/episodes/11',
      '/episodes/12'
    ]
  },
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
          "~assets/img/ausbaufaehig_cover_art.jpg"
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
    ]
  },
  css: ["@/assets/reset.css", "@/assets/main.css"],
  modules: [
    ['storyblok-nuxt', { accessToken: 'rFHeL1JYrSsYPGmxQl84aQtt', cacheProvider: 'memory' }],
    "nuxt-purgecss",
    "nuxt-cache",
    "@nuxtjs/pwa",
    "@nuxtjs/component-cache"
  ],
  purgeCSS: {
    mode: "postcss"
  },
  plugins: [
    '~/plugins/disqus.js',
    '~/plugins/components.js'
  ],
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
        tailwindcss: "./plugins/tailwind.js",
        autoprefixer: {}
      }
    }
  }
};
