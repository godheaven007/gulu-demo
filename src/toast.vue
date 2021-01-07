<template>
  <div class="toast" ref="wrapper">
    <div class="toast-msg" v-if="enableHtml" v-html="$slots.default[0]"></div>
    <div class="toast-msg" v-else>
      <slot></slot>
    </div>

    <template v-if="toastType == 2">
      <div class="toast-line" ref="line"></div>
      <div class="toast-btn" @click="doManualClose">
        {{closeBtn.btnTxt || '关闭'}}
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "GuluToast",
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 1800
    },
    toastType: {
      type: [String, Number],
      default: 1      // 1: 只包含msg 2: msg + closeBtn
    },
    closeBtn: {
      type: Object,
      default() {
        return {
          btnTxt: '关闭',
          callback: null
        }
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    }
  },
  created() {
    console.log(this.$slots);
  },
  mounted() {
    this.doAutoClose();

    if(this.toastType == 2) {
      this.updateLineHeight();
    }
  },
  methods: {
    doAutoClose() {
      if(this.autoClose) {
        setTimeout(() => {
          this.$destroy();
          this.$el.remove();
        }, this.autoCloseDelay);
      }
    },
    doManualClose() {
      this.$destroy();
      this.$el.remove();

      if(this.closeBtn.callback && Object.prototype.toString.call(this.closeBtn.callback) == '[object Function]') {
        this.closeBtn.callback(this);
      }
    },
    log() {
      console.log('日志输出...')
    },
    updateLineHeight() {
      this.$nextTick(() => {
        this.$refs.line.style.height = `${this.$refs.wrapper.getBoundingClientRect().height}px`;
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .toast {
    display: flex;
    align-items: center;
    position: fixed;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    width: 200px;
    min-height: 50px;
    color: #fff;
    border-radius: 4px;
    text-align: center;
    background-color: rgba(0,0,0,0.6);
    .toast-msg {
      flex-grow: 1;
    }
    .toast-line {
      width: 1px;
      background-color: rgba(255,255,255,.8);
    }
    .toast-btn {
      padding: 0 8px;
      text-align: center;
      max-width: 100px;
      min-width: 60px;
      flex-shrink: 0;
      cursor: pointer;
    }
  }
</style>