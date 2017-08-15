<template>
  <div v-if="user">
    <mt-header title="我的"></mt-header>
    <mt-cell title="姓名" :value="user.name"></mt-cell>
    <mt-cell title="手机号" :value="user.phone"></mt-cell>
    <mt-cell title="Email" :value="user.email"></mt-cell>

    <mt-cell title="修改密码" to="/my/change-password" is-link></mt-cell>

    <mt-button type="danger" size="large" @click.native="logoutAction">注销</mt-button>

    <page-footer active="tab-my"></page-footer>
  </div>
</template>

<style lang="scss">
.avatar {
  padding: 10px 0;
  text-align: center;

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
}
</style>

<script>
import { Header, Cell, Button } from 'mint-ui'
import PageFooter from '../components/PageFooter'
import { mapActions, mapGetters } from 'vuex'
import { User } from '../resources'

export default {
  components: {
    'mt-header': Header,
    'mt-cell': Cell,
    'mt-button': Button,
    PageFooter
  },
  data () {
    return {
      user: null
    }
  },
  computed: {
    ...mapGetters(
      [
        'loginedUserId'
      ]
    )
  },
  beforeMount () {
    User.get({id: this.loginedUserId}).then((response) => {
      this.user = response.body
    })
  },
  methods: {
    ...mapActions([
      'logout'
    ]),
    logoutAction: function (event) {
      this.logout()
      this.$router.push('/login')
    }
  }
}
</script>
