<template>
  <div>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <SideBar :nav-data="navData" />
      </a-layout-sider>
      <a-layout style="min-height:800px;padding:0px;background:#fff;">
        <router-view></router-view>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
import SideBar from "./sideBar";
import { mapState } from 'vuex'
export default {
  components: { SideBar },
  mounted() {
  },
  beforeUpdate(){

  },
  data() {
    return {}
  },

  methods: {
  },
  computed: mapState({
    navData: state => {
       let tempData=state.global.navData;
       
       console.log("tempData")
       console.log(tempData)
       let curData=[];
       tempData.forEach(item=>{
         if(item.permissionUrl=='/api/all'){
           curData=item.children;
         }
       })
       return curData;
    }
  })
};
</script>
<style lang="scss">

</style>





