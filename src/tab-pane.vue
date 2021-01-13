<template>
    <div class="tab-pane" :class="showCurTab" v-if="active">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GuluTabPane",
        inject: ['eventBus'],
        props: {
          name: {
            type: String|Number,
            required: true
          }
        },
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
        width: 100%;
        height: 80px;
        padding: 20px;
        &.active{
        }
    }
</style>