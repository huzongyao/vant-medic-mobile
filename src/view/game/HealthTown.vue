<template>
  <div>
    <div class="loading-town" v-if="loadProgress<100">
      <van-image src="static/img/town/bear-breathe.gif" class="bear-img"></van-image>
      <div class="prog-back">
        <div class="prog-bar" :style="{width:`${loadProgress}%`}">
          <div :style="{'background-image':'url(static/img/town/pb-mb.png)'}" class="bar-mask"></div>
        </div>
      </div>
      <div class="prod-txt">正在前往健康小镇...</div>
    </div>
    <!--真实页面-->
    <div v-else class="town-field" :style="{'background-image':'url(static/img/town/town_back.png)'}">
      <van-image src="static/img/town/town_house_2.png" class="house-left"></van-image>
      <van-image src="static/img/town/town_house_1.png" class="house-right"></van-image>
      <van-image class="float-bag" v-for="(it,idx) in floatBubs" :key="idx" :src="`static/img/town/${it.img}`"
                 :style="{left:it.x+'%', top:it.y+'%',animationDelay:it.start+'s'}"></van-image>
      <van-image src="static/img/town/bear-breathe.gif" class="float-bear"></van-image>
    </div>
  </div>
</template>

<script>
  export default {
    name: "health-town",
    data() {
      return {
        loadProgress: 0,
        loadTimer: null,
        floatBubs: [
          {img: 'check-bag.png', x: 60, y: 6, start: 0.2},
          {img: 'air-bag.png', x: 40, y: 10, start: 0.8},
          {img: 'red-bag.png', x: 17, y: 18, start: 1},
          {img: 'air-bag.png', x: 25, y: 28, start: 0.5},
          {img: 'air-bag.png', x: 74, y: 19, start: 1.2},
        ],
      }
    },
    mounted() {
      this.startLoading();
    },
    methods: {
      startLoading() {
        this.loadTimer = setInterval(() => {
          if (this.loadProgress >= 100) {
            clearInterval(this.loadTimer);
          } else {
            this.loadProgress++;
          }
        }, 2);
      },
    },
  }
</script>

<style scoped lang="less">
  .town-field {
    .house-left {
      width: 30%;
      position: absolute;
      top: 28vw;
      left: 0;
    }
    .house-right {
      width: 30%;
      position: absolute;
      top: 67vw;
      right: 0;
    }
    .float-bear {
      width: 26%;
      position: absolute;
      left: 37%;
      top: 30%
    }
    .float-bag {
      width: 15%;
      position: absolute;
      animation: bagShake 3s linear infinite;
    }
    height: 100vh;
    background-size: 100% auto;
    background-color: #2EAF79;
    background-repeat: no-repeat;
  }

  .loading-town {
    .bear-img {
      width: 28%;
      margin-top: 50%;
    }
    .prod-txt {
      color: white;
      margin-top: 20px;
      font-size: 17px;
    }
    .prog-back {
      .prog-bar {
        .bar-mask {
          width: 100%;
          height: 100%;
          background-size: auto 100%;
          border-radius: 10px;
        }
        height: 20px;
        background: linear-gradient(#F8E857, #FAAF10);
        border-radius: 10px;
      }
      width: 70%;
      height: 20px;
      margin-left: 15%;
      background: white;
      margin-top: 10%;
      border-radius: 10px;
    }
    text-align: center;
    background: #2EAF79;
    height: 100vh;
  }

  @keyframes bagShake {
    0% {
      transform: translate3d(0, 0, 0);
    }
    25% {
      transform: translate3d(0, 10px, 0);
    }
    50% {
      transform: translate3d(0, 0, 0);
    }
    75% {
      transform: translate3d(0, -10px, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }
</style>
