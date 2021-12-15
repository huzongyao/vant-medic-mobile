<template>
  <div>
    <van-nav-bar :title="$t('tab_message')" fixed :z-index="10"></van-nav-bar>
    <div class="nav-con">
      <template v-for="it in msgData">
        <div class="msg-item click-box" @click="onMsgItemClick(it)">
          <van-badge :content="it.num">
            <van-image :src="`static/img/message/${it.ic}`" class="msg-icon" radius="5px">
            </van-image>
          </van-badge>
          <div class="flex1 msg-right">
            <div class="msg-top">
              <div class="flex1 msg-name">{{it.name}}</div>
              <div class="time-txt">{{it.time}}</div>
            </div>
            <div class="flex">
              <div class="msg-detail flex1">{{it.txt}}</div>
            </div>
          </div>
        </div>
        <div class="div-line"></div>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tab-message",
    data() {
      return {
        msgData: [
          {
            ic: 'msg_icon_1.png',
            name: '深圳市卫生健康委员会',
            txt: '12月7日深圳无新增病例！上海新增1例本土，曾坐动车到外地参加聚集性活动 ',
            time: '30分钟前',
            num: '1'
          },
          {ic: 'msg_icon_2.png', name: '健康早报', txt: '怎么判断自己会不会猝死？经常熬夜的人，一定要看看！ ', time: '08:05', num: '1'},
          {ic: 'msg_icon_3.png', name: '积分变更通知', txt: '积分变更通知', time: '14：14', num: ''},
          {ic: 'msg_icon_4.png', name: '积分变更通知', txt: '积分变更通知', time: '14：14', num: '11'},
          {ic: 'msg_icon_5.png', name: '积分变更通知', txt: '积分变更通知', time: '14：14', num: '10'},
          {ic: 'msg_icon_6.png', name: '积分变更通知', txt: '积分变更通知', time: '14：14', num: ''},
          {ic: 'msg_icon_7.png', name: '积分变更通知', txt: '积分变更通知', time: '14：14', num: '3'},
          {ic: 'msg_icon_8.png', name: '积分变更通知', txt: '积分变更通知', time: '14：14', num: ''},
        ],
      }
    },
    activated() {
      if (!this._isLogin()) {
        this._routeReplace('PhoneLogin');
      }
    },
    mounted() {
    },
    methods: {
      onMsgItemClick(it) {
        this._routePush('MessageDetail');
      }
    },
  }
</script>

<style scoped lang="less">
  .msg-item {
    .msg-detail {
      margin-top: 8px;
      font-size: 15.4px;
      color: #9b9b9b;
      overflow-x: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 0;
    }
    .time-txt {
      color: #9b9b9b;
      font-size: 13.2px;
      padding-left: 20px;
    }
    .msg-name {
      font-weight: bold;
      font-size: 17.6px;
      color: #333;
      overflow-x: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 0;
    }
    .msg-top {
      display: flex;
      justify-content: space-between;
      align-items: end;
    }
    .msg-icon {
      width: 55px;
      height: 55px;
      background: #c6c6c6;
    }
    .msg-right {
      padding-left: 14px;
      padding-top: 6px;
    }
    padding: 14px;
    display: flex;
  }

  .div-line {
    height: 1px;
    width: 16px;
    background: white;
  }
</style>
