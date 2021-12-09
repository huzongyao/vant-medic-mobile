<template>
  <div>
    <van-image src="static/img/guide/ad_page.jpg" class="splash-img" fit="cover"></van-image>
  </div>
</template>

<script>
  export default {
    name: "splash-page",
    data() {
      return {}
    },
    mounted() {
      setTimeout(() => {
        if (localStorage.getItem('guideShown')) {
          this._routePush('main');
        } else {
          this._routeReplace('GuidePage');
        }
      }, 1500);
    },
    methods: {},
  }
</script>

<style scoped lang="less">
  .splash-img {
    width: 100vw;
    height: 100vh;
  }
</style>
