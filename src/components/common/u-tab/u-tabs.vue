<template>
    <div class="u-tabs">
        <ul class="u-tabs-nav">
            <li v-for="(itemVM, index) in itemVMs" :key="index"
                :class="['u-tab', {'selected': index === activeIndex}]"
                v-on="listeners" @click.prevent="handleClick(index, itemVM)">
                {{itemVM.title}}
            </li>
        </ul>
        <div class="u-tabs-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        value: { type: Number, default: 0, validator: value => Number.isInteger(value) && value >= 0 }
    },
    data() {
        return {
            itemVMs: [],
            activeIndex: this.value
        }
    },
    computed: {
        listeners() {
            const listeners = Object.assign({}, this.$listeners)
            delete listeners.click
            return listeners
        }
    },
    watch: {
        value(value) {
            this.activeIndex = value
        }
    },
    methods: {
        handleClick(index, itemVM) {
            this.activeIndex = index

            this.$emit('update:value', index) // allow sync api
            this.$emit('input', index) // allow v-model
            itemVM.to && itemVM.navigate() // allow router api
        }
    }
}
</script>

<style lang="scss">
.u-tabs {
    background-color: #ffffff;
    color: #000000;
    user-select: none;

    &-nav {
        border-bottom: 1px solid #d9d9d9;

        .u-tab {
            display: inline-block;
            position: relative;
            width: 100px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            margin-right: 3px;
            font-size: 20px;
            color: #333333;
            background: #fafafa;
            border: 1px solid rgba(0, 0, 0, 0.15);
            border-bottom: 0 solid rgba(0, 0, 0, 0.15);
            border-radius: 2px 2px 0 0;
            @include font-normal(14px, #333333);
            cursor: pointer;
            transition: all 0.2s ease;

            &.selected {
                color: $primary-color;
                background: $white;
                border-bottom: 0 solid $white;
                transition: all 0.2s ease;

                &::after {
                    content: ' ';
                    width: 97.6px;
                    height: 2px;
                    display: inline-block;
                    position: absolute;
                    background: $white;
                    left: 0;
                    bottom: -2px;
                }
            }
        }
    }

    &-content {
        padding-top: 30px;
    }
}
</style>
