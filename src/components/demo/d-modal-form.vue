<template>
    <u-modal
        :visible="visible" :title="title"
        @before-close="submit" @close="close">
        <ul>
            <li><u-input v-model="name" placeholder="姓名" /></li>
            <li><u-input v-model="age" placeholder="年龄" /></li>
        </ul>
    </u-modal>
</template>

<script>
import { PopupModalMixin } from '@/components/mixins'

export default {
    mixins: [PopupModalMixin],
    props: {
        title: { type: String, default: '' }
    },
    data() {
        return {
            name: '',
            age: ''
        }
    },
    methods: {
        submit(e) {
            if (!e.ok) return // 取消按钮不需要中断流程

            e.preventDefault() // 阻止关闭弹窗，方便异步校验
            // 类比请求后台
            setTimeout(() => {
                this.close({ name: this.name, age: this.age })
            }, 1000)
        }
    }
}
</script>
