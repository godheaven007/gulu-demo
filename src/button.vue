<template>
    <button class="g-button" :class="setDirection">
      <svg class="icon g-button-icon" aria-hidden="true" v-if="iconType">
        <use :xlink:href=`#i-${iconType}`></use>
      </svg>
      <div class="g-button-txt">
        <slot></slot>
      </div>
    </button>
</template>

<script>
    export default {
      props: {
        iconType: {
          type: String
        },
        iconPosition: {
          type: String,
          default: 'left',
          validator(value) {
            return ['left', 'right'].indexOf(value) !== -1;
          }
        }
      },
      computed: {
        setDirection() {
          return this.iconPosition === 'left' ? 'g-button-left' : 'g-button-right';
        }
      }
    }
</script>

<style lang="scss">
    .icon {
      width: 1em; height: 1em;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
    }
    .g-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        vertical-align: middle;
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        &:hover {
            border-color: var(--border-color-hover);
        }
        &:active {
            background-color: var(--button-active-bg);
        }
        &:focus {
            outline: none;
        }
        &.g-button-left {
          > .g-button-icon {
            order: 1;
          }
          > .g-button-txt {
            order: 2;
          }
        }
        &.g-button-right {
          > .g-button-icon {
            order: 2;
          }
          > .g-button-txt {
            order: 1;
          }
        }

    }
</style>