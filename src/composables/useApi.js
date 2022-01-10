import { reactive, toRefs, watchEffect } from 'vue'
import { useAdmin } from '@/'

export const useApi = (url, options = {}, autoExecute = true) => {
  const admin = useAdmin()

  if (!admin.api) {
    throw new Error('No api provided.')
  }

  const state = reactive({
    response: null,
    loading: null,
    error: null
  })

  const exec = async () => {
    state.response = null
    state.loading = true
    state.error = null

    try {
      state.response = await admin.api(url, options)
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }

  if (autoExecute) {
    watchEffect(() => exec())
  }

  return {
    ...toRefs(state),
    exec
  }
}
