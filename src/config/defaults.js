import { createApp } from 'vue'
import AppLayout from '@/layouts/App'
import App from '@/views/App'

export const DEFAULTS = {
  app: createApp(App),
  router: 'router-view',
  layout: AppLayout,
  el: '#app',
  name: 'Datalogix',
  locale: 'pt-BR',
  logo: null,
  base: process.env.ADMIN_BASE || '/admin',
  apiBaseURL: process.env.ADMIN_API_BASE_URL,
  loading: 'loading',
  loadingTimeout: 300,
  displayUserName: true,
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
