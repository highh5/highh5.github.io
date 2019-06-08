<template>
    <div>
        <span>
            Home.vue
            我是首页
            我是首页
        </span>
    </div>
</template>

<script>
  export default {
    name: "Home.vue",
    async mounted() {
      let res = await fetch('http://www.baidu.com')
      console.log(res)
    }
  }
  new Promise((resolve,reject)=>{

  })
</script>

<style scoped lang="less">
    div{
        width: 200px;
        span{
            background: pink;
        }
    }
</style>
