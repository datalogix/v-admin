<template>
  <h1 class="text-xl sm:text-2xl lg:text-3xl font-medium">
    <slot>{{ title }}</slot>
  </h1>
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
