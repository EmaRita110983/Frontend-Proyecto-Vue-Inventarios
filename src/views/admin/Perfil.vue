<template>
  <div>
    <h1>Perfil</h1>

    <div v-if="perfil">
      <p><strong>ID:</strong> {{ perfil.id }}</p>
      <p><strong>Nombre:</strong> {{ perfil.name }}</p>
      <p><strong>Email:</strong> {{ perfil.email }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { funPerfil } from '../../services/perfil.service';
import { useRouter } from 'vue-router';

const router = useRouter();

const perfil = ref(null);

async function funObtenerPerfil() {
  try {
    const data = await funPerfil();
    perfil.value = data;
  } catch (error) {
    localStorage.removeItem('token');
    router.push('/login');
  }
}

funObtenerPerfil();
</script>