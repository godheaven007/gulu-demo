<template>
  <div class="col" :class="[span && `col-${span}`, offset && `offset-${offset}`]">
    <div style="background-color:#bbbbbb;">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuluCol",
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    }
  }
}
</script>

<style scoped lang="scss">
  $prefixClass: col-;
  $totalPieces: 24;
  .col {
    width: 50%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border: 1px solid #f00;
    padding: 0 10px;
    @for $i from 1 through $totalPieces {
      &.#{$prefixClass}#{$i} {
        width: $i / $totalPieces * 100%;
      }
    }

    $prefixClass: offset-;
    @for $i from 1 through $totalPieces {
      &.#{$prefixClass}#{$i} {
        margin-left: $i / $totalPieces * 100%;
      }
    }
  }
</style>