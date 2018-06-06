import Vue from 'vue'
import Router from 'vue-router'
import SideBar from '@/components/SideBar'
import Event from '@/components/Event'
import AllActivity from '@/components/AllActivity'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Event',
      component: Event
    },
    {
      path: '/all',
      name: 'AllActivity',
      component: AllActivity
    }
  ]
})
