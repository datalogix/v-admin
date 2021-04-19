import { useAdmin } from '@/'

export const useClick = (to, external = false) => {
  const admin = useAdmin()

  return {
    click: async () => {
      return admin.visit(to, external)
    }
  }
}
