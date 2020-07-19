import Vue from 'vue'
import Router from 'vue-router'
import seat from '@/components/seat'
import HelloWorld from '@/components/HelloWorld'
import tab from '@/components/tab'
import login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'seat',
    //   component: seat
    // },
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    // {
    //   path: '/',
    //   name: 'tab',
    //   component: tab
    // },
    {
      path: '/',
      name: 'login',
      component: login
    }
  ]
})
