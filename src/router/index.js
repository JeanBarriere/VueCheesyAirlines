import Vue from 'vue'
import Router from 'vue-router'
import Store from '@/store'
import Welcome from '@/components/Welcome'
import Search from '@/components/Search'
import View from '@/components/View'
import Account from '@/components/user/Account'
import Orders from '@/components/user/Orders'
import Order from '@/components/user/Order'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome,
      meta: {
        footer: false,
        menu: false,
        inversed: true,
        icon: false,
        fixed: false
      }
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      meta: {
        inversed: true,
        menu: false,
        icon: false
      }
    },
    {
      path: '/view',
      name: 'view',
      component: View,
      meta: {
        inversed: true,
        menu: false,
        icon: false
      }
    },
    {
      path: '/account',
      name: 'account',
      component: Account,
      meta: {
        inversed: false,
        menu: false,
        icon: false,
        fixed: false,
        glass: true
      }
    },
    {
      path: '/account/orders',
      name: 'account-orders',
      component: Orders,
      meta: {
        inversed: true,
        menu: false,
        icon: false,
        fixed: true,
        glass: false
      }
    },
    {
      path: '/account/order/:id',
      name: 'account-orders-order',
      component: Order,
      meta: {
        inversed: true,
        menu: false,
        icon: false,
        fixed: true,
        glass: false
      }
    },
    {
      path: '*',
      redirect: () => ({
        name: 'welcome',
        params: {
          e404: true
        }
      })
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (from.name !== null) {
    Vue.Codebase.loader('show')
    setTimeout(() => {
      next()
    }, 350)
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  Store.commit('setDisplayFooter', !(to.meta.footer === false))
  Store.commit('setHeader', { menu: !(to.meta.menu === false), icon: !(to.meta.icon === false), inversed: to.meta.inversed === true, fixed: to.meta.fixed === true, glass: !(to.meta.glass === false) })
  if (from.name !== null) {
    Vue.Codebase.loader('hide')
  }
})

export default router
