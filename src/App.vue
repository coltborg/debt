<template>
  <div
    id="app"
    class="min-h-screen font-sans antialiased text-gray-900 bg-gray-200"
  >
    <main class="container px-4 mx-auto md:px-8">
      <AppHeader />
      <StatCards :monthsLeft="monthsLeft" :total="total" />
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
import { ref } from "@vue/composition-api";
// Components
import AppHeader from "@/components/AppHeader";
import StatCards from "@/components/StatCards";
import StatChart from "@/components/StatChart";

// Use
import useStats from "@/use/useStats";
import useChartDetails from "@/use/useChartDetails";

export default {
  name: "app",
  components: {
    AppHeader,
    StatCards,
    StatChart
  },
  setup() {
    return { ...useChartDetails(), ...useStats() };
  }
};
</script>
