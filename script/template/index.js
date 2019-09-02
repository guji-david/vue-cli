/*模块文件处理中心*/
const fs = require('fs')
const path = require('path')
const os = require('os')
const readline = require('readline')
const {Log, DateUtil, StringUtil , LOCAL, ROOTPATH} = require('../util')
/**
 * 替换作者/时间/日期等等通用注释
 * @param {*string} content 内容
 * @param {*string} comment 注释
 * @todo 这个方法还有很大的优化空间
 */
const _replaceCommonContent = (content, comment) => {
  if (content === '') return ''
  // 注释对应列表 comments = [ [文件中埋下的锚点, 将替换锚点的目标值] ]
  const comments = [
    ['_author_', LOCAL.config.AUTHOR],
    ['_email_', LOCAL.config.Email],
    ['_comment_', comment],
    ['_date_', DateUtil.getCurrentDate()]
  ]
  comments.forEach(item => {
    content = content.replace(item[0], item[1])
  })
  return content
}
/**
 * 生成Vue template文件
 * @param {*} moduleName 模块名称
 * @returns {*string}
 */
module.exports.buildVueFile = (moduleName, comment) => {
  const VueTemplate = fs.readFileSync(path.resolve(__dirname, './template.vue'))
  const builtTemplate = StringUtil.replaceAll(VueTemplate.toString(), "_module_", moduleName)
  return _replaceCommonContent(builtTemplate, comment)
}
/**
 * @author: etongfu
 * @description: 生成路由文件
 * @param {string} folder 文件夹名称
 * @param {string} moduleName 模块名称
 * @returns {*string}
 */
module.exports.buildRouteFile = (folder,moduleName, comment) => {
  const RouteTemplate = fs.readFileSync(path.resolve(__dirname, './route.template.js')).toString()
  // 因为路由比较特殊。路由模块需要指定的路径。所以在这里重新生成路由文件所需要的参数。
  const _mainPath = folder || moduleName
  const _filePath = folder == '' ? `${moduleName}` : `${folder}/${moduleName}`
  // 进行替换
  let builtTemplate = StringUtil.replaceAll(RouteTemplate, "_mainPath", _mainPath) // 替换模块主名称
  builtTemplate = StringUtil.replaceAll(builtTemplate, "_filePath", _filePath) // 替换具体路由路由名称
  builtTemplate = StringUtil.replaceAll(builtTemplate, "_module", moduleName) // 替换模块中的name
  return _replaceCommonContent(builtTemplate, comment)
}
/**
 * @author: etongfu
 * @description: 生成API文件
 * @param {string} comment 注释
 * @returns: {*}
 */
module.exports.buildApiFile = comment => {
  const ApiTemplate = fs.readFileSync(path.resolve(__dirname, './api.template.js')).toString()
  return _replaceCommonContent(ApiTemplate, comment)
}
