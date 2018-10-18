import Vue from 'vue'

import './directives' /* 导入所有指令 */

/** global component */
const Components = require.context('../components/common', true, /(\.vue)$/)
Components.keys().map(key => {
    // 文件名作为组件名
    let componentName = key.replace(/(.*\/)*([^.]+).*/gi, '$2')
    Vue.component(componentName, Components(key).default)
})

// Promise Catch不报错
window.addEventListener('unhandledrejection', event => event.preventDefault())
