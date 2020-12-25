<template>
  <div class="row">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GuluRow",
  props: {
    gutter: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped lang="scss">

</style>