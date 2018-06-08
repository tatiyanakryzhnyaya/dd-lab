import Vue from 'vue'
import Router from 'vue-router'
import Topic from '@/components/Topic'
import AllActivity from '@/components/AllActivity'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Topic',
      component: Topic
    },
    {
      path: '/all',
      name: 'AllActivity',
      component: AllActivity
    }
  ]
})
