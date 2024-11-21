<template>
  <button
    class="flex items-center gap-4 justify-center"
    @click="toggleDarkMode"
  >
    <Icon v-if="!isDark" name="mdi:weather-sunny" />
    {{ isDark ? 'Escuro' : 'Claro' }}
    <Icon v-if="isDark" name="mdi:weather-night" />
  </button>
</template>

<script lang="ts" setup>
import { useDarkMode } from '@/shared/composables/useDarkMode';

const { isDark, toggleDarkMode } = useDarkMode();
</script>

<style></style>
