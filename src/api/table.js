import request from '@/utils/request'
import config from '@/config'

export function getList(params) {
  return request({
    url: `${config.API_PREFIX}table/list`,
    method: 'get',
    params
  })
}
