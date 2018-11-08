<template>
    <div class="u-select" :disabled="disabled" tabIndex="0" @blur="open = false">
        <div @click.stop="clickInput" class="label">
            {{ selectedItem.label || '请选择' }}
            <i :class="['arrow', open ? 'up' : 'down']"/>
        </div>
        <div v-if="open" class="options">
            <div v-for="(item, index) in formatList" :key="index"
            :title="item.label" @click="selectItem(item)"
            :class="['option', { 'seleced': item.label == selectedItem.label }]" >
                {{ item.label }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        list: { type: Array, default: () => [] },
        value: [String, Number],
        labelField: { type: String, default: 'label' },
        valueField: { type: String, default: 'value' },
        disabled: { type: Boolean, default: false }
    },
    data() {
        return {
            open: false
        }
    },
    computed: {
        formatList() {
            return this.list.map(item =>
                Object.assign({}, item, {
                    label: item[this.labelField],
                    value: item[this.valueField]
                })
            )
        },
        selectedItem() {
            if (!this.value) return {}
            return this.formatList.find(item => item.value === this.value) || {}
        }
    },
    methods: {
        clickInput() {
            if (this.disabled) return
            this.open = !this.open
        },
        selectItem(item) {
            this.$emit('select', item)
            this.$emit('update:value', item.value) // allow sync api
            this.$emit('input', item.value) // allow v-model api
            this.open = false
        }
    }
}
</script>

<style lang="scss">
$max-height: 220px;

.u-select {
    position: relative;
    display: inline-block;
    border: 1px solid #cccccc;
    border-radius: 2px;
    height: $component-height;
    line-height: $component-height;
    background: #fff;
    color: #738298;
    outline: none;
    user-select: none;

    &[disabled] {
        cursor: not-allowed;
        color: #ffffff;
        background: #95a2b5;
    }

    &[size='l'] {
        width: 140px;
    }

    &[size='s'] {
        width: 120px;
    }

    .label {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: 0 26px;

        .arrow {
            position: absolute;
            right: 8px;
            top: 8px;
            border: solid #738298;
            border-width: 0 1px 1px 0;
            padding: 4px;
            transition: all 0.2s ease-in-out;
            transform-origin: 10% 10%;

            &.down {
                transform: rotate(45deg);
            }

            &.up {
                top: 20px;
                transform: rotate(-135deg);
            }
        }
    }

    .options {
        position: absolute;
        z-index: 999;
        margin-top: 1px;
        box-sizing: border-box;
        box-shadow: 0 0 6px 0 rgba(150, 150, 150, 0.5);
        border-radius: 2px;
        width: 100%;
        height: auto;
        max-height: $max-height;
        overflow: auto;
        padding: 0 16px;
        background: #fff;

        .option.selected,
        .option:hover {
            color: $primary-color;
            cursor: pointer;
        }
    }
}
</style>
