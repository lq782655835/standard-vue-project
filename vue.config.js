module.exports = {
    // 生产环境构建不生成 source map，加快打包速度
    productionSourceMap: false,

    // CSS 相关选项
    css: {
        loaderOptions: {
            sass: {
                data: `@import "@/assets/css/variables.scss";`
            }
        }
    }
}
