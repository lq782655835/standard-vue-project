<template>
    <div v-show="show">
        <slot></slot>
    </div>
</template>

<script>
import ULink from '../u-link'

export default {
    mixins: [ULink],
    props: {
        title: { type: String, default: '' }
    },
    data() {
        return {
            index: 0
        }
    },
    computed: {
        show() {
            return parseInt(this.index) === parseInt(this.$parent.activeIndex)
        }
    },
    created() {
        if (this.$parent.itemVMs) {
            this.$parent.itemVMs.push(this)
        }
    },
    mounted() {
        this.$nextTick(() => {
            for (var c in this.$parent.$children) {
                if (this.$parent.$children[c].$el === this.$el) {
                    this.index = c
                    break
                }
            }
        })
    }
}
</script>

<style lang="scss">
</style>
