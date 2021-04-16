import Hookable from 'hookable'
import { inject } from 'vue'
import { mergeConfig } from '@/config'
import { applyHelpers } from '@/core/helpers'
import { applyState } from '@/core/state'
import { applyModules } from '@/core/modules'
import { applyPlugins } from '@/core/plugins'

export * from '@/composables'

export const ADMIN_KEY = Symbol('Admin')

export class Admin extends Hookable {
  constructor (options = {}) {
    super()

    this.options = mergeConfig(options)
    this.showLoading()

    applyHelpers(this)
    applyState(this)
    applyModules(this)
    applyPlugins(this)
  }

  extend () {
    const o = arguments.length === 1 ? arguments[0] : { [arguments[0]]: arguments[1] }
    const methods = Object.getOwnPropertyNames(o)

    for (const method of methods) {
      if (typeof o[method] !== 'function' || typeof this[method] !== 'undefined') continue

      this[method] = function () {
        const result = o[method].call(this, ...arguments)

        return typeof result === 'undefined' ? this : result
      }
    }
  }

  /**
   * Init
   */

  async createAdminApp () {
    if (typeof this.options.app === 'function') {
      return this.options.app(this)
    }

    return this.options.app
  }

  async init () {
    if (this.app) return

    this.showLoading()

    this.app = await this.createAdminApp()

    await this.callHook('init', this, this.app)

    this.app.provide(ADMIN_KEY, this)

    await this.callHook('booting', this, this.app)

    this.app.mount(this.options.el)

    await this.callHook('booted', this, this.app)

    this.hideLoading()
  }

  async ready () {
    await this.callHook('setup', this, this.app)
  }

  /**
   * Loading
   */

  showLoading () {
    if (typeof this.options.loading !== 'string' || !document || !document.body) return

    document.body.classList.add(this.options.loading)
  }

  hideLoading () {
    if (typeof this.options.loading !== 'string' || !document || !document.body) return

    setTimeout(() => {
      document.body.classList.remove(this.options.loading)
    }, this.options.loadingTimeout || 0)
  }

  /**
   * Visit
   */

  async visit (to, external = false) {
    if (typeof to === 'function') {
      to = await to()
    }

    if (!to) {
      return this.notify('Nenhuma ação definida')
    }

    if (typeof this.options.clickHandler === 'function') {
      return await this.options.clickHandler(to, external)
    }

    if (typeof to === 'string' && to.startsWith('http')) {
      if (external) {
        return window.open(to, '_blank')
      }

      window.location.href = to
      return
    }

    if (external) {
      return window.open(this.router.resolve(to).href, '_blank')
    }

    return this.router.push(to)
  }
}

export const useAdmin = () => inject(ADMIN_KEY)

export const createAdmin = async (options) => {
  try {
    const admin = new Admin(options)

    await admin.init()

    return admin
  } catch (error) {
    console.error('[ERROR] [ADMIN]', error)
  }
}
