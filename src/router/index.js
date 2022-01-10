import { createRouter as baseCreateRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

export const createRouter = (admin) => {
  const router = baseCreateRouter({
    history: createWebHistory(admin.options.base),
    routes
  })

  admin.extend({
    addRoute (route) {
      (Array.isArray(route) ? route : [route]).forEach(route => {
        this.$router.addRoute(route)
      })
    },

    middleware (middleware) {
      this.$router.beforeEach(middleware)
    }
  })

  return router
}
