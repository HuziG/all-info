// @/utils/request.ts
import axios, { AxiosRequestConfig } from 'axios'

const instance = axios.create({
  baseURL: 'http://0.0.0.0:9000'
})

const request = async (config: string) => {
  const { data } = await instance(config)

  if (data.code === 0) {
    return data.data
  }

  if (data.code === -1) {
    return new Error(data.message)
  }
}

export default request
