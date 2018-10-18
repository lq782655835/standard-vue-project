<template>
    <a class="u-button" v-on="listeners" :href="href" :disabled="disabled" @click="onClick">
        <slot></slot>
    </a>
</template>

<script>
import ULink from './u-link.vue'

export default {
    name: 'u-button',
    mixins: [ULink]
}
</script>

<style lang="scss" scoped>
.u-button {
    position: relative;
    text-align: center;
    cursor: pointer;
    user-select: none;
    display: inline-block;
    padding: 8px 24px;
    border: 1px solid $border-color;
    border-radius: 2px;
    color: $tip-color-m;
    background-color: #ffffff;
    letter-spacing: 0;
    line-height: 14px;

    &:hover {
        border: 1px solid $primary-color;
        color: $primary-color;
    }

    &[size='s'] {
        padding: 4px 12px;
    }

    &[size='l'] {
        padding: 10px 85px;
    }

    &[color='primary'] {
        border: 1px solid $primary-color;
        background: $primary-color;
        color: #ffffff;
    }

    &[disabled='disabled'] {
        cursor: not-allowed;
        background: $brand-disabled;
        border: 1px solid $brand-disabled;
        color: #ffffff;
    }
}
</style>
