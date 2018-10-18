<template>
    <div class="u-demo-item">
        <p class="c-title">{{name}}</p>
        <div class="c-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: { name: String, default: '' }
}
</script>


<style lang="scss" scoped>
.u-demo-item {
    .c-title {
        font-size: 24px;
    }

    .c-content > * {
        margin: 0 5px;
    }
}
</style>
