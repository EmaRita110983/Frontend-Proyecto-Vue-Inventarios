<template>
  <div class="container">

    <div class="card">

      <div class="header-listado">

        <h2>
          Listado de Usuarios
        </h2>

        <button class="btn-primary" @click="nuevoUsuario">
          + Agregar Usuario
        </button>

      </div>

      <div v-if="mostrarFormulario" class="card">

        <h3>Nuevo Usuario</h3>

        <input type="text" placeholder="Nombre" v-model="formulario.name">

        <input type="email" placeholder="Correo" v-model="formulario.email">

        <input type="text" placeholder="Cédula" v-model="formulario.cedula">

        <input type="password" placeholder="Contraseña" v-model="formulario.password">

        <div class="acciones-formulario">

          <button class="btn-primary" @click="guardarUsuario">
            Guardar
          </button>

          <button class="btn-danger" @click="cancelarFormulario">
            Cancelar
          </button>

        </div>

      </div>

      <table>

        <thead>

          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Cédula</th>
            <th>Acciones</th>
          </tr>

        </thead>


        <tbody>

          <tr v-for="usuario in usuarios" :key="usuario.id">

            <td>{{ usuario.id }}</td>

            <td>{{ usuario.name }}</td>

            <td>{{ usuario.email }}</td>

            <td>{{ usuario.cedula }}</td>


            <td>

              <button class="btn-warning" @click="editarUsuario(usuario)">
                Editar
              </button>


              <button class="btn-danger" @click="eliminarUsuario(usuario.id)">
                Eliminar
              </button>


            </td>

          </tr>

        </tbody>

      </table>

    </div>

  </div>

</template>


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

const mostrarFormulario = ref(false);

const formulario = ref({
  name: "",
  email: "",
  cedula: "",
  password: ""
});

async function cargarUsuarios() {

  try {

    const respuesta = await usuarioService.funListar();

    usuarios.value = respuesta.data;

  } catch (error) {

    console.error(error);

  }

}

function editarUsuario(usuario: Usuario) {

  console.log("Editar:", usuario);
}
function nuevoUsuario() {

  formulario.value = {

    name: "",
    email: "",
    cedula: "",
    password: ""

  };

  mostrarFormulario.value = true;

}

async function eliminarUsuario(id: number) {

  const confirmar = confirm(
    "¿Está seguro de eliminar este usuario?"
  );

  if (!confirmar) return;

  try {

    await usuarioService.funEliminar(id);

    await cargarUsuarios();

    alert("Usuario eliminado correctamente.");

  } catch (error) {

    console.error(error);

    alert("Error al eliminar el usuario.");

  }

}

async function guardarUsuario() {

  try {

    await usuarioService.funGuardar(formulario.value);

    alert("Usuario creado correctamente.");

    cancelarFormulario();

    await cargarUsuarios();

  } catch (error) {

    console.error(error);

    alert("No fue posible guardar el usuario.");

  }

}


function cancelarFormulario() {

  mostrarFormulario.value = false;

  formulario.value = {

    name: "",
    email: "",
    cedula: "",
    password: ""

  };

}

onMounted(() => {

  cargarUsuarios();

});


</script>