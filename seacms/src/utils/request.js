import axios from 'axios'
import Cookies from 'js-cookie'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    console.log(config)
    if (config.method === 'post') {
      config.headers['X-CSRFToken'] = Cookies.get('csrftoken')
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    console.log('res.code', res.code)
    return res
  },
  error => {
    console.log('err', error) // for debug
    return Promise.reject(error)
  }
)

export default service
