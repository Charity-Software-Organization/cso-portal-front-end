export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'cso-portal',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {src: "js/jquery.slim.min.js"},
      {src: "js/popper.min.js"},
      {src: "js/wow.min.js"},
      {src: "js/jquery.waypoints.min.js"},
      {src: "js/jquery.counterup.min.js"},
      {src: "js/owl.carousel.min.js"},
      {src: "js/isotope-3.0.6-min.js"},
      {src: "js/magnific-popup.min.js"},
      {src: "js/jquery.sticky.js"},
      {src: "js/jquery.barfiller.js"},
      {src: "js/main.js"},
      {src: "js/bootstrap.min.js"},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~assets/css/animate.css',
    '~assets/css/barfiller.css',
    '~assets/css/bootstrap.min.css', 
    '~assets/css/flaticon.css',
    '~assets/css/font-awesome.min.css',
    '~assets/css/line-awesome.min.css',
    '~assets/css/magnific-popup.css',
    '~assets/css/owl.carousel.css',
    '~assets/css/responsive.css',
    '~assets/css/style.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/]
  }
}
