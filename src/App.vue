<template>
  <div
    id="app"
    class="min-h-screen font-sans antialiased text-gray-900 bg-gray-200"
  >
    <main class="container px-4 mx-auto md:px-8">
      <AppHeader />
      <StatCards :months-left="monthsLeft" :total="total" />
      <StatChart
        :colors="colors"
        :data-sets="dataSets"
        :labels="labels"
        :tooltip-options="tooltipOptions"
      />
    </main>
  </div>
</template>

<script>
// Components
import AppHeader from '@/components/AppHeader'
import StatCards from '@/components/StatCards'
import StatChart from '@/components/StatChart'

// Use
import useStats from '@/use/useStats'
import useChartDetails from '@/use/useChartDetails'

export default {
  name: 'App',
  components: {
    AppHeader,
    StatCards,
    StatChart,
  },
  setup() {
    return { ...useChartDetails(), ...useStats() }
  },
}
</script>
