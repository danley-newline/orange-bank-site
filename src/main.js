import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store/index'

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
