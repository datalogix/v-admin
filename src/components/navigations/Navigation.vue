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
import AdminNavigationGroup from '@/components/navigations/NavigationGroup'
import AdminNavigationItem from '@/components/navigations/NavigationItem'

export default {
  components: {
    AdminNavigationGroup,
    AdminNavigationItem
  },

  emits: ['clicked'],

  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>
