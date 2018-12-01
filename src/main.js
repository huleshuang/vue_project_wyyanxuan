import Vue from 'vue'
import App from './App'
import router from './router'
import './rem'
import store from './store/store'

import  './mock/mockServer'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
