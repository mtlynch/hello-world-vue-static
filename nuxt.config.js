export default {
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    titleTemplate: '%s | Hello World Vue Static',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1.0'},
      {property: 'og:type', content: 'website'},
      {
        property: 'og:description',
        content:
          'Hello World Vue Static is a simple example of a pre-rendered Vue website',
      },
      {
        property: 'og:image',
        content: 'https://hello-world-vue-static.web.app/images/logo.png',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'favicon.ico',
      },
    ],
  },
  modules: ['@nuxtjs/sitemap', '@nuxtjs/robots'],
  sitemap: {
    hostname: 'https://hello-world-vue-static.web.app/',
    gzip: true,
    exclude: ['/404'],
  },
  robots: {
    sitemap: 'https://hello-world-vue-static.web.app/sitemap.xml',
  },
};
