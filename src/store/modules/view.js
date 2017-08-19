export const STORAGE_KEY = 'oasui'
import * as types from '../types'

const storedState = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '""')

const defaultState = {
  dark: false,
  grouped: 0,
  description: false,
  endpoint: true
}

export const state = storedState || defaultState

export const mutations = {
  [types.TOGGLE_DARK] (state) {
    state.dark = !state.dark
  },
  [types.TOGGLE_GROUPED] (state, payload) {
    state.grouped = payload
  },
  [types.TOGGLE_DESCRIPTION] (state) {
    state.description = !state.description
  }
}

export const getters = {
  [types.IS_DARK]: state => state.dark,
  [types.IS_GROUPED]: state => state.grouped,
  [types.IS_DESCRIPTION]: state => state.description,
  [types.IS_ENDPOINT]: state => state.endpoint
}

export default {
  state,
  mutations,
  getters
}
