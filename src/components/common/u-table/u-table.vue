<template>
    <table class="u-table" :class="{ auto }">
        <thead>
            <tr>
                <th v-for="(column,index) in columns" :style="column.style" :key="index">
                    <span type="7" >{{column.label}}</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(row,index) in list" :key="index" @click="rowItemClick(row, index, $event)" class="ai-table-content ai-table-row">
                <slot :row="row" :rowIndex="index" />
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: {
        list: { type: Array, default: () => [] },
        auto: { type: Boolean, default: true }
    },
    data() {
        return {
            columns: []
        }
    },
    methods: {
        rowItemClick(row, index, ev) {
            this.$emit('row-click', row, index, ev)
        }
    }
}
</script>

<style lang="scss" scoped>
.u-table {
    &.auto {
        width: 100%;
    } // 自适应

    &[size='s'] {
        th,
        td {
            padding: 8px 0;
        }
    }

    th,
    td {
        padding: 20px 0; // 上下空出间隙

        // 表格左空出间隙
        &:first-child {
            padding-left: 22px;
        }

        // 表格右空出间隙
        &:last-child {
            padding-right: 22px;
        }
    }

    // 表头
    thead {
        tr {
            height: 54px;
            background-color: #f7f7fa;

            th {
                white-space: nowrap;
            }
        }
    }

    tbody {
        border-radius: 4px;
        background-color: #ffffff;

        tr {
            border-bottom: 1px solid #e1e3e6;
        }
    }
}
</style>
