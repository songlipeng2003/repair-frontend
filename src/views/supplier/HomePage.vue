<template>
  <div>
    <mt-header title="首页">
      <router-link to="/announcement" slot="right">
        <mt-button ><i slot="icon" class="iconfont icon-message"></i></mt-button>
      </router-link>
    </mt-header>

    <mt-cell title="项目数量" :value="data.projectCount"></mt-cell>
    <mt-cell title="保修单数量" :value="data.repairCount"></mt-cell>
    <mt-cell title="服务站数量" :value="data.serviceStationCount"></mt-cell>

    <page-footer active="tab-home"></page-footer>
  </div>
</template>

<script>
import { Header, Cell } from 'mint-ui'
import PageFooter from '@/components/PageFooter'

import { SupplierHome } from '@/resources'
import { mapActions } from 'vuex'

export default {
  components: {
    'mt-header': Header,
    'mt-cell': Cell,
    PageFooter
  },
  data () {
    return {
      data: {}
    }
  },
  beforeCreate () {
    SupplierHome.query().then((res) => {
      this.data = res.data
    })
  },
  methods: {
    ...mapActions([
    ])
  }
}
</script>
