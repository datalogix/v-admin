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
  if (response.data && response.data.message) {
    admin.notify(response.data.message, { type: response.data.messageType || 'success' })
  }

  return Promise.resolve(response)
}

const onResponseError = (admin) => (error) => {
  if (error) {
    let message = error.message || error

    if (error.response && error.response.status !== 422 && error.response.data && error.response.data.message) {
      message = error.response.data.message
    }

    admin.notify(message, { type: 'error' })
  }

  return Promise.reject(error)
}
