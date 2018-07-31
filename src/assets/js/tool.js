/**
 * Created by David on 2018/2/5.
 */
var crypto = require('crypto');
/**
 * crypted  密文
 * @param crypted
 */
/**
 * key 加密key
 * @type {string}
 */
const key = 'jtoushoujtoushou';
/**
 * iv       向量
 * @type {string}
 */
const iv = 'A-16-Byte-String';
exports.decrypt = function (crypted) {
  crypted = new Buffer(crypted, 'base64').toString('binary');
  var decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
  var decoded = decipher.update(crypted, 'binary', 'utf8');
  decoded += decipher.final('utf8');
  return decoded;
};
// 解码
exports.decodeUnicode=function(str) {
  str = str.replace(/\\/g, '%');
  return unescape(str);
};
