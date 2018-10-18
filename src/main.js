import Vue from 'vue'
import app from './app.vue'
import router from '@/router'
import '@/plugins' /* 组件，指令，插件等core统一入口 */

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

new Vue({
    router,
    render: h => h(app)
}).$mount('#app')
