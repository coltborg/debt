<template>
  <div id="app">
    <h1 class="text-3xl text-green-400">{{ message }}</h1>
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
