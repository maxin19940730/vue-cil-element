import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '../config/routes'

Vue.use(VueRouter)

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

export default router