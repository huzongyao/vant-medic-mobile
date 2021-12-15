<template>
  <div>
    <!--缓存的页面-->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" class="main-router-view" v-keep-scroll-position>
      </router-view>
    </keep-alive>
    <!--不缓存的页面-->
    <router-view v-if="!$route.meta.keepAlive" class="main-router-view">
    </router-view>
    <!--下方的TabBar-->
    <van-tabbar v-model="tabBarSelect" safe-area-inset-bottom>
      <!--TabBar项目-->
      <van-tabbar-item v-for="(it, i) in tabItemList" :key="i" :to="it.to" replace>
        <div class="tab-txt">{{$t(it.name)}}</div>
        <van-icon :name="getTabIconSrc(it, props.active)" :badge="getBadgeTxt(it, i)"
                  slot="icon" slot-scope="props" class="icon-img">
        </van-icon>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    name: "main-page",
    watch: {
      '$route'() {
        this.checkTabSelection();
      }
    },
    computed: {
      getBadgeTxt() {
        return (it, idx) => {
          if (idx == 2) {
            return 21;
          }
        }
      },
      // 获取图标资源
      getTabIconSrc() {
        return (item, active) => {
          let img = active ? item.active : item.normal;
          return 'static/img/tabs/' + img;
        }
      },
    },
    data() {
      return {
        tabBarSelect: 0,
        // Tab栏数据
        tabItemList: [
          {
            active: 'ic_tab_register_press.png',
            normal: 'ic_tab_register_normal.png',
            name: 'tab_home',
            to: "home"
          },
          {
            active: 'ic_tab_consult_press.png',
            normal: 'ic_tab_consult_normal.png',
            name: 'tab_doctor',
            to: "doctor"
          },
          {
            active: 'ic_tab_message_press.png',
            normal: 'ic_tab_message_normal.png',
            name: 'tab_message',
            to: "message"
          },
          {
            active: 'ic_tab_mine_press.png',
            normal: 'ic_tab_mine_normal.png',
            name: 'tab_mine',
            to: "mine"
          },
        ],
      };
    },
    methods: {
      // 看一下tab栏应给高亮哪一个
      checkTabSelection() {
        for (let i = 0; i < this.tabItemList.length; i++) {
          let p = this.tabItemList[i];
          if (this.$route.path.endsWith(p.to)) {
            this.tabBarSelect = i;
          }
        }
      }
    },
    mounted() {
      this.checkTabSelection();
    }
  }
</script>

<style scoped lang="less">
  .tab-txt {
    text-align: center;
    margin-top: -2px;
  }

  .main-router-view {
    height: calc(100vh - 50px);
    overflow-y: auto;
    box-sizing: border-box;
    background-color: #f8f8f8;
  }

  .icon-img {
    margin-bottom: -1px;
  }
</style>
