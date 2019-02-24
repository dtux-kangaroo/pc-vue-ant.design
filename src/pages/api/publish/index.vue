<template>
  <div>
    服务发布
    <BarChart
      :option="barOption"
      :config="{}"
      height="300px"
    ></BarChart>
  </div>
</template>
<script>
import { BarChart } from "@/components/chart/index";
import { barOption } from "@/constants/options";
export default {
  components: {
    BarChart
  },
  data() {
    return {
      barOption
    };
  },
  methods: {
    
  }
};
</script>
