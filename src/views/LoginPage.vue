<template>
  <div>
    <mt-header title="登录"></mt-header>

    <h1>登录</h1>

    <div class="login-form">
      <mt-field label="用户名" placeholder="请输入账号" type="email" v-model="username"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
      <mt-button type="primary" size="large" @click.native="loginAction">登录</mt-button>
    </div>
  </div>
</template>

<style>
.logo {
  display: block;
  margin: 50px auto;
}

h1 {
  text-align: center;
}
</style>

<script>
import { Header, Field, Button, MessageBox } from 'mint-ui'

import { Account } from '../resources'
import { mapActions } from 'vuex'

export default {
  components: {
    'mt-header': Header,
    'mt-field': Field,
    'mt-button': Button
  },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions([
      'login'
    ]),
    loginAction: function (event) {
      let self = this

      Account.login({
        username: this.username,
        password: this.password
      }).then(function (response) {
        self.login(response.data)

        self.$router.push('/')
      }).catch((response) => {
        MessageBox.alert(response.body.message)
      })
    }
  }
}
</script>
