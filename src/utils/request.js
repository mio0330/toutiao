import axios from 'axios'
import store from '@/store/'

const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/'
})

// 请求拦截器
request.interceptors.request.use(function (config) {
  const { user } = store.state

  // 如果用户已登录，统一给接口设置 token 信息
  if (user) {
    config.headers.Authorization = `Bearer ${user.token}`
  }

  // 处理完之后一定要把 config 返回，否则请求就会停在这里
  return config
}, function (error) {
  return Promise.reject(error)
})

export default request
