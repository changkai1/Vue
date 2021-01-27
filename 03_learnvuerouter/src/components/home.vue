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
            name: 'home'
        }
    },
    // 组件内守卫
    beforeRouteEnter: (to, from, next) => {
        next(vm => {
            console.log(vm.name)
        })
    }
}
</script>

<style>

</style>