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
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('../views/admin/Dashboard.vue')
      },
      {
        path: 'perfil',
        name: 'Perfil',
        component: () => import('../views/admin/Perfil.vue')
      }
    ]
  }

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;