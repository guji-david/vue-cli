import Vue from 'vue'

import Router from 'vue-router'
import Main from '@/components/main'
import EventBus from '@/components/eventBus/eventBus'
import Nuxt from '@/components/nuxt/nuxt'
import Promises from '@/components/promises/promises'
import ES6 from '@/components/ES6/ES6'
import Vuex from '@/components/vuex/vuex'
import Reisze from '@/components/reisze/reisze'
import MySchart from '@/components/mySchart/mySchart'
import Props from '@/components/props/props'
import VirtualList from '@/components/virtualList/virtualList'

function capitalizeFirstLetter(string) {
  console.log('string--------------'+string);
  if(!!string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

}
/*const requireComponent = require.context(
  '@/components/',true, /\.vue$/
  //找到components文件夹下以.vue命名的文件
)
console.log(requireComponent.keys())
requireComponent.keys().forEach(fileName => {

  const componentConfig = requireComponent(fileName)

  //因为得到的filename格式是: './baseButton.vue', 所以这里我们去掉头和尾，只保留真正的文件名
  const componentName =fileName.replace(/^\.\//, '').replace(/\.\w+$/, '');
  console.log(111111+componentName.split('/')[1]);
  const test =capitalizeFirstLetter(componentName.split('/')[1]);

  Vue.component(test, componentConfig.default || componentConfig)
})*/
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/eventBus',
      name: 'EventBus',
      component: EventBus
    },
    {
      path: '/nuxt',
      name: 'Nuxt',
      component: Nuxt
    },
    {
      path: '/promises',
      name: 'Promises',
      component: Promises
    },
    {
      path: '/ES6',
      name: 'ES6',
      component: ES6
    },
    {
      path: '/vuex',
      name: 'Vuex',
      component: Vuex
    },
    {
      path: '/reisze',
      name: 'Reisze',
      component: Reisze
    },
    {
      path: '/mySchart',
      name: 'MySchart',
      component: MySchart
    },
    {
      path: '/props',
      name: 'Props',
      component: Props
    },
    {
      path: '/virtualList',
      name: 'VirtualList',
      component: VirtualList
    },
  ]
})
