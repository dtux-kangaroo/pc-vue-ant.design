<template>
    <a-menu
      :defaultSelectedKeys="['1']"
      class="side-nav">
      <a-menu-item v-for="nav in navData" :key="nav.name" @click="redirec(nav.permissionUrl)">
        <i class="iconfont" :class="[`icon-${nav.permissionIcon}`]"></i> {{nav.permissionName}}
      </a-menu-item>
    </a-menu>
</template>
<script>
export default {
  props: ["navData"],
  mounted() {
  },
  watch: {
    $route: function(to, from) {
      this.setItem();
    }
  },
  beforeUpdate(){
  },
  data() {
    let curPath = this.$route.path;
    return {
      activeIndex: curPath
    };
  },

  methods: {
    setItem() {
      let curPath = this.$router.currentRoute.path;
      this.activeIndex = curPath;
      this.openeds = curPath.match(/\/\w*/g);
    },
    redirec(path){
      if(path){
         this.$router.push(path);
       }else{
         console.log('无效url',path);
       }

    }
  }
};
</script>
<style lang="scss">
.side-nav {
  text-align: left;
  .iconfont {
    font-size: 18px;
    margin-right: 5px;
  }
  .a-menu-item,
  .a-submenu__title {
    height: 40px !important;
    line-height: 40px !important;
  }
}
</style>





