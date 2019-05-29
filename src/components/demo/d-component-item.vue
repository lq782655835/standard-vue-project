<template>
    <div class="u-demo-item">
        <p class="c-title">
            {{ name }}
            <span class="desc">{{ desc }}</span>
        </p>
        <div class="c-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: { type: String, default: '' },
        desc: { type: String, default: '' }
    }
}
</script>

<style lang="scss" scoped>
.u-demo-item {
    .c-title {
        font-size: 28px;

        .desc {
            margin-left: 10px;
            font-size: 18px;
        }
    }

    .c-content > * {
        margin: 0 5px;
    }
}
</style>
