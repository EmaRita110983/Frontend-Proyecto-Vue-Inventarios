<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
    <h1>App layout</h1>

    <router-link to="/perfil">Perfil</router-link>
    <router-link to="/dashboard">Panel Administrativo</router-link>

    <router-view />
</template>