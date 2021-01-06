<template>
  <div class="toast">
    <span>{{msg}}</span>
  </div>
</template>

<script>
export default {
  name: "GuluToast",
  props: ['msg']
}
</script>

<style scoped>
  .toast {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    width: 200px;
    height: 50px;
    color: #fff;
    border-radius: 4px;
    text-align: center;
    background-color: rgba(0,0,0,0.6);
  }
</style>