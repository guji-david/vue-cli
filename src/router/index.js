import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import EventBus from '@/components/eventBus/eventBus'
import Nuxt from '@/components/nuxt/nuxt'

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
  ]
})
