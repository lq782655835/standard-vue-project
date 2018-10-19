<template>
    <label class="u-switch" :checked="currentValue" :disabled="disabled" tabindex="0"
         @click="toggle()" @keyup.space.prevent="toggle()" @keydown.space.prevent v-on="$listeners">
        <span class="button"></span>
    </label>
</template>

<script>
export default {
    props: {
        value: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false }
    },
    data() {
        return {
            currentValue: this.value
        }
    },
    methods: {
        toggle() {
            if (this.disabled) return
            this.currentValue = !this.currentValue

            this.$emit('toggle', this.currentValue)
            this.$emit('update:value', this.currentValue) // allow for sync
            this.$emit('input', this.currentValue)        // allow for v-model
        }
    }
}
</script>

<style lang="scss" scoped>
$height: 22px;
$button-size: 18px;

.u-switch {
    position: relative;
    display: inline-block;
    line-height: $height;
    height: $height;
    width: 44px;
    border-radius: 100px;
    background: $disabled-color;
    color: white;
    vertical-align: middle;
    user-select: none;
    cursor: pointer;

    &:focus {
        outline: 0;
    }

    &[disabled] {
        cursor: not-allowed;
        background: $disabled-color;
    }

    &[checked] {
        background: $primary-color;

        .button {
            transition: all 0.2s ease;
            left: calc(24px);
        }
    }

    .button {
        position: absolute;
        left: 2px;
        top: 2px;
        border-radius: 100px;
        width: $button-size;
        height: $button-size;
        background: white;
        transition: all 0.2s ease;
    }
}
</style>
