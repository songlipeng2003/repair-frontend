<template>
  <div>
    <mt-header :title="device.name">
      <router-link to="/org/device" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <mt-cell title="名称" :value="device.name"></mt-cell>
    <mt-cell title="编码" :value="device.code"></mt-cell>
    <mt-cell title="品牌" :value="device.brand"></mt-cell>
    <mt-cell title="型号" :value="device.model"></mt-cell>
    <mt-cell title="位置" :value="device.position"></mt-cell>
    <mt-cell title="数量" :value="device.quantity"></mt-cell>
    <mt-cell title="单位" :value="device.union"></mt-cell>
    <mt-cell title="创建时间" :value="device.created_at"></mt-cell>
    <mt-cell title="备注" :value="device.remark"></mt-cell>

    <!-- <mt-button type="primary" size="large" @click.native="update">编辑</mt-button> -->
  </div>
</template>

<script>
import { Header, Cell, Button } from 'mint-ui'

import { OrgDevice } from '@/resources'

export default {
  components: {
    'mt-header': Header,
    'mt-cell': Cell,
    'mt-button': Button
  },
  data () {
    return {
      id: this.$route.params.id,
      device: {}
    }
  },
  beforeMount () {
    OrgDevice.get({id: this.id}).then((response) => {
      this.device = response.body
    })
  },
  methods: {
    update () {
      this.$router.push(`/org/device/${this.id}/update`)
    }
  }
}
</script>

<style lang="scss" scope>
.mint-button {
  margin-bottom: 10px;
}
</style>
