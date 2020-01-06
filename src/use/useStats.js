import { ref } from "@vue/composition-api";

export default function useStats() {
  const monthsLeft = ref(10);
  const total = ref("$16,816.06");

  return { monthsLeft, total };
}
