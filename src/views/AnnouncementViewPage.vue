<template>
  <div>
    <mt-header :title="announcement.title">
      <router-link to="/announcement" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <p>{{ announcement.content }}</p>
  </div>
</template>

<script>
import { Header, Cell, Button } from 'mint-ui'

import { Announcement } from '../resources'

export default {
  components: {
    'mt-header': Header,
    'mt-cell': Cell,
    'mt-button': Button
  },
  data () {
    return {
      id: this.$route.params.id,
      announcement: {}
    }
  },
  beforeMount () {
    Announcement.get({id: this.id}).then((response) => {
      this.announcement = response.body
    })
  }
}
</script>
