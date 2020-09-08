import defaultSettings from '@/settings'
import Cookies from 'js-cookie'

const { fixedHeader } = defaultSettings

const state = {
  csrfToken: Cookies.get('csrftoken') ? Cookies.get('csrftoken') : undefined,
  fixedHeader: fixedHeader,
  device: 'desktop',
  avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
}

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    // eslint-disable-next-line no-prototype-builtins
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_CSRFTOKEN: (state, csrfToken) => {
    state.csrfToken = csrfToken
    console.log('csrfToken', csrfToken)
    if (state.csrfToken !== undefined) {
      Cookies.set('csrftoken', csrfToken)
    }
  }
}

const actions = {
  changeSetting ({ commit }, data) {
    commit('CHANGE_SETTING', data)
  },
  toggleDevice ({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  },
  setAvatar ({ commit }, avatar) {
    commit('SET_AVATAR', avatar)
  },
  setCsrfToken ({ commit }, csrfToken) {
    commit('SET_CSRFTOKEN', csrfToken)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
