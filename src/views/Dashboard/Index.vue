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
import { useApi, useAdmin } from '@/'

export default {

  setup () {
    const admin = useAdmin()
    const { response: data, loading } = useApi('/dashboard', admin.options.dashboadasrdOptions, admin.hasDashboard())

    return {
      loading,
      data
    }
  }
}
</script>
