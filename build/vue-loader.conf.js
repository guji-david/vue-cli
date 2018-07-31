/**
 *              当前js的作用
 *
 */
var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  // 处理.vue文件中的样式
  loaders: utils.cssLoaders({
    // 是否打开source-map
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  })
}
