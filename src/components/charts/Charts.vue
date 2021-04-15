<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
    <div
      v-for="(chart, index) in charts"
      :key="index"
      :class="{[`lg:col-span-${chart.col ? chart.col : 6}`]: true}"
    >
      <Chart
        :type="chart.type"
        :data="chart.data"
        :options="chart.options"
        :width="chart.width"
        :height="chart.height"
      />
    </div>
  </div>
</template>

<script>
import Chart from 'primevue/chart'

export default {
  props: {
    charts: {
      type: Array,
      default: () => []
    }
  },

  components: {
    Chart
  }
}
</script>
