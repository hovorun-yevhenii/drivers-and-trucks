import Vue from 'vue'
import router from './router';
import App from './App.vue';
import HelperMixin from './utils/HelperMixin'

Vue.mixin(HelperMixin);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
