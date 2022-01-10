<template>
  <button
    type="button"
    class="w-full flex items-center space-x-2 outline-none focus:outline-none"
    @click="handleClick"
  >
    <slot>
      <AdminIcon v-if="icon" :icon="icon" />
      <span v-if="title">{{ title }}</span>
    </slot>
  </button>
</template>

<script>
import { useClick } from '@/'

export default {
  emits: ['clicked'],

  props: {
    to: {},

    title: {
      type: String
    },

    icon: {
      type: String
    },

    external: {
      type: Boolean,
      default: false
    }
  },

  setup (props, { emit }) {
    const { click } = useClick(props.to, props.external)

    const handleClick = () => click().then(() => emit('clicked'))

    return { handleClick }
  }
}
</script>
