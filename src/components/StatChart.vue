<template>
  <section>
    <div class="p-4 mb-4 bg-white rounded-lg shadow-md md:p-6 lg:p-8">
      <vue-frappe
        id="chart"
        title="2020 Debt Payments"
        type="axis-mixed"
        :colors="colors"
        :data-sets="dataSets"
        :height="400"
        :labels="labels"
        :tooltip-options="tooltipOptions"
      >
      </vue-frappe>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StatChart',
  props: {
    colors: {
      type: Array,
      required: true,
    },
    dataSets: {
      type: Array,
      required: true,
    },
    labels: {
      type: Array,
      required: true,
    },
    tooltipOptions: {
      type: Object,
      required: true,
    },
  },
}
</script>
