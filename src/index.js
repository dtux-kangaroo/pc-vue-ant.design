import Vue from 'vue'
import GlobalLayout from '@/layout/globalLayout'
import router from '@/router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import '@public/assets/styles/index.scss'
import store from './store/index'
import '@babel/polyfill'
import Viser from 'viser-vue' //图表库引入

Vue.use(Antd); //使用Antd

Vue.use(Viser);
Vue.config.productionTip = false
const Bus = new Vue()
new Vue({
  el: '#root',
  router,
  data:{
   Bus 
  },
  store,
  components: { GlobalLayout },
  template: '<GlobalLayout/>'
})

if(module.hot) {
  module.hot.accept();

}
