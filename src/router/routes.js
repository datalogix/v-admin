import HomeIndex from '@/views/Home/Index'
import ErrorIndex from '@/views/Error/Index'

export const routes = [
  // Home
  { path: '/', name: 'home', component: HomeIndex },

  // Error
  { path: '/error', name: 'error', component: ErrorIndex, meta: { error: 500 } },
  { path: '/unauthorized', name: 'unauthorized', component: ErrorIndex, meta: { error: 401 } },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: ErrorIndex, meta: { error: 404 } }
]
