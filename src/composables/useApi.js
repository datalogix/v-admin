import { reactive, toRefs, watchEffect } from 'vue'
import { useAdmin } from '@/admin'

export const useApi = (url, options = {}, autoExecute = true) => {
  const admin = useAdmin()
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
      const response = await admin.api(url, options)
      state.response = response.data
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
