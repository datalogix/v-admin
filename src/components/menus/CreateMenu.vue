<template>
  <AdminMenuDropdown :items="items">
    <template v-slot:default="{ on }">
      <AdminButton
        v-on="on"
        class="p-button-rounded p-button-success"
        icon="pi pi-plus"
      />
    </template>
  </AdminMenuDropdown>
</template>

<script>
import AdminMenuDropdown from '@/components/menus/MenuDropdown'

export default {
  components: {
    AdminMenuDropdown
  },

  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>
