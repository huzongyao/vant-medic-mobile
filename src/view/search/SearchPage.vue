<template>
  <div class="search-page">
    <div class="search-top">
      <van-icon name="arrow-left" size="28px" @click="_routerBack"></van-icon>
      <div class="flex1 search-con">
        <van-icon name="search" size="20px"></van-icon>
        <van-field placeholder="1分钟快速问医生" class="search-input" clearable></van-field>
      </div>
      <van-button round type="info" class="search-btn">搜索</van-button>
    </div>
    <!--热门搜索-->
    <div>
      <div class="hot-title">热门搜索</div>
      <div class="hot-con">
        <div class="hot-item" v-for="(it,idx) in hotSearch" :key="idx">
          <div class="hot-idx" :style="{color:idx<3?'#FA5151':''}">{{idx+1}}</div>
          <div class="hot-txt">{{it.txt}}</div>
          <div v-if="it.tag" class="hot-tag" :style="{background:it.tag=='荐'?'#FFAE17':''}">{{it.tag}}</div>
          <div class="hot-empty"></div>
        </div>
      </div>
    </div>
    <!--热门专题-->
    <div>
      <div class="hot-title">热门专题</div>
      <div class="topic-con">
        <div class="topic-item" v-for="(it,idx) in hotTopic" :key="idx">
          <van-image :src="`static/img/search/${it.img}`"
                     :style="{marginRight:idx%2==0?'11px':'0'}"></van-image>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "search-page",
    data() {
      return {
        hotSearch: [
          {txt: '心理咨询', tag: '荐', to: ''},
          {txt: '9价4价预约', tag: '荐', to: ''},
          {txt: '中日联医院北湖分院', tag: '热', to: ''},
          {txt: '吉林大学白求恩第一医院', tag: '热', to: ''},
          {txt: '吉林大学中日联谊医院', tag: '热', to: ''},
          {txt: '泌尿外科', to: ''},
          {txt: '北湖分院', to: ''},
          {txt: '尿常规检查', to: ''},
          {txt: '李国军', to: ''},
          {txt: '长春中日联谊医院', to: ''},
        ],
        hotTopic: [
          {img: 'search_topic_1.png', to: ''},
          {img: 'search_topic_2.png', to: ''},
          {img: 'search_topic_3.png', to: ''},
          {img: 'search_topic_4.png', to: ''},
        ],
      }
    },
    mounted() {
    },
    methods: {},
  }
</script>

<style scoped lang="less">
  .topic-con {
    .topic-item {
      width: 50%;
      margin-top: 6px;
    }
    display: flex;
    flex-wrap: wrap;
  }

  .hot-title {
    font-size: 19.8px;
    color: #333333;
    font-weight: bold;
    margin-top: 20px;
  }

  .hot-con {
    .hot-item {
      .hot-empty {
        width: 20px;
      }
      .hot-tag {
        background: #F55D3A;
        color: white;
        font-size: 13.2px;
        padding: 0 2px;
        border-radius: 2px;
        margin-left: 12px;
      }
      .hot-idx {
        font-size: 20px;
        font-weight: bold;
        color: #FFAE17;
        margin-right: 8px;
      }
      .hot-txt {
        display: inline-block;
        font-size: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        white-space: nowrap;
      }
      display: flex;
      width: 50%;
      padding-top: 20px;
      align-items: center;
    }
    display: flex;
    flex-wrap: wrap;
  }

  .search-page {
    .search-top {
      .search-btn {
        height: 38px;
      }
      .search-con {
        .search-input {
          background: transparent;
          padding: 8px 4px;
          font-size: 18px;
        }
        display: flex;
        align-items: center;
        margin: 0 10px;
        padding: 0 16px;
        border-radius: 40px;
        background: #f5f5f5;
      }
      display: flex;
      color: #666666;
      justify-content: center;
      align-items: center;
    }
    padding: 4px 12px;
    background: white;
    min-height: 100vh;
  }
</style>
