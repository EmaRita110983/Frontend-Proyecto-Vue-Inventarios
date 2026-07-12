<template>
  <div>
    <h1>Usuarios</h1>

    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Email</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="usuario in usuarios" :key="usuario.id">
          <td>{{ usuario.id }}</td>
          <td>{{ usuario.name }}</td>
          <td>{{ usuario.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">

import { ref, onMounted } from 'vue';
import usuarioService from '../../services/usuario.service';


interface Usuario {
  id: number;
  name: string;
  email: string;
}


const usuarios = ref<Usuario[]>([]);


async function cargarUsuarios() {

  try {

    const respuesta = await usuarioService.funListar();

    usuarios.value = respuesta.data;

    console.log('Usuarios:', usuarios.value);

  } catch (error) {

    console.error('Error cargando usuarios:', error);

  }

}


onMounted(() => {
  cargarUsuarios();
});

</script>