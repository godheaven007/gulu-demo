<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GuluButtonGroup",
  mounted() {
    for(let node of this.$el.children) {
      let tagName = node.tagName.toLocaleLowerCase();
      if(tagName != 'button') {
        console.warn(`g-button-group 的子元素应该全是 g-button，但是你写的是 ${tagName}`);
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .g-button-group {
    display: inline-flex;
    > .g-button {
      border-radius: 0;
    }
    > .g-button:first-child {border-radius:4px 0 0 4px;}
    > .g-button:last-child {border-radius: 0 4px 4px 0;}
    > .g-button:not(:first-child) {margin-left: -1px;}
    > .g-button:hover {
      z-index: 20;
    }
  }
</style>