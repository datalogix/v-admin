<template>
  <div
    v-if="title && items.length"
    v-text="title"
    class="border-b border-gray-800 text-gray-500 py-2 px-3 mt-8"
  />

  <nav class="dividae-y divide-gray-700 mb-8">
    <AdminNavigationItem
      v-for="(item, key) in ordered"
      :key="key"
      v-bind="item"
      @clicked="$emit('clicked')"
    />
  </nav>
</template>

<script>
import AdminNavigationItem from '@/components/navigations/NavigationItem'

export default {
  components: {
    AdminNavigationItem
  },

  emits: ['clicked'],

  props: {
    title: {
      typr: String
    },

    items: {
      type: Array,
      default: () => []
    }
  },

  setup (props) {
    return {
      ordered: [...props.items].sort((a, b) => {
        return a.position > b.position ? 1 : a.position < b.position ? -1 : 0
      })
    }
  }
}
</script>
