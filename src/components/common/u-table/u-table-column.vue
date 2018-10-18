<template>
    <td :style="style" class="u-table-column"><slot></slot></td>
</template>

<script>
export default {
    props: {
        label: { type: String, default: '' },
        width: { type: String, default: '' }
    },
    data() {
        return {
            style: {
                width: this.width
            }
        }
    },
    created() {
        let isRepeat = this.$parent.columns.find(item => item.label === this.label)
        !isRepeat && this.$parent.columns.push(this)
    }
}
</script>

<style lang="scss">
.u-table-column {
    position: relative;
}
</style>
