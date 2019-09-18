import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Home from './views/home/Home.vue'
import About from './views/home/About.vue'
import Test from './views/home/Test.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children:[{
        path:'home',
        name:'home',
        component:Home
      },{
        path:'about',
        name:'about',
        component:About
      },{
        path:'test',
        name:'test',
        component:Test
      }]
    }
  ]
})
