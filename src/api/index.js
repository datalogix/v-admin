import { create } from 'axios'
import defu from 'defu'
import { DEFAULTS } from './defaults'

export const createApi = (admin, options = {}) => {
  const axios = create(defu(options, {
    baseURL: admin.options.apiBaseURL || `/${admin.options.base.trim('/')}/api`
  }, DEFAULTS))

  axios.interceptors.response.use(onResponseSuccess(admin), onResponseError(admin))

  return axios
}

const onResponseSuccess = (admin) => (response) => {
  const data = response && response.data ? response.data : {}
  const message = data.message

  if (message) {
    admin.notify(message, { type: 'success', ...(data.messageOptions || {}) })
  }

  return Promise.resolve(response)
}

const onResponseError = (admin) => (error) => {
  if (error) {
    const response = error.response
    const data = response && response.data ? response.data : {}
    const message = response && response.status !== 422 && data.message ? data.message : error.message || error

    if (message) {
      admin.notify(message, { type: 'error', ...(data.messageOptions || {}) })
    }
  }

  return Promise.reject(error)
}
