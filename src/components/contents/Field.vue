<template>
  <div class="mb-6">
    <label>
      <div
        class="mb-1 font-medium text-gray-500"
        v-if="label"
        v-html="label"
      />

      <slot />
    </label>

    <em
      class="block mt-2 text-gray-500 font-light text-sm"
      v-if="help"
      v-html="help"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,

  props: {
    label: {
      type: String
    },

    help: {
      type: String
    }
  }
}
</script>
