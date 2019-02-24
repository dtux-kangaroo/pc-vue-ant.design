<template>
  <a-layout id="components-layout-demo-top" class="layout">
    <a-layout-header>
      <TopBar :navData="navData"/>
    </a-layout-header>
    <router-view></router-view>
    <a-layout-footer style="text-align: center">
      <Footer />
    </a-layout-footer>
  </a-layout>
</template>
<script>
import Footer from '@/components/footer'
import TopBar from './topBar'
import { mapState } from 'vuex'
export default {
  components:{ Footer, TopBar },
  data() {
    return {
      msg: "layout"
    };
  },
  mounted() {
    this.$store.dispatch('getNavData');
  },
  methods: {
  },
  computed: mapState({
    navData: state => state.global.navData
  })
};
</script>

<style lang="scss">
  #components-layout-demo-top .logo {
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    float: left;
  }
</style>
