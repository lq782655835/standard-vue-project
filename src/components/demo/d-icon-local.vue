<template>
    <a :class="['u-icon', isSvg ? name : '']"
        :href="href" :disabled="disabled"
        @click="onClick" v-on="listeners">
        <svgicon v-if="isSvg" :name="name" :scale="scale" :original="original" v-bind="$attrs" />
        <img v-else :src="imgSrc" v-bind="$attrs" />
    </a>
</template>

<script>
import { ULink } from 'yi-ui'

export default {
    mixins: [ULink],
    props: {
        name: { type: String, default: '' },
        /* blew api look at https://github.com/MMF-FE/vue-svgicon */
        scale: { type: [String, Number], default: '1' },
        original: { type: Boolean, default: true }
    },
    computed: {
        isSvg() {
            return this.name.indexOf('.') === -1
        },
        imgSrc() {
            return /^(http|https)/g.test(this.name) // 支持网络图片
                ? this.name
                : require(`@/assets/img/${this.name}`)
        }
    }
}
</script>

<style lang="scss" scoped>
.u-icon {
    position: relative;
    display: inline-flex;
    align-items: center;
    display: inline-block;
    vertical-align: middle;
    line-height: 0;
    overflow: hidden;

    &[disabled] {
        cursor: not-allowed;
    }

    img {
        max-width: 100%;
        max-height: 100%;
    }
}
</style>
