<template>
  <div>
    <div class="top-half" :style="{'background-image':'url(static/img/mine/bg-baseinfo.png)'}">
      <div class="top-bar">
        <van-icon name="setting-o" size="24px"></van-icon>
      </div>
      <div class="info-line">
        <van-image src="static/img/mine/icon-user-def.png" round class="user-icon"></van-image>
        <div class="flex1 user-text">
          <div class="name-line">
            <div class="user-name">{{this.userInfo.name}}</div>
            <van-image src="static/img/mine/user_type_normal.png" class="user-type"></van-image>
          </div>
          <div class="user-time">6年用户 广东 深圳</div>
          <div class="user-fans">关注2 粉丝6</div>
        </div>
        <div class="self-page">
          个人主页
          <van-icon name="arrow"/>
        </div>
      </div>
      <div class="wallet-line">
        <div v-for="(it,idx) in walletData" :key="idx" class="flex1">
          <div class="wallet-txt">{{it.txt}}</div>
          <div class="wallet-name">{{it.name}}</div>
        </div>
      </div>
      <div class="member-line">
        <div :style="{'background-image':'url(static/img/mine/bg-no-member.png)'}" class="member-back">
          <van-button round class="open-btn" size="mini">立刻开通
            <van-icon name="arrow"/>
          </van-button>
        </div>
      </div>
    </div>
    <!--下方卡片区域-->
    <div class="space-con">
      <div class="mine-card">
        <div>我的订单</div>
      </div>
    </div>
    <div class="align-center sugg-all">
      <div class="suggest-tit">为您推荐</div>
      <van-row>
        <van-col span="12" v-for="(it,idx) in suggestData" :key="idx" class="sugg-box">
          <div class="sugg-card click-box">
            <van-image :src="`static/img/mine/suggest/${it.img}`" radius="4px 4px 0 0"></van-image>
            <div class="sugg-foot">
              <div class="sugg-text">{{it.txt}}</div>
              <div class="sugg-price">¥{{it.price}}<span class="sugg-old">¥{{it.old}}</span></div>
            </div>
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tab-mine",
    data() {
      return {
        suggestData: [
          {img: 'suggest_img_1.jpg', txt: '【三甲名医义诊】长期失眠...', old: '300.0', price: '0.0'},
          {img: 'suggest_img_2.jpg', txt: '【青少年福利】眼部健康检查（视力检查）', old: '300.0', price: '288.0'},
          {img: 'suggest_img_3.jpg', txt: '【深圳和美妇儿科医院线下免费义诊】', old: '300.0', price: '99.0'},
          {img: 'suggest_img_4.jpg', txt: '【三甲名医义诊】长期失眠...', old: '300.0', price: '79999.0'},
          {img: 'suggest_img_5.jpg', txt: '【三甲名医义诊】长期失眠...', old: '300.0', price: '30.0'},
          {img: 'suggest_img_6.jpg', txt: '【三甲名医义诊】长期失眠...', old: '300.0', price: '40.0'},
          {img: 'suggest_img_7.jpg', txt: '【三甲名医义诊】长期失眠...', old: '300.0', price: '50.0'},
          {img: 'suggest_img_8.jpg', txt: '【三甲名医义诊】长期失眠...', old: '300.0', price: '60.0'},
          {img: 'suggest_img_9.jpg', txt: '【三甲名医义诊】长期失眠...', old: '300.0', price: '40.0'},
          {img: 'suggest_img_10.jpg', txt: '【三甲名医义诊】长期失眠...', old: '300.0', price: '30.0'},
          {img: 'suggest_img_11.jpg', txt: '【三甲名医义诊】长期失眠...', old: '300.0', price: '20.0'},
          {img: 'suggest_img_12.jpg', txt: '【三甲名医义诊】长期失眠...', old: '300.0', price: '8880.0'},
        ],
        walletData: [
          {name: '余额(元)', txt: '0'},
          {name: '卡券(张)', txt: '0'},
          {name: '积分', txt: '674'},
        ]
      }
    },
    activated() {
      if (!this._isLogin()) {
        this._routeReplace('PhoneLogin');
      }
    },
    mounted() {
    },
    methods: {},
  }
</script>

<style scoped lang="less">
  .sugg-all {
    .sugg-box {
      .sugg-card {
        .sugg-foot {
          padding: 10px;
        }
        .sugg-old {
          text-decoration: line-through;
          color: #999;
          font-size: 14px;
          padding-left: 8px;
        }
        .sugg-price {
          color: #FF6000;
          font-weight: bold;
          margin-top: 16px;
        }
        .sugg-text {
          text-overflow: ellipsis;
          overflow: hidden;
          font-size: 15px;
          font-weight: bold;
          color: #333;
          white-space: nowrap;
        }
        text-align: left;
        border-radius: 4px;
      }
      padding: 6px;
    }
    .suggest-tit {
      padding: 20px 0 10px 0;
      font-size: 17px;
      font-weight: bold;
      color: #333;
    }
    padding: 10px 6px;
  }

  .space-con {
    .mine-card {
      padding: 14px;
      background: white;
      border-radius: 8px;
    }
    padding: 14px;
  }

  .top-half {
    .member-line {
      .open-btn {
        border: none;
        background: linear-gradient(132deg, rgb(255, 239, 201) 0%, rgb(255, 229, 189) 100%);
        color: rgb(102, 40, 0);
        height: 27px;
        padding: 3px 12px;
        font-size: 13px;
      }
      .member-back {
        background-repeat: no-repeat;
        background-size: 100% auto;
        text-align: right;
        padding: 14px 14px;
      }
      padding: 0 14px;
    }
    .wallet-line {
      .wallet-name {
        color: #333;
        font-size: 14px;
      }
      .wallet-txt {
        color: #333;
        font-size: 24px;
        font-weight: bold;
      }
      display: flex;
      padding: 20px 0;
      text-align: center;
    }
    .info-line {
      .user-text {
        .user-fans {
          font-size: 13px;
          margin-top: 4px;
          color: #666;
        }
        .user-time {
          font-size: 14px;
          margin-top: 4px;
          color: #666;
        }
        .name-line {
          .user-name {
            color: #333;
            font-size: 20px;
            font-weight: bold;
            padding-right: 4px;
          }
          .user-type {
            width: 50px;
            height: 22px;
          }
          display: flex;
          align-items: center;
        }
        padding-left: 20px;
      }
      .self-page {
        background: linear-gradient(135deg, #FFB917 0%, #FF9E17 100%);
        border-radius: 20px 0 0 20px;
        padding: 8px 12px;
        color: white;
      }
      .user-icon {
        width: 64px;
        height: 64px;
      }
      display: flex;
      padding-left: 20px;
      align-items: center;
    }
    .top-bar {
      text-align: right;
      padding: 24px 20px 5px 0;
    }
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
</style>
