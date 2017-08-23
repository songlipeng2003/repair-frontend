<template>
  <div>
    <mt-header :title="title">
      <router-link to="/org/device" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <mt-field label="名称" placeholder="请输入名称" type="text" v-model="device.name"></mt-field>
    <mt-field label="品牌" placeholder="请输入品牌" type="text" v-model="device.brand"></mt-field>
    <mt-field label="型号" placeholder="请输入型号" type="text" v-model="device.model"></mt-field>
    <mt-field label="安装位置" placeholder="请输入安装位置" type="text" v-model="device.position"></mt-field>
    <mt-field label="质保期" placeholder="请输入质保期" type="date" v-model="device.expired_at"></mt-field>
    <mt-field label="数量" placeholder="请输入数量" type="number" v-model="device.quantity"></mt-field>
    <mt-field label="单位" placeholder="请输入单位" type="text" v-model="device.unit"></mt-field>
    <mt-field label="备注" placeholder="请输入备注" type="textarea" rows="4" v-model="device.remark"></mt-field>

    <mt-button type="primary" size="large" @click.native="createAction" v-if="!id">创建</mt-button>
    <mt-button type="primary" size="large" @click.native="updateAction" v-else>更新</mt-button>
  </div>
</template>

<script>
import { Header, Cell, Button, MessageBox } from 'mint-ui'

import { OrgDevice, OrgProject } from '@/resources'

export default {
  components: {
    'mt-header': Header,
    'mt-cell': Cell,
    'mt-button': Button
  },
  data () {
    return {
      id: this.$route.params.id,
      title: '创建设备',
      device: {},
      projects: []
    }
  },
  beforeMount () {
    if (this.id) {
      OrgDevice.get({id: this.id}).then((response) => {
        this.device = response.body
      })
    }

    OrgProject.query().then((response) => {
      let key
      for (key in response.body) {
        let project = response.body[key]
        this.projects.push({
          value: project.id,
          label: project.name
        })
      }
    })
  },
  methods: {
    createAction () {
      OrgDevice.save(this.device).then((res) => {
        this.$router.push('/device')
      }).catch((response) => {
        MessageBox.alert(response.body.message)
      })
    },
    updateAction () {
      OrgDevice.save(this.device).then((res) => {
        this.$router.push('/device')
      }).catch((response) => {
        MessageBox.alert(response.body.message)
      })
    }
  }
}
</script>
