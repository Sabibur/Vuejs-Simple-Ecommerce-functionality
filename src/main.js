import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(VueRouter)

import { routes } from './router/index'

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.use(Vuex)
import { storage } from './store/index'

const store = new Vuex.Store(storage)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
