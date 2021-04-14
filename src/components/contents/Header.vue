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
export default {
  props: {
    title: {
      type: String
    }
  }
}
</script>
