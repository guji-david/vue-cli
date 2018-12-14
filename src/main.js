// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import store from'./store/index.js'
Vue.config.productionTip = false;
/* eslint-disable no-new */

// 引入自定义组件。index.js是组件的默认入口 import Loading from '../components/loading'
import Loading from './components/loading/Loading.vue'
// Vue.use(Loading);
new Vue({
  el: '#app',
  data:{
    // 空的实例放到根组件下，所有的子组件都能调用
    Bus: new Vue()
  },
  router,
  store,
  template: '<App/>',
  components: { App }
})
