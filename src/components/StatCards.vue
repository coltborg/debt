<template>
  <section
    class="mt-8 text-4xl font-semibold leading-tight tracking-wider text-gray-800 md:flex lg:text-6xl"
  >
    <div
      class="p-4 mb-4 bg-white rounded-lg shadow-md md:p-6 lg:p-8 md:mr-8 md:flex-1"
    >
      <p class="text-base font-bold tracking-wide text-gray-500 uppercase">
        Total
      </p>
      <p class="text-red-600">{{ total }}</p>
    </div>
    <div class="p-4 mb-4 bg-white rounded-lg shadow-md md:p-6 lg:p-8 md:flex-1">
      <p class="text-base font-bold tracking-wide text-gray-500 uppercase">
        Months left
      </p>
      <p>{{ monthsLeft }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "StatCards",
  props: {
    total: {
      type: String,
      required: true
    },
    monthsLeft: {
      type: Number,
      required: true
    }
  }
};
</script>
