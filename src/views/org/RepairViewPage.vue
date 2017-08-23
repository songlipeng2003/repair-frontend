<template>
  <div>
    <mt-header :title="repair.code">
      <router-link to="/org/repair" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <h2>报修信息</h2>
    <mt-cell title="编号" :value="repair.code"></mt-cell>
    <mt-cell title="设备编号" :value="repair.device.code"></mt-cell>
    <mt-cell title="设备名称" :value="repair.device.name"></mt-cell>
    <mt-cell title="设备品牌" :value="repair.device.brand"></mt-cell>
    <mt-cell title="设备型号" :value="repair.device.model"></mt-cell>
    <mt-cell title="设备位置" :value="repair.device.position"></mt-cell>
    <mt-cell title="电话" :value="repair.phone"></mt-cell>
    <mt-cell title="状态" :value="repair.status_name"></mt-cell>
    <mt-cell title="备注" :value="repair.remark"></mt-cell>
    <mt-cell title="保修人" :value="repair.creator_name"></mt-cell>
    <mt-cell title="项目" :value="repair.project_name"></mt-cell>
    <mt-cell title="保修时间" :value="repair.created_at"></mt-cell>

    <!-- <div v-if="repiar.status==10">
      <mt-button type="primary" size="large" @click.native="assign">派单</mt-button>
    </div> -->

    <div v-if="repair.status>=20">
      <h2>派单信息</h2>
      <mt-cell title="供应商" :value="repair.supplier_name"></mt-cell>
      <mt-cell title="派单时间" :value="repair.assigned_at"></mt-cell>
      <mt-cell title="派单人" :value="repair.assign_user_name"></mt-cell>
      <mt-cell title="派单备注" :value="repair.assign_remark"></mt-cell>
      <mt-cell title="服务站" :value="repair.service_sation_name"></mt-cell>
      <mt-cell title="服务站派单时间" :value="repair.service_station_assigned_at"></mt-cell>
      <mt-cell title="服务站配单备注" :value="repair.service_station_assign_remark"></mt-cell>
      <mt-cell title="维修者" :value="repair.repairer_name"></mt-cell>
    </div>

    <div v-if="repair.status>=40">
      <h2>完工信息</h2>
      <mt-cell title="维修时间" :value="repair.repaired_at"></mt-cell>
      <mt-cell title="完工备注" :value="repair.finish_remark"></mt-cell>
    </div>

    <div v-if="repair.status==50">
      <h2>评价信息</h2>
      <mt-cell title="评价时间" :value="repair.evaluated_at"></mt-cell>
      <mt-cell title="评价" :value="repair.evaluate"></mt-cell>
      <mt-cell title="评价备注" :value="repair.evaluate_remark"></mt-cell>
    </div>
  </div>
</template>

<script>
import { Header, Cell, Button } from 'mint-ui'

import { OrgRepair } from '@/resources'

export default {
  components: {
    'mt-header': Header,
    'mt-cell': Cell,
    'mt-button': Button
  },
  data () {
    return {
      id: this.$route.params.id,
      repair: {}
    }
  },
  beforeMount () {
    OrgRepair.get({id: this.id}).then((response) => {
      this.repair = response.body
    })
  }
}
</script>

<style lang="scss" scoped>
h2 {
  font-size: 12px;
  font-weight: normal;
  padding: 3px 10px 0;
}
</style>
