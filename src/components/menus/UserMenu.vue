<template>
  <AdminMenuDropdown :items="items">
    <template v-slot:default="{ on }">
      <Button class="p-button-secondary p-button-text" v-on="on">
        <Avatar
          class="bg-indigo-500 text-white mr-2"
          shape="circle"
          :icon="user.avatar ? null : 'pi pi-user'"
          :image="user.avatar"
        />

        <span v-if="$admin.options.displayUserName">
          {{ user && user.name ? user.name : $admin.options.name }}
        </span>
      </Button>
    </template>
  </AdminMenuDropdown>
</template>

<script>
import { useAdmin } from '@/admin'

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
