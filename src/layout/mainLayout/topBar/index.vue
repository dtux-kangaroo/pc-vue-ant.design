<template>
  <div>
    <div class='fl' style="width:200px">
      <router-link to="/home">
       <img :src="Logo" alt="logo" class="logo">
      </router-link>
    </div>
    <div class="fl">
      <ul v-if="navData.length > 0" class="menu-ul">
        <li
          :class="{ bluebg: nowPage ==  nav.id }"
          v-for="nav in navData" 
          :key="nav.id"
          :index="nav.permissionUrl.match(/\/\w*/g)[0]"
          @click="redirec(nav.permissionUrl,nav.id)"
        >{{nav.permissionName}}</li>
      </ul>
      <!-- <a-menu 
        v-if="navData.length > 0" 
        theme="dark"
        mode="horizontal"
        :defaultSelectedKeys="['1']"
        :style="{ lineHeight: '64px' }"
       >
        <a-menu-item 
          v-for="nav in navData" 
          :key="nav.id"  
          :index="nav.permissionUrl.match(/\/\w*/g)[0]"
          @click="redirec(nav.permissionUrl)"
        > 
          {{nav.permissionName}}
        </a-menu-item>
      </a-menu> -->
    </div>
    <div class='fr top-user' >
        <div class="top-badge">
          <i class="iconfont icon-youxiang"></i>
          <sup>121236</sup>
        </div>
        <i class="iconfont icon-split"></i>
        <span>
          个人中心
        </span>
        <i class="iconfont icon-split"></i>
        <span @click="loginOut">
          退出
        </span>
    </div>
  </div>
</template>
<script>
import Logo from "@public/assets/imgs/logo.png";
export default {
  props: ["navData"],
  data() {
    let routerArr = this.$route.path.match(/\/\w*/g);
    return {
      activeIndex: routerArr[0],
      Logo,
      nowPage: 1
    };
  },
  watch: {
    $route: function(to, from) {
      this.setItem();
    }
  },
  methods: {
    loginOut() {
      console.log("退出登录");
    },
    redirec(path,index) {
      this.nowPage = index;
      if (path) {
        this.$router.push(path);
      } else {
        console.log("无效url", path);
      }
    },
    setItem() {
      let routerArr = this.$route.path.match(/\/\w*/g);
      this.activeIndex = routerArr[0];
    }
  }
};
</script>
<style lang="scss" scoped>
.logo {
  width: 160px;
  height: 40px;
  margin-top: 6px;
}
.top-nav {
  background: transparent;
  li {
    width: 120px;
    text-align: center;
    color: #fff;
  }
  .is-active {
    background-color: #409eff !important;
    color: #fff !important;
  }
}
.top-user{
 font-size:14px;
 color:#fff;
 .top-badge{
   display: inline-block;
   position: relative;
   sup{
    background-color: #f56c6c;
    border-radius: 10px;
    color: #fff;
    display: inline-block;
    font-size: 12px;
    height: 18px;
    line-height: 18px;
    padding: 0 6px;
    text-align: center;
    white-space: nowrap;
    position: absolute;
    top: 4px;
    left: 10px;
  }
 }
}
.menu-ul {
  li {
    float: left;
    width: 80px;
    text-align: center;
    line-height: 64px;
    color: #fff;
    cursor: pointer;
  }
}
.bluebg {
  background: #409eff;
}


</style>
