<template>
  <tabbar v-model="selected" :fixed="true">
    <tab-item id="tab-home">
      <i slot="icon" class="iconfont icon-home"></i>
      首页
    </tab-item>
    <tab-item id="tab-device" v-if="loginedUserType!=3 && loginedUserType!=5">
      <i slot="icon" class="iconfont icon-device"></i>
      设备
    </tab-item>
    <tab-item id="tab-repair">
      <i slot="icon" class="iconfont icon-repair"></i>
      保修
    </tab-item>
    <tab-item id="tab-my">
      <i slot="icon" class="iconfont icon-my"></i>
      我的
    </tab-item>
  </tabbar>
</template>

<script>
import { Tabbar, TabItem } from 'mint-ui'
import { mapGetters } from 'vuex'

export default {
  components: {
    Tabbar, TabItem
  },
  props: {
    active: ''
  },
  data () {
    return {
      selected: this.active
    }
  },
  watch: {
    selected: function () {
      let type = 'school'
      if (this.loginedUserType === 2) {
        type = 'school'
      } else if (this.loginedUserType === 3) {
        type = 'station'
      } else if (this.loginedUserType === 4) {
        type = 'org'
      } else if (this.loginedUserType === 5) {
        type = 'supplier'
      }

      if (this.selected === 'tab-home') {
        this.$router.push('/')
      } else if (this.selected === 'tab-repair') {
        this.$router.push(`/${type}/repair`)
      } else if (this.selected === 'tab-device') {
        this.$router.push(`/${type}/device`)
      } else if (this.selected === 'tab-my') {
        this.$router.push('/my')
      }
    }
  },
  beforeMount () {
    if (!this.logined) {
      this.$router.push('/login')
    }
  },
  computed: {
    ...mapGetters(
      [
        'logined',
        'loginedUserType'
      ]
    )
  }
}
</script>

<style>
.mint-tabbar .iconfont {
  font-size: 24px;
}
</style>

