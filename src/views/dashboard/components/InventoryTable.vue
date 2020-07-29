<template>
  <div class="table-container">
    <simple-table
      :list="list"
      :list-loading="listLoading"
      :columns="columns"
      :list-query="listQuery"
    />
  </div>
</template>

<script>
import { fetchList } from '@/api/inventory'
import SimpleTable from '@/components/SimpleTable'

export default {
  name: 'InventoryTable',
  components: { SimpleTable },
  data() {
    return {
      list: null,
      listLoading: true,
      columns: [
        {
          width: '80',
          label: 'ID',
          index: 'id'
        },
        {
          width: '200',
          label: 'SKU',
          index: 'sku'
        },
        {
          width: '200',
          label: 'Warehouse',
          index: 'warehouse'
        },
        {
          width: '180',
          label: 'Available Unit',
          index: 'available_qty'
        },
        {
          width: '180',
          label: 'Prepare Ship',
          index: 'prepare_ship'
        },
        {
          label: 'Storage',
          index: 'storage'
        },
        {
          label: 'Status',
          index: 'status'
        }
      ],
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

