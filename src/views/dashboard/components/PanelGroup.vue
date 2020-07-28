<template>
  <el-row :gutter="20" class="panel-group">
    <slot name="users">
      <el-col v-bind="colSpan" class="card-panel-col">
        <panel
          :icon-class-name="'user'"
          :description-text="'Users'"
          :count-to-end="102400"
        />
      </el-col>
    </slot>
    <slot name="issue">
      <el-col v-bind="colSpan" class="card-panel-col">
        <panel
          :icon-class-name="'message'"
          :description-text="'Issue'"
          :count-to-end="81212"
        />
      </el-col>
    </slot>
    <slot name="orders">
      <el-col v-bind="colSpan" class="card-panel-col">
        <panel
          :icon-class-name="'shopping'"
          :description-text="`Today's Orders`"
          :count-to-end="9280"
        />
      </el-col>
    </slot>
    <slot name="bills">
      <el-col v-bind="colSpan" class="card-panel-col">
        <panel
          :icon-class-name="'money'"
          :description-text="'Bills'"
          :count-to-end="13600"
        />
      </el-col>
    </slot>
  </el-row>
</template>

<script>
import Panel from '@/components/Panel/index'
export default {
  components: {
    Panel
  },
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
  }
}
</script>

<style lang="scss" scoped>
.panel-group {
  .card-panel-col {
    margin-bottom: 12px;
  }
}
</style>
