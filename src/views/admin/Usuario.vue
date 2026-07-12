<template>
  <div class="contenedor">
    <h2>Listado de Usuarios</h2>

    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>Cedula</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="usuario in usuarios" :key="usuario.id">
          <td>{{ usuario.id }}</td>
          <td>{{ usuario.name }}</td>
          <td>{{ usuario.email }}</td>
          <td>{{ usuario.cedula }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.contenedor {
  max-width: 900px;
  margin: 30px auto;
  padding: 20px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  box-shadow: 0 4px 12px rgba(0,0,0,.15);
}

th,
td {
  border: 1px solid #ddd;
  padding: 12px;
}

th {
  background: #0d6efd;
  color: white;
}

tr:nth-child(even) {
  background: #f5f5f5;
}

tbody tr {
  transition: background-color 0.25s ease;
}

tbody tr:hover {
  background-color: #dbeafe;
  cursor: pointer;
}
</style>

<script setup lang="ts">

import { ref, onMounted } from 'vue';
import usuarioService from '../../services/usuario.service';


interface Usuario {
  id: number;
  name: string;
  email: string;
  cedula: string;
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