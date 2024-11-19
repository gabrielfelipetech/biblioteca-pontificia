<template>
  <header class="dark:border-gold-medium border-blue-medium border-b flex py-3 px-6 justify-between items-center">
    <h1>Biblioteca Pontificia</h1>
    <Input v-model="searchInput" icon-name="mdi:magnify" class="w-80" placeholder="Pesquisar Leitura"/>
    <ButtonTheme/>
  </header>
</template>

<script lang="ts" setup>
import ButtonTheme from '../theme/buttonTheme.vue';
import Input from '../atom/BPInput.vue'
import { ref } from 'vue';

const searchInput = ref('')
</script>