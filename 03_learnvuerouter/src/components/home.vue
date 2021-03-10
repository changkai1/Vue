<template>
    <div>
        <h2>首页</h2>
        <p>我是首页，哈哈哈</p>
        <router-link to="/home/news">新闻</router-link>
        <router-link to="/home/message">消息</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'home',
    data () {
        return {
            name: 'home',
            path: '/home/news'
        }
    },
    created () {
        console.log('created')
    },
    destroyed () {
        console.log('destroyed')
    },
    // 组件内守卫
    beforeRouterEnter (to, from, next) {
        next(vm => {
            // console.log(vm.name)
        })
    },
    beforeRouteLeave (to, from, next) {
        // console.log('home to', to)
        // console.log('home from', from)
        this.path = from.path
        next()
    },
    activated () {
        console.log("home activated")
        this.$router.push(this.path)
    },
    deactivated () {
        console.log('home deactivated')
    }
}
</script>

<style>
p {
    font-size: 30px;
}
</style>