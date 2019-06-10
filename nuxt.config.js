const pkg = require('./package')

module.exports = {
  mode: 'universal',
  transition: {
    // 动画的配置
    name: 'page',
    mode: 'out-in'
  },
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  router: {
    middleware: 'router'
  },
  loading: '@/components/Loading',
  // 引入全局的（所有页面均需引用的）样式文件
  css: [
    '~assets/common.css',
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/reset.css'
  ],
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/axios' // 增加axios插件
  ],
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  // 配置启动的端口号个域名
  server: {
    port: 8100, // default: 3000
    host: '0.0.0.0' // default: localhost,
  },
  build: {
    analyze: true,
    transpile: [/^element-ui/],
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
