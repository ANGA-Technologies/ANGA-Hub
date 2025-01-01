const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

const webpack = require('webpack');

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: true, // Set to false if you're not using the Options API
        __VUE_PROD_DEVTOOLS__: false, // Set to true if you need devtools in production
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false // This resolves the warning
      })
    ]
  }
};
