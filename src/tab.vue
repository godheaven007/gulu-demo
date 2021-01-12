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
        provide() {
            return {
                eventBus: new Vue()
            }
        },
        mounted() {
            this.$children.forEach((vm) => {
                vm.$children.forEach((childVm) => {
                    // 组件name的作用
                    if(childVm.$options.name == 'GuluTabItem' && childVm.name === this.selected) {
                        childVm.eventBus.$emit('update:selected', this.selected);
                    }
                })
            })
        }
    }
</script>

<style scoped lang="scss">
    .tab {
        width: 100%;
    }
</style>