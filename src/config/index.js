import defu from 'defu'
import { DEFAULTS } from './defaults'

export const mergeConfig = (options = {}) => {
  return defu(options, DEFAULTS)
}
