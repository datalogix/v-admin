<template>
  <AdminLoading v-if="$admin.isLoading()" />

  <transition v-else name="fade">
    <component :is="$route.meta.layout || $admin.options.layout">
      <component :is="$admin.options.router" />
    </component>
  </transition>
</template>

<script>
import { useAdmin } from '@/admin'

export default {
  setup () {
    const admin = useAdmin()

    admin.ready()
  }
}
</script>
