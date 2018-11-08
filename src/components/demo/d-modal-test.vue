<template>
    <u-modal :visible="visible" :title="title" @close="close">
        这里可以随意自定义html内容
    </u-modal>
</template>

<script>
import { PopupModalMixin } from '@/components/mixins'

export default {
    mixins: [PopupModalMixin],
    props: {
        title: { type: String, default: '' }
    }
}
</script>

