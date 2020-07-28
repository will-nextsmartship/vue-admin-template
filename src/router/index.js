import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'
/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: {
        title: 'Dashboard',
        icon: 'dashboard',
        roles: ['admin', 'sales', 'support', 'warehouse']
      }
    }]
  },
  {
    path: '/inventory',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Inventory',
        component: () => import('@/views/inventory/index'),
        meta: {
          title: 'Inventory',
          icon: 'el-icon-receiving',
          roles: ['admin', 'support', 'warehouse']
        }
      }
    ]
  },
  {
    path: '/inbound',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Inbound',
        component: () => import('@/views/inbound/index'),
        meta: {
          title: 'Inbound',
          icon: 'el-icon-s-unfold',
          roles: ['admin', 'support', 'warehouse']
        }
      }
    ]
  },
  {
    path: '/outbound',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Outbound',
        component: () => import('@/views/outbound/index'),
        meta: {
          title: 'Outbound',
          icon: 'el-icon-s-fold',
          roles: ['admin', 'support', 'warehouse']
        }
      }
    ]
  },
  {
    path: '/transfer',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Transfer',
        component: () => import('@/views/transfer/index'),
        meta: {
          title: 'Transfer',
          icon: 'el-icon-s-promotion',
          roles: ['admin', 'support', 'warehouse']
        }
      }
    ]
  },
  {
    path: '/users-management',
    component: Layout,
    children: [
      {
        path: '',
        name: 'User Management',
        component: () => import('@/views/users-management/index'),
        meta: {
          title: 'User Management',
          icon: 'user',
          roles: ['admin', 'support']
        }
      }
    ]
  },
  {
    path: '/channel',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Channel',
        component: () => import('@/views/channel/index'),
        meta: {
          title: 'Channel',
          icon: 'el-icon-truck',
          roles: ['admin', 'support']
        }
      }
    ]
  },
  {
    path: '/finance',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Finance',
        component: () => import('@/views/finance/index'),
        meta: {
          title: 'Finance',
          icon: 'el-icon-money',
          roles: ['admin', 'sales', 'support', 'warehouse']
        }
      }
    ]
  },
  {
    path: '/settings',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Settings',
        component: () => import('@/views/settings/index'),
        meta: {
          title: 'Settings',
          icon: 'el-icon-setting',
          roles: ['admin', 'sales', 'support', 'warehouse']
        }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
