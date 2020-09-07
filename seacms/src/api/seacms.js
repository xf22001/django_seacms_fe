import request from '@/utils/request'

function list () {
  return request({
    url: '/app/list',
    method: 'get'
  })
}

function search (data) {
  return request({
    url: '/app/search',
    method: 'post',
    data
  })
}

export default {
  list,
  search
}
