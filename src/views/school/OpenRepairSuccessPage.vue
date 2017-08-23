<template>
  <div>
    <mt-header title="保修成功">
    </mt-header>

    <div class="message">
      <h2><i slot="icon" class="iconfont icon-success"></i>保修成功</h2>
      请耐心等待维修人员联系你们
    </div>
  </div>
</template>
<script>
import { Header, Cell } from 'mint-ui'

export default {
  components: {
    'mt-header': Header,
    'mt-cell': Cell
  }
}
</script>
<style lang="scss" scoped>
h2 {
  .iconfont {
    margin-right: 10px;
  }
}

.message {
  padding: 50px 0;
  text-align: center;
}
</style>
