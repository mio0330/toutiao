/**
 * 用户相关请求模块
 */
import request from '@/utils/request'

/**
 * 登录
 */
export const login = data => {
  return request({
    method: 'POST',
    url: '/app/v1_0/authorizations',
    data
  })
}
/**
 * 获取登陆用户信息
 */
export const getCurrentUser = () => {
  return request({
    method: 'GET',
    url: '/app/v1_0/user'
  })
}
/**
 * 获取用户频道信息
 */
export const getUserChannels = () => {
  return request({
    method: 'GET',
    url: '/app/v1_0/user/channels'
  })
}
