module.exports = {
  configureWebpack: {
    externals: ['chart.js/auto'],
    resolve: {
      alias: {
        'vue-i18n': 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js'
      }
    }
  }
}
