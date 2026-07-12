<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

function cerrarSesion() {
  localStorage.removeItem('token');
  router.push('/login');
}
</script>

<template>
 <nav>
  <RouterLink to="/admin/dashboard">
    Dashboard
  </RouterLink> |

  <RouterLink to="/admin/perfil">
    Mi Perfil
  </RouterLink> |

  <RouterLink to="/">
    Inicio
  </RouterLink> |

  <RouterLink to="/admin/Usuario">
    Usuarios
  </RouterLink>

  <button @click="cerrarSesion">
    Cerrar sesión
  </button>
</nav>
    
      <main>
        <router-view />
      </main>
</template>