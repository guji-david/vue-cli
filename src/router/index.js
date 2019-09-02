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
import Functional from '@/components/functional/functional1'
import ProvideInject from '@/components/provide-inject/provide-inject'
import Form from '@/components/form/form-main'



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
    {
      path: '/functional',
      name: 'Functional',
      component: Functional
    },
    {
      path: '/provideInject',
      name: 'ProvideInject',
      component: ProvideInject
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
  ]
})
