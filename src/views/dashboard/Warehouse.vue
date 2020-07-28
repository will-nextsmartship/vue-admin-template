<template>
  <div class="inventory-container">
    <el-row :gutter="12">
      <el-col v-bind="colSpan" class="col">
        <line-marker />
      </el-col>
      <el-col v-bind="colSpan" class="col">
        <mix-chart />
      </el-col>
      <el-col
        :xs="24"
        :sm="24"
        :lg="24"
      >
        <panel-group :col-span="{ xs: 24,sm: 12,lg: 6}" />
      </el-col>
      <el-col :xs="24" :sm="24" :lg="24" class="col">
        <inventory-table />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import LineMarker from '@/components/Charts/LineMarker'
import MixChart from '@/components/Charts/MixChart'
import PanelGroup from './components/PanelGroup'
import InventoryTable from './components/InventoryTable'
export default {
  name: 'Inventory',
  components: { LineMarker, MixChart, PanelGroup, InventoryTable },
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
.inventory {
  &-container {
    margin: 15px;
    .col {
      margin-bottom: 14px
    }
  }
}
</style>
