<template>
  <div>
    <div class="liveChat">
      <div class="chat-button">
        <el-badge :hidden="messageCount == 0" :value="messageCount" class="badge">
          <i :class="'el-icon-chat-dot-round'" @click="startChat" />
        </el-badge>
      </div>
    </div>
    <chat ref="chat" />
  </div>
</template>

<script>
import Chat from './chat'

export default {
  name: 'LiveChat',
  components: { Chat },
  props: {

  },
  data() {
    return {
      dialogTableVisible: false,
      messageCount: 4,
      form: {
        message: ''
      }
    }
  },
  computed: {

  },
  watch: {

  },
  mounted() {

  },

  methods: {
    startChat() {
      this.$refs.chat.handleVisible(true)
    }
  }
}
</script>

<style lang="scss" scoped>
.liveChat {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  transform: translate(100%);
  z-index: 40000;
}

.chat-button {
  width: 60px;
  height: 60px;
  background-color: #cccccc;
  position: absolute;
  left: -110px;
  bottom: 50px;
  text-align: center;
  border-radius: 60px !important;
  z-index: 10000;
  pointer-events: auto;
  cursor: pointer;
  color: #eee;
  line-height: 60px;
  i {
    font-size: 32px;
    line-height: 60px;
  }
}
</style>
