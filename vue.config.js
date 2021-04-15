module.exports = {
  configureWebpack: {
    optimization: {
      splitChunks: false
    },

    resolve: {
      alias: {
        'vue-i18n': 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js'
      }
    }
  }
}
