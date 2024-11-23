<template>
  <div class="sidebar-container">
    <div>
      <p v-for="link in links" :key="link">{{ link }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const links = ref(['lnk', 'csdcfs', 'csdmco', 'omswodc'])
</script>

<style>

</style>