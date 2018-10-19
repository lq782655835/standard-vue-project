<template>
  <div class="u-layout" :dir="dir" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </div>
</template>
<script>
export default {
    props: {
        dir: { type: String, default: 'h', validator: value => ['h', 'v'].includes(value) }
    }
}
</script>
<style lang="scss" scoped>
$margin-small: 10px;
$margin-base: 20px;
$margin-large: 30px;

.u-layout {
    &[display='inline-block'] > * {
        display: inline-block;
    }

    &[display='inline'] > * {
        display: inline;
    }

    &[display='block'] > * {
        display: block;
    }

    &[dir='h'] {
        & > *:not(:last-child) {
            margin-right: $margin-base;
        }

        &[gap='shrink'] {
            & > *:not(:last-child) {
                margin-right: -1px;
            }
        }

        &[gap='none'] {
            & > *:not(:last-child) {
                margin-right: 0;
            }
        }

        &[gap='s'] {
            & > *:not(:last-child) {
                margin-right: $margin-small;
            }
        }

        &[gap='l'] {
            & > *:not(:last-child) {
                margin-right: $margin-large;
            }
        }
    }

    &[dir='v'] {
        & > *:not(:last-child) {
            margin-bottom: $margin-base;
        }

        &[gap='shrink'] {
            & > *:not(:last-child) {
                margin-bottom: -1px;
            }
        }

        &[gap='none'] {
            & > *:not(:last-child) {
                margin-bottom: 0;
            }
        }

        &[gap='s'] {
            & > *:not(:last-child) {
                margin-bottom: $margin-small;
            }
        }

        &[gap='l'] {
            & > *:not(:last-child) {
                margin-bottom: $margin-large;
            }
        }
    }

    &[align='left'] {
        text-align: left;
    }

    &[align='center'] {
        text-align: center;
    }

    &[align='right'] {
        text-align: right;
    }
}
</style>
