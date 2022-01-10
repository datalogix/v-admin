import PrimeVue from 'primevue/config'
import ConfirmationService from 'primevue/confirmationservice'

import { GlobalEvents } from 'vue-global-events'
import AdminAvatar from 'primevue/avatar'
import AdminButton from 'primevue/button'
import AdminMessage from 'primevue/message'

import AdminCharts from './charts/Charts.vue'

import AdminBox from './contents/Box.vue'
import AdminField from './contents/Field.vue'
import AdminHeader from './contents/Header.vue'
import AdminIcon from './contents/Icon.vue'
import AdminLink from './contents/Link.vue'
import AdminLoading from './contents/Loading.vue'
import AdminSubtitle from './contents/Subtitle.vue'
import AdminTitle from './contents/Title.vue'

import AdminCreateMenu from './menus/CreateMenu.vue'
import AdminMenuDropdown from './menus/MenuDropdown.vue'
import AdminUserMenu from './menus/UserMenu.vue'

import AdminGlobalSearch from './navigations/GlobalSearch.vue'
import AdminNavigation from './navigations/Navigation.vue'
import AdminNavigationBox from './navigations/NavigationBox.vue'
import AdminNavigationGroup from './navigations/NavigationGroup.vue'
import AdminNavigationItem from './navigations/NavigationItem.vue'
import AdminSidebar from './navigations/Sidebar.vue'

export const registerComponents = (admin) => (app) => {
  app.use(PrimeVue)
  app.use(ConfirmationService)

  app.component('GlobalEvents', GlobalEvents)
  app.component('AdminAvatar', AdminAvatar)
  app.component('AdminButton', AdminButton)
  app.component('AdminMessage', AdminMessage)

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
