import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'

// 导入各个模块的初始状态和 mutations
import tab from './modules/tab'
import account from './modules/account'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  strict: debug,
  // 组合各个模块
  modules: {
    tab,
    account
  }
})
