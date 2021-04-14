import { useAdmin } from '@/admin'

export const useClick = (to, external = false) => {
  const admin = useAdmin()

  const click = async () => {
    if (typeof to === 'function') {
      to = await to()
    }

    if (!to) {
      return admin.notify('Nenhuma ação definida')
    }

    if (typeof to === 'string' && to.startsWith('http')) {
      if (external) {
        return window.open(to, '_blank')
      }

      window.location.href = to
      return
    }

    if (external) {
      return window.open(admin.router.resolve(to).href, '_blank')
    }

    return admin.router.push(to)
  }

  return { click }
}
