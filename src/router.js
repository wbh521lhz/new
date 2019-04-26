import Vue from 'vue'
import Router from 'vue-router'
import openingRecord from './components/openingRecord.vue'
import associatedUser from './components/associatedUser.vue'
import alarmRecord from './components/alarmRecord.vue'
import safe from './components/safe.vue'
Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
     {
      path: '/',
      name: 'openingRecord',
      component: openingRecord,
    },
    {
      path: '/associatedUser',
      name: 'associatedUser',
      component: associatedUser
    },
    {
      path: '/alarmRecord',
      name: 'alarmRecord',
      component:alarmRecord 
    },
    {
      path: '/safe',
      name: 'safe',
      component:safe 
    },
  ]
})
