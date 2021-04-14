import { reactive } from 'vue'
import { ListHelper } from '@/store'

export const applyState = (admin) => {
  const $state = admin.$state = reactive({
    loading: true,
    user: null,
    dashboard: admin.options.dashboard,
    globalSearch: admin.options.globalSearch
  })

  admin.booting((admin, app) => {
    admin.navigation = new ListHelper(app.$store, 'navigation')
    admin.createMenu = new ListHelper(app.$store, 'createMenu')
    admin.userMenu = new ListHelper(app.$store, 'userMenu')

    admin.setUser(admin.options.user)
  })

  admin.booted((admin, app) => {
    admin.loaded()
  })

  admin.extend({
    isLoading () {
      return $state.loading
    },

    loaded () {
      $state.loading = false
    },

    hasDashboard () {
      return $state.dashboard
    },

    enableDashboard () {
      $state.dashboard = true
    },

    disableDashboard () {
      $state.dashboard = false
    },

    hasGlobalSearch () {
      return $state.globalSearch
    },

    enableGlobalSearch () {
      $state.globalSearch = true
    },

    disableGlobalSearch () {
      $state.globalSearch = false
    },

    getUser () {
      return $state.user
    },

    async setUser (user = null) {
      $state.user = user

      if (user && typeof user.dashboard !== 'undefined' ? user.dashboard : this.options.dashboard) {
        this.enableDashboard()
      } else {
        this.disableDashboard()
      }

      if (user && typeof user.globalSearch !== 'undefined' ? user.globalSearch : this.options.globalSearch) {
        this.enableGlobalSearch()
      } else {
        this.disableGlobalSearch()
      }

      this.createMenu && this.createMenu.update((user || {}).createMenu || this.options.createMenu)
      this.userMenu && this.userMenu.update((user || {}).userMenu || this.options.userMenu)
      this.navigation && this.navigation.update((user || {}).navigation || this.options.navigation)

      await this.callHook('user:update', this, user)
    }
  })
}
