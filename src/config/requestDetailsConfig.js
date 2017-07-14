import axios from 'axios'
import config from './config'

const customDetailsAxios = axios.create({
  baseURL: config.detailsUrl,
  timeout: 300000
})

customDetailsAxios.interceptors.response.use(function (response) {
  return response
},
function (error) {
  return Promise.reject(error.response.data.message || error.response.data.error.message)
})

export default customDetailsAxios
