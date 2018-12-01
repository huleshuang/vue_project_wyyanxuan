import Vue from 'vue'
import VueRouter from 'vue-router'

//引入组件
import HomePage from '../pages/HomePage/HomePage'
import Categorys from '../pages/Category/Category'
import DisStance from '../pages/DiscernStance/DiscernStance'
import ShopCart from '../pages/ShopCart/ShopCart'
import Personal from '../pages/Personal/Personal'

import Login from '../pages/Login/Login'

//声明使用
Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path: '/',
      redirect: '/categorys'
    },
    {
      path: '/homepage',
      component: HomePage
    },
    {
      path: '/categorys',
      component: Categorys
    },
    {
      path: '/dstance',
      component: DisStance
    },
    {
      path: '/shopcart',
      component: ShopCart
    },
    {
      path: '/personal',
      component: Personal
    },

    {
      path:'/login',
      component:Login
    }

  ]
})
