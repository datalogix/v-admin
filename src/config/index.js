import defu from 'defu'
import { DEFAULTS } from '@/config/defaults'

export const mergeConfig = (options = {}) => {
  return defu(options, DEFAULTS)
}
