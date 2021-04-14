<template>
  <AdminLoading v-if="$admin.isLoading()" />

  <transition v-else name="fade">
    <component :is="$route.meta.layout || AppLayout">
      <router-view />
    </component>
  </transition>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { useAdmin } from '@/admin'

export default {
  setup () {
    const admin = useAdmin()

    admin.ready()

    return {
      AppLayout: defineAsyncComponent(() => import('@/layouts/App'))
    }
  }
}
</script>
