<template>

    <Menubar :model="items">

        <template #start>
            <h2>📦 Inventarios</h2>
        </template>

        <template #end>

            <Button
                label="Ingresar"
                icon="pi pi-sign-in"
                @click="router.push('/login')"
            />

        </template>

    </Menubar>

    <div class="contenido">
        <router-view />
    </div>

</template>

<script setup lang="ts">

import { ref } from 'vue'
import { useRouter } from 'vue-router'

import Menubar from 'primevue/menubar'
import Button from 'primevue/button'

const router = useRouter()

const items = ref([
    {
        label: 'Inicio',
        icon: 'pi pi-home',
        command: () => router.push('/')
    },
    {
        label: 'Servicios',
        icon: 'pi pi-briefcase',
        command: () => router.push('/servicios')
    },
    {
        label: 'Nosotros',
        icon: 'pi pi-users',
        command: () => router.push('/nosotros')
    }
])

</script>

<style scoped>

.contenido{

    padding:30px;

}

</style>