<template>
  <BPButton
    :icon-name="isDark ? 'mdi:weather-sunny' : 'mdi:weather-night'"
    :button-text="isDark ? 'Claro' : 'Escuro'"
    class="button-theme"
    :class="isDark ? 'flex-row-reverse' : 'flex'"
    @click="toggleDarkMode"
  />
</template>

<script lang="ts" setup>
import { useDarkMode } from '@/shared/composables/useDarkMode';
import BPButton from '../atom/BPButton.vue';

const { isDark, toggleDarkMode } = useDarkMode();
</script>

<style lang="scss" scoped>
.button-theme {
  @apply flex justify-center gap-4 items-center w-full;
}
</style>
