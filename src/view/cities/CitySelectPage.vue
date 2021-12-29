<template>
  <div>
    <van-nav-bar left-arrow @click-left="_routerBack" title="选择地址" fixed :z-index="10"></van-nav-bar>
    <div class="outer-con">
      <div class="cur-city">
        <div class="city-txt">
          <van-icon name="location-o"></van-icon>
          当前城市：{{userInfo.city||''}}
        </div>
      </div>
      <div class="select-con">
        <!--左侧列表-->
        <div class="left-list">
          <div v-for="(it, idx) in areaList" :key="idx" @click="onLeftClick(it,idx)"
               :class="it.areaName==selectProvince.areaName?'left-select':''">
            <div class="left-item">{{it.areaName}}</div>
          </div>
        </div>
        <!--右侧列表-->
        <div class="right-list">
          <div v-for="(it,idx) in selectProvince.children"
               :key="idx" class="right-item">
            <div class="right-card" @click="onCityClick(it)">{{it.areaName}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import cities from '../../mock/cities';

  export default {
    name: "city-select-page",
    data() {
      return {
        areaList: cities.area_list,
        hotList: cities.hot_list,
        selectProvince: {},
      }
    },
    mounted() {
      if (this.areaList[0].areaId) {
        this.areaList.unshift({areaName: '推荐', children: this.hotList});
      }
      this.selectProvince = this.areaList[0];
    },
    methods: {
      onCityClick(it) {
        this.userInfo.city = it.areaName;
        this._saveUserInfo();
        this._routerBack();
      },
      onLeftClick(it, idx) {
        this.selectProvince = it;
      },
    },
  }
</script>

<style scoped lang="less">
  .select-con {
    .right-list {
      .right-item {
        .right-card {
          background: #f9f9f9;
          margin: 10px;
          padding: 6px 0;
        }
        width: 33.33%;
        display: inline-block;
        text-align: center;
      }
      padding: 10px 0;
      height: 100%;
      overflow-y: scroll;
    }
    .left-list {
      .left-select {
        background: white;
      }
      .left-item {
        padding: 11px 0;
        text-align: center;
      }
      float: left;
      overflow-y: scroll;
      background: #f5f5f5;
      height: 100%;
      width: 30%;
      font-size: 17.6px;
    }
    color: #666666;
    background: white;
    height: 92%;
    border-top: 1px solid #f8f8f8;
  }

  .outer-con {
    .cur-city {
      .city-txt {
        font-size: 17.6px;
        font-weight: bold;
        color: #333;
        padding-left: 20px;
      }
      height: 8%;
      background: white;
      display: flex;
      align-items: center;
    }
    height: 100vh;
    padding-top: 46px;
  }
</style>
