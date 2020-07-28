<template>
  <el-row :gutter="12" class="pie-group">
    <el-col v-bind="colSpan" class="col">
      <div class="pie-chart">
        <pie-chart />
      </div>
    </el-col>
    <el-col v-bind="colSpan" class="col">
      <div class="pie-chart">
        <pie-chart />
      </div>
    </el-col>
  </el-row>
</template>

<script>
import PieChart from '@/components/Charts/PieChart'
export default {
  name: 'PieGroup',
  components: { PieChart },
  props: {
    colSpan: {
      type: Object,
      default() {
        return {
          xs: 24,
          sm: 24,
          lg: 12
        }
      }
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.pie-group {
  .col {
    margin-bottom: 14px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .pie-chart {
    background:#fff;
    padding-top: 20px;

  }
}
</style>
