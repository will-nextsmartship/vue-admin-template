import request from '@/utils/request'
import config from '@/config'

export function fetchMessages(query) {
  return request({
    url: `${config.API_PREFIX}user/messages`,
    method: 'get',
    params: query
  })
}
