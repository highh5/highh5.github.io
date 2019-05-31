<template>
  <div id="app">
    <h1>我是网站的首页</h1>
    <button @click="HomeHandler()">首页</button>
    <button @click="AboutHandler()">关于</button>
    <router-link :to="{
      path:'/profile/123',
      query:{name:'who',age:18}
    }">
      档案
    </router-link>
    <router-link to="/user/123">用户123</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    HomeHandler () {
      console.log(this)
      console.log(this.$router)
      this.$router.push('/home')
    },
    AboutHandler() {
      this.$router.push('/about')
    },
    ProfileHandler(){
      this.$router.push({
        path:'/profile/123',
        query:{name:'who',age:18}
      })
    }
  }
}
</script>

<style>

</style>
