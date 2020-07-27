<template>
  <el-dialog v-el-drag-dialog :visible.sync="visible" title="Live Chat">
    <el-tabs :tab-position="'left'" stretch>
      <el-tab-pane v-for="contact in contacts" :key="contact.id">
        <span slot="label" style="line-height: 20px; height: 30px">
          <el-badge :hidden="contact.messages.length == 0" :value="contact.messages.length">
            {{ contact.name }}
          </el-badge>
        </span>
        <el-alert v-for="message in contact.messages" :key="message" type="info" :title="message" style="margin:5px 0" />
        <el-form :model="form">
          <el-form-item style="margin-bottom: 0">
            <el-input v-model="form.message" type="textarea" :rows="6" autocomplete="off" />
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handleVisible(false)">Cancel</el-button>
      <el-button type="primary" @click="handleVisible(false)">Send</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { fetchMessages } from '@/api/global'
import elDragDialog from '@/directive/el-drag-dialog'
export default {
  name: 'Chat',
  directives: { elDragDialog },
  data() {
    return {
      visible: false,
      contacts: [],
      form: {
        message: ''
      }
    }
  },
  created() {
    this.fetchMessages()
  },
  methods: {
    handleVisible(value) {
      this.visible = value
    },
    async fetchMessages() {
      const { data } = await fetchMessages()
      this.contacts = data.contacts
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-badge {
    margin-top: 10px;
    padding-right: 15px;
  }
  .el-tabs__item {
    line-height: 30px;
  }
</style>
