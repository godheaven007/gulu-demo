<template>
    <div class="tab-item" @click="switchTab" :class="showCurTab">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GuluTabItem",
        inject: ['eventBus'],
        props: {
          disabled: {
            type: Boolean,
            default: false
          },
          name: {
            type: String|Number,
            required: true
          }
        },
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
                if(this.disabled) return;
                this.eventBus.$emit('update:selected', this.name, this);
            }
        },
        computed: {
            showCurTab() {
                return {
                  active: this.active,
                  disabled: this.disabled
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    $activeColor: #409eff;
    .tab-item {
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0 2em;
        cursor: pointer;
        &:hover {
          color: $activeColor
        }
        &.active {
          color: $activeColor;
        }
        &.disabled {
          cursor: not-allowed;
          color: lightgray;
        }
    }
</style>