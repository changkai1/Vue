<template>
    <div>
        <h2>用户</h2>
        <p>欢迎<span>{{$route.params.userId}}</span>到来</p>
    </div>
</template>

<script>
export default {
    name: 'user',
    created () {
        console.log('created')
    },
    destroyed () {
        console.log('destory')
    }
}
</script>

<style>

</style>