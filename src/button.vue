<template>
    <button class="g-button" :class="{[`g-button-${iconPosition}`]: true}">
        <g-icon :type="iconType" class="g-button-icon" v-if="iconType"></g-icon>
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
        > .g-button-icon {
            order: 1;
        }
        > .g-button-txt {
            order: 2;
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