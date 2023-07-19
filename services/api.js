import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://shipgocanary-api-production.up.railway.app/api',
  timeout: 3000,
})
