<template>
  <div class="table-container">
    <el-row class="header">
      <el-col v-bind="{ xs: 24,sm: 12,lg: 12}">
        <slot name="buttons" />
      </el-col>
      <el-col v-bind="{ xs: 24,sm: 12,lg: 12}">
        <el-alert v-if="summarys && summarys.length > 0" type="success" effect="dark" :closable="false" class="summarys">
          <ul>
            <li v-for="summary in summarys" :key="summary.label">
              {{ summary.label }} : {{ summary.value }}
            </li>
          </ul>
        </el-alert>
      </el-col>
    </el-row>
    <el-row>
      <simple-table
        :list="list"
        :list-loading="listLoading"
        :columns="columns"
        :list-query="listQuery"
      />
    </el-row>
  </div>
</template>

<script>
import SimpleTable from '../SimpleTable'
export default {
  name: 'ListPage',
  components: { SimpleTable },
  props: {
    summarys: {
      type: Array,
      default: function() {
        return []
      }
    },
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

<style lang="scss" scoped>
.table {
  &-container {
    .header {
      margin-bottom: 12px;
    }
    .summarys {
      width: auto;
      display: block;
      float: right;
    }
    ul {
      float: right;
      display: contents;
      list-style-type: none;
      li {
        text-align: right;
        font-size: 16px;
        width: 200px;
        float: right;
      }
    }
  }
}
</style>

