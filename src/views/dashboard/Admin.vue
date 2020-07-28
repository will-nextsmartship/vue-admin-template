<template>
  <div class="dashboard-container">
    <el-row :gutter="12">
      <el-col v-bind="colSpan" class="col">
        <line-marker />
      </el-col>
      <el-col v-bind="colSpan" class="col">
        <mix-chart />
      </el-col>
      <el-col v-bind="colSpan" class="col">
        <pie-group />
      </el-col>
      <el-col v-bind="colSpan" class="col">
        <panel-group />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import LineMarker from '@/components/Charts/LineMarker'
import MixChart from '@/components/Charts/MixChart'
import PieGroup from './components/PieGroup'
import PanelGroup from './components/PanelGroup'

export default {
  name: 'Dashboard',
  components: { LineMarker, MixChart, PanelGroup, PieGroup },
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
.dashboard {
  &-container {
    margin: 15px;
    .col {
      margin-bottom: 14px
    }
  }
}
</style>
