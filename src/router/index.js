import Vue from 'vue'
import Router from 'vue-router'
import Store from '@/store'
import Welcome from '@/components/Welcome'
import Home from '@/components/Home'
import Search from '@/components/Search'
import View from '@/components/View'
import Ticket from '@/components/Ticket'

Vue.use(Router)

/* global Codebase */
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
        fixed: true
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
      path: '/blank',
      name: 'welcome',
      component: Home
    },
    {
      path: '/account/ticket',
      name: 'ticket',
      component: Ticket,
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
    Codebase.loader('show')
    setTimeout(() => {
      next()
    }, 350)
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  Store.dispatch('setDisplayFooter', !(to.meta.footer === false))
  Store.dispatch('setHeaderMenu', !(to.meta.menu === false))
  Store.dispatch('setHeaderIcon', !(to.meta.icon === false))
  Store.dispatch('setHeaderInversed', to.meta.inversed === true)
  Store.dispatch('setHeaderFixed', to.meta.fixed === true)
  Store.dispatch('setHeaderGlass', !(to.meta.glass === false))
  if (from.name !== null) {
    Codebase.loader('hide')
  }
})

export default router
