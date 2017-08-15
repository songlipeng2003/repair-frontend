<template>
  <div>
    <mt-header title="公告">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="disableLoadMore" infinite-scroll-distance="10" infinite-scroll-listen-for-event="refreshData">
      <mt-loadmore :top-method="refresh" ref="loadmore">
        <mt-cell :title="announcement.title" :label="'发布时间：' + filterDate(announcement.created_at)" v-for="announcement in announcements" :key="announcement.id" :to="'announcement/' + announcement.id" is-link>
        </mt-cell>
      </mt-loadmore>
    </div>

    <page-footer active="tab-announcement"></page-footer>
  </div>
</template>

<script>
import Vue from 'vue'
import { Header, Cell, Button, Loadmore, InfiniteScroll, Indicator } from 'mint-ui'
import PageFooter from '../components/PageFooter'

import { Announcement } from '../resources'

Vue.use(InfiniteScroll)

export default {
  components: {
    'mt-header': Header,
    'mt-cell': Cell,
    'mt-button': Button,
    'mi-loadmore': Loadmore,
    PageFooter
  },
  data () {
    return {
      page: 1,
      allLoaded: false,
      announcements: [],
      loading: false
    }
  },
  computed: {
    disableLoadMore: function () {
      return this.loading || this.allLoaded
    }
  },
  methods: {
    refresh (id) {
      this.page = 1

      this.loadData(true)

      this.$refs.loadmore.onTopLoaded(id)
    },
    loadMore (id) {
      this.loading = true

      this.loadData()
    },
    loadData (clear = false) {
      Indicator.open()
      Announcement.query({page: this.page}).then((response) => {
        if (clear) {
          this.announcements = response.body
        } else {
          if (response.body.length === 0) {
            this.allLoaded = true
          } else {
            this.announcements = this.announcements.concat(response.body)
          }
        }

        this.loading = false

        this.page ++

        if (clear) {
          this.$emit('refreshData')
        }

        Indicator.close()
      })
    },
    filterDate: (date) => {
      return date.substring(0, 16)
    }
  },
  beforeMount () {
  }
}
</script>
