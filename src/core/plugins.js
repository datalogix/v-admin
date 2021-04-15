import { createApi } from '@/api'
import { registerComponents } from '@/components'
import { createNotification } from '@/notification'
import { createRouter } from '@/router'
import { createStore } from '@/store'
import { createTranslations } from '@/translations'

export const applyPlugins = (admin) => {
  admin.hook('init', async (admin, app) => {
    const api = createApi(admin)
    const notification = createNotification(admin)
    const router = createRouter(admin)
    const store = createStore(admin)

    admin.inject('admin', admin)
      .inject('api', api)
      .inject('router', router)
      .inject('store', store)

    await admin.callHook('prepare', admin, app)

    app.use(notification)
    app.use(router)
    app.use(store)
    app.use(registerComponents(admin))
    app.use(createTranslations(admin))

    admin.options.plugins.forEach(plugin => {
      app.use(...plugin)
    })

    admin.inject('i18n', app.config.globalProperties.$i18n)
  })
}
