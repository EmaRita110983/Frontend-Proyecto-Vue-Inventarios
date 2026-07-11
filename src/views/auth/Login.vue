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
    <p v-if="mensajeError" style="color: red;">
  {{ mensajeError }}
</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { loginConLaravel } from '../../services/auth.service';

import { useRouter } from 'vue-router';

const credenciales = ref({email: '',password: ''});
const mensajeError = ref('');
const router = useRouter();

async function funIngresar() {

  mensajeError.value = '';

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

  } catch (error: any) {

    if (error.response?.status === 401) {
      mensajeError.value = error.response.data.message;

    } else if (error.response?.status === 422) {

      const errores = error.response.data.errors;

      if (errores.email) {
        mensajeError.value = errores.email[0];
      } else if (errores.password) {
        mensajeError.value = errores.password[0];
      } else {
        mensajeError.value = error.response.data.message;
      }

    } else {
      mensajeError.value = "Ha ocurrido un error.";
    }
  }
}

</script>