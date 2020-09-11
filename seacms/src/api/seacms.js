import request from '@/utils/request'

function csrfToken () {
  return request({
    url: 'http://localhost:8000/api/csrf_token',
    method: 'get'
  })
}

function list (data) {
  return request({
    url: 'http://localhost:8000/api/list',
    method: 'post',
    data
  })
}

function search (data) {
  return request({
    url: 'http://localhost:8000/api/search',
    method: 'post',
    data
  })
}

export default {
  list,
  search,
  csrfToken
}
