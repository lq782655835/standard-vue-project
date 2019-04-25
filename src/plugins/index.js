import Vue from 'vue'
import YIUI from 'yi-ui'
Vue.use(YIUI)

import './svg' /* 导入svg资源 */
import './directives' /* 导入所有指令 */

/** global component
 *  当需要开启自注册全局组件，打开以下注释
 */
// const Components = require.context('../components/common', true, /(\.vue)$/)
// Components.keys().map(key => {
//     // 文件名作为组件名
//     let componentName = key.replace(/(.*\/)*([^.]+).*/gi, '$2')
//     Vue.component(componentName, Components(key).default)
// })

// Promise Catch不报错
window.addEventListener('unhandledrejection', event => event.preventDefault())
