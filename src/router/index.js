import Vue from 'vue'
import Router from 'vue-router'
import Celebrity from '@/components/Celebrity'
import Details from '@/components/Details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Celebrity',
      component: Celebrity
    },
    {
      path: '/celebrity/:id',
      name: 'Details',
      component: Details
    }
  ]
})
