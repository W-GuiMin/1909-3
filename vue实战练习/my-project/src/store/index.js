import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        tabbar: 0,
        searchText: '',
        searchCity: '全国'
    },
    getters: {
        getTabbar(state) {
            return state.tabbar
        },
        getSearchText(state) {
            return state.searchText
        },
        getSearchCity(state) {
            return state.searchCity
        }
    },
    mutations: {
        setTabbar(state, newValue) {
            state.tabbar = newValue
        },
        setSearchText(state, newValue) {
            state.searchText = newValue
        },
        setSearchCity(state, newValue) {
            state.searchCity = newValue
        }
    },
    actions: {
        setTabbar(context, newValue) {
            context.commit('setTabbar', newValue)
        },
        setSearchText(context, newValue) {
            context.commit('setSearchText', newValue)
        },
        setSearchCity(context, newValue) {
            context.commit('setSearchCity', newValue)
        }
    }
})