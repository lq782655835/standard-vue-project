<template>
    <div class="g-index">
    </div>
</template>

<script>
// coding blow here
export default {
    name: '',
    /*1. Vue扩展 */
    extends: '', // extends和mixins都扩展逻辑，需要重点放前面
    mixins: [],
    components: {},
    /* 2. Vue数据 */
    props: {},
    model: { prop: '', event: '' }, // model 会使用到 props
    data() {
        return {}
    },
    computed: {},
    watch: {}, // watch 监控的是 props 和 data，有必要时监控computed
    /* 3. Vue资源 */
    filters: {},
    directives: {},
    /* 4. Vue生命周期 */
    created() {},
    mounted() {},
    destroy() {},
    /* 5. Vue方法 */
    methods: {} // all the methods should be put here in the last
}
</script>

<style lang="scss" scoped>
.g-index {
}
</style>
