<template>
  <div class="users-management-container">
    <list-page
      :summarys="summarys"
      :list="list"
      :list-loading="listLoading"
      :columns="columns"
      :list-query="{listQuery}"
    >
      <template v-slot:buttons>
        <el-button type="primary" size="small">New User</el-button>
      </template>
    </list-page>
  </div>
</template>

<script>
import ListPage from '@/components/ListPage'
import { fetchList } from '@/api/user'
export default {
  name: 'UserManagemntTable',
  components: { ListPage },
  data() {
    return {
      summarys: [
        {
          label: 'Total Users',
          value: '7342'
        }
      ],
      list: null,
      listLoading: true,
      columns: [
        {
          width: '200',
          label: 'User ID',
          index: 'id'
        },
        {
          width: '200',
          label: 'User Name',
          index: 'name'
        },
        {
          width: '380',
          label: 'Average Monthly Transaction',
          index: 'average_monthly_transactions'
        },
        {
          width: '180',
          label: 'Sales',
          index: 'sales'
        },
        {
          label: 'Support',
          index: 'support'
        },
        {
          label: 'Balance',
          index: 'balance'
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
.users-management {
  &-container {
    margin: 15px;
  }
}
</style>
