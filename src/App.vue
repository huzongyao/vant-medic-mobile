<template>
  <div id="app">
    <!--缓存的页面-->
    <keep-alive>
      <transition v-if="$route.meta.keepAlive" name="van-fade">
        <router-view>
        </router-view>
      </transition>
    </keep-alive>
    <transition v-if="!$route.meta.keepAlive" name="van-fade">
      <!--不缓存的页面-->
      <router-view>
      </router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "app",
    mounted() {
      this._loadUserInfo();
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
