<template>
  <div class="">
    <BPHeader />
    <BPSideBar />
  </div>
</template>
<script setup lang="ts">
import BPHeader from '@/shared/components/organism/BPHeader.vue';
import { useDarkMode } from '@/shared/composables/useDarkMode';
import { onBeforeMount } from 'vue';
import BPSideBar from '~/shared/components/organism/BPSideBar.vue';

const { verifyLocalStorage } = useDarkMode();
onBeforeMount(() => {
  verifyLocalStorage();
});
</script>
