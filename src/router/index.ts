import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

// Components are lazy-loaded in route definitions
const routes: Array<RouteRecordRaw> = [


  // Web routes with WebLayout
{
  path: '/',
  name: 'WebLayout',
  component: () => import('../layout/WebLayout.vue'),
  children: [
    {
      path: '/',
      name: 'Inicio',
      component: () => import('../views/web/Inicio.vue') 
    },
    {
    path: '/nosotros',
    name: 'Nosotros',
    component: () => import('../views/web/Nosotros.vue')
  },
  {
    path: '/servicios',
    name: 'Servicios',
    component: () => import('../views/web/Servicios.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/auth/Login.vue')
  }
  ]
},

// Admin routes with AppLayout
{
  path: '/admin',
  name: 'AppLayout',
  component: () => import('../layout/AppLayout.vue'),
  children: [
    {
      path: '/perfil',
      name: 'Perfil',
      component: () => import('../views/admin/Perfil.vue')
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('../views/admin/Dashboard.vue')
    }
  ]
},
]
   
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
