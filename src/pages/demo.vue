<template>
    <div class="g-demo layout">
        <u-demo-item name="u-link">
            <u-link href="/">系统内导链</u-link>
            <u-link href="https://www.baidu.com">系统外导链百度</u-link>
        </u-demo-item>
        <u-demo-item name="u-button">
            <u-button>默认按钮</u-button>
            <u-button color="primary">主要按钮</u-button>
            <u-button color="primary" disabled>禁用按钮</u-button>
            <u-button color="primary" size="s">小按钮</u-button>
            <u-button color="primary" href="https://www.baidu.com">导链按钮</u-button>
        </u-demo-item>
        <u-demo-item name="u-input/textarea">
            <u-input v-model="topicValue" placeholder="请输入专题名" />
            <u-input size="s" placeholder="小输入框" />
            <u-input disabled placeholder="禁用输入框" />
            <br /><br />
            <u-input type="textarea" placeholder="textarea输入框" />
        </u-demo-item>
        <u-demo-item name="u-toast">
            <u-button @click="$toast.show('这是一个toast提示框')">编程式打开toast</u-button>
            <u-button @click="$toast.show('这是一个错误提示框', 'error')">错误toast</u-button>
        </u-demo-item>
        <u-demo-item name="u-modal/confirm/alert">
            <u-button @click="modalVisible = true">打开自定义模态框</u-button>
            <u-button @click="confirmByJS">编程式打开Confirm模态框</u-button>
            <u-button @click="alertByJS">编程式打开Alert模态框</u-button>
        </u-demo-item>
        <u-demo-item name="u-tabs/tab">
            <u-tabs>
                <u-tab title="普通tab1">测试1tab内容</u-tab>
                <u-tab title="普通tab2">测试2tab内容</u-tab>
                <u-tab title="普通tab3">测试3tab内容</u-tab>
            </u-tabs>
            <u-tabs :value="1">
                <u-tab title="去往首页" to="/"></u-tab>
                <u-tab title="去往Demo" to="/demo"></u-tab>
                <u-tab title="路由tab">测试3内容</u-tab>
            </u-tabs>
        </u-demo-item>
        <u-demo-item name="u-table">
            <u-table :list="topicList">
                <template slot-scope="{ row, rowIndex }">
                    <u-table-column label="分类" width="100px">{{row.tab}}</u-table-column>
                    <u-table-column label="名称" width="100px">{{row.title}}</u-table-column>
                    <u-table-column label="操作" width="60px">
                        <u-link>编辑</u-link>
                        <u-link>删除</u-link>
                        <!-- <u-icon name="edit" @click="editRow(row)"/>
                        <u-icon name="delete" @click="deleteRow(row)"/> -->
                    </u-table-column>
                </template>
            </u-table>
        </u-demo-item>
        <u-modal :visible.sync="modalVisible" title="测试模态框">
            这里可以随意自定义html内容
        </u-modal>
    </div>
</template>

<script>
import UDemoItem from '@/components/u-demo-item'
import { getAllTopic } from '@/server'

const l = console.log
export default {
    components: { UDemoItem },
    data() {
        return {
            topicList: [],
            topicValue: '',
            modalVisible: false
        }
    },
    created() {
        this._getTopicList()
    },
    methods: {
        confirmByJS() {
            this.$confirm('这是一个Confirm确认框')
                .then(() => alert('你选择了确定'))
                .catch(() => alert('你选择了取消'))
        },
        alertByJS() {
            this.$alert('这是一个Alert提示框').then(() => l('alert确定'))
        },
        async _getTopicList() {
            this.topicList = await getAllTopic()
        }
    }
}
</script>

<style lang="scss" scoped>
.g-demo {
    & > * {
        margin: 10px 0;
    }
}
</style>
