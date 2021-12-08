<template>
  <div>
    <van-swipe :show-indicators="false">
      <van-swipe-item v-for="(it,idx) in guideImgs" :key="idx">
        <van-image :src="`static/img/guide/${it}`" class="guide-img"
                   fit="cover" @click="onImageClick(idx)"></van-image>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
  export default {
    name: "guide-page",
    data() {
      return {
        guideImgs: ['guide_one.jpg', 'guide_two.jpg', 'guide_three.jpg', 'guide_four.jpg'],
      }
    },
    mounted() {
    },
    methods: {
      onImageClick(idx) {
        if (idx == this.guideImgs.length - 1) {
          this._routeReplace('main');
        }
      }
    },
  }
</script>

<style scoped lang="less">
  .guide-img {
    width: 100vw;
    height: 100vh;
  }
</style>
