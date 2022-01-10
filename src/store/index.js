import { createStore as baseCreateStore } from 'vuex'
import { ListHelper, createList } from './createList'

export { ListHelper, createList }

export const createStore = (admin) => baseCreateStore({
  strict: process.env.NODE_ENV !== 'production'
})
