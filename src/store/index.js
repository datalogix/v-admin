import { createStore as baseCreateStore } from 'vuex'
import { createList, ListHelper } from '@/store/createList'

export { ListHelper }

export const createStore = ({ options }) => baseCreateStore({
  strict: process.env.NODE_ENV !== 'production',

  modules: {
    navigation: createList(options.navigation),
    createMenu: createList(options.createMenu),
    userMenu: createList(options.userMenu)
  }
})
