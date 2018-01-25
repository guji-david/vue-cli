// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data:{
    // 空的实例放到根组件下，所有的子组件都能调用
    Bus: new Vue()
  },
  router,
  template: '<App/>',
  components: { App }
})
