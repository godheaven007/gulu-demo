<template>
  <div class="alert" :class="getClasses" ref="curAlert">
    <div class="icon" v-if="showIcon">
      <g-icon :type="type"></g-icon>
    </div>
    <div class="txt">
      <slot>
        <p>{{title}}</p>
      </slot>
    </div>
    <div class="close" @click="close" v-if="closable">
      <g-icon type="close" v-if="!customCloseTxt"></g-icon>
      <span v-else>{{customCloseTxt}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuluAlert",
  props: {
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'info'
    },
    theme: {
      type: String,
      default: 'light',
      validator(theme) {
        return ['light', 'dark'].indexOf(theme) >= 0;
      }
    },
    closable: {
      type: Boolean,
      default: true
    },
    customCloseTxt: {
      type: String
    },
    showIcon: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getClasses: function () {
      return {
        [this.type]: true,
        [this.theme == 'light' ? '' : this.theme]: true
      }
    }
  },
  methods: {
    close() {
      this.$refs.curAlert.remove();
      this.$emit('close');
    }
  }
}
</script>

<style scoped lang="scss">
  .alert {
    display: flex;
    align-items: center;
    padding: 8px 16px;
    border-radius: 4px;
    border: 1px solid;
    margin-bottom: 8px;
    > .icon {
      font-size: 20px;
      margin-right: 4px;
    }
    > .close {
      margin-left: auto;
      cursor: pointer;
    }
    &.success{
      background-color: rgb(240, 249, 235);
      color: rgb(103, 194, 58);
    }
    &.info{
      background-color: rgb(244, 244, 245);
      color: rgb(144, 147, 153);
    }
    &.warn{
      background-color: rgb(253, 246, 236);
      color: rgb(230, 162, 60);
    }
    &.error{
      background-color: rgb(254, 240, 240);
      color: rgb(245, 108, 108);
    }

    &.dark{color: #fff;}
    &.dark.success{
      background-color: rgb(103, 194, 58);
    }
    &.dark.info{
      background-color: rgb(144, 147, 153);
    }
    &.dark.warn{
      background-color: rgb(230, 162, 60);
    }
    &.dark.error{
      background-color: rgb(245, 108, 108);
    }
  }
</style>