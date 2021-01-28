<template>
    <div id="app">
      <!-- 
          <router-link></router-link>属性
            to: 路由跳转
            tag: 'button' 渲染成什么标签
            replace: 后退键不能返回到上一个页面中，不会留下history记录
            active-class: 路由选中时的class名
       -->
      <!-- 
          <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
          <router-link to="/about" tag="button" replace active-class="active">关于</router-link>
       -->
        
        <!-- <router-link to="/home" tag="button" replace>首页</router-link>
        <router-link to="/about" tag="button" replace>关于</router-link> -->

        <button @click="home">首页</button>
        <button @click="about">关于</button>
        <router-link :to="'/user/' + userId" tag="button">用户</router-link>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <!-- <router-view></router-view> -->
    </div>
</template>

<script>
export default {
    name: 'App',
    data () {
        return {
            userId: 'zhangsan'
        }
    },
    methods: {
        home () {
            // this.$router.push('/home')
            this.$router.replace('/home')
        },
        about () {
            // this.$router.push('/about')
            this.$router.replace('/about')
        }
    }
}
</script>

<style>
.router-link-active {
  color: red;
}
</style>
