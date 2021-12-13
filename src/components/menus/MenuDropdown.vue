<template>
  <div class="flex items-center" v-if="items.length">
    <div class="relative">
      <slot :on="{ click() { toggle() }}">
        <AdminButton
          @click="toggle"
          class="p-button-rounded p-button-secondary"
          icon="pi pi-ellipsis-v"
        />
      </slot>

      <GlobalEvents
        v-if="opened"
        @keydown.esc="close"
      />

      <div
        :class="{ hidden: closed }"
        @click="close"
        class="fixed inset-0 h-full w-full z-40 transition-opacity bg-black opacity-50"
      />

      <div
        :class="{ hidden: closed }"
        class="absolute right-0 mt-2 w-60 bg-white border rounded overflow-hidden shadow z-50 overflow-y-auto max-h-80 divide-y"
      >
        <AdminLink
          v-for="(item, key) in items"
          :key="key"
          v-bind="item"
          @clicked="close"
          class="py-4 px-6 text-gray-700 bg-white hover:bg-indigo-500 hover:text-white"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { useToggle } from '@/composables'

export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },

  setup () {
    const { opened, closed, close, toggle } = useToggle()

    return { opened, closed, close, toggle }
  }
}
</script>
