import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Recognize from '@/components/Recognize'
import History from '@/components/History'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/recognize',
      name: 'Recognize',
      component: Recognize
    },
    {
      path: '/history',
      name: 'History',
      component: History
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
  ]
})
