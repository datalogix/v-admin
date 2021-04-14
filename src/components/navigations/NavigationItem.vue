<template>
  <AdminLink
    @clicked="$emit('clicked')"
    class="py-4 px-8 text-gray-400 hover:bg-gray-500 hover:bg-opacity-25 hover:text-gray-100"
  />
</template>

<script>
export default {
  emits: ['clicked']
}
</script>
