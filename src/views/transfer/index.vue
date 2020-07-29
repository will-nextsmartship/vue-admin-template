<template>
  <div class="transfer-container">
    <list-page
      :summarys="summarys"
      :list="list"
      :list-loading="listLoading"
      :columns="columns"
      :list-query="{listQuery}"
    >
      <template v-slot:buttons>
        <el-button type="primary" size="small">Transfer Inbound</el-button>
        <el-button type="primary" size="small">Transfer Outbound</el-button>
      </template>
    </list-page>
  </div>
</template>

<script>
import ListPage from '@/components/ListPage'
import { fetchList } from '@/api/transfer'

export default {
  name: 'TransferTable',
  components: { ListPage },
  data() {
    return {
      summarys: [
        {
          label: 'Show Status',
          value: 'All'
        },
        {
          label: 'Received Today',
          value: 3764
        },
        {
          label: 'Checked Today',
          value: 763
        }
      ],
      list: null,
      listLoading: true,
      columns: [
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
          label: 'Tracking Number',
          index: 'tracking_no'
        },
        {
          width: '180',
          label: 'Ship Date',
          index: 'ship_date'
        },
        {
          label: 'Items',
          index: 'items'
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
.transfer {
  &-container {
    margin: 15px;
  }
}
</style>
