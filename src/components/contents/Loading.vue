<template>
  <div class="fixed bg-gray-700 inset-0 flex flex-col items-center justify-center text-white">
    <slot>
      <AdminIcon
        spin
        :icon="icon || 'spinner'"
        class="text-4xl"
      />
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String
    }
  }
}
</script>
