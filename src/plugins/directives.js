import Vue from 'vue'

const directives = {
    /**
     * 自动下滑到底部指令
     */
    autoscroll: {
        // componentUpdated:VNode 及其子 VNode 全部更新后调用
        componentUpdated: function(el) {
            let scrollHeight = el.scrollHeight
            let clientHeight = el.clientHeight

            scrollHeight > clientHeight && (el.scrollTop = scrollHeight)
        }
    }
}

Object.keys(directives).map(t => {
    Vue.directive(t, directives[t])
})
