<template>
  <div>
    导出服务
    <LineChart
      :option="lineOption"
      :config="{}"
      height="300px"
    ></LineChart>
  </div>
</template>
<script>
import { LineChart } from "@/components/chart/index";
import { lineOption } from "@/constants/options";
export default {
  components: {
    LineChart
  },
  data() {
    return {
      lineOption
    };
  },
  methods: {
    
  }
};
</script>
