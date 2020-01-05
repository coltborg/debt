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
          <p>10</p>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";

export default {
  name: "app",
  setup() {
    const message = ref("🔥 Yo Vue 3 🔥");
    return { message };
  }
};
</script>
