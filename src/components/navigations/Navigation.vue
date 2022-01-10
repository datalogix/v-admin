<template>
  <nav>
    <ul class="divide-y divide-gray-700 mb-8">
      <li
        v-for="(item, key) in items"
        :key="key"
      >
        <AdminNavigationGroup
          v-if="item.title && item.items && item.items.length"
          :title="item.title"
          :items="item.items"
          @clicked="$emit('clicked')"
        />

        <AdminNavigationItem
          v-else-if="item.items"
          v-for="(i, k) in item.items"
          v-bind="i"
          :key="k"
          @clicked="$emit('clicked')"
        />

        <AdminNavigationItem
          v-else
          v-bind="item"
          @clicked="$emit('clicked')"
        />
      </li>
    </ul>
  </nav>
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
