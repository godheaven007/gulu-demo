<template>
  <div class="bread-crumb">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GuluBreadCrumb",
  props: {
    separator: {
      type: String,
      default: '/'
    },
    separatorClass: {
      type: String
    }
  },
  provide() {
    return {
      breadCrumb: this
    }
  }
}
</script>

<style scoped lang="scss">
  .bread-crumb {
    display: inline-flex;
  }
</style>