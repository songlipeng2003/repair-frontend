<template>
  <div>
    <mt-header title="修改密码">
      <router-link to="/my" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <div >
        <mt-field label="原始密码" placeholder="请输入密码" type="password" v-model="oldPassword"></mt-field>
        <mt-field label="新密码" placeholder="请输入新密码" type="password" v-model="newPassword"></mt-field>
        <mt-field label="确认新密码" placeholder="请输入确认密码" type="password" v-model="confirmPassword"></mt-field>
        <mt-button type="primary" size="large" @click.native="changePassword">修改密码</mt-button>
    </div>
  </div>
</template>

<script>
import { Header, Field, Button, MessageBox, Toast } from 'mint-ui'

import { User } from '../resources'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    'mt-header': Header,
    'mt-field': Field,
    'mt-button': Button
  },
  data () {
    return {
      oldPassword: '',
      newPassword: '',
      confirmPassword: ''
    }
  },
  computed: {
    ...mapGetters(
      [
        'loginedUserId'
      ]
    )
  },
  methods: {
    ...mapActions([
      'logout'
    ]),
    changePassword: (event) => {
      let self = this

      User.changePassword({id: this.loginedUserId}, {
        old_password: this.oldPassword,
        new_password: this.newPassword,
        confirm_password: this.confirmPassword
      }).then((response) => {
        Toast(self.$t('update_success'))
        self.logout()
        self.$router.push('/login')
      }, (response) => {
        MessageBox.alert(response.body.message)
      })
    }
  }
}
</script>
