<template>
  <div>
    <van-nav-bar left-arrow @click-left="_routerBack" :title="$t('tab_message')" fixed :z-index="10"></van-nav-bar>
    <div class="nav-con">

    </div>
  </div>
</template>

<script>
  export default {
    name: "message-detail",
    data() {
      return {}
    },
    mounted() {
    },
    methods: {},
  }
</script>

<style scoped lang="less">

</style>
