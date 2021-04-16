<template>
  <div
    :class="opened ? 'block' : 'hidden'"
    @click="close"
    class="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"
  />

  <GlobalEvents
    v-if="opened"
    @keydown.esc="close"
  />

  <div
    :class="opened ? 'translate-x-0 ease-out lg:translate-x-0 lg:static lg:inset-0' : '-translate-x-full ease-in'"
    class="fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto"
  >
    <slot />
  </div>
</template>

<script>
import { onBeforeMount, onMounted, onUnmounted } from 'vue'
import { useToggle } from '@/composables'

export default {
  setup () {
    const { opened, open, close, toggle } = useToggle()
    let sidebarDesktop

    const isMobile = () => {
      return window && window.innerWidth < 990
    }

    const check = () => {
      if (isMobile() || sidebarDesktop === false) {
        close()
      } else {
        open()
      }
    }

    onBeforeMount(() => {
      if (window.localStorage.getItem('sidebar')) {
        sidebarDesktop = window.localStorage.getItem('sidebar') === 'true'
      }
    })

    onMounted(() => {
      window.addEventListener('load', check)
      window.addEventListener('resize', check)
      check()
    })

    onUnmounted(() => {
      window.removeEventListener('load', check)
      window.removeEventListener('resize', check)
    })

    const handleToggle = () => {
      toggle()

      if (!isMobile()) {
        sidebarDesktop = opened.value
        window.localStorage.setItem('sidebar', sidebarDesktop)
      }
    }

    return { opened, open, close, toggle: handleToggle, isMobile }
  }
}
</script>
