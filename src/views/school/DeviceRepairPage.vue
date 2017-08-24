<template>
  <div>
    <mt-header :title="device.name">
      <router-link :to="`/school/device/${this.id}`" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <mt-cell title="名称" :value="device.name"></mt-cell>
    <mt-cell title="编码" :value="device.code"></mt-cell>
    <mt-cell title="品牌" :value="device.brand"></mt-cell>
    <mt-cell title="型号" :value="device.model"></mt-cell>
    <mt-cell title="位置" :value="device.position"></mt-cell>


    <mt-radio title="故障类型" v-model="repair.fault_type_id" :options="faultTypes">
    </mt-radio>
    <mt-field label="电话" placeholder="请输入电话" type="tel" v-model="repair.phone"></mt-field>
    <mt-field label="故障描述" placeholder="请输入故障描述" type="textarea" rows="4" v-model="repair.description"></mt-field>

    <mt-button type="primary" size="large" @click.native="repairAction">保修</mt-button>
  </div>
</template>

<script>
import { Header, Cell, Button, MessageBox } from 'mint-ui'

import { SchoolDevice, SchoolRepair, FaultType } from '@/resources'

export default {
  components: {
    'mt-header': Header,
    'mt-cell': Cell,
    'mt-button': Button
  },
  data () {
    return {
      id: this.$route.params.id,
      device: {},
      repair: {device_id: this.$route.params.id},
      faultTypes: []
    }
  },
  beforeMount () {
    SchoolDevice.get({id: this.id}).then((response) => {
      this.device = response.body
    })

    FaultType.query().then((response) => {
      let key
      for (key in response.body) {
        let faultType = response.body[key]
        this.faultTypes.push({
          value: faultType.id,
          label: faultType.name
        })
      }
    })
  },
  methods: {
    repairAction () {
      SchoolRepair.save(this.repair).then((res) => {
        this.$router.push('/school/repair')
      }).catch((response) => {
        MessageBox.alert(response.body.message)
      })
    }
  }
}
</script>
