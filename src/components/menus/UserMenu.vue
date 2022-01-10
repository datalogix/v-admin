<template>
  <AdminMenuDropdown :items="items">
    <template v-slot:default="{ on }">
      <AdminButton class="p-button-secondary p-button-text" v-on="on">
        <AdminAvatar
          class="mr-2"
          style="background-color: #6366f1; color: #fff"
          shape="circle"
          :icon="user.avatar ? null : 'pi pi-user'"
          :image="user.avatar"
        />

        <span v-if="$admin.options.displayUserName">
          {{ user && user.name ? user.name : $admin.options.name }}
        </span>
      </AdminButton>
    </template>
  </AdminMenuDropdown>
</template>

<script>
import { useAdmin } from '@/'

export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },

  setup () {
    const admin = useAdmin()

    return {
      user: admin.getUser()
    }
  }
}
</script>
