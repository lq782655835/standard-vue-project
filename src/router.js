import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/pages/index'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/demo',
            name: 'demo',
            component: () => import('@/pages/demo')
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})

export default router
