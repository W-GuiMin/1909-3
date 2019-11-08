import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '../pages/Home.vue'
import Search from '../pages/Search.vue'
import Mine from '../pages/Mine.vue'
import Details from '../pages/CompanyDetails.vue'
import Main from '../pages/Main.vue'
import Register from '../pages/Register.vue'
import Login from '../pages/Login.vue'
import Send from '../pages/Send.vue'
import Interview from '../pages/Interview.vue'
import Invite from '../pages/Invite.vue'
import Enshrine from '../pages/Enshrine.vue'
const routes = [{
    // 当页面为http://localhost:8080/Main 在<router-view>加载Main组件
    path: '/main',
    name: 'main',
    component: Main,
    children: [
        {
            path: 'home',
            name: 'home',
            component: Home
        },
        {
            path: 'search',
            name: 'search',
            component: Search
        },
        {
            path: 'mine',
            name: 'mine',
            component: Mine
        }
    ]
},
{
    path: '/details/:positionId',
    name: 'details',
    component: Details
},
{
    path: '/register',
    name: 'register',
    component: Register
},
{
    path: '/login',
    name: 'login',
    component: Login
}, {
    path: '/send',
    name: 'send',
    component: Send
}, {
    path: '/interview',
    name: 'interview',
    component: Interview
}, {
    path: '/invite',
    name: 'invite',
    component: Invite
}, {
    path: '/enshrine',
    name: 'enshrine',
    component: Enshrine
},
{
    path: '/',
    redirect: '/main/home'
}]
const router = new VueRouter({
    // mode: 'history',
    routes
})
export default router