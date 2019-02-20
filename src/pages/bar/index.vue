<template>
  <div class="bar-page">
    <p>{{msg}}</p>
    <BarChart
     :option="barOption"
     :config="{'handle':test}"
     height="300px"
    ></BarChart>
  </div>
</template>

<script>
import { API } from "@/api/index.js";
import { BarChart } from "@/components/chart/index"
import { barOption }from '@/constants/options'

export default {
  components:{
    BarChart
  },
  data () {
    return {
      msg: 'Hello World! This is bar page.',
      barOption
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
.bar-page {
  text-align: center;
}
</style>
