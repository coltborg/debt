import { ref } from '@vue/composition-api'

export default function useChartDetails() {
  // TODO: add second color when payments happen
  const colors = ref(['#718096']) // ["#48bb78", "#718096"]
  const dataSets = ref([
    // TODO: add payed data when payments happen
    // {
    //   name: "Payed",
    //   chartType: "line",
    //   values: [16816.06, 14000]
    // },
    {
      name: 'Projected',
      chartType: 'line',
      values: [
        16816.06,
        14816.06,
        12816.06,
        10816.06,
        8816.06,
        6816.06,
        4816.06,
        2816.06,
        816.06,
        0,
      ],
    },
  ])
  const labels = ref([
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ])
  const tooltipOptions = ref({
    formatTooltipY: value => {
      if (value == undefined) {
        return 'Not payed yet'
      }

      return value.toLocaleString('en', {
        style: 'currency',
        currency: 'USD',
      })
    },
  })

  return { colors, dataSets, labels, tooltipOptions }
}
