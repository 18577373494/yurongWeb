// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'

import router from './router'

import axios from 'axios';//开发环境

import ApiSetting from './config/ApiSetting';

Vue.config.productionTip = false

Vue.prototype.$axios = axios;

Vue.prototype.$ApiSetting = ApiSetting;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  components: { App },
  template: '<App/>'
})
