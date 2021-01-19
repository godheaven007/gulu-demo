<template>
  <div class="bread-crumb-item">
    <slot></slot>
    <div class="separator" v-if="separatorClass">
      <g-icon :type="separatorClass"></g-icon>
    </div>
    <div class="separator" v-else>{{ separator }}</div>
  </div>
</template>

<script>
export default {
  name: "GuluBreadItem",
  inject: ['breadCrumb'],
  data() {
    return {
      separator: '',
      separatorClass: ''
    }
  },
  mounted() {
    this.separator = this.breadCrumb.separator;
    this.separatorClass = this.breadCrumb.separatorClass;
  }
}
</script>

<style scoped lang="scss">
  .bread-crumb-item {
    display: inline-flex;
    align-items: center;
    .separator {
      margin: 0 8px;
    }
    &:last-child {
      > .separator {
        display: none;
      }
    }
  }
</style>