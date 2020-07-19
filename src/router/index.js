import Vue from 'vue'
import Router from 'vue-router'
import seat from '@/components/seat'
import HelloWorld from '@/components/HelloWorld'
import tab from '@/components/tab'
import login from '@/components/login'
import index from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/seat',
      name: 'seat',
      component: seat
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/tab',
      name: 'tab',
      component: tab
    }
  ]
})
