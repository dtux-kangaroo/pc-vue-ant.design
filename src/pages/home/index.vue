<template>
  <div class="home-page">
    <p>{{msg}}</p>
    <PieChart
     :option="pieOption"
     :config="{'handle':test}"
     height="300px"
     ></PieChart>
  </div>
</template>

<script>
import { API } from "@/api/index.js";
import { PieChart} from "@/components/chart/index"
import { pieOption }from '@/constants/options'

export default {
  components:{
    PieChart
  },
  data () {
    return {
      msg: 'Hello World!This is home page.',
      pieOption
    }
  },
methods:{
  test(option){
   console.log(option);
   //可添加事件
  }
}
}
</script>

<style>
.home-page {
  text-align: center;
}
</style>
