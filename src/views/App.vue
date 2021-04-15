<template>
  <AdminLoading v-if="$admin.isLoading()" />

  <transition v-else name="fade">
    <component :is="$route.meta.layout || AppLayout">
      <component :is="$admin.options.router || 'router-view'" />
    </component>
  </transition>
</template>

<script>
import { useAdmin } from '@/admin'
import AppLayout from '@/layouts/App'

export default {
  setup () {
    const admin = useAdmin()

    admin.ready()

    return {
      AppLayout
    }
  }
}
</script>
