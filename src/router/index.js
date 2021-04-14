import { createRouter as baseCreateRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router/routes'

export const createRouter = (admin) => {
  const router = baseCreateRouter({
    history: createWebHistory(admin.options.base),
    routes
  })

  admin.extend({
    addRoute (route) {
      this.$router.addRoute(route)
    },

    middleware (middleware) {
      this.$router.beforeEach(middleware)
    }
  })

  return router
}
