<template>
    <div class="wrapper" :class="{[infoType]: true}">
        <input type="text"
               :placeholder="placeholder"
               :value="value"
               :disabled="disabled"
               :readonly="readonly"
               @input="doInput"
        >
        <template v-if="infoMsg">
            <g-icon type="info" :class="{[`icon-${infoType}`]: true}"></g-icon>
            <span :class="{[`msg-${infoType}`]: true}">{{infoMsg}}</span>
        </template>
    </div>

</template>

<script>
    export default {
        props: {
            value: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            infoMsg: {
                type: String
            },
            infoType: {
                type: String,
                validator(v) {
                    return ['success', 'error', 'warn'].indexOf(v) !== -1;
                }
            },
            placeholder: {
                type: String
            }
        },
        mounted() {

        },
        methods: {
            doInput(e) {
                this.$emit('input', e.target.value);
            }
        }
    }
</script>

<style scoped lang="scss">
    $height: 32px;
    $border-color: #999;
    $border-color-hover: #666;
    $border-radius: 4px;
    $font-size: 12px;
    $box-shadow-color: rgba(0, 0, 0, 0.5);
    $successColor: lawngreen;
    $errorColor: #F1453D;
    $warnColor: orange;
    .wrapper {
        font-size: $font-size;
        display: inline-flex;
        align-items: center;

        > :not(:last-child) {
            margin-right: .5em;
        }

        > input {
            height: 32px;
            border: 1px solid $border-color;
            border-radius: 4px;
            padding: 0 8px;
            font-size: inherit;

            &:hover {
                border-color: $border-color-hover;
            }

            &:focus {
                box-shadow: inset 0 1px 3px $box-shadow-color;
                outline: none;
            }

            &[disabled], &[readonly] {
                border-color: #bbb;
                color: #bbb;
                cursor: not-allowed;
            }
        }

        &.success {
            > input {
                border-color: $successColor;
            }
        }
        &.error {
            > input {
                border-color: $errorColor;
            }
        }
        &.warn {
            > input {
                border-color: $warnColor;
            }
        }

        .icon-success {
            fill: $successColor;
        }
        .icon-error {
            fill: $errorColor;
        }
        .icon-warn {
            fill: $warnColor;
        }

        .msg-success {
            color: $successColor;
        }
        .msg-error {
            color: $errorColor;
        }
        .msg-warn {
            color: $warnColor;
        }
    }
</style>