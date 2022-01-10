import App from '@/views/App.vue'
import AppLayout from '@/layouts/App.vue'

export const DEFAULTS = {
  app: App,
  layout: AppLayout,
  el: '#app',

  name: 'Datalogix',
  logo: null,
  displayUserName: true,
  locale: 'pt-BR',

  loading: 'admin-loading',
  loadingTimeout: 300,

  base: import.meta.env.ADMIN_BASE || '/admin',
  router: 'router-view',

  axios: {
    withCredentials: true
  },

  notification: {},

  user: null,

  dashboard: true,
  dashboardOptions: {},

  globalSearch: true,
  globalSearchOptions: {
    path: '/search',
    options: {}
  },

  createMenu: [],
  userMenu: [],
  navigation: [],

  plugins: [],
  modules: []
}
