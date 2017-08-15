import { TAB_SELECT } from '../mutation-types'
import * as CONST from '../../const'

// 该模块的初始状态
const state = {
  tabSelected: CONST.TAB_HOME
}

// 相关的 mutations
const mutations = {
  [TAB_SELECT] (state, tabSelected) {
    state.tabSelected = tabSelected
  }
}

export default {
  state,
  mutations
}
