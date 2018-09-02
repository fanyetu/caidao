/**
 * create by zhanghaonan 2018/8/30
 */
import CONFIG from './config'

const RESP_SUCCESS = 0
const RESP_ERROR = -1

export function get(url, data) {
  return request(url, 'GET', data)
}

export function post(url, data) {
  return request(url, 'POST', data)
}

export function request(url, method, data) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: CONFIG.baseUrl + url,
      data,
      method,
      success(resp) {
        if (resp.data.code === RESP_SUCCESS) {
          resolve(resp.data.data)
        } else {
          reject(resp.data)
        }
      }
    })
  })
}
