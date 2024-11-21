<template>
  <div class="">
    <BPHeader />
    <BPFooter />
  </div>
</template>
<script setup lang="ts">
import BPFooter from '@/shared/components/organism/BPFooter.vue';
import BPHeader from '@/shared/components/organism/BPHeader.vue';
import { useDarkMode } from '@/shared/composables/useDarkMode';
import { onBeforeMount } from 'vue';

const { verifyLocalStorage } = useDarkMode();
onBeforeMount(() => {
  verifyLocalStorage();
});
</script>
