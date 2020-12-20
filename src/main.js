// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.prototype.$axios = axios; // 全局注册，使用方法为:this.$axios
Vue.prototype.qs = this.qs; // 全局注册，使用方法为:this.qs

Vue.use(ElementUI);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
