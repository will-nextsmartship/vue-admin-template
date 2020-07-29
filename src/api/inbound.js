import request from '@/utils/request'
import config from '@/config'

export function fetchList(query) {
  return request({
    url: `${config.API_PREFIX}inventory/list`,
    method: 'get',
    params: query
  })
}
