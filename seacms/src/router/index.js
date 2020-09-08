import Vue from 'vue'
import Router from 'vue-router'

/* layout */
import layout from '@/layout'
console.log(layout)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: layout,
      redirect: '/home',
      children: [{
        path: 'home',
        name: 'home',
        component: () => import('@/views/home'),
        meta: { title: 'home', icon: 'home' }
      },
      {
        path: 'play',
        name: 'play',
        component: () => import('@/views/play'),
        meta: { title: 'play', icon: 'play' }
      }
      ]
    }
  ]
})
