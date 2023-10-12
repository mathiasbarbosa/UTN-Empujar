import axios from 'axios'

const URL = 'https://fakestoreapi.com'

export const axiosInstance = axios.create({
  baseURL: URL
})