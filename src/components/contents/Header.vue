<template>
  <header class="flex items-center justify-between mb-4">
    <AdminTitle>
      <slot>{{ title }}</slot>
    </AdminTitle>

    <div class="flex items-center justify-between">
      <slot name="actions" />
    </div>
  </header>
</template>

<script>
import AdminTitle from '@/components/contents/Title'

export default {
  components: {
    AdminTitle
  },

  props: {
    title: {
      type: String
    }
  }
}
</script>
