<template>
  <div>
    <div class="top-bar">
      <div class="search-div">
        <div>
          <div class="city-txt">成都
            <van-icon name="arrow-down"></van-icon>
          </div>
          <div class="weather-txt">22°C 晴</div>
        </div>
        <div class="flex1 search-input">
          <van-icon name="search" size="18px"></van-icon>
          <van-swipe vertical :autoplay="3000" :show-indicators="false" class="search-swipe">
            <van-swipe-item v-for="(it,idx) in searchList" :key="idx">
              <div class="search-item">{{it}}</div>
            </van-swipe-item>
          </van-swipe>
        </div>
        <div>
          <van-icon name="static/img/home/signin-gif-04.gif" size="44px"></van-icon>
        </div>
      </div>
      <div class="card-div">
        <div class="entry-card">
          <!--第一排入口-->
          <van-grid :border="false" :column-num="5">
            <van-grid-item v-for="(it,idx) in entryOne" :key="idx">
              <div class="one-item">
                <van-image :src="`static/img/home/entry/${it.ic}`"></van-image>
                <div class="one-text">{{it.txt}}</div>
              </div>
            </van-grid-item>
          </van-grid>
          <!--第二排Swipe入口-->
          <van-swipe :loop="false">
            <van-swipe-item v-for="(it,idx) in entryTwo" :key="idx">
              <div class="two-swipe-it">
                <van-grid :border="false" :column-num="5">
                  <van-grid-item v-for="(it1,idx1) in it" :key="idx1">
                    <div class="two-item">
                      <van-image :src="`static/img/home/entry/${it1.ic}`"></van-image>
                    </div>
                  </van-grid-item>
                </van-grid>
              </div>
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>
    </div>
    <!--弹窗广告-->
    <van-popup v-model="showPopupAd" style="background:transparent">
      <div class="popad-con">
        <van-icon name="clear" size="28px" color="white" class="ad-close" @click="showPopupAd=false"></van-icon>
        <div class="swipe-con">
          <van-swipe class="swipe-shell" :autoplay="5000" indicator-color="white">
            <van-swipe-item v-for="(it,idx) in swipeAds" :key="idx">
              <van-image :src="`static/img/advtise/${it.img}`" class="popad-img" fit="cover"></van-image>
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
  export default {
    name: "tab-home",
    data() {
      return {
        showPopupAd: false,
        searchList: ['光子嫩肤29.9', '核酸检测预约', '健康小镇-积分换豪礼', '就医经历', '隔夜菜会致癌吗？'],
        entryTwo: [
          [{ic: 'entry_two_1.png', to: ''},
            {ic: 'entry_two_2.png', to: ''},
            {ic: 'entry_two_3.png', to: ''},
            {ic: 'entry_two_4.png', to: ''},
            {ic: 'entry_two_5.png', to: ''},
            {ic: 'entry_two_6.png', to: ''},
            {ic: 'entry_two_7.png', to: ''},
            {ic: 'entry_two_8.png', to: ''},
            {ic: 'entry_two_9.png', to: ''},
            {ic: 'entry_two_10.png', to: ''},],
          [{ic: 'entry_two_11.png', to: ''},
            {ic: 'entry_two_12.png', to: ''},
            {ic: 'entry_two_13.png', to: ''},
            {ic: 'entry_two_14.png', to: ''},
            {ic: 'entry_two_15.png', to: ''},
            {ic: 'entry_two_16.png', to: ''},
            {ic: 'entry_two_17.png', to: ''},
            {ic: 'entry_two_18.png', to: ''},
            {ic: 'entry_two_19.png', to: ''},
            {ic: 'entry_two_20.png', to: ''},],
          [{ic: 'entry_two_21.gif', to: ''},
            {ic: 'entry_two_22.png', to: ''},
            {ic: 'entry_two_23.png', to: ''},
            {ic: 'entry_two_24.png', to: ''},
            {ic: 'entry_two_25.png', to: ''},],
        ],
        entryOne: [
          {ic: 'entry_one_4.png', txt: '找名医', to: ''},
          {ic: 'entry_one_5.png', txt: '挂号', to: ''},
          {ic: 'entry_one_3.png', txt: '抗疫专区', to: ''},
          {ic: 'entry_one_2.gif', txt: '体检', to: ''},
          {ic: 'entry_one_1.png', txt: '买药', to: ''},
        ],
        //弹窗广告
        swipeAds: [
          {img: 'swipe_ad_1.gif', to: ''},
          {img: 'swipe_ad_2.jpg', to: ''},
          // {img: 'swipe_ad_3.jpg', to: ''},
          // {img: 'swipe_ad_4.png', to: ''},
          // {img: 'swipe_ad_5.jpg', to: ''},
          // {img: 'swipe_ad_6.png', to: ''},
          // {img: 'swipe_ad_7.png', to: ''},
          {img: 'swipe_ad_8.png', to: ''},
          {img: 'swipe_ad_9.png', to: ''},
        ],
      }
    },
    mounted() {
      if (!sessionStorage.getItem('swipeAdShown')) {
        sessionStorage.setItem('swipeAdShown', '1');
        this.showPopupAd = true;
      }
    },
  }
</script>

<style scoped lang="less">
  .top-bar {
    .card-div {
      .entry-card {
        .two-swipe-it {
          padding-bottom: 30px;
        }
        .one-item {
          text-align: center;
          padding: 4px 2px;
        }
        .one-text {
          color: #333;
          font-size: 15px;
          font-weight: 700;
        }
        padding-top: 10px;
        border-radius: 16px 16px 0 0;
        background: white;
      }
      padding-top: 16px;
    }
    .search-div {
      .weather-txt {
        font-size: 12px;
        margin-top: 3px;
      }
      .city-txt {
        font-weight: 700;
        font-size: 16px;
      }
      .search-input {
        .search-swipe {
          .search-item {
            overflow-x: hidden;
            text-overflow: ellipsis;
            height: 18px;
            line-height: 18px;
            background: white;
          }
          height: 18px;
          margin-left: 6px;
        }
        border: 2px solid #00C6B8;
        display: flex;
        align-items: center;
        border-radius: 20px;
        margin: 0 10px;
        padding: 10px 10px;
        background: white;
        color: #666666;
      }
      display: flex;
      align-items: center;
    }
    padding: 10px 14px 0 14px;
    background: linear-gradient(180deg, #cbeded 0%, #ffffff 100%);
  }

  .popad-con {
    .popad-img {
      width: 80vw;
    }
    .swipe-con {
      .swipe-shell {
        width: 80vw;
        background: transparent;
        border-radius: 8px;
      }
      padding: 0 14px;
      margin-top: -14px;
    }
    .ad-close {
      z-index: 1000;
    }
    text-align: right;
    width: 86vw;
  }
</style>
