<template>
  <header
    class="hidden md:flex dark:bg-bp-blue-800-light bg-bp-yellow-100-light dark:border-bp-blue-900-light border-bp-yellow-700-light border-b py-2 px-6 justify-between items-center fixed top-0 inset-x-0 z-30 h-16"
  >
    <div class="flex items-center" @click="goToHome()">
      <div class="w-12 h-12 mr-2 rounded-full overflow-hidden cursor-pointer">
        <img
          src="../../../assets/images/logo/logoBP.png"
          alt="Biblioteca Pontificia Logo"
          class="w-full h-full object-cover"
        />
      </div>

      <h1
        class="tablet:text-2xl tablet:font-semibold mobile-b:text-xl mobile-b:font-bold cursor-pointer mobile-b:hidden"
      >
        Biblioteca Pontificia
      </h1>
    </div>

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
import { useRouter } from 'vue-router';
const router = useRouter();

const goToHome = () => {
  router.push('/');
};
const searchInput = ref('');
</script>
<style lang="scss" scoped>
.header-container {
  @apply dark:bg-bp-blue-800-light bg-bp-yellow-100-light dark:border-bp-blue-900-light border-bp-yellow-700-light border-b flex py-2 px-6 justify-between items-center fixed w-full z-[1] max-h-16;
}
.input-search {
  @apply w-80;
}
@media (max-width: 470px) {
  .input-search {
    @apply hidden;
  }
}
</style>
