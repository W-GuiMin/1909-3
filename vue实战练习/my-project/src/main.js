import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './routers'
import store from './store/index'
Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')