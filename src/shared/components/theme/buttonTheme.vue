<template>
  <button @click="toggleDarkMode">
    {{ isDark }}
  </button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isDark = ref(false)

const toggleDarkMode = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}
</script>

<style>

</style>