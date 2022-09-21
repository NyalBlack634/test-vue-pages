const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/test-vue-pages",
  outputDir: "docs",
  configureWebpack: {
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
    },
  },
});
