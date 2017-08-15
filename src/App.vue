<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import './assets/styles/iconfont.css'

export default {
  name: 'app'
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

a {
  color: #000;
  text-decoration: none;
}

.empty {
  width: 100%;
  text-align: center;
  padding: 20px 0;
}

.card {
  padding: 5px;
  border-bottom: 1px solid #EEE;
  line-height: 1.2;

  a {
    display: block;
  }
}
</style>
