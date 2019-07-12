export default {
    data() {
        return {
            listService: null, // 获取列表服务接口，必须赋值

            // result
            list: [],
            total: 0,

            // params
            page: 1,
            pageSize: 20,
            condition: {},

            loading: false
        }
    },
    mounted() {
        if (this.shouldUpdateList()) {
            this.__getList()
        }
    },
    methods: {
        shouldUpdateList() {
            // override this method if needed
            return true
        },
        async beforeUpdateListHandler() {
            // override this method if needed
            return new Promise(resolve => {
                resolve()
            })
        },

        afterUpdateListHandler(data) {
            // override this method if needed
            return data
        },

        async __getList() {
            try {
                await this.beforeUpdateListHandler()

                this.loading = true
                const param = this.getListParam()
                const data = await this.listService(param)
                const result = data
                this.list = (result && result.list) || (result instanceof Array && result) || []
                this.total = (result.pagination && result.pagination.total) || result.total

                this.afterUpdateListHandler(data)
            } catch (err) {
                console.log(err) // eslint-disable-line
            } finally {
                this.loading = false
            }
        },

        async refresh() {
            this.page = 1
            await this.__getList()
        },

        getListParam() {
            const param = this.getExtraParam()
            const { page, pageSize } = this
            return { ...param, page, pageSize }
        },

        getExtraParam() {
            return this.condition
        },

        handleSizeChange(pageSize) {
            this.pageSize = pageSize
            this.__getList()
        },

        handleCurrentChange(page) {
            this.page = page
            this.__getList()
        },

        async refreshCurrentPage() {
            await this.__getList()
        }
    }
}
