// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import 'material-design-lite/dist/material.min.js'

Vue.config.productionTip = false

Vue.use(axios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // config,
  router,
  template: '<App/>',
  components: { App }
})
