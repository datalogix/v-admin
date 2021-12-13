<template>
  <div class="flex h-screen bg-gray-200 text-gray-700">
    <AdminSidebar ref="sidebar">
      <AdminLink to="/" class="justify-center my-8">
        <img
          v-if="$admin.options.logo"
          :src="$admin.options.logo"
          :alt="$admin.options.name"
          class="max-h-32 mx-2"
        />

        <span
          v-else
          v-text="$admin.options.name"
          class="text-white text-2xl mx-2 font-semibold"
        />
      </AdminLink>

      <AdminNavigation
        :items="$admin.navigation.orderBy()"
        @clicked="$refs.sidebar.isMobile() ? $refs.sidebar.close() : ''"
      />
    </AdminSidebar>

    <div class="flex-1 flex flex-col overflow-hidden">
      <header class="flex items-center justify-between px-2 bg-white border-b-4 border-indigo-500 text-gray-500">
        <div class="flex items-center">
          <AdminButton
            icon="pi pi-bars"
            class="p-button-secondary p-button-text"
            @click="$refs.sidebar.toggle()"
          />

          <AdminGlobalSearch v-if="$admin.hasGlobalSearch()" />
        </div>

        <div class="flex items-center space-x-4 mr-2">
          <AdminCreateMenu :items="$admin.createMenu.orderBy()" />
          <AdminUserMenu :items="$admin.userMenu.orderBy()" />
        </div>
      </header>

      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        <div class="container mx-auto p-6">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import AdminCreateMenu from '@/components/menus/CreateMenu'
import AdminUserMenu from '@/components/menus/UserMenu'
import AdminGlobalSearch from '@/components/navigations/GlobalSearch'
import AdminNavigation from '@/components/navigations/Navigation'
import AdminSidebar from '@/components/navigations/Sidebar'

export default {
  components: {
    AdminCreateMenu,
    AdminUserMenu,
    AdminGlobalSearch,
    AdminNavigation,
    AdminSidebar
  }
}
</script>
