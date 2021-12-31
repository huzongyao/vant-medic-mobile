<template>
  <div class="page-back">
    <van-nav-bar left-arrow @click-left="_routerBack" :title="$t('tab_message')" fixed :z-index="10"></van-nav-bar>
    <div class="nav-con">
      <div class="msg-item" v-for="(it,idx) in msgList" :key="idx">
        <div class="align-center">
          <span class="msg-time">{{it.time}}</span>
        </div>
        <div class="msg-card">
          <div class="msg-title">{{it.title}}</div>
          <div class="card-center">
            <van-image :src="`static/img/message/${it.img}`" class="msg-img"></van-image>
            <div class="detail-txt flex1">{{it.txt}}</div>
          </div>
          <div class="jump-detail">
            <div>查看详情</div>
            <van-icon name="arrow"></van-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "message-detail",
    data() {
      return {
        msgList: [
          {
            title: '签到提醒',
            txt: '今天是连续签到第2天，今天不签到，宝箱奖品和现金红包就是别人的啦！',
            img: 'msg_icon_7.png', time: '12月09日 21:31', to: ''
          },
          {
            title: '如何看懂化验单---饮酒成瘾的人你的总胆固醇还好吗？',
            txt: '【晚安心语】2021年12月10日', img: 'msg_icon_10.jpg', time: '12月04日 08:05', to: ''
          },
          {
            title: '饭前用热水涮碗筷,就能消毒把细菌烫死? 医生:呵呵,别太天真!这个致癌菌依然会找上你!',
            txt: '它在超高温灭菌奶中可活30天，菜上可活6天！没那么容易被烫死！这样消毒碗筷才有效 >>',
            img: 'msg_icon_3.png', time: '昨天 15:20', to: ''
          },
          {
            title: '南方的冬天让人崩溃的 8 个瞬间，你中了几个？',
            txt: '【晚安心语】2021年12月10日', img: 'msg_icon_12.jpg', time: '32分钟前', to: ''
          },
        ],
      }
    },
    mounted() {
    },
    methods: {},
  }
</script>

<style scoped lang="less">
  .msg-item {
    .msg-card {
      .msg-title {
        padding: 13px 13px 0 13px;
        font-size: 17.6px;
      }
      .card-center {
        .detail-txt {
          font-size: 13.2px;
          margin-left: 13px;
        }
        .msg-img {
          width: 80px;
          height: 80px;
          background: #c5c5c5;
        }
        padding: 13px;
        display: flex;
      }
      .jump-detail {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 13px;
        font-size: 15.4px;
        border-top: solid 1px #f6f6f6;
      }
      background: white;
      border-radius: 10px;
      margin-top: 10px;
      color: #333333;
    }
    .msg-time {
      font-size: 13.2px;
      background: #d1d1d1;
      border-radius: 7px;
      padding: 1px 5px;
      color: white;
    }
    padding: 15px;
  }

  .page-back {
    background: #f7f7f7;
    height: 100vh;
    overflow-y: scroll;
  }
</style>
