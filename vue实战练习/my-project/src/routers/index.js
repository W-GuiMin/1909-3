import Vue from 'vue'
// import VueRouter from '../assets/vue-router'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '../pages/Home.vue'
import Company from '../pages/CompanyDetails.vue'
const routes = [{
    path: 'home',
    name: 'home',
    component: Home
},
{
    path: '/company',
    name: 'company',
    component: Company
},
// 默认重定向
{
    path: '/',
    redirect: '/main/home'
}]
const router = new VueRouter({
    // hash
    mode: 'history',
    routes
})
export default router