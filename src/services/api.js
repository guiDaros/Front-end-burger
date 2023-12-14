import axios from 'axios'

export const apiCodeBurguer = axios.create({
  baseURL: 'http://localhost:3011'
})

apiCodeBurguer.interceptors.request.use(async config => {
  const userData = await localStorage.getItem('codeburger:userData')
  const token = userData && JSON.parse(userData).token
  config.headers.authorization = `Bearer ${token}`
  return config
})

export default apiCodeBurguer