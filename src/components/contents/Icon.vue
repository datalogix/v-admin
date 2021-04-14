<template>
  <i v-if="icon" class="pi" :class="{
    [`pi-${icon}`]: true,
    ['pi-spin']: spin
  }" />
</template>

<script>
export default {
  props: {
    icon: {
      type: String
    },

    spin: {
      type: Boolean,
      default: false
    }
  }
}
</script>
