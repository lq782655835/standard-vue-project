export default {
    data() {
        return {
            visible: true
        }
    },
    watch: {
        visible(val) {
            !val && this.$destroy()
        }
    },
    mounted() {
        document.body.appendChild(this.$el)
    },
    destroyed() {
        this.$el.parentNode.removeChild(this.$el)
    },
    methods: {
        close(data) {
            this.visible = false
            this.$emit('done', data)
        }
    }
}
