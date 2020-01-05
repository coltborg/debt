<template>
  <div
    id="app"
    class="min-h-screen font-sans antialiased text-gray-900 bg-gray-200"
  >
    <main class="container px-4 mx-auto md:px-8">
      <header class="pt-4 text-center">
        <h1
          class="text-3xl font-bold leading-tight tracking-wider text-gray-700 uppercase md:text-4xl lg:text-5xl"
        >
          💸 Fuck debt 💸
        </h1>
      </header>
      <section
        class="mt-8 text-4xl font-semibold leading-tight tracking-wider text-gray-800 md:flex lg:text-6xl"
      >
        <div
          class="p-4 mb-4 bg-white rounded-lg shadow-md md:p-6 lg:p-8 md:mr-8 md:flex-1"
        >
          <p class="text-base font-bold tracking-wide text-gray-500 uppercase">
            Total
          </p>
          <p class="text-red-600">$20,000</p>
        </div>
        <div
          class="p-4 mb-4 bg-white rounded-lg shadow-md md:p-6 lg:p-8 md:flex-1"
        >
          <p class="text-base font-bold tracking-wide text-gray-500 uppercase">
            Months left
          </p>
          <p>11</p>
        </div>
      </section>
      <section>
        <div class="p-4 mb-4 bg-white rounded-lg shadow-md md:p-6 lg:p-8">
          <vue-frappe
            id="test"
            :labels="labels"
            title="My Awesome Chart"
            type="axis-mixed"
            :height="400"
            :colors="colors"
            :dataSets="this.data"
            :tooltipOptions="tooltipOptions"
          >
          </vue-frappe>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";

export default {
  name: "app",
  data() {
    return {
      colors: ["#48bb78", "#718096"],
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
      data: [
        {
          name: "Payed",
          chartType: "line",
          values: [20000]
        },
        {
          name: "Projected",
          chartType: "line",
          values: [
            20000,
            18000,
            16000,
            14000,
            12000,
            10000,
            8000,
            6000,
            4000,
            2000,
            0
          ]
        }
      ],
      tooltipOptions: {
        formatTooltipY: value => {
          if (value == undefined) {
            return "Not payed yet";
          }

          return value.toLocaleString("en", {
            style: "currency",
            currency: "USD"
          });
        }
      }
    };
  },
  setup() {
    const message = ref("🔥 Yo Vue 3 🔥");
    return { message };
  }
};
</script>
