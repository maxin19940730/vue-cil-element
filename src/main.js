import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './plugins/router'
import request from "./config/request";
import mock from "./plugins/mock"

Vue.config.productionTip = false
Vue.prototype=Object.assign(Vue.prototype,request)

mock(true)


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
