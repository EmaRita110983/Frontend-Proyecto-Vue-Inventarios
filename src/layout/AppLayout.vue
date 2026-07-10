

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
    <!-- otros enlaces -->

    <button @click="cerrarSesion">
      Cerrar sesión
    </button>
  </nav>

  <router-view />
</template>