<template>
  <div class="relative mx-2">
    <div
      class="relative"
      :class="{ 'z-50' : opened }"
    >
      <form
        method="post"
        @submit.prevent="submit"
      >
        <span class="p-input-icon-left">
          <AdminIcon icon="search" />

          <InputText
            @keyup.enter="submit"
            v-model="search"
            type="text"
            placeholder="Search"
            class="input-global-search"
          />
        </span>
      </form>
    </div>

    <GlobalEvents
      v-if="opened"
      @keydown.esc="clear"
    />

    <div
      :class="{ hidden: closed }"
      @click="clear"
      class="fixed inset-0 h-full w-full z-40 transition-opacity bg-black opacity-50"
    />

    <div
      v-show="opened"
      class="absolute left-0 mt-2 bg-white rounded border shadow overflow-hidden z-50 overflow-y-auto max-h-80 md:w-80 lg:w-96 divide-y"
    >
      <div
        v-if="!validSearch"
        class="px-4 py-3 italic text-red-400"
        v-text="'Digite pelo menos 2 caracteres'"
      />

      <div
        v-else-if="searching"
        class="flex items-center px-4 py-3 text-gray-700 space-x-2"
      >
        <AdminIcon icon="spinner" spin />
        <span>Pesquisando...</span>
      </div>

      <div
        v-else-if="!items.length"
        class="px-4 py-3 text-gray-700"
      >
        Nenhum registro encontrado
      </div>

      <AdminLink
        v-else
        v-for="(item, i) in items"
        :key="i"
        v-bind="item"
        @clicked="clear"
        class="py-3 px-4 text-gray-700 hover:text-white hover:bg-indigo-500 -mx-2"
      >
        <div
          v-if="item.image || item.icon || item.letter"
          class="flex-shrink-0 mx-2 flex justify-center items-center bg-white border shadow h-8 w-8 rounded-full overflow-hidden uppercase text-gray-700"
        >
          <img
            v-if="item.image"
            :src="item.image"
            class="object-cover w-full h-full"
          />

          <AdminIcon
            v-else-if="item.icon"
            :icon="item.icon"
          />

          <span
            v-else
            v-text="String(item.letter).substring(0, 1).toUpperCase()"
          />
        </div>

        <div class="mx-2">
          <div
            class="truncate w-48"
            :class="{ 'font-semibold': !(item.image || item.icon || item.letter)}"
            v-text="item.title"
          />

          <div
            class="text-sm truncate w-48"
            v-text="item.subtitle"
          />
        </div>
      </AdminLink>
    </div>
  </div>
</template>

<script>
import { computed, reactive, toRefs, watch } from 'vue'
import defu from 'defu'
import InputText from 'primevue/inputtext'
import { useAdmin, useApi, useToggle } from '@/'

export default {
  components: {
    InputText
  },

  setup () {
    const admin = useAdmin()
    const { opened, closed, open, close } = useToggle()

    const state = reactive({
      searching: false,
      search: '',
      items: []
    })

    const options = defu({ params: { q: state.search } }, admin.options.globalSearchOptions.options)
    const { response, loading, exec } = useApi(admin.options.globalSearchOptions.path, options, false)

    const clear = () => {
      close()

      state.searching = false
      state.search = ''
      state.items = []
    }

    const validSearch = computed(() => state.search.length >= 2)

    const submit = () => {
      if (!state.search.length) {
        return clear()
      }

      open()

      if (!validSearch.value || state.searching) {
        return
      }

      state.searching = true

      setTimeout(() => {
        watch([loading], () => {
          state.items = response.value ? response : []
          state.searching = false
        })

        exec()
      }, 1000)
    }

    const { searching, search, items } = toRefs(state)

    watch([search], submit)

    return {
      searching,
      search,
      items,
      opened,
      closed,
      validSearch,
      clear,
      submit
    }
  }
}
</script>

<style scoped>
.input-global-search {
  @apply md:w-80 lg:w-96 !important;
}
</style>
