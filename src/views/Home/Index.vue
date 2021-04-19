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

export default {
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
