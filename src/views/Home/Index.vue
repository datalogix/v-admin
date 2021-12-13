<template>
  <div v-if="loading">
    Carregando...
  </div>

  <div v-else-if="data && data.length">
    <AdminHeader title="Dashboard" />
    <AdminCharts :charts="data" />
  </div>

  <AdminNavigationBox
    v-else
    :items="$admin.navigation.orderBy()"
  />
</template>

<script>
import { useAdmin, useApi } from '@/'
import AdminCharts from '@/components/charts/Charts'
import AdminHeader from '@/components/contents/Header'
import AdminNavigationBox from '@/components/navigations/NavigationBox'

export default {
  components: {
    AdminCharts,
    AdminHeader,
    AdminNavigationBox
  },

  setup () {
    const admin = useAdmin()
    const { response: data, loading } = useApi('/dashboard', admin.options.dashboardOptions, admin.hasDashboard())

    return {
      loading,
      data
    }
  }
}
</script>
