import Vue from 'vue'
import Router from 'vue-router'
import play from '@/components/play'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'play',
      component: play
    }
  ]
})
