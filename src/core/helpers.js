export const applyHelpers = (admin) => {
  // inject
  admin.extend('inject', function (name, obj = {}) {
    const key = `$${name}`

    this[key] = this.app[key] = this.app.config.globalProperties[key] = obj

    if (name !== 'app') {
      this[name] = this[key]
    }
  })

  // hooks
  for (const name of ['prepare', 'booting', 'setup', 'booted']) {
    admin.extend(name, function () {
      this.hook(name, ...arguments)
    })
  }
}
