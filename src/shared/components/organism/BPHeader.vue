<template>
  <header class="header-container">
    <h1>Biblioteca Pontificia</h1>
    <Input
      v-model="searchInput"
      icon-name="mdi:magnify"
      class="input-search"
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
<style lang="scss" scoped>
.header-container {
  @apply dark:bg-bp-blue-800-light bg-bp-yellow-100-light dark:border-bp-blue-900-light border-bp-yellow-700-light border-b flex py-2 px-6 justify-between items-center fixed w-full z-[1] max-h-16;
}
.input-search {
  @apply w-80;
}
@media (max-width: 425px) {
  .input-search {
    @apply hidden;
  }
}
</style>
