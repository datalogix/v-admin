import '@/assets/css/tailwind.css'
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import PrimeVue from 'primevue/config'
import ConfirmationService from 'primevue/confirmationservice'

import { GlobalEvents } from 'vue-global-events'

import AdminButton from 'primevue/button'
import AdminField from '@/components/contents/Field'
import AdminIcon from '@/components/contents/Icon'
import AdminLink from '@/components/contents/Link'

export * as AdminCharts from '@/components/charts/Charts'
export * as AdminBox from '@/components/contents/Box'
export * as AdminHeader from '@/components/contents/Header'
export * as AdminLoading from '@/components/contents/Loading'
export * as AdminSubtitle from '@/components/contents/Subtitle'
export * as AdminTitle from '@/components/contents/Title'

export * as AdminCreateMenu from '@/components/menus/CreateMenu'
export * as AdminMenuDropdown from '@/components/menus/MenuDropdown'
export * as AdminUserMenu from '@/components/menus/UserMenu'

export * as AdminGlobalSearch from '@/components/navigations/GlobalSearch'
export * as AdminNavigation from '@/components/navigations/Navigation'
export * as AdminNavigationBox from '@/components/navigations/NavigationBox'
export * as AdminNavigationGroup from '@/components/navigations/NavigationGroup'
export * as AdminNavigationItem from '@/components/navigations/NavigationItem'
export * as AdminSidebar from '@/components/navigations/Sidebar'

export const registerComponents = (admin) => (app) => {
  app.use(PrimeVue)
  app.use(ConfirmationService)

  app.component('GlobalEvents', GlobalEvents)
  app.component('AdminButton', AdminButton)
  app.component('AdminField', AdminField)
  app.component('AdminIcon', AdminIcon)
  app.component('AdminLink', AdminLink)
}
