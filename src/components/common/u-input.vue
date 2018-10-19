<template>
    <div :class="['u-input', {'textarea': isTextArea}]" v-bind="$attrs">
        <input v-if="!isTextArea"
            v-model="inputValue" v-bind="$attrs"
            v-on="listeners" @input="onInput"
            :disabled="disabled" class="input" />
        <textarea v-else 
            v-model="inputValue" v-bind="$attrs"
            v-on="listeners" @input="onInput"
            :disabled="disabled" class="input" />
    </div>
</template>

<script>
export default {
    props: {
        type: { type: String, default: 'text' },
        value: { type: [String, Number] },
        disabled: { type: Boolean, default: false }
    },
    data() {
        return {
            inputValue: this.value
        }
    },
    computed: {
        isTextArea() {
            return this.type !== 'text'
        },
        listeners() {
            const listeners = Object.assign({}, this.$listeners)
            delete listeners['input']
            return listeners
        }
    },
    watch: {
        value(val) {
            this.inputValue = val
        }
    },
    methods: {
        onInput() {
            this.$emit('update:value', this.inputValue) // allow sync api
            this.$emit('input', this.inputValue) // allow v-model
        }
    }
}
</script>


<style lang="scss" scoped>
.u-input {
    display: inline-block;
    height: $component-height;
    width: 300px;

    &.textarea {
        height: 200px;
    }

    &[size='s'] {
        width: 120px;
    }

    &[size='l'] {
        width: 400px;
    }

    .input {
        width: 100%;
        height: 100%;
        font-size: 14px;
        color: $input-color;
        padding: 6px 10px;
        border: 1px solid $border-color;
        border-radius: 2px;

        &[disabled] {
            cursor: not-allowed;
        }

        &:focus {
            border: 1px solid $primary-color;
        }

        &:-ms-input-placeholder {
            @extend .placeholder-text;
        }

        &:-moz-placeholder {
            @extend .placeholder-text;
        }

        &::-moz-placeholder {
            @extend .placeholder-text;
        }

        &::-webkit-input-placeholder {
            @extend .placeholder-text;
        }

        .placeholder-text {
            @include font-normal(14px, $tip-color);
            letter-spacing: 0;
            line-height: 14px;
        }
    }
}
</style>
