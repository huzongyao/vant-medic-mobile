<template>
  <div>
    <div class="top-con" :style="{'background-image':'url(static/img/ask/ask_top.png)'}">
      <div class="flex top-text">
        <div>广州</div>
        <div class="down-arr">
          <van-icon name="arrow-down"></van-icon>
        </div>
        <div>门诊大厅</div>
      </div>
    </div>

    <div class="search-con">
      <div class="search-bar">
        <van-icon name="search" size="20px"></van-icon>
        <div class="search-txt">1分钟快速问医生</div>
      </div>
    </div>

    <div class="card-entry">
      <div class="card-box flex1" v-for="(it,idx) in cardEntries" :key="idx">
        <div class="card-item">
          <van-image :src="`static/img/ask/${it.img}`"></van-image>
          <div class="card-txt">{{it.txt}}</div>
          <div class="card-ins">{{it.ins}}</div>
        </div>
      </div>
    </div>

    <div class="small-entry">
      <van-swipe indicator-color="#999999" :loop="false">
        <van-swipe-item v-for="(it, idx) in askEntries" :key="idx">
          <div class="entry-row">
            <div v-for="(it1, idx1) in it" :key="idx1" class="flex1 align-center">
              <van-image :src="`static/img/ask/${it1.img}`" class="swipe-img" fit="cover"></van-image>
              <div>{{it1.txt}}</div>
            </div>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="banner-con">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(it, idx) in bannerAds" :key="idx">
          <van-image :src="`static/img/ask/${it.img}`" radius="4px" class="swipe-img" fit="cover"></van-image>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tab-doctor",
    data() {
      return {
        cardEntries: [
          {img: 'card_entry_1.png', txt: '图文咨询', ins: '名医1对1沟通', to: ''},
          {img: 'card_entry_2.png', txt: '私人医生', ins: '贴心VIP服务', to: ''},
          {img: 'card_entry_3.png', txt: '免费咨询', ins: '义诊0元问', to: ''},
        ],
        askEntries: [[
          {img: 'ask_entry_1.png', txt: '极速咨询', to: ''},
          {img: 'ask_entry_2.png', txt: '我要开药', to: ''},
          {img: 'ask_entry_3.png', txt: '名医电话', to: ''},
          {img: 'ask_entry_4.png', txt: '同行点赞', to: ''},
          {img: 'ask_entry_5.png', txt: '视频咨询', to: ''},
        ], [
          {img: 'ask_entry_6.png', txt: '报告解读', to: ''},
          {img: 'ask_entry_7.png', txt: '名医直播', to: ''},
          {img: 'ask_entry_8.png', txt: '科普/视频', to: ''},
          {img: 'ask_entry_9.png', txt: '肺结节专区', to: ''},
          {img: 'ask_entry_10.png', txt: '医疗热力榜', to: ''},
        ]],
        bannerAds: [
          {img: 'banner_ad_1.jpg', to: ''},
          {img: 'banner_ad_2.jpg', to: ''},
          {img: 'banner_ad_3.jpg', to: ''},
          {img: 'banner_ad_4.jpg', to: ''},
          {img: 'banner_ad_5.jpg', to: ''},
          {img: 'banner_ad_6.jpg', to: ''},
          {img: 'banner_ad_7.png', to: ''},
          {img: 'banner_ad_8.jpg', to: ''},
        ],
      }
    },
    mounted() {
    },
    methods: {},
  }
</script>

<style scoped lang="less">
  .search-con {
    .search-bar {
      .search-txt {
        padding-left: 10px;
      }
      background: white;
      height: 44px;
      border-radius: 22px;
      display: flex;
      padding-left: 10px;
      align-items: center;
      font-size: 16px;
      color: #999999;
      box-shadow: 0 20px 20px 0 rgb(0 0 0 / 5%);
    }
    padding: 20px;
    margin-top: -40px;
  }

  .top-con {
    .top-text {
      align-items: center;
    }
    .down-arr {
      padding: 0 10px;
      margin-right: 10px;
      border-right: 1px solid white;
      height: 16px;
    }
    height: 10vw;
    color: white;
    font-size: 17px;
    padding: 30px 20px;
    background-size: 100% auto;
  }

  .card-entry {
    .card-box {
      .card-item {
        .card-ins {
          font-size: 13.3px;
          color: #999999;
        }
        .card-txt {
          font-weight: bold;
          font-size: 17px;
          color: #333333;
        }
        padding: 12px;
        background: white;
        border-radius: 12px;
        text-align: center;
        box-shadow: 0 10px 10px 0 rgb(149 202 244 / 15%);
      }
      padding: 10px 5px;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 5px;
  }

  .small-entry {
    .entry-row {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-bottom: 30px;
      font-size: 14px;
      color: #666666;
    }
    padding: 0 3vw;
  }

  .banner-con {
    .swipe-img {
      width: 94vw;
      height: 23.5vw;
    }
    padding: 0 3vw;
  }
</style>
