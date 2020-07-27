<template>
  <div class="card-panel">
    <div class="card-panel-icon-wrapper" :class="iconWrapperClass">
      <svg-icon :icon-class="iconClassName" class-name="card-panel-icon" />
    </div>
    <div class="card-panel-description">
      <div class="card-panel-text">
        {{ descriptionText }}
      </div>
      <div class="card-panel-num">
        <count-to
          :start-val="countToStart"
          :end-val="countToEnd"
          :duration="countToDuration"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CountTo from 'vue-count-to'
export default {
  components: {
    CountTo
  },
  props: {
    iconClassName: {
      type: String,
      default: 'user'
    },
    descriptionText: {
      type: String,
      default: ' New Visits'
    },
    countToStart: {
      type: Number,
      default: 0
    },
    countToEnd: {
      type: Number,
      default: 10000
    },
    countToDuration: {
      type: Number,
      default: 3000
    }
  },
  data() {
    return {

    }
  },
  computed: {
    iconWrapperClass() {
      return 'icon-' + this.iconClassName
    }
  },
  mounted() {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.card-panel {
  height: 108px;
  cursor: pointer;
  font-size: 12px;
  position: relative;
  overflow: hidden;
  color: #666;
  background: #fff;
  box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
  border-color: rgba(0, 0, 0, .05);

  &:hover {
    .card-panel-icon-wrapper {
      color: #fff;
    }

    .icon-user {
      background: #40c9c6;
    }

    .icon-message {
      background: #36a3f7;
    }

    .icon-money {
      background: #f4516c;
    }

    .icon-shopping {
      background: #34bfa3
    }
  }

  .icon-user {
    color: #40c9c6;
  }

  .icon-message {
    color: #36a3f7;
  }

  .icon-money {
    color: #f4516c;
  }

  .icon-shopping {
    color: #34bfa3
  }

  .card-panel-icon-wrapper {
    float: left;
    margin: 14px 0 0 14px;
    padding: 16px;
    transition: all 0.38s ease-out;
    border-radius: 6px;
  }

  .card-panel-icon {
    float: left;
    font-size: 48px;
  }

  .card-panel-description {
    float: right;
    font-weight: bold;
    margin: 26px;
    margin-left: 0;

    .card-panel-text {
      display: block;
      line-height: 18px;
      color: rgba(0, 0, 0, 0.45);
      font-size: 24px;
      margin-bottom: 12px;
    }

    .card-panel-num {
      display: block;
      font-size: 20px;
    }
  }
}
@media (max-width:550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}
</style>
