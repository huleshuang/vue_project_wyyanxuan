import Vue from 'vue'
import VueRouter from 'vue-router'

//引入组件
import HomePage from '../pages/HomePage/HomePage'
import Categorys from '../pages/Category/Category'
import DisStance from '../pages/DiscernStance/DiscernStance'
import ShopCart from '../pages/ShopCart/ShopCart'
import Personal from '../pages/Personal/Personal'
import phone_login from '../pages/Login/login_phone'
import email_login from '../pages/Login/email_login'

import Login from '../pages/Login/Login'

//声明使用
Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path: '/',
      redirect: '/categorys',
      meta:{
        showFooter: true
      }
    },
    {
      path: '/homepage',
      component: HomePage,
      meta:{
        showFooter: true
      }
    },
    {
      path: '/categorys',
      component: Categorys,
      meta:{
        showFooter: true
      }
    },
    {
      path: '/dstance',
      component: DisStance,
      meta:{
        showFooter: true
      }
    },
    {
      path: '/shopcart',
      component: ShopCart,
      meta:{
        showFooter: true
      }
    },
    {
      path: '/personal',
      component: Personal,
      meta:{
        showFooter: true
      }
    },

    {
      path:'/login',
      component:Login,
      meta:{
        showFooter: false
      }
    },

    {
      path:'/phoneLogin',
      component:phone_login,
      meta:{
        showFooter: false
      }
    },
    {
      path:'/emailLogin',
      component:email_login,
      meta:{
        showFooter: false
      }
    },


  ]
})
