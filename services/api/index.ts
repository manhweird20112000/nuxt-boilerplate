import { $fetch } from 'ofetch'

import type { RequestType } from './types'

export const request = async (config: RequestType) => {
  const {
    url,
    isQuery = true,
    isUploadFile = false,
    isDownloadFile = false,
    method,
    data
  } = config

  const env = useRuntimeConfig()
  const baseURL: any = env.public['API_URL']

  const headers: Record<string, any> = {
    Authorization: 'Bearer ',
    Accept: '*'
  }

  const options: Record<string, any> = {}

  if (isQuery) {
    options['params'] = data
  }

  headers['Content-Type'] = isUploadFile ? 'multipart/form-data' : 'application/json'

  return await new Promise((resolve, reject) => {
    $fetch(url, {
      baseURL,
      headers,
      method,
      responseType: isDownloadFile ? 'blob' : 'json',
      body: data,
      ...options

    }).then((response) => {
      return resolve(response)
    }).catch((error) => {
      return reject(error)
    })
  })
}
