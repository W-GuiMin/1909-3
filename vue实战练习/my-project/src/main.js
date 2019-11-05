import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
// import VueAxios from 'vue-axios'
import router from './routers'
// Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
