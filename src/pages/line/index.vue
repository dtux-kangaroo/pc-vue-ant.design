<template>
  <div class="line-page">
    <p>{{msg}}</p>
    <LineChart
     :option="lineOption"
     :config="{'handle':test}"
     height="300px"></LineChart>
  </div>
</template>

<script>
import { API } from "@/api/index.js";
import { LineChart} from "@/components/chart/index"
import { lineOption}from '@/constants/options'

export default {
  components:{
    LineChart
  },
  data () {
    return {
      msg: 'Hello World! This is line page.',
      lineOption
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
.line-page {
  text-align: center;
}
</style>
