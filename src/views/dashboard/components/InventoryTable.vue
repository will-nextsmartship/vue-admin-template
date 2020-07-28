<template>
  <div class="table-container">
    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row>
      <el-table-column align="center" label="ID" width="80">
        <template slot-scope="{row}">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column width="200" align="center" label="SKU">
        <template slot-scope="{row}">
          <span>{{ row.sku }}</span>
        </template>
      </el-table-column>

      <el-table-column width="200" align="center" label="Warehouse">
        <template slot-scope="{row}">
          <span>{{ row.warehouse }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180" align="center" label="Available Unit">
        <template slot-scope="{row}">
          <span>{{ row.available_qty }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180" align="center" label="Prepare Ship">
        <template slot-scope="{row}">
          <span>{{ row.prepare_ship }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="Storage">
        <template slot-scope="{row}">
          <span>{{ row.storage }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="Status">
        <template slot-scope="{row}">
          <span>{{ row.status }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { fetchList } from '@/api/inventory'

export default {
  name: 'InventoryTable',
  data() {
    return {
      list: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    async getList() {
      this.listLoading = true
      const { data } = await fetchList(this.listQuery)
      const items = data.items
      this.list = items
      this.listLoading = false
    }
  }
}
</script>

