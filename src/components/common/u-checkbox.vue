<template>
    <div class="u-checkbox" :disabled="disabled" @click="check">
        <input type="checkbox" :checked="isCheck" :disabled="disabled" />
        <slot>{{label}}</slot>
    </div>
</template>

<script>
export default {
    props: {
        checked: { type: Boolean, default: false  },
        label: { type: String, default: '' },
        disabled: { type: Boolean, default: false }
    },
    model: {
        prop: 'checked',
        event: 'change'
    },
    data () {
        return {
            isCheck: this.checked
        }
    },
    watch: {
        checked(val) {
            this.isCheck = val
        }
    },
    methods: {
        check() {
            if (this.disabled) return

            this.isCheck = !this.isCheck
            this.$emit('change', this.isCheck)         // allow v-modal
            this.$emit('update:checked', this.isCheck) // allow sync
            this.$emit('check', this.isCheck)
        }
    }
}
</script>

<style lang="scss" scoped>
.u-checkbox {
    display: inline-block;
    user-select: none;

    &[disabled] {
        cursor: not-allowed;
        color: $disabled-color;
    }

    input {
        margin-right: 8px;
    }
}
</style>


