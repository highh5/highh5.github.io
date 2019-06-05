<template>
    <div>
        <router-link to="/home">首页</router-link>
        <router-link to="/about">关于我们</router-link>
        <router-view/>
    </div>
</template>

<script>
  export default {
    name: "App"
  }
</script>

<style scoped>

</style>
