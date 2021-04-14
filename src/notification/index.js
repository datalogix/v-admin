import Toast, { useToast } from 'vue-toastification'

import 'vue-toastification/dist/index.css'

export const createNotification = (admin) => {
  const toast = useToast()

  admin.inject('toast', toast)
  admin.inject('notify', toast)
  admin.inject('notification', toast)

  return Toast
}
