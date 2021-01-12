<template>
    <div class="tab-pane" :class="showCurTab">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GuluTabPane",
        inject: ['eventBus'],
        props: ['name'],
        data() {
            return {
                active: false
            }
        },
        created() {
            this.eventBus.$on('update:selected', (selectName) => {
                this.active = this.name === selectName;
            })
        },
        computed: {
            showCurTab() {
                return {active: this.active}
            }
        }
    }
</script>

<style scoped lang="scss">
    .tab-pane {
        display: none;
        width: 100%;
        height: 80px;
        border: 1px solid;
        &.active{
            display: block;
        }
    }
</style>