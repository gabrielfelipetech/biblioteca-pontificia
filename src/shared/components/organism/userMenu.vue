<template>
  <div class="container-user-menu">
    <div class="icon-user-menu" @click="showUserMenu = !showUserMenu">
      <Icon
        name="mdi:account-circle-outline"
        size="2em"
        class="cursor-pointer"
        @mouseover="showUserMenu = true"
      />
    </div>
    <div
      v-if="showUserMenu"
      class="user-menu"
      @mouseleave="showUserMenu = false"
    >
      <div v-for="link in links" :key="link.name" class="user-menu__links">
        <Icon :name="'mdi:' + link.icon" />
        <NuxtLink :to="link.to" class="user-menu__links-link">
          {{ link.name }}
        </NuxtLink>
      </div>
      <ButtonTheme />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import ButtonTheme from '../theme/buttonTheme.vue';

const showUserMenu = ref(false);
const links = ref([
  { name: 'Perfil', to: '/perfil', icon: 'person-outline' },
  { name: 'Leituras salvas', to: '/saved', icon: 'bookmark-outline' },
  {
    name: 'Configurações',
    to: '/configurations',
    icon: 'cog-outline',
  },
  { name: 'Assinatura', to: '/subscription', icon: 'check-decagram-outline' },
]);
</script>

<style scoped lang="scss">
.container-user-menu {
  @apply dark:text-bp-yellow-600-light select-none;
  .user-menu {
    @apply absolute top-14 right-1 z-10 py-3 px-3 rounded-lg flex flex-col w-72 gap-1;
    @apply dark:bg-bp-blue-800-light dark:border-bp-blue-900-light border-1;
    @apply bg-bp-yellow-100-light border-bp-yellow-700-light;
    &__links {
      @apply bg-bp-yellow-100-light border-bp-blue-800-light flex items-center gap-2 p-1 mb-3;
      @apply dark:bg-bp-blue-800-light dark:border-bp-yellow-50-light;
      &-link {
        @apply w-full;
      }
    }
    &__links:hover {
      @apply bg-bp-yellow-200-light border-bp-blue-700-light flex items-center gap-2 rounded-lg;
      @apply dark:bg-bp-blue-700-light dark:border-bp-yellow-100-light;
    }
  }
}
</style>
