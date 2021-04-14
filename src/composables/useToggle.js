import { reactive, toRefs } from 'vue'

export const useToggle = (initial = false) => {
  const state = reactive({
    opened: initial,
    closed: !initial
  })

  const open = () => {
    state.opened = true
    state.closed = false
  }

  const close = () => {
    state.opened = false
    state.closed = true
  }

  const toggle = () => {
    state.opened = !state.opened
    state.closed = !state.closed
  }

  return {
    ...toRefs(state),
    open,
    close,
    toggle
  }
}
