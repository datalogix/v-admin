<template>
  <template
    v-for="(item, key) in items"
    :key="key"
  >
    <AdminNavigationGroup
      v-if="item.items"
      :title="item.title"
      :items="item.items"
      @clicked="$emit('clicked')"
    />

    <AdminNavigationItem
      v-else
      v-bind="item"
      @clicked="$emit('clicked')"
    />
  </template>
</template>

<script>
export default {
  emits: ['clicked'],

  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>
