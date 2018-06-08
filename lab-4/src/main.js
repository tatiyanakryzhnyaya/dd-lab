// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Api } from './Api'
import Icon from 'vue-awesome/icons'
const api = new Api()
Vue.component('icon', Icon)
// Регистрируем модуль в Vue
// (В котором будет вызван метод install, который занимается регистрацией)
Vue.use(api)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
