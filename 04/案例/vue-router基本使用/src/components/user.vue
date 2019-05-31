<template>
  <div>
    <h2>用户</h2>
    <p>用户{{$route.params.id}}</p>
  </div>
</template>

<script>
export default {
  name: "home",
  mounted () {
    console.log(this)
    console.log(this.$route)
    console.log(this.$route.params)
    console.log(this.$route.params.id)
  }
}
</script>

<style scoped>

</style>
