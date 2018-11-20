module.exports = {
    // 是否为生产环境构建生成 source map
    productionSourceMap: false,

    // CSS 相关选项
    css: {
        loaderOptions: {
            sass: {
                data: `@import "@/assets/css/variables.scss";`
            }
        }
    },

    chainWebpack: config => {
        if (process.env.npm_config_report) {
            config.plugin('webpack-bundle-analyzer').use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
        }
    },
}
