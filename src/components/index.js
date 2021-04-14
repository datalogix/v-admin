import 'primevue/resources/themes/bootstrap4-light-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import PrimeVue from 'primevue/config'
import ConfirmationService from 'primevue/confirmationservice'

import { GlobalEvents } from 'vue-global-events'

import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Message from 'primevue/message'

import AdminCharts from '@/components/charts/Charts'
import AdminBox from '@/components/contents/Box'
import AdminField from '@/components/contents/Field'
import AdminHeader from '@/components/contents/Header'
import AdminIcon from '@/components/contents/Icon'
import AdminLink from '@/components/contents/Link'
import AdminLoading from '@/components/contents/Loading'
import AdminSubtitle from '@/components/contents/Subtitle'
import AdminTitle from '@/components/contents/Title'

import AdminCreateMenu from '@/components/menus/CreateMenu'
import AdminMenuDropdown from '@/components/menus/MenuDropdown'
import AdminUserMenu from '@/components/menus/UserMenu'

import AdminGlobalSearch from '@/components/navigations/GlobalSearch'
import AdminNavigation from '@/components/navigations/Navigation'
import AdminNavigationBox from '@/components/navigations/NavigationBox'
import AdminNavigationGroup from '@/components/navigations/NavigationGroup'
import AdminNavigationItem from '@/components/navigations/NavigationItem'
import AdminSidebar from '@/components/navigations/Sidebar'

export const registerComponents = (admin) => (app) => {
  app.use(PrimeVue)
  app.use(ConfirmationService)

  app.component('GlobalEvents', GlobalEvents)

  app.component('Avatar', Avatar)
  app.component('Button', Button)
  app.component('InputText', InputText)
  app.component('Message', Message)

  app.component('AdminCharts', AdminCharts)
  app.component('AdminBox', AdminBox)
  app.component('AdminField', AdminField)
  app.component('AdminHeader', AdminHeader)
  app.component('AdminIcon', AdminIcon)
  app.component('AdminLink', AdminLink)
  app.component('AdminLoading', AdminLoading)
  app.component('AdminSubtitle', AdminSubtitle)
  app.component('AdminTitle', AdminTitle)

  app.component('AdminCreateMenu', AdminCreateMenu)
  app.component('AdminMenuDropdown', AdminMenuDropdown)
  app.component('AdminUserMenu', AdminUserMenu)

  app.component('AdminGlobalSearch', AdminGlobalSearch)
  app.component('AdminNavigation', AdminNavigation)
  app.component('AdminNavigationBox', AdminNavigationBox)
  app.component('AdminNavigationGroup', AdminNavigationGroup)
  app.component('AdminNavigationItem', AdminNavigationItem)
  app.component('AdminSidebar', AdminSidebar)
}
