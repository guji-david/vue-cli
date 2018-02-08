import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import EventBus from '@/components/eventBus/eventBus'
import Nuxt from '@/components/nuxt/nuxt'
import Promises from '@/components/promises/promises'
import ES6 from '@/components/ES6/ES6'
import Vuex from '@/components/vuex/vuex'

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
  ]
})
