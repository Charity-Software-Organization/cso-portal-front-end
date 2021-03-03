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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      // 动画库
      { src: 'js/anijs-min.js' },
      { src: 'js/anijs-helper-dom-min.js' },
      { src: 'js/anijs-helper-scrollreveal-min.js' },
      { src: 'js/wow.min.js' },
      // 主入口
      { src: 'js/main.js' }
      // 其他依次删除
      // { src: 'js/jquery-3.5.1.min.js' },
      // { src: 'js/jquery.sticky.js' },
      // { src: 'js/jquery.barfiller.js' },
      // { src: 'js/jquery.waypoints.min.js' },
      // { src: 'js/jquery.counterup.min.js' },
      // { src: 'js/popper.min.js' },

      // { src: 'js/owl.carousel.min.js' },
      // { src: 'js/isotope-3.0.6-min.js' },
      // { src: 'js/magnific-popup.min.js' },
      // { src: 'js/bootstrap.min.js' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',

    // '~assets/css/barfiller.css',
    // '~assets/css/bootstrap.min.css',
    // icon
    '~assets/css/flaticon.css',

    // '~assets/css/magnific-popup.css',
    // '~assets/css/owl.carousel.css',
    // '~assets/css/responsive.css',

    // 字体图标样式
    '~assets/css/font-awesome.min.css',
    '~assets/css/line-awesome.min.css',
    // 基本样式
    // '~assets/css/style.css',
    { src: '~/assets/css/index.scss', lang: 'scss' }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '@/plugins/element-ui',
      ssr: true
    },
    {
      src: '@/plugins/vue-count-to',
      ssr: true
    }
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
