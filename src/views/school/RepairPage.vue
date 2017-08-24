<template>
  <div>
    <mt-header title="报修"></mt-header>
    <mt-navbar v-model="status">
      <mt-tab-item id="0">全部</mt-tab-item>
      <mt-tab-item id="10">已报修</mt-tab-item>
      <mt-tab-item id="20">已派单</mt-tab-item>
      <mt-tab-item id="40">已维修</mt-tab-item>
      <mt-tab-item id="50">已评价</mt-tab-item>
    </mt-navbar>

    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="disableLoadMore" infinite-scroll-distance="0" infinite-scroll-listen-for-event="refreshData">
      <mt-loadmore :top-method="refresh" ref="loadmore">
        <div v-for="repair in repairs" :key="repair.id" class="card">
          <router-link :to="'/school/repair/' + repair.id">
            编号:{{repair.code}}<br/>
            设备:{{repair.device.name}}<br/>
            项目:{{repair.project_name}}<br/>
            状态:{{repair.status_name}}<br/>
            保修时间:{{repair.created_at.substring(0, 16)}}<br/>
          </router-link>
        </div>
        <div class="empty" v-if="repairs.length==0">
          暂无数据
        </div>
      </mt-loadmore>
    </div>

    <page-footer active="tab-repair"></page-footer>
  </div>
</template>

<script>
import Vue from 'vue'
import { Header, Cell, Button, Loadmore, InfiniteScroll, Indicator } from 'mint-ui'
import PageFooter from '@/components/PageFooter'

import { SchoolRepair } from '@/resources'

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
      repairs: [],
      loading: false,
      status: '0'
    }
  },
  computed: {
    disableLoadMore: () => {
      return this.loading || this.allLoaded
    }
  },
  watch: {
    status: function (newValue) {
      this.loading = true
      this.page = 1
      this.loadData(true)
    }
  },
  methods: {
    refresh (id) {
      this.page = 1

      this.loadData(true)

      this.$refs.loadmore.onTopLoaded(id)
    },
    loadMore () {
      this.loading = true

      this.loadData()
    },
    loadData (clear = false) {
      Indicator.open()
      let query = {page: this.page, status: this.status}
      SchoolRepair.query(query).then((response) => {
        if (clear) {
          this.repairs = response.body
        } else {
          if (response.body.length === 0) {
            this.allLoaded = true
          } else {
            this.repairs = this.repairs.concat(response.body)
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
    this.loadMore()
  }
}
</script>
