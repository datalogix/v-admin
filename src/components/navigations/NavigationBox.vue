<template>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
    <template v-for="(group, groupKey) in items" :key="groupKey">
      <AdminSubtitle
        v-if="group.items"
        class="col-span-full"
        :title="group.title"
      />

      <AdminLink
        v-for="(item, key) in ordered(group.items || [group])"
        :key="key"
        class="flex-col space-y-4 p-6 bg-white text-gray-500 rounded-lg text-sm md:text-lg shadow-lg hover:bg-opacity-75 hover:scale-110 transform transition-all"
      >
        <AdminIcon v-if="item.icon" :icon="item.icon" class="text-2xl" />
        <span v-if="item.title">{{ item.title }}</span>
      </AdminLink>
    </template>
  </div>
</template>

<script>
import AdminSubtitle from '@/components/contents/Subtitle'

export default {
  components: {
    AdminSubtitle
  },

  props: {
    items: {
      type: Array,
      default: () => []
    }
  },

  setup () {
    const ordered = (items) => {
      return [...items].sort((a, b) => {
        return a.position > b.position ? 1 : a.position < b.position ? -1 : 0
      })
    }

    return {
      ordered
    }
  }
}
</script>
