export const applyHelpers = (admin) => {
  // inject
  admin.extend('inject', function (name, obj = {}) {
    const key = `$${name}`

    this[name] = this[key] = this.app[key] = this.app.config.globalProperties[key] = obj
  })

  // hooks
  for (const name of ['prepare', 'booting', 'setup', 'booted']) {
    admin.extend(name, function () {
      this.hook(name, ...arguments)
    })
  }
}
