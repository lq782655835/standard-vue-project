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
        <u-demo-item name="u-icon" desc="icon组件使用本地svg/image/网络图片">
            <u-icon name="edit" />
            <u-icon scale="3" name="delete" color="#00FF00" @click="$toast.show('本地图片库更加适合实际项目')"/>
            <u-icon name="close" />
            <u-icon name="slef-image.png" />
            <u-icon name="https://upload.wikimedia.org/wikipedia/commons/6/6b/NetEase_Music_logo.svg" class="cloud-music"/>
        </u-demo-item>
        <u-demo-item name="u-select">
            <u-select v-model="selectValue" :list="selectList" />
            <u-select :list="selectList" size="s" disabled />
        </u-demo-item>
        <u-demo-item name="u-input/textarea">
            <u-input v-model="inputValue" placeholder="请输入专题名" />
            <u-input size="s" placeholder="小输入框" />
            <u-input disabled placeholder="禁用输入框" />
            <br /><br />
            <u-input type="textarea" placeholder="textarea输入框" />
        </u-demo-item>
        <u-demo-item name="u-switch">
            <u-switch v-model="switchValue" />
            <u-switch disabled />
        </u-demo-item>
        <u-demo-item name="u-checkbox">
            <u-checkbox v-model="checkboxValue" label="多选框" />
            <u-checkbox v-model="checkboxValue" disabled>多选框2</u-checkbox>
        </u-demo-item>

        <u-demo-item name="u-layout">
            <u-layout>
                <u-button @click="test">默认横向排列</u-button>
                <u-button>默认横向排列</u-button>
                <u-button>默认横向排列</u-button>
            </u-layout>
            <u-layout dir="v" display="block" gap="s">
                <u-button>竖向排列 && block对象</u-button>
                <u-button>竖向排列</u-button>
                <u-button>竖向排列</u-button>
            </u-layout>
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
            <u-table :list="tableList">
                <template slot-scope="{ row, rowIndex }">
                    <u-table-column label="分类" width="100px">{{row.tab}}</u-table-column>
                    <u-table-column label="名称" width="100px">{{row.title}}</u-table-column>
                    <u-table-column label="操作" width="60px">
                        <u-icon name="edit" />
                        <u-icon name="delete" />
                    </u-table-column>
                </template>
            </u-table>
        </u-demo-item>
        <u-demo-item name="u-tree">
            <u-tree :data="treeData" labelField="name" />
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
const treeData = {
    name: 'China',
    children: [
        { name: 'Beijing' },
        { name: 'Shaanxi' },
        {
            name: 'Zhejiang',
            children: [
                {
                    name: 'Hangzhou',
                    children: [{ name: 'Binjiang' }, { name: 'Xiaoshan' }]
                },
                { name: 'Ningbo' },
                { name: 'Quzhou' },
                {
                    name: 'Jinhua',
                    children: [{ name: 'Wucheng' }]
                }
            ]
        }
    ]
}
export default {
    components: { UDemoItem },
    data() {
        return {
            tableList: [],
            inputValue: '',
            modalVisible: false,
            selectList: [
                {
                    label: '简写版select',
                    value: 1
                },
                {
                    label: '麻雀虽小',
                    value: 2
                }
            ],
            selectValue: 1,
            switchValue: true,
            checkboxValue: true,
            treeData
        }
    },
    created() {
        this._gettableList()
    },
    methods: {
        test() {
            l(this.checkboxValue)
        },
        confirmByJS() {
            this.$confirm('这是一个Confirm确认框')
                .then(() => alert('你选择了确定'))
                .catch(() => alert('你选择了取消'))
        },
        alertByJS() {
            this.$alert('这是一个Alert提示框').then(() => l('alert确定'))
        },
        async _gettableList() {
            this.tableList = await getAllTopic()
        }
    }
}
</script>

<style lang="scss" scoped>
.g-demo {
    & > * {
        margin: 10px 0;
    }

    .u-table {
        .u-icon {
            margin-right: 8px;
        }
    }

    .cloud-music {
        width: 50px;
    }
}
</style>
