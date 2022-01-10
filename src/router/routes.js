import Error from '@/views/Error/Index.vue'
import Dashboard from '@/views/Dashboard/Index.vue'

export const routes = [
  // Home
  { path: '/', name: 'dashboard', component: Dashboard },

  // Error
  { path: '/error', name: 'error', component: Error, meta: { error: 500 } },
  { path: '/unauthorized', name: 'unauthorized', component: Error, meta: { error: 401 } },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: Error, meta: { error: 404 } }
]
