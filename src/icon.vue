<template>
    <svg class="icon" aria-hidden="true">
        <use :xlink:href=`#i-${type}`></use>
    </svg>
</template>

<script>
    import svg from './svg'
    export default {
        name: "GuluIcon",
        props: {
            type: {
                default: 'setting'
            }
        },
    }
</script>

<style scoped lang="scss">
    .icon {
        width: 1em; height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>