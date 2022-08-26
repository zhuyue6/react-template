import axios from 'axios'

const http = axios.create({
  baseURL: 'api/',
  timeout: 2000,
  responseType: 'json'
})

export function get(url: string, params: { [index: string]: any }) {
  return http.get(url, {
    params
  })
}

export function post(url: string, params: { [index: string]: any }) {
  return http.post(url, params)
}

export default http