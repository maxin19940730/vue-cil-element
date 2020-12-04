import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './plugins/router'
import request from "./plugins/request";
import mock from "./plugins/mock"
import common from "./config/common"

Vue.config.productionTip = false
//公共方法引入
Vue.prototype.common=common
//请求方法
Vue.prototype=Object.assign(Vue.prototype,request)

mock(true)


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
