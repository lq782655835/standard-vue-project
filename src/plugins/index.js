import Vue from 'vue'
import YIUI from 'yi-ui'
Vue.use(YIUI)

import './svg' /* 导入svg资源 */
import './directives' /* 导入所有指令 */

// Promise Catch不报错
window.addEventListener('unhandledrejection', event => event.preventDefault())
