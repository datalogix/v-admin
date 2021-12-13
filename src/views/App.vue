<template>
  <AdminLoading v-if="$admin.isLoading()" />

  <transition v-else name="fade">
    <component :is="$route.meta.layout || $admin.options.layout">
      <component :is="$admin.options.router" />
    </component>
  </transition>
</template>

<script>
import { useAdmin } from '@/'
import AdminLoading from '@/components/contents/Loading'

export default {
  components: {
    AdminLoading
  },

  setup () {
    const admin = useAdmin()

    admin.ready()
  }
}
</script>
