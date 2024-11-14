<template>
  <header class="dark:border-gold-medium border-blue-medium border-b flex py-3 px-6 justify-between align-middle">
    <h1>Biblioteca Pontificia</h1>
    <Input v-model="searchInput"/>
    <ButtonTheme/>
  </header>
</template>

<script lang="ts" setup>
import ButtonTheme from './theme/buttonTheme.vue';
import Input from './atom/input.vue'
import { ref } from 'vue';

const searchInput = ref('')
</script>