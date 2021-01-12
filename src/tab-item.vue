<template>
    <div class="tab-item" @click="switchTab" :class="showCurTab">
        <slot></slot>
        <div class="line"></div>
    </div>
</template>

<script>
    export default {
        name: "GuluTabItem",
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
        methods: {
            switchTab() {
                this.eventBus.$emit('update:selected', this.name);
            }
        },
        computed: {
            showCurTab() {
                return {active: this.active}
            }
        }
    }
</script>

<style scoped lang="scss">
    .tab-item {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        padding: 0 10px;
        cursor: pointer;
        border: 1px solid grey;
        border-bottom: none;
        &.active {
            color: blue;
            > .line{
                background-color: red;
            }
        }
        > .line {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 1px;
            background-color: transparent;
        }
    }
</style>