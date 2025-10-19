<template>
  <div class="bg-backgroundColor text-textColor min-h-screen">
    <BPHeader />
    <div class="flex">
      <BPSideBar />
      <div class="flex-1 p-4 mt-12">
        <NuxtPage />
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
