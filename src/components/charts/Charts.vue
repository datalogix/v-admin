<template>
  <div class="grid grid-cols-12 gap-10">
    <div
      v-for="(chart, index) in charts"
      class="col-span-12 md:col-span-6"
      :key="index"
      :class="{
        'lg:col-span-1': chart.col === 1,
        'lg:col-span-2': chart.col === 2,
        'lg:col-span-3': chart.col === 3,
        'lg:col-span-4': chart.col === 4,
        'lg:col-span-5': chart.col === 5,
        'lg:col-span-6': chart.col === 6,
        'lg:col-span-7': chart.col === 7,
        'lg:col-span-8': chart.col === 8,
        'lg:col-span-9': chart.col === 9,
        'lg:col-span-10': chart.col === 10,
        'lg:col-span-11': chart.col === 11,
        'lg:col-span-12': chart.col === 12
      }"
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
