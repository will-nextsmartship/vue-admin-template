<template>
  <div class="header-notification">
    <el-badge :is-dot="true" style="line-height: 25px;margin-top: 5px;" @click.native="dialogTableVisible=true">
      <svg-icon class-name="email-icon" icon-class="email" />
    </el-badge>
    <el-dialog :visible.sync="dialogTableVisible" width="50%" append-to-body>
      <div slot="title">
        <span style="padding-right: 10px;">System Notification</span>
        <el-button size="mini" type="primary" icon="el-icon-delete" @click="clearAll">Clear All</el-button>
      </div>

      <el-alert
        v-for="message in messages"
        :key="message.id"
        class="message"
        :title="message.title"
        :type="message.type"
        :description="message.description"
        :show-icon="message.showIcon"
      />
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Notification',
  data() {
    return {
      dialogTableVisible: false,
      messages: [
        { id: 1, type: 'success', title: '项目启动成功', description: '项目启动成功 20200720', showIcon: true },
        { id: 2, type: 'info', title: '项目进行中', description: '项目进行中， 项目进行中', showIcon: true },
        { id: 3, type: 'warning', title: '项目延期', description: '项目延期警告 20200725', showIcon: true }
      ]
    }
  },
  methods: {
    clearAll() {
      this.messages = []
    }
  }
}
</script>

<style lang="scss" scoped>
.header-notification {
  font-size: 0 !important;
  margin-right: 120px;
  .email-icon {
    cursor: pointer;
    font-size: 18px;
    vertical-align: middle;
  }
}
.message {
  margin-bottom: 10px;
}
</style>
