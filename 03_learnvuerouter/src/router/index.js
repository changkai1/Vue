// 配置路由相关信息
import Vue from 'vue'
import VueRouter from 'vue-router'

// 通过Vue.use(插件),安装插件
Vue.use(VueRouter)
// 创建路由对象
const routes = [
    {
        path: '/',
        // 重定向
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: () => import ('../components/home.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import ('../components/about.vue')
    }
]
const router = new VueRouter({
    mode: 'history',  // history模式
    linkActiveClass: 'active', // 路由选中时的class名
    routes
})
export default router