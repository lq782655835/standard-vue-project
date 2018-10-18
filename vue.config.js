function resolve(dir) {
    return Path.join(__dirname, dir)
}

const Path = require('path')

module.exports = {
    // 项目部署的基础路径
    baseUrl: '/',

    // 构建好的文件输出路径
    outputDir: 'dist',

    // 保存时使用 `eslint-loader` 检查
    lintOnSave: true,

    // 是否为生产环境构建生成 source map？
    productionSourceMap: true,

    // CSS 相关选项
    css: {
        loaderOptions: {
            sass: {
                data: `@import "@/assets/css/variables.scss";`
            }
        }
    },

    // webpack配置
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    },

    // 配置 webpack-dev-server 行为
    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 8080,
        https: false,
        // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/cli-service.md#配置代理
        proxy: null
    }
}
