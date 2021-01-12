<template>
    <div class="tab-head">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GuluTabHead"
    }
</script>

<style scoped lang="scss">
    .tab-head {
        display: flex;
        height: 40px;
        > .tab-item {
            padding: 0 3em;
        }
        > .actionBtn {
            margin-left: auto;
            align-self: center;
            cursor: pointer;
        }
    }
</style>