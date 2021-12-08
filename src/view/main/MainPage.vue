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
    <van-tabbar v-model="tabBarSelect">
      <!--TabBar项目-->
      <van-tabbar-item v-for="(item, i) in tabItemList" :key="i" :to="item.to" replace>
        <div class="tab-txt">{{$t(item.name)}}</div>
        <img :src="getTabIconSrc(item, props.active)" slot="icon" slot-scope="props" class="icon-img"/>
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
      // 获取图标资源
      getTabIconSrc() {
        return (item, active) => {
          let img = active ? item.active : item.normal;
          return 'static/img/main/' + img;
        }
      },
    },
    data() {
      return {
        tabBarSelect: 0,
        // Tab栏数据
        tabItemList: [
          {
            active: 'main_tab_3.png',
            normal: 'main_tab_2.png',
            name: 'tab_home',
            to: "home"
          },
          {
            active: 'main_tab_5.png',
            normal: 'main_tab_4.png',
            name: 'tab_products',
            to: "doctor"
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
    height: 25px;
  }
</style>
