const chalk = require('chalk')
const path = require('path')
const dotenv = require('dotenv') //配置文件管理
const fs = require('fs')
// 本地配置相关
module.exports.LOCAL = class {
  /**
   * env path
   */
  static get envPath () {
    return path.resolve(__dirname, './.env.local')
  }
  /**
   * 配置文件
   */
  static get config () {
    // ENV 文件查找优先查找./env.local
    const ENV = fs.readFileSync(path.resolve(__dirname, './.env.local')) || fs.readFileSync(path.resolve(__dirname, '../.env.development.local'))
    // 转为config
    const envConfig = dotenv.parse(ENV)
    return envConfig
  }
  /**
   * 创建.env配置文件文件
   * @param {*} config
   * @description 创建的env文件会保存在scripts文件夹中
   */
  static buildEnvFile (config = {AUTHOR: ''}) {
    if (!fs.existsSync(this.envPath)) {
      // create a open file
      fs.openSync(this.envPath, 'w')
    }
    let content = ''
    // 判断配置文件是否合法
    if (Object.keys(config).length > 0) {
      // 拼接内容
      for (const key in config) {
        let temp = `${key} = ${config[key]}
`
        content += temp
      }
    }
    // write content to file
    fs.writeFileSync(this.envPath, content, 'utf8')
    Log.success(`local env file ${this.envPath} create success`)
  }
  /**
   * 检测env.loacl文件是否存在
   */
  static hasEnvFile () {
    return fs.existsSync(path.resolve(__dirname, './.env.local')) || fs.existsSync(path.resolve(__dirname, '../.env.development.local'))
  }
}
// 日志帮助文件
class Log {
  // TODO
}
module.exports.Log = Log
// 字符串Util
module.exports.StringUtil = class {
  // TODO
}
// 文件操作Util
module.exports.FileUtil = class {
  // TODO
  /**
   * If module is Empty then create dir and file
   * @param {*} filePath .vue/.js 文件路径
   * @param {*} content 内容
   * @param {*} dirPath 文件夹目录
   */
  static createDirAndFile (filePath, content, dirPath = '') {
    try {
      // create dic if file not exit
      if (dirPath !== '' && ! fs.existsSync(dirPath)) {
        // mkdir new dolder
        fs.mkdirSync(dirPath)
        Log.success(`created ${dirPath}`)
      }
      if (!fs.existsSync(filePath)) {
        // create a open file
        fs.openSync(filePath, 'w')
        Log.success(`created ${filePath}`)
      }
      // write content to file
      fs.writeFileSync(filePath, content, 'utf8')
    } catch (error) {
      Log.error(error)
    }
  }
}
// 日期操作Util
module.exports.DateUtil = class {
  // TODO
}
