<template>
  <div>
  </div>
</template>

<style>
</style>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {
  },
  data () {
    return {
    }
  },
  beforeMount () {
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

    this.$router.push(`/${type}/`)
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
