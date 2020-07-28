<template>
  <div v-if="roleDashboard('admin')">
    <Admin />
  </div>
  <div v-else-if="roleDashboard('sales')">
    <Sales />
  </div>
  <div v-else-if="roleDashboard('support')">
    <Support />
  </div>
  <div v-else-if="roleDashboard('warehouse')">
    <Warehouse />
  </div>
</template>

<script>
import Admin from './Admin'
import Sales from './Sales'
import Support from './Support'
import Warehouse from './Warehouse'
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  components: { Admin, Sales, Support, Warehouse },
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'roles'
    ]),
    roleDashboard() {
      return (role) => this.roles.indexOf(role) > -1
    }
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
