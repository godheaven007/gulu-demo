<template>
    <div class="tab">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue';
    export default {
        name: "GuluTab",
        props: {
            selected: {
                type: String
            }
        },
        data() {
          return {
            eventBus: new Vue()
          }
        },
        provide() {
            return {
                eventBus: this.eventBus
            }
        },
        mounted() {
            this.$children.forEach((vm) => {
                if(vm.$options.name == 'GuluTabHead') {
                    vm.$children.forEach((childVm) => {
                      // 组件name的作用
                      if(childVm.$options.name == 'GuluTabItem' && childVm.name === this.selected) {
                        this.eventBus.$emit('update:selected', this.selected, childVm);
                      }
                    })
                }
            })
        },
        methods: {

        }
    }
</script>

<style scoped lang="scss">
    .tab {
        width: 100%;
    }
</style>