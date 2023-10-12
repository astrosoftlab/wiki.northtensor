import axios from 'axios'

export const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_WIKITENSOR_API_URL}/wikitensor/`,
  headers: {
    'X-API-Key': process.env.NEXT_PUBLIC_WIKITENSOR_API_KEY
  }
})
