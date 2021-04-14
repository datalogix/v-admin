export const createList = (items = [], namespaced = true) => {
  return {
    namespaced,

    state: {
      items
    },

    getters: {
      all ({ items }) {
        return items
      },

      orderBy: ({ items }) => (key = 'position') => {
        return [...items].sort((a, b) => a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0)
      },

      count ({ items }) {
        return items.length
      },

      getBy: ({ items }) => (id, key = 'id') => {
        return items.find(item => item[key] === id)
      }
    },

    mutations: {
      add ({ items }, item) {
        items.push(item)
      },

      set ({ items }, { index, item }) {
        items.splice(index, 0, item)
      },

      remove ({ items }, { item, key = 'id' }) {
        items.splice(items.findIndex(i => i[key] === item[key]), 1)
      },

      update (state, items) {
        state.items = items
      }
    }
  }
}

export class ListHelper {
  constructor (store, namespace) {
    this.store = store
    this.namespace = namespace
  }

  all () {
    return this.store.getters[`${this.namespace}/all`]
  }

  orderBy (key = 'position') {
    return this.store.getters[`${this.namespace}/orderBy`](key)
  }

  count () {
    return this.store.getters[`${this.namespace}/count`]
  }

  getBy (id, key = 'id') {
    return this.store.getters[`${this.namespace}/getBy`](id, key)
  }

  add (item) {
    this.store.commit(`${this.namespace}/add`, item)
  }

  set (index, item) {
    this.store.commit(`${this.namespace}/set`, { index, item })
  }

  remove (item, key = 'id') {
    this.store.commit(`${this.namespace}/remove`, { item, key })
  }

  update (items) {
    this.store.commit(`${this.namespace}/update`, items)
  }
}
