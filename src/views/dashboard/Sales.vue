<template>
  <div class="dashboard-container">
    <el-row :gutter="12">
      <el-col v-bind="colSpan" class="col">
        <line-marker />
      </el-col>
      <el-col v-bind="colSpan" class="col">
        <mix-chart />
      </el-col>
      <el-col :xs="24" :sm="24" :lg="24" class="col">
        <panel-group :col-span="{ xs: 24,sm: 12,lg: 6}">
          <template v-slot:bills>
            <span />
          </template>
        </panel-group>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import LineMarker from '@/components/Charts/LineMarker'
import MixChart from '@/components/Charts/MixChart'
import PanelGroup from './components/PanelGroup'

export default {
  name: 'Dashboard',
  components: { LineMarker, MixChart, PanelGroup },
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
