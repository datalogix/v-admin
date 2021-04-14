<template>
  <AdminMenuDropdown :items="items">
    <template v-slot:default="{ on }">
      <Button
        v-on="on"
        class="p-button-rounded p-button-success"
        icon="pi pi-plus"
      />
    </template>
  </AdminMenuDropdown>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>
