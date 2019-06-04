<template>
    <transition  enter-active-class="animated slideInRight"
                 leave-active-class="animated slideOutRight">
        <div class="search">
            你好
        </div>
    </transition>
</template>

<script>
  export default {
    name: "Search",
    beforeDestroy() {
      return;
    }
  }
</script>

<style scoped>
    .search{
        position: absolute;
        z-index: 199;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: #fff;
    }
    .animated{
        animation-duration: 0.3s;
    }
</style>
