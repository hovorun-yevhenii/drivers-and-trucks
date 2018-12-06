import Vue from 'vue'
import router from './router';
import App from './App.vue';
import httpMixin from './utils/httpMixin'

Vue.mixin(httpMixin);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
