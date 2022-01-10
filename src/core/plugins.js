import { createApi } from '@/api'
import { createNotification } from '@/notification'
import { registerComponents } from '@/components'
import { createRouter } from '@/router'
import { createStore } from '@/store'
import { createTranslations } from '@/translations'

export const applyPlugins = (admin) => {
  admin.hook('init', async (admin, app) => {
    const api = createApi(admin, admin.options.axios || {})
    const notification = createNotification(admin)
    const router = createRouter(admin)
    const store = createStore(admin)

    admin.inject('admin', admin)
    admin.inject('api', api)
    admin.inject('router', router)
    admin.inject('store', store)

    await admin.callHook('prepare', admin, app)

    app.use(notification, admin.options.notification || {})
    app.use(router)
    app.use(store)
    app.use(registerComponents(admin))
    app.use(createTranslations(admin))

    admin.options.plugins.forEach(async plugin => {
      const p = Array.isArray(plugin) ? plugin : [plugin, {}]

      app.use(await p[0](admin), p[1])
    })

    admin.inject('i18n', app.config.globalProperties.$i18n)
  })
}
