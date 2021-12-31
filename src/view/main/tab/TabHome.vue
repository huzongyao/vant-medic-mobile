<template>
  <div>
    <div class="top-bar">
      <div class="search-div">
        <div @click="_routePush('CitySelectPage')">
          <div class="city-txt">{{userInfo.city||'成都'}}
            <van-icon name="arrow-down"></van-icon>
          </div>
          <div class="weather-txt">22°C 晴</div>
        </div>
        <div class="flex1 search-input" @click="_routePush('SearchPage')">
          <van-icon name="search" size="18px"></van-icon>
          <van-swipe vertical :autoplay="3000" :show-indicators="false" class="search-swipe">
            <van-swipe-item v-for="(it,idx) in searchList" :key="idx">
              <div class="search-item">{{it}}</div>
            </van-swipe-item>
          </van-swipe>
        </div>
        <div @click="_routePush('HealthTown')">
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
    <!--粘性TAB标题栏-->
    <van-sticky>
      <div class="sub-tabs">
        <div v-for="(it,idx) in tabTitles" :key="idx" class="sub-tab" @click="onSubTabChange(idx)">
          <div :class="{'title-big':idx==subTabIndex}">{{it}}</div>
          <div class="line-indicator" v-if="subTabIndex!=idx"></div>
          <div class="line-indicator sub-indicator" v-if="subTabIndex==idx"></div>
        </div>
      </div>
    </van-sticky>
    <!--下方瀑布流-->
    <van-list v-model="waterLoading" @load="loadWaterfall">
      <div class="fall-con">
        <div v-for="idx in 2" :key="idx" class="one-fall">
          <div class="fall-card" v-for="(it, idx1) in waterfallList"
               :key="idx1" v-if="(idx1%2)==(idx-1)">
            <van-image :src="it.img" class="fall-img" fit="cover" radius="5px 5px 0 0"></van-image>
            <div class="fall-txt-div">
              <div class="fall-txt">{{it.txt}}</div>
            </div>
            <div class="fall-user">
              <van-image :src="it.ava" round class="card-ava"></van-image>
              <div class="fall-name flex1">{{it.name}}</div>
              <van-icon :name="it.liked?'like':'like-o'" :color="it.liked?'red':''"
                        @click="onLikeClick(it)"></van-icon>
              <div class="like-num">{{it.like+it.liked}}</div>
            </div>
          </div>
        </div>
      </div>
    </van-list>
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
        waterLoading: false,
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
        swipeAds: [
          {img: 'swipe_ad_1.gif', to: ''},
          {img: 'swipe_ad_2.jpg', to: ''},
          {img: 'swipe_ad_3.jpg', to: ''},
          {img: 'swipe_ad_4.png', to: ''},
          {img: 'swipe_ad_5.jpg', to: ''},
          {img: 'swipe_ad_6.png', to: ''},
          {img: 'swipe_ad_7.png', to: ''},
          {img: 'swipe_ad_8.png', to: ''},
          {img: 'swipe_ad_9.png', to: ''},
        ],
        tabTitles: ['推荐', '视频', '名医', '笔记', '科普'],
        subTabIndex: 0,
        waterfallList: [],
        waterfallTxt: [
          '激光碎石&体外碎石？！傻傻分不清楚',
          '小孩容易出汗要不要紧？',
          '宝宝指甲长#白斑是怎么回事？#科普',
          '【润月雅水光补水】面膜+润月雅2ml补水、深层补水美白嫩肤、细致毛孔亮肤',
          '车教授告诉你:不要轻视脂肪肝',
          '抑郁症能不能好？多久才能好？',
          '穴位埋线的治疗的疗效反应',
          '抗癫痫药物的不良反应有哪些？',
        ],
      }
    },
    mounted() {
      if (!sessionStorage.getItem('swipeAdShown')) {
        sessionStorage.setItem('swipeAdShown', '1');
        this.showPopupAd = true;
      }
    },
    methods: {
      onLikeClick(it) {
        it.liked = 1 - it.liked;
      },
      loadWaterfall() {
        setTimeout(() => {
          for (let i = 0; i < 20; i++) {
            let imgIdx = Math.floor(Math.random() * 30 + 1);
            this.waterfallList.push({
              img: `static/img/home/sns/sns_pic_${imgIdx}.jpg`,
              txt: this.waterfallTxt[Math.floor(Math.random() * this.waterfallTxt.length)],
              ava: 'static/img/mine/icon-user-def.png',
              name: '阿东姑娘',
              like: Math.floor(Math.random() * 10),
              liked: 0,
            });
          }
          this.waterLoading = false;
        }, 1000);
      },
      onSubTabChange(idx) {
        this.subTabIndex = idx;
        this.waterfallList = [];
        this.waterLoading = true;
        this.loadWaterfall();
      },
    },
  }
</script>

<style scoped lang="less">
  .fall-con {
    .one-fall {
      .fall-card {
        .fall-user {
          .like-num {
            margin-left: 6px;
            font-size: 15px;
          }
          .fall-name {
            font-size: 13.2px;
          }
          .card-ava {
            width: 18px;
            height: 18px;
            margin-right: 3px;
          }
          align-items: center;
          display: flex;
          color: #999999;
          padding: 0 11px 13px 11px;
        }
        .fall-txt-div {
          padding: 11px;
        }
        .fall-txt {
          font-size: 14.3px;
          font-weight: 700;
          color: #333333;
          -webkit-line-clamp: 2;
          -moz-line-clamp: 2;
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          -moz-box-orient: vertical;
          line-height: 17px;
        }
        .fall-img {
          width: 100%;
        }
        border-radius: 5px;
        margin-bottom: 10px;
        background: white;
      }
      width: 50%;
      padding: 5px;
    }
    display: flex;
    padding: 5px;
  }

  .sub-tabs {
    .sub-tab {
      .sub-indicator {
        background: #00C6B8;
      }
      .line-indicator {
        border-radius: 3px;
        width: 50%;
        height: 6px;
        display: inline-block;
      }
      .title-big {
        font-size: 24px;
      }
      padding: 0 14px;
      font-size: 17.6px;
      color: #666666;
      text-align: center;
      font-weight: bold;
    }
    padding: 10px 0 3px 0;
    display: flex;
    background: white;
    align-items: center;
  }

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
        font-size: 17.6px;
      }
      .search-input {
        .search-swipe {
          .search-item {
            overflow-x: hidden;
            text-overflow: ellipsis;
            height: 18px;
            line-height: 18px;
            font-size: 16.5px;
            background: white;
          }
          height: 18px;
          margin-left: 6px;
        }
        border: 2px solid #00C6B8;
        display: flex;
        align-items: center;
        border-radius: 30px;
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
