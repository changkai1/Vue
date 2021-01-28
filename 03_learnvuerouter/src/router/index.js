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
        meta: {
            title: '首页'
        },
        component: () => import ('../components/home.vue'),
        // 路由嵌套
        children: [
            {
                path: 'news',
                name: 'homeNews',
                meta: {
                    title: '首页-新闻'
                },
                component: () => import ('../components/homeNews.vue')
            },
            {
                path: 'message',
                name: 'homeMessage',
                meta: {
                    title: '首页-消息'
                },
                component: () => import ('../components/homeMessage.vue')
            }
        ]
    },
    {
        path: '/about',
        name: 'about',
        meta: {
            title: '关于'
        },
        // 路由独享守卫
        beforeEnter: (to, from, next) => {
            // console.log('路由独享守卫to', to)
            // console.log('路由独享守卫from', from)
            next()
        },
        component: () => import ('../components/about.vue')
    },
    // 动态路由
    {
        path: '/user/:userId',
        name: 'user',
        meta: {
            title: '用户'
        },
        component: () => import ('../components/user.vue')
    }
]
const router = new VueRouter({
    mode: 'history',  // history模式
    linkActiveClass: 'active', // 路由选中时的class名
    routes
})
// 全局导航守卫
// 前置守卫 修改title
router.beforeEach((to, from, next) => {
    document.title = to.meta.title
//    document.title = to.matched[0].meta.title
    // console.log('to', to)
    // next可以传参next({path: '/login'})
   next()
})
// 后置守卫
router.afterEach((to, from) => {
    // console.log('to', to)
    // console.log('from', from)
})
export default router
