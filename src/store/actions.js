import * as types from './mutation-types'

export const tabSelect = ({ commit }, tabSelected) => {
  commit(types.TAB_SELECT, tabSelected)
}

export const login = ({ commit }, user) => {
  commit(types.LOGIN, user)
}

export const logout = ({ commit }) => {
  commit(types.LOGOUT)
}
