import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';


const routes: RouteRecordRaw[] = [

  // =========================
  // Sitio Web
  // =========================
  {
    path: '/',
    component: () => import('../layout/WebLayout.vue'),
    children: [
      {
        path: '',
        name: 'Inicio',
        component: () => import('../views/web/Inicio.vue')
      },
      {
        path: 'nosotros',
        name: 'Nosotros',
        component: () => import('../views/web/Nosotros.vue')
      },
      {
        path: 'servicios',
        name: 'Servicios',
        component: () => import('../views/web/Servicios.vue')
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('../views/auth/Login.vue')
      }

    ]
  },

  // =========================
  // Administración
  // =========================
  {
    path: '/admin',
  component: () => import('../layout/AppLayout.vue'),
  meta: {
    requiresAuth: true
  },
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('../views/admin/Dashboard.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'perfil',
        name: 'Perfil',
        component: () => import('../views/admin/Perfil.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
  path: 'usuario',
  name: 'usuario',
  component: () => import('../views/admin/Usuario.vue'),
  meta: {
    requiresAuth: true
  }
},
    ]
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach((to, _from, next) => {

  const token = localStorage.getItem('token');

  if (to.meta.requiresAuth && !token) {
    next('/login');
    return;
  }

  next();

});

export default router;