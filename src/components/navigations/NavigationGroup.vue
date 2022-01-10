<template>
  <div
    v-text="title"
    class="border-b border-gray-800 text-gray-500 py-2 px-3 mt-8"
  />

  <ul class="divide-y divide-gray-700 mb-8">
    <li
      v-for="(item, key) in ordered"
      :key="key"
    >
      <AdminNavigationItem
        v-bind="item"
        @clicked="$emit('clicked')"
      />
    </li>
  </ul>
</template>

<script>
export default {
  emits: ['clicked'],

  props: {
    title: {
      type: String
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
