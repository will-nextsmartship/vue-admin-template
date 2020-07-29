<template>
  <div class="inventory-container">
    <list-page
      :summarys="summarys"
      :list="list"
      :list-loading="listLoading"
      :columns="columns"
      :list-query="{listQuery}"
    >
      <template v-slot:buttons>
        <el-button type="primary" size="small">New Inventory</el-button>
        <el-button type="primary" size="small">New Orders</el-button>
      </template>
    </list-page>
  </div>
</template>

<script>
import ListPage from '@/components/ListPage'
import { fetchList } from '@/api/inventory'

export default {
  name: 'InventoryTable',
  components: { ListPage },
  data() {
    return {
      summarys: [
        {
          label: 'Total Avaiable',
          value: 3764
        },
        {
          label: 'Total Perpare to ship',
          value: 763
        },
        {
          label: 'Total Storage',
          value: 4542
        }
      ],
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

<style lang="scss" scoped>
.inventory {
  &-container {
    margin: 15px;
  }
}
</style>
