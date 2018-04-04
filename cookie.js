/**
 * @description cookie
 * @author luwuer
 */

'use strict'
;(function (factory) {
  if (typeof define === 'function' && define.amd) { // eslint-disable-line no-undef
    define(factory) // eslint-disable-line no-undef
  } else if (typeof exports === 'object') {
    module.exports = factory()
  } else {
    window.cookie = factory()
  }
}(function () {
  /**
   * @description 设
   * @param {String} key
   * @param {String} value
   */
  function setItem(key, value) {
    var exp = new Date()
    exp.setTime(exp.getTime() + 1000 * 60 * 60 * 1)
    document.cookie = key + '=' + encodeURIComponent(value) + ';expires=' + exp.toUTCString()
  }

  /**
   * @description 取
   * @param {String} key
   */
  function getItem(key) {
    var reg = new RegExp('(^| )' + key + '=([^;]*)(;|$)')
    var tmparr = document.cookie.match(reg)
    if (tmparr) {
      return decodeURIComponent(tmparr[2])
    } else {
      return null
    }
  }

  /**
   * @description 删
   * @param {String} key
   */
  function delItem(key) {
    var flag = getItem(key)
    if (flag) {
      var exp = new Date()
      exp.setTime(exp.getTime() - 1)
      document.cookie = key + '=;expires=' + exp.toUTCString()
      return {
        code: 1,
        info: 'success'
      }
    } else {
      return {
        code: 0,
        info: 'cookie not found'
      }
    }
  }

  /**
   * @description 获取所有cookie的键数组
   */
  function keys() {
    var str = document.cookie
    var arr = str.replace(/=.+?(;? |$)/g, ',').split(',')
    arr.pop()
    return arr
  }

  return {
    setItem,
    getItem,
    delItem,
    keys
  }
}))