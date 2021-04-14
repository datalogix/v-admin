<template>
  <h2 class="text-lg sm:text-xl lg:text-2xl font-medium">
    <slot>{{ title }}</slot>
  </h2>
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
