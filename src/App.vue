<template>
  <div id="app">
    <!--缓存的页面-->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive">
      </router-view>
    </keep-alive>
    <!--不缓存的页面-->
    <router-view v-if="!$route.meta.keepAlive">
    </router-view>
  </div>
</template>

<script>
  export default {
    name: "app",
    mounted() {
    },
    methods: {},
  }
</script>


<style scoped lang="less">
  #app {
    background-color: #f7f7f7;
    height: 100vh;
  }
</style>
