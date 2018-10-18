<template>
    <a class="u-link" v-on="listeners" :href="href" :disabled="disabled" @click="onClick">
        <slot></slot>
    </a>
</template>

<script>
export default {
    name: 'u-link',
    props: {
        href: { type: String },
        to: [String, Object],
        replace: { type: Boolean, default: false },
        append: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false }
    },
    computed: {
        listeners() {
            const listeners = Object.assign({}, this.$listeners)
            delete listeners.click
            return listeners
        }
    },
    methods: {
        onClick(e) {
            if (this.disabled) return e.preventDefault()

            this.$emit('click', e)
            // 先执行事件，再执行to，最后判断href
            this.navigate()
        },
        navigate() {
            if (this.to === undefined) return

            if (!this.$router) {
                console.warn('Cannot find vue router.')
                return
            }

            const $router = this.$router
            const { location } = $router.resolve(this.to, this.$route, this.append)
            this.replace ? $router.replace(location) : $router.push(location)

            this.$emit('navigate', {
                to: this.to,
                exact: this.exact,
                replace: this.replace
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.u-link {
    text-decoration: none;
    cursor: pointer;
    outline: none;
    color: inherit;
}
</style>
