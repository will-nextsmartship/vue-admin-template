import request from '@/utils/request'
import config from '@/config'

export function login(data) {
  return request({
    url: `${config.API_PREFIX}user/login`,
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: `${config.API_PREFIX}user/info`,
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: `${config.API_PREFIX}user/logout`,
    method: 'post'
  })
}

export function fetchList(query) {
  return request({
    url: `${config.API_PREFIX}user/list`,
    method: 'get',
    params: query
  })
}
