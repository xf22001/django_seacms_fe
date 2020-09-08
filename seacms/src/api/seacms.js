import request from '@/utils/request'

function csrfToken () {
  return request({
    url: '/api/csrf_token',
    method: 'get'
  })
}

function list () {
  return request({
    url: '/api/list',
    method: 'get'
  })
}

function search (data) {
  return request({
    url: '/api/search',
    method: 'post',
    data
  })
}

export default {
  list,
  search,
  csrfToken
}
