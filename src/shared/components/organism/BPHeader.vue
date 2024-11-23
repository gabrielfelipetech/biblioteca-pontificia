<template>
  <header
    class="dark:bg-bp-blue-800-light bg-bp-yellow-100-light dark:border-bp-yellow-100-light border-bp-blue-800-light border-b flex py-2 px-6 justify-between items-center"
  >
    <h1>Biblioteca Pontificia</h1>
    <Input
      v-model="searchInput"
      icon-name="mdi:magnify"
      class="w-80"
      placeholder="Pesquisar Leitura"
    />
    <UserMenu />
  </header>
</template>

<script lang="ts" setup>
import Input from '../atom/BPInput.vue';
import { ref } from 'vue';
import UserMenu from './userMenu.vue';

const searchInput = ref('');
</script>
