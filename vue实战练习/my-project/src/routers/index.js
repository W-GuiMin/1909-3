import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '../pages/Home.vue'
import Search from '../pages/Search.vue'
import Mine from '../pages/Mine.vue'
const routes = [{
    // 当页面为http://localhost:8080/home 在<router-view>加载Home组件
    path: '/home',
    // name: 'home',
    component: Home
},
{
    // 当页面为http://localhost:8080/search 在<router-view>加载Search组件
    path: '/search',
    // name: 'search',
    component: Search
},
{
    path: '/mine',
    // name: 'mine',
    component: Mine
}
]
const router = new VueRouter({
    routes
})
export default router