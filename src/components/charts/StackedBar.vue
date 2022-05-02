

<script>
import { Bar } from 'vue-chartjs/legacy'
import { Chart as ChartJS, Title, Tooltip, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  extends: { Bar },
  props: ['chartData', 'options'],
  // props: {
  //   chartData: {
  //       type: Object,
  //       required: true
  //     },
  //   chartOptions: {
  //     type: Object,
  //     default: () => {}
  //   }
  // },
   methods: {
    update() {
      this.$data._chart.update()
    }
  },
  mounted() {
    this.renderChart(this.chartData, this.chartOptions);
  },
}
</script>