const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
      ? '/todo-vue-composition-api/'
      : '/',
  transpileDependencies: true
})
