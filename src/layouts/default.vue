<template>
  <div class="bg-backgroundColor text-textColor min-h-screen">
    <BPHeader class="hidden md:block" />
    <div class="pt-12 md:pt-16">
      <div class="flex">
        <BPSideBar />
        <main class="flex-1 p-4">
          <NuxtPage />
        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BPHeader from '@/shared/components/organism/BPHeader.vue';
import BPSideBar from '@/shared/components/organism/BPSideBar.vue';
import { useDarkMode } from '@/shared/composables/useDarkMode';
import { onBeforeMount } from 'vue';
const { verifyLocalStorage } = useDarkMode();
onBeforeMount(() => {
  verifyLocalStorage();
});
</script>
