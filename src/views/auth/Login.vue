<template>
  <h1>Iniciar Sesión</h1>

  <div>
    <label>Correo Electrónico:</label>
    <input type="email" v-model="credenciales.email" />

    <br>

    <label>Contraseña:</label>
    <input type="password" v-model="credenciales.password" />

    <br>

    <button @click="funIngresar()">Ingresar</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { loginConLaravel } from '../../services/auth.service';

import { useRouter } from 'vue-router';

const credenciales = ref({email: '',password: ''});

const router = useRouter();

async function funIngresar() {
  try {
    const respuesta = await loginConLaravel(
      credenciales.value.email,
      credenciales.value.password
    );

    console.log('Respuesta completa:', respuesta);

localStorage.setItem(
  'token',
  respuesta.access_token
);

router.push('/');

  } catch (error) {
    console.error('Error al iniciar sesión:', error);
  }
}

</script>