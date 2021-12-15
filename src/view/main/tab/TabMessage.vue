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
            name: '医生科普',
            txt: '都是打工人,为何TA肩颈不痛、腰腿好、皮肤白嫩、头发还多?原来是私藏了这份秘籍...',
            ic: 'msg_icon_1.png', time: '5分钟前', num: ''
          },
          {
            name: '积分变更通知',
            txt: '积分变更通知',
            ic: 'msg_icon_2.jpg', time: '11:51', num: '1'
          },
          {
            name: '深圳市卫生健康委员会',
            txt: '12月14日深圳无新增病例！东莞15日开展全市全员核酸检测！',
            ic: 'msg_icon_3.png', time: '11:40', num: '2'
          },
          {
            name: '健康早报',
            txt: '这里的毛毛千万别乱拔！小心会有生命危险',
            ic: 'msg_icon_4.jpg', time: '08:05', num: '55'
          },
          {
            name: '晚安心语',
            txt: '把仅剩的几十个幸存者耗死，大屠杀就成了历史？',
            ic: 'msg_icon_5.png', time: '昨天', num: ''
          },
          {
            name: '健康郑州',
            txt: '84年，从未忘记！',
            ic: 'msg_icon_6.png', time: '星期一', num: '6'
          },
          {
            name: '160名医精选',
            txt: '宫颈癌[HPV]在家也能筛查了！定期检测方便快捷，无需预约到院！',
            ic: 'msg_icon_7.png', time: '12月11日', num: '3'
          },
          {
            name: '超级活动通知',
            txt: '签到提醒',
            ic: 'msg_icon_8.png', time: '12月09日', num: ''
          },
          {
            name: '疫情防控专区',
            txt: '最新！全国中高风险地区汇总',
            ic: 'msg_icon_9.png', time: '11月11日', num: '1'
          },
          {
            name: '深广电第一现场（健康生活）',
            txt: '34岁博主得肠癌一年后变“老人”，出现这5种情况要小心→',
            ic: 'msg_icon_10.jpg', time: '09月19日', num: '9'
          },
          {
            name: '深圳疾控',
            txt: '9月开学季，这4种病要重点防范！',
            ic: 'msg_icon_11.png', time: '09月05日', num: '9'
          },
          {
            name: '优惠券信息',
            txt: '优惠券即将过期',
            ic: 'msg_icon_12.jpg', time: '02月24日', num: '9'
          },
          {
            name: '深圳市宝安区中心医院（原深圳市宝安区西乡人民医院）',
            txt: '就诊提醒:您已预约2月21日(明天) 深圳市宝安区中心医院（原深圳市宝安区西乡人民医院）',
            ic: 'msg_icon_13.png', time: '02月20日', num: '9'
          },
          {
            name: '系统消息',
            txt: '本次实名认证审核已通过!',
            ic: 'msg_icon_14.jpg', time: '02月11日', num: '9'
          },
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
