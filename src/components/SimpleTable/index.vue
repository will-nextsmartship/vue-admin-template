<template>
  <el-table v-loading="listLoading" :data="list" border fit highlight-current-row>
    <template v-for="column in columns">
      <el-table-column
        :key="column.index"
        :width="column.width"
        :align="column.align || 'center'"
        :label="column.label"
      >
        <template slot-scope="{row}">
          <span>{{ row[column.index] }}</span>
        </template>
      </el-table-column>
    </template>
  </el-table>
</template>

<script>
export default {
  name: 'SimpleTable',
  props: {
    list: {
      type: Array,
      default: function() {
        return null
      }
    },
    listLoading: {
      type: Boolean,
      default: true
    },
    columns: {
      type: Array,
      default: function() {
        return []
      }
    },
    listQuery: {
      type: Object,
      default: function() {
        return {
          page: 1,
          limit: 10
        }
      }
    }
  }
}
</script>
