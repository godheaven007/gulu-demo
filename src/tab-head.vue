<template>
    <div class="tab-head">
        <div class="line" ref="line"></div>
        <slot></slot>
        <div class="action-wrapper">
          <slot name="action"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GuluTabHead",
        inject: ['eventBus'],
        created() {
          this.eventBus.$on('update:selected', (selectName, vm) => {
              // 不要从getBoundingClientRect中获取left值，该值表示距离浏览器窗口左上角的相对距离
            let {width} = vm.$el.getBoundingClientRect();
            let left = vm.$el.offsetLeft;
            this.$refs.line.style.width = `${width}px`;
            // this.$refs.line.style.left = `${left}px`;
              // 开启3d加速
              this.$refs.line.style.transform = `translateX(${left}px)`;
          });
        }
    }
</script>

<style scoped lang="scss">
    .tab-head {
        position: relative;
        display: flex;
        align-items: center;
        height: 40px;
        > .action-wrapper {
            margin-left: auto;
            align-self: center;
            cursor: pointer;
        }
        > .line {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          background-color: #409eff;
          transition: all .3s cubic-bezier(.645,.045,.355,1);
          z-index: 20;
        }
        &::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 2px;
          background-color: #e4e7ed;
          z-index: 10;
        }
    }
</style>