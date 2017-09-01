// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
//import axios from 'axios'
//import VueAxios from 'vue-axios'
import VueResource from 'vue-resource';

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);
Vue.use(VueResource);
//Vue.use(VueAxios,axios);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
