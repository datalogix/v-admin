export const applyModules = (admin) => {
  admin.modules = admin.options.modules || []

  admin.prepare(async (admin) => {
    await admin.loadModules()
  })

  admin.extend({
    registerModule (module) {
      this.modules.push(module)
    },

    async loadModules () {
      await this.callHook('before:modules', this, this.app)

      for (const module of this.modules) {
        const $module = await module(this, this.app)

        if (typeof $module.setup === 'function') {
          this.setup((admin, app) => $module.setup(admin, app))
        }

        if (typeof $module.booting === 'function') {
          this.booting((admin, app) => $module.booting(admin, app))
        }

        if (typeof $module.booted === 'function') {
          this.booted((admin, app) => $module.booted(admin, app))
        }
      }

      await this.callHook('after:modules', this, this.app)
    }
  })
}
