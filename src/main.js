import Vue from 'vue'
import router from './router';
import App from './App.vue';
import HelperMixin from './utils/HelperMixin'
import VeeValidate from 'vee-validate';

Vue.mixin(HelperMixin);
Vue.use(VeeValidate);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
