import Vue from 'vue'
import GlobalLayout from '@/layout/globalLayout'
import router from '@/router'
import '@public/assets/styles/antd.less'
import '@public/assets/styles/index.scss'
import store from './store/index'
import '@babel/polyfill'
import Viser from 'viser-vue' //图表库引入

import { Layout, Form, Button, Icon, Input, Menu, Tabs } from 'ant-design-vue'
Vue.use(Layout);
Vue.use(Form);
Vue.use(Button);
Vue.use(Icon);
Vue.use(Input);
Vue.use(Menu);
Vue.use(Tabs);

// import Antd from 'ant-design-vue'
// Vue.use(Antd);

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
