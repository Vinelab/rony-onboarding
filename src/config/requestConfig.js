import axios from 'axios'
import config from './config'

const customAxios = axios.create({
  baseURL: config.celebrityUrl,
  timeout: 300000
})

customAxios.interceptors.response.use(function (response) {
  return response
},
function (error) {
  return Promise.reject(error.response.data.message || error.response.data.error.message)
})

export default customAxios
